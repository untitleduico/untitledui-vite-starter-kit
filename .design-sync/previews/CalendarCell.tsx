import { getLocalTimeZone, today } from "@internationalized/date";
import { Calendar, RangeCalendar } from "untitledui-vite-starter-kit";

const now = today(getLocalTimeZone());

/** `CalendarCell` is the day cell rendered by `Calendar`'s grid — it only works inside one. */
export const InCalendar = () => (
    <div className="w-max rounded-2xl bg-primary px-6 py-5 shadow-lg ring-1 ring-secondary_alt">
        <Calendar value={now.add({ days: 3 })} />
    </div>
);

export const WithHighlightedDates = () => (
    <div className="w-max rounded-2xl bg-primary px-6 py-5 shadow-lg ring-1 ring-secondary_alt">
        <Calendar highlightedDates={[now.add({ days: 2 }), now.add({ days: 5 }), now.add({ days: 9 })]} />
    </div>
);

/** Inside a `RangeCalendar` the cells pick up the selection start, end and in-range styling. */
export const InRangeCalendar = () => (
    <div className="w-max rounded-2xl bg-primary px-6 py-5 shadow-lg ring-1 ring-secondary_alt">
        <RangeCalendar value={{ start: now.subtract({ days: 4 }), end: now.add({ days: 4 }) }} />
    </div>
);
