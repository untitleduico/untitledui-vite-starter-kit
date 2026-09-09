import { FigmaLogo } from "untitledui-vite-starter-kit";

/** The brand-coloured mark, as used on a social sign-in button. */
export const Default = () => <FigmaLogo colorful className="size-10" />;

/** Without `colorful` the glyph is drawn in `currentColor`, so it adopts the surrounding text colour. */
export const Colorful = () => (
    <div className="flex items-center gap-8">
        <FigmaLogo colorful className="size-8" />
        <FigmaLogo className="size-8 text-fg-primary" />
        <FigmaLogo className="size-8 text-fg-quaternary" />
    </div>
);

export const Sizes = () => (
    <div className="flex flex-wrap items-end gap-6">
        <FigmaLogo colorful className="size-5" />
        <FigmaLogo colorful className="size-6" />
        <FigmaLogo colorful className="size-8" />
        <FigmaLogo colorful className="size-12" />
    </div>
);

/** In context: the mark paired with a label inside a social sign-in button. */
export const OnAButton = () => (
    <button className="flex items-center gap-3 rounded-lg bg-primary px-4 py-2.5 text-md font-semibold text-secondary shadow-xs ring-1 ring-primary ring-inset">
        <FigmaLogo colorful className="size-6" />
        Sign in with Figma
    </button>
);
