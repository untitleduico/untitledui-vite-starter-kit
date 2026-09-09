import { DatePicker } from "untitledui-vite-starter-kit";

export const Default = () => (
    <div className="flex items-center">
        <DatePicker />
    </div>
);

export const OpenCalendar = () => (
    <div className="flex h-96 justify-center">
        <DatePicker defaultOpen />
    </div>
);

export const Sizes = () => (
    <div className="flex flex-wrap items-center gap-3">
        <DatePicker size="sm" />
        <DatePicker size="md" />
        <DatePicker size="lg" />
    </div>
);

export const InFormRow = () => (
    <div className="flex w-80 flex-col gap-1.5">
        <p className="text-sm font-medium text-secondary">Invoice due date</p>
        <DatePicker size="md" />
        <p className="text-sm text-tertiary">Payment terms are net 30 from this date.</p>
    </div>
);
