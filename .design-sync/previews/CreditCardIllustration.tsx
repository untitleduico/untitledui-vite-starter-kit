import { CreditCardIllustration } from "untitledui-vite-starter-kit";

export const Default = () => <CreditCardIllustration size="md" />;

export const Sizes = () => (
    <div className="flex flex-wrap items-end gap-6">
        <CreditCardIllustration size="sm" />
        <CreditCardIllustration size="md" />
        <CreditCardIllustration size="lg" />
    </div>
);

export const InAnEmptyState = () => (
    <div className="flex flex-col items-center gap-4 text-center">
        <CreditCardIllustration size="sm" />
        <div className="flex flex-col gap-1">
            <span className="text-lg font-semibold text-primary">No payment method</span>
            <span className="text-sm text-tertiary">Add a card to start your subscription.</span>
        </div>
    </div>
);
