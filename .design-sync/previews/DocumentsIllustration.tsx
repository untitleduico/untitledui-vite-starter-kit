import { UploadCloud02 } from "@untitledui/icons";
import { DocumentsIllustration } from "untitledui-vite-starter-kit";

/** The empty-state illustration: a stack of documents behind a centred icon. */
export const Default = () => <DocumentsIllustration size="md" />;

/** Three sizes. The document stack and the shadow scale with it. */
export const Sizes = () => (
    <div className="flex flex-wrap items-end gap-8">
        <DocumentsIllustration size="sm" />
        <DocumentsIllustration size="md" />
        <DocumentsIllustration size="lg" />
    </div>
);

/** `children` replaces the centred glyph — pass any icon you like. */
export const WithCustomIcon = () => (
    <DocumentsIllustration size="md">
        <UploadCloud02 className="size-7 text-fg-brand-primary" />
    </DocumentsIllustration>
);

/** In context: the illustration heading an empty document library. */
export const InAnEmptyState = () => (
    <div className="flex flex-col items-center gap-4 rounded-xl bg-primary px-8 py-6 ring-1 ring-secondary ring-inset">
        <DocumentsIllustration size="sm" />
        <div className="text-center">
            <p className="text-md font-semibold text-primary">No documents yet</p>
            <p className="text-sm text-tertiary">Upload a contract or invoice to get started.</p>
        </div>
    </div>
);
