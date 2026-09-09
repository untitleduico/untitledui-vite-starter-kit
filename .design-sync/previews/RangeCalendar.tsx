import { RangeCalendar } from "untitledui-vite-starter-kit";

export const Default = () => (
    <div className="w-max rounded-2xl bg-primary shadow-lg ring-1 ring-secondary_alt">
        <RangeCalendar visibleDuration={{ months: 1 }} />
    </div>
);

export const TwoMonths = () => (
    <div className="w-max rounded-2xl bg-primary shadow-lg ring-1 ring-secondary_alt">
        <RangeCalendar visibleDuration={{ months: 2 }} />
    </div>
);
