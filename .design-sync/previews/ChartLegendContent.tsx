import { ChartLegendContent } from "untitledui-vite-starter-kit";

const series = [
    { value: "Desktop", type: "circle" as const, color: "currentColor", payload: { className: "text-utility-brand-700" } },
    { value: "Mobile", type: "circle" as const, color: "currentColor", payload: { className: "text-utility-blue-500" } },
    { value: "Tablet", type: "circle" as const, color: "currentColor", payload: { className: "text-utility-indigo-500" } },
];

export const Horizontal = () => <ChartLegendContent layout="horizontal" align="left" payload={series} />;

export const Centered = () => <ChartLegendContent layout="horizontal" align="center" payload={series} className="w-full" />;

export const Vertical = () => <ChartLegendContent layout="vertical" align="left" payload={series} />;

export const BesideAChartCard = () => (
    <div className="flex w-full max-w-md flex-col gap-4 rounded-xl border border-secondary bg-primary p-5">
        <div className="flex flex-col gap-0.5">
            <span className="text-sm font-semibold text-primary">Sessions by device</span>
            <span className="text-sm text-tertiary">Last 30 days</span>
        </div>
        <div className="flex h-24 items-end gap-2">
            <div className="h-full w-full rounded-t bg-brand-solid" />
            <div className="h-2/3 w-full rounded-t bg-brand-secondary" />
            <div className="h-1/3 w-full rounded-t bg-quaternary" />
        </div>
        <ChartLegendContent layout="horizontal" align="left" payload={series} />
    </div>
);
