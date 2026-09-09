import { type ReactNode, useEffect, useRef } from "react";
import { Users01 } from "@untitledui/icons";
import { useListData } from "react-stately";
import { SelectItem, TagSelectBase } from "untitledui-vite-starter-kit";

/** Focus opens the listbox (`menuTrigger="focus"`), so the popover is visible in a static shot. */
const Opened = ({ children }: { children: ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const id = setTimeout(() => ref.current?.querySelector("input")?.focus(), 0);
        return () => clearTimeout(id);
    }, []);
    return <div ref={ref}>{children}</div>;
};

const people = [
    { id: "olivia", label: "Olivia Rhye", supportingText: "olivia@untitledui.com" },
    { id: "phoenix", label: "Phoenix Baker", supportingText: "phoenix@untitledui.com" },
    { id: "lana", label: "Lana Steiner", supportingText: "lana@untitledui.com" },
    { id: "demi", label: "Demi Wilkinson", supportingText: "demi@untitledui.com" },
];

/**
 * The implementation behind `TagSelect`: a combobox whose chosen values stay in the
 * field as removable tags. `selectedItems` must be a `useListData` list.
 */
export const Default = () => {
    const selectedItems = useListData({ initialItems: [people[0], people[2]] });

    return (
        <div className="w-96">
            <TagSelectBase label="Invite teammates" placeholder="Search people" items={people} selectedItems={selectedItems}>
                {(item) => (
                    <SelectItem id={item.id} label={item.label} supportingText={item.supportingText}>
                        {item.label}
                    </SelectItem>
                )}
            </TagSelectBase>
        </div>
    );
};

export const Sizes = () => {
    const small = useListData({ initialItems: [people[0]] });
    const large = useListData({ initialItems: [people[0], people[1]] });

    return (
        <div className="flex w-96 flex-col gap-4">
            <TagSelectBase size="sm" label="Small" placeholder="Search people" items={people} selectedItems={small} icon={Users01}>
                {(item) => (
                    <SelectItem id={item.id} label={item.label}>
                        {item.label}
                    </SelectItem>
                )}
            </TagSelectBase>
            <TagSelectBase size="lg" label="Large" placeholder="Search people" items={people} selectedItems={large} icon={Users01}>
                {(item) => (
                    <SelectItem id={item.id} label={item.label}>
                        {item.label}
                    </SelectItem>
                )}
            </TagSelectBase>
        </div>
    );
};

export const OpenListbox = () => {
    const selectedItems = useListData({ initialItems: [people[0]] });

    return (
        <Opened>
            <div className="w-96">
                <TagSelectBase label="Invite teammates" placeholder="Search people" items={people} selectedItems={selectedItems} hint="Only workspace members can be invited.">
                    {(item) => (
                        <SelectItem id={item.id} label={item.label} supportingText={item.supportingText}>
                            {item.label}
                        </SelectItem>
                    )}
                </TagSelectBase>
            </div>
        </Opened>
    );
};
