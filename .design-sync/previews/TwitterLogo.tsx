import { TwitterLogo } from "untitledui-vite-starter-kit";

export const Default = () => <TwitterLogo className="size-10 text-fg-primary" />;

export const Sizes = () => (
    <div className="flex items-end gap-6 text-fg-primary">
        <TwitterLogo className="size-5" />
        <TwitterLogo className="size-6" />
        <TwitterLogo className="size-8" />
        <TwitterLogo className="size-12" />
    </div>
);

/** The mark is filled with `currentColor`, so it takes any foreground token. */
export const Colors = () => (
    <div className="flex items-center gap-6">
        <TwitterLogo className="size-8 text-fg-primary" />
        <TwitterLogo className="size-8 text-fg-quaternary" />
        <TwitterLogo className="size-8 text-fg-brand-primary" />
    </div>
);
