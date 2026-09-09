import { useEffect, useRef, type ReactNode } from "react";
import { useListData } from "react-stately";
import { TagSelect } from "untitledui-vite-starter-kit";

/** Opens the listbox on mount so the popover is visible in a static shot. */
const Opened = ({ children }: { children: ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const id = setTimeout(() => {
            const el = ref.current?.querySelector("input") as HTMLInputElement | null;
            el?.focus();
        }, 0);
        return () => clearTimeout(id);
    }, []);
    return <div ref={ref}>{children}</div>;
};

const people = [
    { id: "olivia", label: "Olivia Rhye", supportingText: "olivia@untitledui.com" },
    { id: "phoenix", label: "Phoenix Baker", supportingText: "phoenix@untitledui.com" },
    { id: "lana", label: "Lana Steiner", supportingText: "lana@untitledui.com" },
    { id: "demi", label: "Demi Wilkinson", supportingText: "demi@untitledui.com" },
    { id: "candice", label: "Candice Wu", supportingText: "candice@untitledui.com" },
];

/** Selected values stay in the input as removable tags. `selectedItems` is a `useListData` list. */
export const Default = () => {
    const selectedItems = useListData({ initialItems: [people[0], people[1]] });

    return (
        <div className="w-96">
            <TagSelect label="Share with" placeholder="Search people" items={people} selectedItems={selectedItems}>
                {(item) => (
                    <TagSelect.Item id={item.id} label={item.label} supportingText={item.supportingText}>
                        {item.label}
                    </TagSelect.Item>
                )}
            </TagSelect>
        </div>
    );
};

export const Empty = () => {
    const selectedItems = useListData<{ id: string; label: string; supportingText: string }>({ initialItems: [] });

    return (
        <div className="w-96">
            <TagSelect label="Share with" placeholder="Search people" items={people} selectedItems={selectedItems} hint="Only teammates can be added.">
                {(item) => (
                    <TagSelect.Item id={item.id} label={item.label} supportingText={item.supportingText}>
                        {item.label}
                    </TagSelect.Item>
                )}
            </TagSelect>
        </div>
    );
};

/** Focusing the input opens the remaining, unselected options. */
export const OpenListbox = () => {
    const selectedItems = useListData({ initialItems: [people[0]] });

    return (
        <Opened>
            <div className="w-96">
                <TagSelect label="Share with" placeholder="Search people" items={people} selectedItems={selectedItems}>
                    {(item) => (
                        <TagSelect.Item id={item.id} label={item.label} supportingText={item.supportingText}>
                            {item.label}
                        </TagSelect.Item>
                    )}
                </TagSelect>
            </div>
        </Opened>
    );
};
