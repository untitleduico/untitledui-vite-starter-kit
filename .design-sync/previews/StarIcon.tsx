import { StarIcon } from "untitledui-vite-starter-kit";

export const Default = () => <StarIcon className="size-8" />;

export const Progress = () => (
    <div className="flex items-end gap-6">
        {[0, 25, 50, 75, 100].map((progress) => (
            <div key={progress} className="flex flex-col items-center gap-2">
                <StarIcon progress={progress} className="size-8" />
                <span className="text-xs font-medium text-tertiary">{progress}%</span>
            </div>
        ))}
    </div>
);

export const Rating = () => (
    <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
            <StarIcon className="size-5" />
            <StarIcon className="size-5" />
            <StarIcon className="size-5" />
            <StarIcon className="size-5" />
            <StarIcon progress={70} className="size-5" />
        </div>
        <span className="text-sm font-medium text-secondary">4.7 out of 5</span>
    </div>
);
