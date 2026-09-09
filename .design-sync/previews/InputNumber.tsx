import { InputNumber } from "untitledui-vite-starter-kit";

export const Default = () => (
    <div className="w-80">
        <InputNumber label="Seats" value={12} hint="You are billed $15 per seat, per month." />
    </div>
);

/** `orientation` switches the stepper buttons between side-by-side and stacked. */
export const Orientation = () => (
    <div className="flex w-80 flex-col gap-4">
        <InputNumber label="Horizontal" orientation="horizontal" value={8} />
        <InputNumber label="Vertical" orientation="vertical" value={8} />
    </div>
);

export const Sizes = () => (
    <div className="flex w-80 flex-col gap-4">
        <InputNumber size="sm" label="Small" value={3} />
        <InputNumber size="md" label="Medium" value={3} />
        <InputNumber size="lg" label="Large" value={3} />
    </div>
);

export const States = () => (
    <div className="flex w-80 flex-col gap-4">
        <InputNumber isRequired label="Quantity" value={1} minValue={1} maxValue={99} />
        <InputNumber isInvalid label="Quantity" value={0} hint="Order at least one item." />
        <InputNumber isDisabled label="Quantity" value={5} />
    </div>
);
