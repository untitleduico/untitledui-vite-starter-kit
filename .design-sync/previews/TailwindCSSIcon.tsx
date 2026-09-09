import { TailwindCSSIcon } from "untitledui-vite-starter-kit";

export const Default = () => <TailwindCSSIcon className="size-10" />;

/** `grayscale` swaps the brand fill for `fg-quaternary`, for muted integration lists. */
export const Grayscale = () => (
    <div className="flex items-center gap-6">
        <TailwindCSSIcon className="size-10" />
        <TailwindCSSIcon grayscale className="size-10" />
    </div>
);

export const Sizes = () => (
    <div className="flex items-end gap-6">
        <TailwindCSSIcon className="size-5" />
        <TailwindCSSIcon className="size-8" />
        <TailwindCSSIcon className="size-12" />
    </div>
);

export const InIntegrationRow = () => (
    <div className="flex w-full max-w-md items-center gap-3 rounded-xl border border-secondary bg-primary p-4">
        <TailwindCSSIcon className="size-10" />
        <div className="flex flex-col">
            <span className="text-sm font-semibold text-primary">Tailwind CSS</span>
            <span className="text-sm text-tertiary">Sync design tokens on every deploy.</span>
        </div>
    </div>
);
