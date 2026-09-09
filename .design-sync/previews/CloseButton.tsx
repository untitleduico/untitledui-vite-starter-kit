import { CloseButton } from "untitledui-vite-starter-kit";

export const Sizes = () => (
    <div className="flex items-center gap-3">
        <CloseButton size="xs" />
        <CloseButton size="sm" />
        <CloseButton size="md" />
        <CloseButton size="lg" />
    </div>
);

export const Themes = () => (
    <div className="flex items-center gap-4">
        <div className="flex items-center rounded-lg bg-primary p-2 ring-1 ring-secondary">
            <CloseButton theme="light" size="md" />
        </div>
        <div className="flex items-center rounded-lg bg-brand-solid p-2">
            <CloseButton theme="dark" size="md" />
        </div>
    </div>
);

export const InBanner = () => (
    <div className="flex w-96 items-start justify-between gap-3 rounded-xl bg-secondary p-4">
        <div className="flex flex-col gap-0.5">
            <p className="text-sm font-semibold text-primary">Your trial ends in 5 days</p>
            <p className="text-sm text-tertiary">Add a payment method to keep your workspace active.</p>
        </div>
        <CloseButton size="sm" label="Dismiss" />
    </div>
);
