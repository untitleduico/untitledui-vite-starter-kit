import { TagCheckbox } from "untitledui-vite-starter-kit";

/** TagCheckbox is a presentational box - it takes explicit state props rather than managing its own. */
export const States = () => (
    <div className="flex items-center gap-4">
        <TagCheckbox />
        <TagCheckbox isSelected />
        <TagCheckbox isDisabled />
        <TagCheckbox isDisabled isSelected />
    </div>
);

export const Sizes = () => (
    <div className="flex items-center gap-4">
        <TagCheckbox size="sm" isSelected />
        <TagCheckbox size="md" isSelected />
        <TagCheckbox size="lg" isSelected />
    </div>
);

export const InTag = () => (
    <div className="flex items-center gap-2">
        <span className="flex items-center gap-1.5 rounded-md bg-primary py-0.5 pr-2 pl-1.5 text-sm font-medium text-secondary ring-1 ring-primary">
            <TagCheckbox size="sm" isSelected />
            Design
        </span>
        <span className="flex items-center gap-1.5 rounded-md bg-primary py-0.5 pr-2 pl-1.5 text-sm font-medium text-secondary ring-1 ring-primary">
            <TagCheckbox size="sm" />
            Engineering
        </span>
    </div>
);
