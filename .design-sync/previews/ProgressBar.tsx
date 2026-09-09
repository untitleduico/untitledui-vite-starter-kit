import { ProgressBar } from "untitledui-vite-starter-kit";

export const LabelRight = () => (
    <div className="flex w-80 flex-col gap-2">
        <p className="text-sm font-medium text-secondary">Storage used</p>
        <ProgressBar value={64} labelPosition="right" />
    </div>
);

export const LabelBottom = () => (
    <div className="flex w-80 flex-col gap-2">
        <p className="text-sm font-medium text-secondary">Onboarding progress</p>
        <ProgressBar value={35} labelPosition="bottom" />
    </div>
);

export const LabelTopFloating = () => (
    <div className="flex w-80 flex-col gap-2 pt-12">
        <ProgressBar value={72} labelPosition="top-floating" />
    </div>
);

export const CustomFormatter = () => (
    <div className="flex w-80 flex-col gap-2">
        <p className="text-sm font-medium text-secondary">Seats used</p>
        <ProgressBar value={18} max={25} labelPosition="right" valueFormatter={(value, percentage) => `${value} of 25 (${percentage.toFixed(0)}%)`} />
    </div>
);
