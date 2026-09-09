import { CalendarDate } from "@internationalized/date";
import { RangeCalendar, RangeCalendarContextProvider, RangePresetButton } from "untitledui-vite-starter-kit";

const presets = [
    { label: "Last 7 days", value: { start: new CalendarDate(2024, 5, 9), end: new CalendarDate(2024, 5, 15) } },
    { label: "Last 30 days", value: { start: new CalendarDate(2024, 4, 16), end: new CalendarDate(2024, 5, 15) } },
    { label: "This month", value: { start: new CalendarDate(2024, 5, 1), end: new CalendarDate(2024, 5, 31) } },
    { label: "Last month", value: { start: new CalendarDate(2024, 4, 1), end: new CalendarDate(2024, 4, 30) } },
];

/**
 * The provider shares one date-range value between the preset rail and the calendar,
 * which is how the date range picker popover is assembled.
 */
export const WithPresetRail = () => (
    <RangeCalendarContextProvider>
        <div className="flex w-max rounded-2xl bg-primary shadow-lg ring-1 ring-secondary_alt">
            <div className="flex w-38 flex-col gap-0.5 border-r border-secondary p-3">
                {presets.map((preset) => (
                    <RangePresetButton key={preset.label} value={preset.value}>
                        {preset.label}
                    </RangePresetButton>
                ))}
            </div>
            <RangeCalendar visibleDuration={{ months: 1 }} />
        </div>
    </RangeCalendarContextProvider>
);

export const CalendarOnly = () => (
    <RangeCalendarContextProvider>
        <div className="w-max rounded-2xl bg-primary shadow-lg ring-1 ring-secondary_alt">
            <RangeCalendar visibleDuration={{ months: 1 }} />
        </div>
    </RangeCalendarContextProvider>
);
