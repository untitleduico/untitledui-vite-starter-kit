import { DateRangePicker } from "untitledui-vite-starter-kit";

export const Default = () => (
    <div className="flex items-center">
        <DateRangePicker />
    </div>
);

export const OpenCalendar = () => (
    <div className="flex h-96 justify-center">
        <DateRangePicker defaultOpen />
    </div>
);

export const Sizes = () => (
    <div className="flex flex-wrap items-center gap-3">
        <DateRangePicker size="sm" />
        <DateRangePicker size="md" />
        <DateRangePicker size="lg" />
    </div>
);

export const InToolbar = () => (
    <div className="flex w-max items-center gap-3 rounded-xl p-3 ring-1 ring-secondary">
        <p className="text-sm font-semibold text-primary">Revenue</p>
        <DateRangePicker size="sm" />
    </div>
);
