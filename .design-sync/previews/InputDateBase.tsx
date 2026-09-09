import { Calendar as CalendarIcon } from "@untitledui/icons";
import { InputDateBase } from "untitledui-vite-starter-kit";

/**
 * `InputDateBase` is the bordered segmented date field that `InputDate` renders
 * between its label and hint. Each segment (mm / dd / yyyy) is separately editable.
 */
export const Default = () => (
    <div className="w-80">
        <InputDateBase aria-label="Invoice date" />
    </div>
);

export const Sizes = () => (
    <div className="flex w-80 flex-col gap-4">
        <InputDateBase size="sm" aria-label="Small" />
        <InputDateBase size="md" aria-label="Medium" />
        <InputDateBase size="lg" aria-label="Large" />
    </div>
);

/** A leading `icon`, a `tooltip` help affordance and a keyboard `shortcut` badge. */
export const WithAffordances = () => (
    <div className="flex w-80 flex-col gap-4">
        <InputDateBase icon={CalendarIcon} aria-label="Start date" />
        <InputDateBase icon={CalendarIcon} tooltip="Billing starts on this date." aria-label="Start date" />
        <InputDateBase icon={CalendarIcon} shortcut="⌘D" aria-label="Start date" />
    </div>
);

export const States = () => (
    <div className="flex w-80 flex-col gap-4">
        <InputDateBase icon={CalendarIcon} aria-label="Start date" />
        <InputDateBase icon={CalendarIcon} isInvalid aria-label="Start date" />
        <InputDateBase icon={CalendarIcon} isDisabled aria-label="Start date" />
    </div>
);
