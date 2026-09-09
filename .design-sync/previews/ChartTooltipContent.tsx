import { ChartTooltipContent } from "untitledui-vite-starter-kit";

const multiSeries = [
    { name: "Desktop", value: 4820, payload: { name: "Desktop", value: 4820 } },
    { name: "Mobile", value: 3140, payload: { name: "Mobile", value: 3140 } },
    { name: "Tablet", value: 820, payload: { name: "Tablet", value: 820 } },
];

/** The tooltip only renders when recharts marks it `active`, so every cell passes `active` and a payload. */
export const SingleSeries = () => (
    <div className="flex">
        <ChartTooltipContent active label="Jan 12" payload={[{ name: "Sessions", value: 4820, payload: { name: "Sessions" } }]} />
    </div>
);

export const MultipleSeries = () => (
    <div className="flex">
        <ChartTooltipContent active label="Jan 12" payload={multiSeries} />
    </div>
);

export const WithFormattedValues = () => (
    <div className="flex">
        <ChartTooltipContent active label="Q3 2024" payload={multiSeries} formatter={(value: number) => `${value.toLocaleString()} sessions`} />
    </div>
);

export const OverAChart = () => (
    <div className="flex w-full max-w-md flex-col gap-4 rounded-xl border border-secondary bg-primary p-5">
        <span className="text-sm font-semibold text-primary">Sessions by device</span>
        <div className="flex h-24 items-end gap-2">
            <div className="h-1/2 w-full rounded-t bg-brand-secondary" />
            <div className="h-full w-full rounded-t bg-brand-solid" />
            <div className="h-2/3 w-full rounded-t bg-brand-secondary" />
        </div>
        <div className="flex justify-center">
            <ChartTooltipContent active label="Jan 12" payload={multiSeries} />
        </div>
    </div>
);
