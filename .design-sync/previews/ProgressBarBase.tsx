import { ProgressBarBase } from "untitledui-vite-starter-kit";

export const Default = () => (
    <div className="flex w-80 flex-col gap-6">
        <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-secondary">Profile completion</p>
            <ProgressBarBase value={40} />
        </div>
        <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-secondary">Storage used</p>
            <ProgressBarBase value={78} />
        </div>
    </div>
);

export const Steps = () => (
    <div className="flex w-80 flex-col gap-2">
        <p className="text-sm font-medium text-secondary">Step 3 of 4</p>
        <ProgressBarBase value={3} min={0} max={4} />
    </div>
);

export const CustomTrack = () => (
    <div className="flex w-80 flex-col gap-2">
        <p className="text-sm font-medium text-secondary">Upload complete</p>
        <ProgressBarBase value={100} className="h-3" progressClassName="bg-fg-success-secondary" />
    </div>
);
