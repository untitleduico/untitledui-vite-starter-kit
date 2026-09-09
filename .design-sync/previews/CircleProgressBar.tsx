import { CircleProgressBar } from "untitledui-vite-starter-kit";

export const Default = () => <CircleProgressBar value={60} />;

export const Values = () => (
    <div className="flex flex-wrap items-center gap-8">
        <CircleProgressBar value={0} />
        <CircleProgressBar value={25} />
        <CircleProgressBar value={50} />
        <CircleProgressBar value={75} />
        <CircleProgressBar value={100} />
    </div>
);

export const InAUsageCard = () => (
    <div className="flex w-full max-w-sm items-center gap-4 rounded-xl border border-secondary bg-primary p-5">
        <CircleProgressBar value={72} />
        <div className="flex flex-col gap-0.5">
            <span className="text-sm font-semibold text-primary">Storage used</span>
            <span className="text-sm text-tertiary">36 GB of 50 GB</span>
        </div>
    </div>
);
