import { TagCloseX } from "untitledui-vite-starter-kit";

export const Sizes = () => (
    <div className="flex items-center gap-4">
        <TagCloseX size="sm" />
        <TagCloseX size="md" />
        <TagCloseX size="lg" />
    </div>
);

export const InTag = () => (
    <div className="flex items-center gap-2">
        <span className="flex items-center gap-1 rounded-md bg-primary py-0.5 pr-1 pl-2 text-sm font-medium text-secondary ring-1 ring-primary">
            Design
            <TagCloseX size="md" />
        </span>
        <span className="flex items-center gap-1 rounded-md bg-primary py-0.5 pr-1 pl-2 text-sm font-medium text-secondary ring-1 ring-primary">
            Engineering
            <TagCloseX size="md" />
        </span>
        <span className="flex items-center gap-1 rounded-md bg-primary py-0.5 pr-1 pl-2 text-sm font-medium text-secondary ring-1 ring-primary">
            Product
            <TagCloseX size="md" />
        </span>
    </div>
);
