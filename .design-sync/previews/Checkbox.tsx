import { Checkbox } from "untitledui-vite-starter-kit";

export const Default = () => (
    <div className="flex flex-col gap-4">
        <Checkbox label="Remember me" defaultSelected />
        <Checkbox label="Email me about product updates" />
    </div>
);

export const WithHint = () => (
    <div className="flex w-80 flex-col gap-4">
        <Checkbox size="md" label="Remember me" hint="Save my login details for next time." defaultSelected />
        <Checkbox size="md" label="Subscribe to the newsletter" hint="We send one email a month. No spam." />
    </div>
);

export const Sizes = () => (
    <div className="flex flex-col gap-4">
        <Checkbox size="sm" label="Small checkbox" defaultSelected />
        <Checkbox size="md" label="Medium checkbox" defaultSelected />
    </div>
);

export const States = () => (
    <div className="flex flex-col gap-4">
        <Checkbox label="Selected" isSelected />
        <Checkbox label="Indeterminate" isIndeterminate />
        <Checkbox label="Read only" isReadOnly isSelected />
        <Checkbox label="Disabled" isDisabled />
        <Checkbox label="Disabled and selected" isDisabled isSelected />
    </div>
);
