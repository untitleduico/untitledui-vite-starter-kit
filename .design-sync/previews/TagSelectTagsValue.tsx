import { Mail01 } from "@untitledui/icons";
import { useListData } from "react-stately";
import { SelectItem, TagSelectBase } from "untitledui-vite-starter-kit";

const people = [
    { id: "olivia", label: "Olivia Rhye", supportingText: "olivia@untitledui.com" },
    { id: "phoenix", label: "Phoenix Baker", supportingText: "phoenix@untitledui.com" },
    { id: "lana", label: "Lana Steiner", supportingText: "lana@untitledui.com" },
];

/**
 * The trigger row of `TagSelectBase` — leading icon, the selected values as removable
 * tags, and the text input. It reads its values from the tag-select context, so it only
 * renders inside `TagSelectBase`; these cells show it there.
 */
export const WithSelectedTags = () => {
    const selectedItems = useListData({ initialItems: [people[0], people[1]] });

    return (
        <div className="w-96">
            <TagSelectBase label="Recipients" placeholder="Search" items={people} selectedItems={selectedItems} icon={Mail01}>
                {(item) => (
                    <SelectItem id={item.id} label={item.label} supportingText={item.supportingText}>
                        {item.label}
                    </SelectItem>
                )}
            </TagSelectBase>
        </div>
    );
};

/** With nothing selected the row collapses to icon plus placeholder. */
export const Empty = () => {
    const selectedItems = useListData<(typeof people)[number]>({ initialItems: [] });

    return (
        <div className="w-96">
            <TagSelectBase label="Recipients" placeholder="Search" items={people} selectedItems={selectedItems} icon={Mail01} shortcut>
                {(item) => (
                    <SelectItem id={item.id} label={item.label} supportingText={item.supportingText}>
                        {item.label}
                    </SelectItem>
                )}
            </TagSelectBase>
        </div>
    );
};

/** Vertical padding tightens at `sm` when tags are present so the row height stays stable. */
export const Sizes = () => {
    const small = useListData({ initialItems: [people[0]] });
    const medium = useListData({ initialItems: [people[0]] });

    return (
        <div className="flex w-96 flex-col gap-4">
            <TagSelectBase size="sm" label="Small" placeholder="Search" items={people} selectedItems={small} icon={Mail01}>
                {(item) => (
                    <SelectItem id={item.id} label={item.label}>
                        {item.label}
                    </SelectItem>
                )}
            </TagSelectBase>
            <TagSelectBase size="md" label="Medium" placeholder="Search" items={people} selectedItems={medium} icon={Mail01}>
                {(item) => (
                    <SelectItem id={item.id} label={item.label}>
                        {item.label}
                    </SelectItem>
                )}
            </TagSelectBase>
        </div>
    );
};

export const Disabled = () => {
    const selectedItems = useListData({ initialItems: [people[0]] });

    return (
        <div className="w-96">
            <TagSelectBase isDisabled label="Recipients" placeholder="Search" items={people} selectedItems={selectedItems} icon={Mail01}>
                {(item) => (
                    <SelectItem id={item.id} label={item.label}>
                        {item.label}
                    </SelectItem>
                )}
            </TagSelectBase>
        </div>
    );
};
