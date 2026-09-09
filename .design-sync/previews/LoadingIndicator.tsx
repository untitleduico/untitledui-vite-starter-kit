import { LoadingIndicator } from "untitledui-vite-starter-kit";

export const Types = () => (
    <div className="flex items-center gap-10">
        <LoadingIndicator type="line-simple" size="md" />
        <LoadingIndicator type="line-spinner" size="md" />
        <LoadingIndicator type="dot-circle" size="md" />
    </div>
);

export const Sizes = () => (
    <div className="flex items-center gap-10">
        <LoadingIndicator type="line-spinner" size="sm" />
        <LoadingIndicator type="line-spinner" size="md" />
        <LoadingIndicator type="line-spinner" size="lg" />
        <LoadingIndicator type="line-spinner" size="xl" />
    </div>
);

export const WithLabel = () => (
    <div className="flex items-center gap-10">
        <LoadingIndicator type="dot-circle" size="lg" label="Loading invoices" />
    </div>
);
