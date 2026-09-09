import { AppleLogo } from "untitledui-vite-starter-kit";

export const Default = () => <AppleLogo className="size-8 text-fg-primary" />;

export const Sizes = () => (
    <div className="flex items-end gap-6 text-fg-primary">
        <AppleLogo className="size-5" />
        <AppleLogo className="size-8" />
        <AppleLogo className="size-12" />
    </div>
);

export const OnButton = () => (
    <button className="flex items-center gap-3 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-secondary shadow-xs ring-1 ring-primary ring-inset">
        <AppleLogo className="size-5 text-fg-primary" />
        Sign in with Apple
    </button>
);
