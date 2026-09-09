import { BoxIllustration } from "untitledui-vite-starter-kit";

export const Default = () => <BoxIllustration size="md" />;

export const Sizes = () => (
    <div className="flex flex-wrap items-end gap-6">
        <BoxIllustration size="sm" />
        <BoxIllustration size="md" />
        <BoxIllustration size="lg" />
    </div>
);

export const InAnEmptyState = () => (
    <div className="flex flex-col items-center gap-4 text-center">
        <BoxIllustration size="sm" />
        <div className="flex flex-col gap-1">
            <span className="text-lg font-semibold text-primary">No files uploaded</span>
            <span className="text-sm text-tertiary">Drag and drop your assets here, or browse to pick a file.</span>
        </div>
    </div>
);
