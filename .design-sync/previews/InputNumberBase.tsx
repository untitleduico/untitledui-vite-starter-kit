import { InputNumberBase } from "untitledui-vite-starter-kit";

/**
 * `InputNumberBase` is the bordered stepper field that `InputNumber` renders between
 * its label and hint — the input plus its increment / decrement controls.
 */
export const Default = () => (
    <div className="w-80">
        <InputNumberBase defaultValue={12} aria-label="Seats" />
    </div>
);

export const Sizes = () => (
    <div className="flex w-80 flex-col gap-4">
        <InputNumberBase size="sm" defaultValue={4} aria-label="Small" />
        <InputNumberBase size="md" defaultValue={12} aria-label="Medium" />
        <InputNumberBase size="lg" defaultValue={48} aria-label="Large" />
    </div>
);

/** `orientation` switches between the stacked chevrons and a minus / plus pair. */
export const Orientation = () => (
    <div className="flex w-80 flex-col gap-4">
        <InputNumberBase orientation="vertical" defaultValue={12} aria-label="Vertical" />
        <InputNumberBase orientation="horizontal" defaultValue={12} aria-label="Horizontal" />
    </div>
);

export const States = () => (
    <div className="flex w-80 flex-col gap-4">
        <InputNumberBase defaultValue={12} aria-label="Seats" />
        <InputNumberBase isInvalid defaultValue={0} aria-label="Seats" />
        <InputNumberBase isDisabled defaultValue={12} aria-label="Seats" />
        <InputNumberBase placeholder="Number of seats" aria-label="Seats" />
    </div>
);
