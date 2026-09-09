import { Calendar, CalendarContextProvider } from "untitledui-vite-starter-kit";

/**
 * `CalendarContextProvider` owns the selected and focused date, so a `Calendar`
 * rendered inside it is driven by the provider rather than its own local state.
 */
export const WrappingACalendar = () => (
    <CalendarContextProvider>
        <div className="w-max rounded-2xl bg-primary px-6 py-5 shadow-lg ring-1 ring-secondary_alt">
            <Calendar />
        </div>
    </CalendarContextProvider>
);

export const SharedByTwoCalendars = () => (
    <CalendarContextProvider>
        <div className="flex flex-wrap gap-6">
            <div className="w-max rounded-2xl bg-primary px-6 py-5 shadow-lg ring-1 ring-secondary_alt">
                <Calendar />
            </div>
            <div className="w-max rounded-2xl bg-primary px-6 py-5 shadow-lg ring-1 ring-secondary_alt">
                <Calendar />
            </div>
        </div>
    </CalendarContextProvider>
);
