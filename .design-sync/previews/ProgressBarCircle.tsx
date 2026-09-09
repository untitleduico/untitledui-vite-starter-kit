import { ProgressBarCircle } from "untitledui-vite-starter-kit";

export const Sizes = () => (
    <div className="flex flex-wrap items-end gap-8">
        <ProgressBarCircle size="xxs" value={40} />
        <ProgressBarCircle size="xs" value={40} />
        <ProgressBarCircle size="sm" value={40} />
    </div>
);

export const WithLabel = () => (
    <div className="flex flex-wrap items-end gap-8">
        <ProgressBarCircle size="xs" value={68} label="Storage used" />
        <ProgressBarCircle size="sm" value={92} label="Uptime" />
    </div>
);

export const CustomFormatter = () => (
    <ProgressBarCircle size="sm" value={18} max={25} label="Seats used" valueFormatter={(value) => `${value}/25`} />
);
