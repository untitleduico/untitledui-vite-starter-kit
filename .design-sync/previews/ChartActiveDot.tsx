import { ChartActiveDot } from "untitledui-vite-starter-kit";

/**
 * `ChartActiveDot` renders SVG, so it only paints inside an `<svg>` — recharts
 * normally supplies the coordinates through `cx` / `cy`.
 */
export const OnALine = () => (
    <svg viewBox="0 0 320 120" className="h-30 w-80 text-utility-brand-700">
        <polyline points="10,90 70,70 130,80 190,40 250,50 310,20" fill="none" stroke="currentColor" strokeWidth="2" />
        <ChartActiveDot cx={190} cy={40} />
    </svg>
);

export const SeveralPoints = () => (
    <svg viewBox="0 0 320 120" className="h-30 w-80 text-utility-brand-700">
        <polyline points="10,90 70,70 130,80 190,40 250,50 310,20" fill="none" stroke="currentColor" strokeWidth="2" />
        <ChartActiveDot cx={70} cy={70} />
        <ChartActiveDot cx={190} cy={40} />
        <ChartActiveDot cx={310} cy={20} />
    </svg>
);
