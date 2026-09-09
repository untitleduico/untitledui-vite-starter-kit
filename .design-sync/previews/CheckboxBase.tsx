import { CheckboxBase } from "untitledui-vite-starter-kit";

/** `CheckboxBase` is the presentational box — it takes its state from props, not from user input. */
export const States = () => (
    <div className="flex items-center gap-6">
        <CheckboxBase />
        <CheckboxBase isSelected />
        <CheckboxBase isIndeterminate />
        <CheckboxBase isDisabled />
        <CheckboxBase isSelected isDisabled />
    </div>
);

export const Sizes = () => (
    <div className="flex items-center gap-6">
        <CheckboxBase size="sm" isSelected />
        <CheckboxBase size="md" isSelected />
    </div>
);

export const InACustomRow = () => (
    <div className="flex w-full max-w-sm flex-col gap-3">
        {[
            { label: "Weekly digest", selected: true },
            { label: "Product updates", selected: false },
            { label: "Billing receipts", selected: true },
        ].map((row) => (
            <div key={row.label} className="flex items-center gap-3 rounded-lg border border-secondary bg-primary p-3">
                <CheckboxBase isSelected={row.selected} />
                <span className="text-sm font-medium text-secondary">{row.label}</span>
            </div>
        ))}
    </div>
);
