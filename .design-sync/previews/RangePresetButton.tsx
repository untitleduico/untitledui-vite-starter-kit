import { useEffect, useRef, type ReactNode } from "react";
import { CalendarDate } from "@internationalized/date";
import { RangeCalendar, RangeCalendarContextProvider, RangePresetButton } from "untitledui-vite-starter-kit";

const presets = [
    { label: "Last 7 days", value: { start: new CalendarDate(2024, 5, 9), end: new CalendarDate(2024, 5, 15) } },
    { label: "Last 30 days", value: { start: new CalendarDate(2024, 4, 16), end: new CalendarDate(2024, 5, 15) } },
    { label: "May 12 – 18", value: { start: new CalendarDate(2024, 5, 12), end: new CalendarDate(2024, 5, 18) } },
    { label: "This month", value: { start: new CalendarDate(2024, 5, 1), end: new CalendarDate(2024, 5, 31) } },
];

const Rail = () => (
    <div className="flex w-38 flex-col gap-0.5 border-r border-secondary p-3">
        {presets.map((preset) => (
            <RangePresetButton key={preset.label} value={preset.value}>
                {preset.label}
            </RangePresetButton>
        ))}
    </div>
);

/** Selects May 12–18 in the calendar so the matching preset shows its selected state. */
const WithRangeSelected = ({ children }: { children: ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const opts = { bubbles: true, cancelable: true, composed: true, pointerType: "mouse", button: 0, detail: 1 } as PointerEventInit;
        const press = (day: string) => {
            const cell = [...(ref.current?.querySelectorAll('[role="gridcell"] [role="button"]') ?? [])].find((el) => el.textContent?.trim() === day);
            if (!cell) return;
            cell.dispatchEvent(new PointerEvent("pointerdown", opts));
            cell.dispatchEvent(new PointerEvent("pointerup", opts));
            cell.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, detail: 1 }));
        };
        const first = setTimeout(() => press("12"), 50);
        const second = setTimeout(() => press("18"), 250);
        return () => {
            clearTimeout(first);
            clearTimeout(second);
        };
    }, []);
    return <div ref={ref}>{children}</div>;
};

export const PresetRail = () => (
    <RangeCalendarContextProvider>
        <div className="flex w-max rounded-2xl bg-primary shadow-lg ring-1 ring-secondary_alt">
            <Rail />
            <RangeCalendar visibleDuration={{ months: 1 }} />
        </div>
    </RangeCalendarContextProvider>
);

export const SelectedPreset = () => (
    <WithRangeSelected>
        <RangeCalendarContextProvider>
            <div className="flex w-max rounded-2xl bg-primary shadow-lg ring-1 ring-secondary_alt">
                <Rail />
                <RangeCalendar visibleDuration={{ months: 1 }} />
            </div>
        </RangeCalendarContextProvider>
    </WithRangeSelected>
);
