import { GitHubIcon } from "untitledui-vite-starter-kit";

/** The GitHub integration mark, drawn in its brand black. */
export const Default = () => <GitHubIcon className="size-10" />;

/** `grayscale` swaps the brand fill for `fg-quaternary` — used for inactive integration rows. */
export const Grayscale = () => (
    <div className="flex items-center gap-8">
        <GitHubIcon className="size-8" />
        <GitHubIcon grayscale className="size-8" />
    </div>
);

export const Sizes = () => (
    <div className="flex flex-wrap items-end gap-6">
        <GitHubIcon className="size-4" />
        <GitHubIcon className="size-5" />
        <GitHubIcon className="size-8" />
        <GitHubIcon className="size-12" />
    </div>
);

/** In context: an integration row in a connected-apps list. */
export const InAnIntegrationRow = () => (
    <div className="flex w-96 items-center gap-3 rounded-xl bg-primary p-4 ring-1 ring-secondary ring-inset">
        <GitHubIcon className="size-8 shrink-0" />
        <div>
            <p className="text-sm font-semibold text-primary">GitHub</p>
            <p className="text-sm text-tertiary">Connected to untitledui/web</p>
        </div>
    </div>
);
