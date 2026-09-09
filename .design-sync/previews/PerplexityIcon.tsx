import { PerplexityIcon } from "untitledui-vite-starter-kit";

export const Default = () => <PerplexityIcon className="size-10" />;

export const Sizes = () => (
    <div className="flex flex-wrap items-end gap-6">
        <PerplexityIcon className="size-5" />
        <PerplexityIcon className="size-8" />
        <PerplexityIcon className="size-10" />
        <PerplexityIcon className="size-14" />
    </div>
);

export const Grayscale = () => (
    <div className="flex flex-wrap items-center gap-8">
        <div className="flex flex-col items-center gap-2">
            <PerplexityIcon className="size-10" />
            <span className="text-xs text-tertiary">Brand</span>
        </div>
        <div className="flex flex-col items-center gap-2">
            <PerplexityIcon grayscale className="size-10" />
            <span className="text-xs text-tertiary">Grayscale</span>
        </div>
    </div>
);

export const IntegrationCard = () => (
    <div className="flex items-center gap-3 rounded-xl border border-secondary bg-primary p-4" style={{ width: 320 }}>
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-secondary">
            <PerplexityIcon className="size-6" />
        </div>
        <div className="flex flex-col">
            <span className="text-sm font-semibold text-primary">Perplexity</span>
            <span className="text-sm text-tertiary">Synced 3 minutes ago</span>
        </div>
    </div>
);
