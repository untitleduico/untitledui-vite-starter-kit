## How to build with Untitled UI

Untitled UI is a React component library built on **React Aria Components**. Every
component here is the real upstream implementation — compose them, never re-create
them in raw HTML.

### Setup: no provider, one stylesheet

There is **no provider or root wrapper to mount**. Components are styled entirely by
the stylesheet; link `styles.css` once and they render correctly. Do not wrap the tree
in a theme provider — none is exported, and adding one does nothing.

**Dark mode** is a class, not a context: put `dark-mode` on a root element and every
token below flips.

```jsx
<div className="dark-mode bg-primary text-primary">…</div>
```

### Styling: Tailwind utilities over semantic tokens

This system is Tailwind CSS v4 with a **semantic token layer**. Style your own layout
with these names — never raw palette classes. `text-gray-900`, `bg-white` and
`bg-blue-600` are wrong here and will not track dark mode; `text-primary` and
`bg-brand-solid` are right.

| Family | Use for | Real names |
|---|---|---|
| `text-*` | text fill | `text-primary` `text-secondary` `text-tertiary` `text-quaternary` `text-placeholder` `text-white` `text-brand-primary` `text-brand-secondary` `text-error-primary` `text-warning-primary` `text-success-primary` |
| `bg-*` | surfaces | `bg-primary` `bg-secondary` `bg-tertiary` `bg-quaternary` `bg-active` `bg-overlay` `bg-brand-solid` `bg-brand-primary` `bg-brand-secondary` `bg-error-solid` `bg-warning-solid` `bg-success-solid` |
| `border-*` (also `ring-*`, `outline-*`) | strokes | `border-primary` `border-secondary` `border-tertiary` `border-brand` `border-error` |
| `*-fg-*` | icons and non-text marks | applied through a property prefix, never bare: `text-fg-primary` `text-fg-secondary` `text-fg-quaternary` `text-fg-white` `text-fg-brand-primary` `text-fg-error-primary` `bg-fg-white` |
| type scale | body text | `text-xs` `text-sm` `text-md` `text-lg` `text-xl` |
| display scale | headings | `text-display-xs` `text-display-sm` `text-display-md` `text-display-lg` `text-display-xl` `text-display-2xl` |
| fonts | families | `font-body` `font-display` `font-mono` |

Hover variants exist where they make sense (`text-secondary_hover`,
`bg-primary_hover`, `text-fg-quaternary_hover`). On a solid brand background, switch to the
on-brand text tokens: `text-primary_on-brand`, `text-tertiary_on-brand`.

Radii (`rounded-md` … `rounded-2xl`, `rounded-full`) and shadows (`shadow-xs` …
`shadow-xl`) come from the same token set. Standard Tailwind layout, spacing and
responsive utilities work as usual.

**One important limit:** the stylesheet is precompiled, so **arbitrary values do not
work**. `w-[327px]` and `text-[#6941C6]` will silently produce no styles. Use scale
steps (`w-80`, `max-w-3xl`, `gap-6`) or an inline `style` attribute for a genuinely
one-off value.

### Transitions

For hover and colour changes the house style is a snappy
`transition duration-100 ease-linear`.

### Where the truth is

Read these before styling or guessing an API — they are exact, and they beat this
summary:

- `styles.css` and the files it `@import`s — every token name that exists.
- `components/<group>/<Name>/<Name>.prompt.md` — usage and sub-components.
- `components/<group>/<Name>/<Name>.d.ts` — the real prop contract.

### Two conventions that surprise people

**There is no `Link` component.** A link is a `Button` with `href` and a `link-*`
colour:

```jsx
<Button href="/pricing" color="link-color">View pricing</Button>
```

**Disabled state is `opacity-50`**, applied by the components themselves. Don't add
per-state disabled colours.

### An idiomatic example

Library components for the controls; token utilities for your own layout glue.

```jsx
const { Button, Input, Badge, Avatar } = window.UntitledUI;

function TeamInvite() {
    return (
        <div className="flex max-w-xl flex-col gap-5 rounded-xl bg-primary p-6 shadow-xs ring-1 ring-secondary">
            <div className="flex items-center gap-3">
                <Avatar src="/olivia.jpg" alt="Olivia Rhye" size="md" status="online" />
                <div className="flex flex-1 flex-col">
                    <p className="text-md font-semibold text-primary">Olivia Rhye</p>
                    <p className="text-sm text-tertiary">olivia@untitledui.com</p>
                </div>
                <Badge color="success" type="pill-color" size="sm">Active</Badge>
            </div>

            <Input label="Invite by email" placeholder="colleague@company.com" hint="They'll get an email invite." />

            <div className="flex justify-end gap-3">
                <Button color="secondary">Cancel</Button>
                <Button color="primary">Send invite</Button>
            </div>
        </div>
    );
}
```
