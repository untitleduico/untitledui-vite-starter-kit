import { CloudIllustration } from "untitledui-vite-starter-kit";

export const Default = () => <CloudIllustration size="md" />;

export const Sizes = () => (
    <div className="flex flex-wrap items-end gap-6">
        <CloudIllustration size="sm" />
        <CloudIllustration size="md" />
        <CloudIllustration size="lg" />
    </div>
);

export const InAnEmptyState = () => (
    <div className="flex flex-col items-center gap-4 text-center">
        <CloudIllustration size="sm" />
        <div className="flex flex-col gap-1">
            <span className="text-lg font-semibold text-primary">Nothing synced yet</span>
            <span className="text-sm text-tertiary">Connect a workspace and your files will appear here.</span>
        </div>
    </div>
);
