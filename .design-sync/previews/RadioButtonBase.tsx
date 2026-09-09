import { RadioButtonBase } from "untitledui-vite-starter-kit";

export const States = () => (
    <div className="flex flex-wrap items-center gap-6">
        <div className="flex flex-col items-center gap-2">
            <RadioButtonBase />
            <span className="text-xs text-tertiary">Unselected</span>
        </div>
        <div className="flex flex-col items-center gap-2">
            <RadioButtonBase isSelected />
            <span className="text-xs text-tertiary">Selected</span>
        </div>
        <div className="flex flex-col items-center gap-2">
            <RadioButtonBase isDisabled />
            <span className="text-xs text-tertiary">Disabled</span>
        </div>
        <div className="flex flex-col items-center gap-2">
            <RadioButtonBase isSelected isDisabled />
            <span className="text-xs text-tertiary">Selected disabled</span>
        </div>
    </div>
);

export const Sizes = () => (
    <div className="flex items-end gap-8">
        <div className="flex flex-col items-center gap-2">
            <RadioButtonBase size="sm" isSelected />
            <span className="text-xs text-tertiary">Small</span>
        </div>
        <div className="flex flex-col items-center gap-2">
            <RadioButtonBase size="md" isSelected />
            <span className="text-xs text-tertiary">Medium</span>
        </div>
    </div>
);

export const InListRow = () => (
    <div className="flex w-80 flex-col gap-2">
        <div className="flex items-center justify-between rounded-lg bg-primary p-3 ring-1 ring-secondary">
            <p className="text-sm font-medium text-secondary">Olivia Rhye</p>
            <RadioButtonBase isSelected />
        </div>
        <div className="flex items-center justify-between rounded-lg bg-primary p-3 ring-1 ring-secondary">
            <p className="text-sm font-medium text-secondary">Phoenix Baker</p>
            <RadioButtonBase />
        </div>
    </div>
);
