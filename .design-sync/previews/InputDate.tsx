import { CalendarDate } from "@internationalized/date";
import { InputDate } from "untitledui-vite-starter-kit";

const invoiceDate = new CalendarDate(2025, 1, 24);

export const Default = () => (
    <div className="w-80">
        <InputDate label="Invoice date" value={invoiceDate} hint="Shown on the PDF sent to the customer." />
    </div>
);

export const Sizes = () => (
    <div className="flex w-80 flex-col gap-4">
        <InputDate size="sm" label="Small" value={invoiceDate} />
        <InputDate size="md" label="Medium" value={invoiceDate} />
        <InputDate size="lg" label="Large" value={invoiceDate} />
    </div>
);

export const States = () => (
    <div className="flex w-80 flex-col gap-4">
        <InputDate isRequired label="Start date" value={invoiceDate} />
        <InputDate isInvalid label="Start date" value={new CalendarDate(2023, 11, 3)} hint="Start date must be in the future." />
        <InputDate isDisabled label="Locked date" value={invoiceDate} />
    </div>
);
