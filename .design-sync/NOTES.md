# design-sync notes — untitledui-vite-starter-kit

Repo-specific gotchas for future syncs. Read this before re-running.

## Shape: `package` (no Storybook)

There is no `.storybook/` and no `*.stories.*` anywhere in the repo.

## This repo is a Vite **app**, not a published library

`package.json` is `private`, has no `main`/`module`/`exports`, and `npm run build`
produces an app bundle, not a library. Consequences:

- The converter runs in **synth-entry mode**: it star-exports every `.tsx` under
  `srcDir` (`src/components`) into a generated entry. Pass a *nonexistent*
  `--entry ./dist/index.es.js` so `resolveDistEntry` returns null and synth mode
  engages — without `--entry` at all the build dies looking for
  `node_modules/untitledui-vite-starter-kit/package.json`.
- `srcDir` is `src/components`, **not** `src`. With `src`, the synth entry pulls in
  `src/main.tsx`, which imports `@/styles/globals.css`, and esbuild dies on
  `@import "tailwindcss"`.

## Type contracts have to be generated

With no build emitting types, every `<Name>Props` came out as
`[key: string]: unknown` — no API at all for the design agent. Fixed by:

1. `tsc --declaration --emitDeclarationOnly --outDir dist/types` (part of `buildCmd`).
2. `.design-sync/make-dts-barrel.mjs` writes `dist/types/index.d.ts`. The extractor
   reads exactly one barrel file — a declaration tree with no barrel yields nothing.
3. `"types": "dist/types/index.d.ts"` in **package.json** — this is the one change
   design-sync made outside `.design-sync/`. `findTypesRoot` needs it to locate the
   barrel. Don't remove it.

`tsc` reports 5 pre-existing type errors (date-picker `calendar.tsx`, illustrations
`index.tsx`). They are **not** caused by this sync and don't block emit — `tsc` is
run with `;` rather than `&&` in `buildCmd` for exactly that reason.

## Duplicate export names (the subtle one)

Several source files export the same names. ESM drops a name that two
star-exported modules both export, so these silently vanished from
`window.UntitledUI`: `AppStoreButton`, `GooglePlayButton`, `GalaxyStoreButton`,
`AppGalleryButton`, `Modal`, `Dialog`, `ModalOverlay`, `MastercardIcon`.

Fix is two-part and both halves must stay in sync:
- `.design-sync/overrides/source-kit.mjs` holds a hardcoded `SRC_EXCLUDE` list of
  the three offending files.
- `.design-sync/alias-exports.ts` (wired via `cfg.extraEntries`) re-exports them
  under qualified names (`AppStoreButtonOutline`, `SlideoutMenuModal`,
  `CreditCardMastercardIcon`, …), and `make-dts-barrel.mjs` mirrors the same
  aliases on the type side.

**If you add a component whose export name already exists elsewhere, it will
disappear from the global with no error.** `package-validate.mjs` catches it as
`[BUNDLE_EXPORT] ... not a component on window.UntitledUI` — trust that line.

The build prints `[EXPORT_COLLISION] ... alias-exports.ts exports N name(s) the
main package also exports`. That warning is **expected and benign** here: it
compares against the type barrel, which intentionally carries the same aliases.
Ground truth is validate's `[BUNDLE_EXPORT]` line, which is clean.

## Lib forks (`cfg.libOverrides`)

- `bundle.mjs` — the tsconfig-paths plugin tried the bare stem first, so
  `@/components/shared-assets/illustrations` resolved to the **directory** and
  esbuild died with "Cannot read file ...: is a directory". Fork adds an
  `isFile()` guard so it falls through to the `/index.tsx` candidate. Without this
  the build cannot complete at all. Worth reporting upstream.
- `dts.mjs` — `propsBodyFor` scans all files for `<Name>Props` and takes the first
  by filename order. This repo declares `InputProps` in 3 files and `ButtonProps`
  in 3, so `Input` was documented with the **date picker's** props. Fork searches
  the component's own declaring file first. Also worth reporting upstream.
- `source-kit.mjs` — see duplicate export names above.

## Styling: Tailwind v4, compiled at sync time

`src/styles/globals.css` is only `@import "tailwindcss"` + theme + typography;
there is no prebuilt stylesheet. `.design-sync/tailwind-entry.css` wraps it and
`buildCmd` compiles it to `.design-sync/.cache/compiled.css` (`cfg.cssEntry`).

The entry also **safelists** layout/spacing/type utilities via `@source inline(...)`.
This is load-bearing: rendered designs receive only the compiled stylesheet, and
Tailwind can only emit classes it finds in existing source — so without the
safelist any class the design agent writes for its own layout (`grid-cols-3`,
`gap-6`, `max-w-3xl`, `md:flex-row`) would come out unstyled. Arbitrary values
(`w-[327px]`) still cannot work; that is inherent to shipping a static stylesheet.

## Fonts

The app loads Inter from Google Fonts in `index.html`, which the bundle does not
see. `.design-sync/tailwind-entry.css` carries an `@import url(...)` for Inter +
Roboto Mono so designs render in the real brand face. Validate reports
`[FONT_REMOTE]` for Roboto Mono — informational, fonts load at runtime.

## Environment

- `bun` is in `bun.lock` but was **not installed** on the sync machine; `npm install`
  was used instead. Prefer `bun install --frozen-lockfile` where bun exists.
- Three packages the components import are **not declared** in `package.json` and
  are not hoisted by npm: `@react-aria/utils`, `@react-types/overlays`,
  `@react-stately/utils`. Install all three in ONE command
  (`npm install --no-save @react-aria/utils @react-types/overlays @react-stately/utils`)
  — a second `--no-save` install drops the first one's packages.
- Playwright chromium was installed into `.ds-sync/` for the render check.

## Preview authoring conventions

- Import from the package name: `import { Button } from "untitledui-vite-starter-kit"`.
  The story-import policy rewrites that to the shipped bundle global.
- Icons come from `@untitledui/icons` and bundle normally.
- **No provider wrapper is needed.** `ThemeProvider` is only read by a theme
  toggle, and React Aria falls back to plain anchors with no `RouterProvider`.
- Form controls need an explicit width (`w-80`) or they collapse.
- Wide components (`Table`) need `cfg.overrides.<Name>.cardMode = "column"`.

## Known render warns (triaged, expected)

**`[RENDER_THIN]` on 59 components — all legitimate, do not chase.** These are
single-glyph marks with no text and a short intrinsic height, so the "mounts have no
text / short" heuristic fires by construction:

- all 52 `payment-icons` plus `PayPalIcon`, `SEPAIcon`, `UPIIcon` (56px — a 24px-tall
  mark at `h-10`),
- `TwitterLogo`, `UntitledLogoMinimal` (48px logos),
- `ChartActiveDot` (120px — a chart dot composed inside an SVG),
- `IPhoneMockup`.

A `[RENDER_THIN]` on anything NOT in that list is new and worth looking at.


- `[FONT_REMOTE] "Roboto Mono"` — fonts served remotely by design.
- `[EXPORT_COLLISION] alias-exports.ts` — see duplicate export names above.
- `[DTS_STYLE_SYSTEM] filtering @types/react props` — React DOM style shorthands
  filtered out of prop bodies. Correct.
- Many components legitimately have empty prop contracts: every `Dropdown*` demo
  is declared `() => JSX.Element` and takes no props at all; `TableCard`,
  `FileUpload`, `PaymentInput` are compound namespaces.

## Changes this sync made outside `.design-sync/`

- **`package.json`** — added `"types": "dist/types/index.d.ts"`. Load-bearing (see above).
- **`.gitignore`** — added `.ds-sync/`, `ds-bundle/`, `.design-sync/.cache/`,
  `.design-sync/learnings/`, `.design-sync/node_modules`.
- **`package-lock.json`** was created because `npm` was used instead of `bun`. It is
  **not** part of the sync and should not be committed — this repo's lockfile is
  `bun.lock`. Delete it, or re-run the install with bun.
- `dist/types/` is generated by `buildCmd` and is already gitignored via `dist`.

## Re-sync risks

- **`package.json` `types` field** — if a future maintainer strips it as unused,
  every prop contract silently reverts to `[key: string]: unknown`. Check
  `ds-bundle/components/buttons/Button/Button.d.ts` has real props after a re-sync.
- **`dtsPropsFor.Button` is hand-written.** `Button`'s real type is a union
  (`ButtonProps | LinkProps`) and the extractor can only pick one arm, so the
  `href`/`target`/`rel` link props are supplied by hand. If Button's API changes
  upstream, this override goes stale silently. It is the only hand-written contract.
- **The three lib forks** are pinned to the converter version staged at sync time.
  On re-sync, diff each against `.ds-sync/lib/<name>.mjs` and merge upstream changes.
- **`SRC_EXCLUDE` in the source-kit fork is a hardcoded path list.** If those files
  are renamed or moved, the exclusion silently stops matching and components
  disappear from the global again.
- The Tailwind safelist was built by hand and will drift from what designs actually
  need. If designs come back unstyled in a specific area, widen it.
- Tailwind CLI resolved **4.3.3** from `.ds-sync/`, while the repo pins **4.2.2**.
  Close enough here, but a major bump could change emitted CSS.

## Preview authoring: what actually works here

Learned across eight authoring waves (278 components). These are verified, not guesses.

### Overlays render OPEN, statically

`package-capture.mjs` screenshots the whole viewport, and React Aria portals to
`document.body` — so **a portaled overlay is always in the shot**.

- `Modal`, `SlideoutMenu`, `ModalOverlay`, `DialogTrigger` → pass `isOpen` / `defaultOpen`.
- `DatePicker`, `DateRangePicker` → `defaultOpen`.
- `Tooltip` → `isOpen`.
- The ten `Dropdown*` demos take **no props at all**, so there is no `isOpen`. They are
  opened by dispatching a real pointer sequence on mount:
  `pointerdown → pointerup → click` (bubbling, `pointerType: "mouse"`, `detail: 1`).
  Use the sequence, **not** `el.click()` — a bare click opens the menu but leaves a
  `focus-visible` ring on the first item, which reads as a focus state in the shot.
- `ComboBox` / `TagSelect` use `menuTrigger="focus"` → just `input.focus()`.
- `SidebarNavigationDualTier`'s second tier opens on `onPointerEnter`; React synthesises
  enter/leave from `pointerover`, so dispatch a **bubbling `pointerover`**.
- Give overlay stories a tall wrapper (`h-72`/`h-96`) so the open panel has room.

### `position: fixed` inside a preview card

The card wrapper (`.ds-single` / `.ds-cell`) carries `transform: translateZ(0)`
**deliberately**, so fixed overlays stay inside the card instead of escaping. The
side effect: a transformed ancestor becomes the containing block for `position: fixed`,
and those wrappers have no height — so a `lg:fixed lg:inset-y-0` sidebar collapses to
0px and the card looks blank even though the DOM is complete.

Fix, applied to all five `SidebarNavigation*` previews: wrap the component in a frame
that is itself a sized containing block —
`<div style={{ position:"relative", width:"100%", height:640, transform:"translateZ(0)", overflow:"hidden" }}>`.
Any future `fixed`-positioned component needs the same frame.

### The capture viewport is 900x700

`md:` applies; **`lg:` (1024px) never does** unless the card declares a wider viewport,
which only `single`/`column` cards honour. Every `lg:`-gated component therefore needs
`cfg.overrides.<Name>.viewport`. Currently set for the five `SidebarNavigation*`
components (1440x900) and `HeaderNavigationBase` (1280x800). **Any new navigation
component will hit this same wall** and just show its mobile header bar.

Use `single` (not `column`) for fixed-position components: two column cells would stack
two fixed sidebars on top of each other.

### Inline elements as a story root

An inline `<a>` as the story root does not paint its background — all five app-store
badge components rendered as bare glyphs or nothing at all. Wrapping in
`<div className="flex">` fixes every one. This was the real cause of several
"paints nothing" render-check flags; the components were never broken.

### Component API gotchas found the hard way

- **`ComboBox.Item` does not exist.** `ComboBox`, `Select` and `MultiSelect` all render
  the same `SelectItem`. `<ComboBox.Item>` compiles and fails at runtime with
  "Element type is invalid" → a silently blank cell.
- **`TextField` ignores `defaultValue` set on a nested `InputBase`** — RAC's `Input`
  reads from `TextFieldContext`. Put the value on the `TextField`.
- **`Calendar`/`RangeCalendar` ignore `defaultValue`** — `Calendar` self-wraps in
  `CalendarContextProvider`, which supplies a controlled `value: null`. Pass the
  controlled `value` to show selection statically. The render clock is fixed at
  2024-05-15, so `today()`-derived dates are stable.
- **`Calendar` renders one month** regardless of `visibleDuration`; two-month layout is
  `RangeCalendar`'s job.
- **Several components have no styling for a state you would expect**: `Checkbox` has no
  `isInvalid` treatment, and neither `Tab` nor `Tag` has a disabled treatment. Do not
  author those cells — they are pixel-identical to the default and read as a bug.
- **`PaginationLine` collapses in any shrink-to-fit parent** (root is `w-max`, segments
  are `w-full`). Needs `className="w-full"` inside a sized block; `cx` does not merge
  the root's `w-max` away.
- **`PaginationDot`: `framed` + `isBrand` are mutually invisible** — alternatives, not
  composable.
- `InputTagsOuter` renders `hint` only when there are zero tags.
- `PinInput.Group` is `input-otp`'s `OTPInput`: pass `value` + a no-op `onChange`; empty
  slots paint a literal `0`.
- `NavItemBase type="collapsible"` renders a bare `<summary>` — it needs an open `<details>`.
- Absolutely-positioned parts (`AvatarOnlineIndicator`, `AvatarCompanyIcon`,
  `AvatarCount`, `GradientScan`) paint nothing alone — compose inside a `relative` parent.
- `TagSelectTagsValue` only works inside `TagSelectBase`, and `TagSelectBase` *is*
  `TagSelect`. `TagList` has no layout of its own.
- `MastercardIconWhite` is solid white — compose it on a dark/brand face.
- `Wreath` is a single left-hand branch, not a closed wreath.
- `ChartActiveDot` emits an `<svg>` positioned by `cx`/`cy` — compose it inside an SVG.
- Integration icons `Bolt`/`ChatGPT`/`Cursor`/`GitHub`/`Grok`/`Perplexity`/`v0` are
  hardcoded `fill-[#000]` and are invisible on dark grounds; only `grayscale` is theme-safe.
- Social icons are all `currentColor` — they need an explicit `text-fg-*` or they inherit.
- Payment icons are all `SVGProps` on a 34x24 viewBox: size with `h-10 w-auto`, never
  `size-*` (which squashes them square).
- `react-stately`'s `useListData`, `@internationalized/date`'s `CalendarDate`, and
  `qr-code-styling` all import and render fine in previews.
- Remote `untitledui.com` avatar images load during capture.

### Tailwind safelist — read this before blaming a component

`preview-rebuild.mjs` does **not** recompile CSS. Any class not already in
`.design-sync/.cache/compiled.css` is silently dead, and the symptom looks like a broken
component (unbounded width, black text where a colour was intended) rather than a
missing class. Two agents lost a capture cycle to this.

The safelist in `tailwind-entry.css` now covers the full semantic token vocabulary
(every `--color-text-*`, `--color-bg-*`, `--color-border-*` and `--color-fg-*` name from
`theme.css`, generated from it), the utility colour scale, layout/sizing/spacing steps,
and responsive variants. If a class is still missing, widen the safelist — do not work
around it with inline styles.

Note `text-utility-gray-*` does **not** exist: the utility hues are `neutral` and
`slate`, not `gray`.
