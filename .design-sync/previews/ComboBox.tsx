import { useEffect, useRef, type ReactNode } from "react";

/** Opens the listbox on mount so the popover is visible in a static shot. */
const Opened = ({ children }: { children: ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const id = setTimeout(() => {
            const el = ref.current?.querySelector("input, button") as HTMLElement | null;
            if (!el) return;
            if (el.tagName === "INPUT") {
                el.focus();
                return;
            }
            const opts = { bubbles: true, cancelable: true, composed: true, pointerType: "mouse", button: 0, detail: 1 } as PointerEventInit;
            el.dispatchEvent(new PointerEvent("pointerdown", opts));
            el.dispatchEvent(new PointerEvent("pointerup", opts));
            el.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, detail: 1 }));
        }, 0);
        return () => clearTimeout(id);
    }, []);
    return <div ref={ref}>{children}</div>;
};

import { ComboBox, SelectItem } from "untitledui-vite-starter-kit";

const users = [
    { id: "olivia", label: "Olivia Rhye", supportingText: "@olivia" },
    { id: "phoenix", label: "Phoenix Baker", supportingText: "@phoenix" },
    { id: "lana", label: "Lana Steiner", supportingText: "@lana" },
    { id: "demi", label: "Demi Wilkinson", supportingText: "@demi" },
    { id: "candice", label: "Candice Wu", supportingText: "@candice" },
];

export const Default = () => (
    <div className="w-80">
        <ComboBox label="Assignee" placeholder="Search team members" items={users} hint="Start typing to filter the list.">
            {(item) => (
                <SelectItem id={item.id} label={item.label} supportingText={item.supportingText}>
                    {item.label}
                </SelectItem>
            )}
        </ComboBox>
    </div>
);

/** Focusing the input opens the listbox (`menuTrigger="focus"`). */
export const OpenListbox = () => (
    <Opened>
        <div className="w-80">
            <ComboBox label="Assignee" placeholder="Search team members" items={users}>
                {(item) => (
                    <SelectItem id={item.id} label={item.label} supportingText={item.supportingText}>
                        {item.label}
                    </SelectItem>
                )}
            </ComboBox>
        </div>
    </Opened>
);

export const Sizes = () => (
    <div className="flex w-80 flex-col gap-4">
        <ComboBox size="sm" label="Small" items={users}>
            {(item) => <SelectItem id={item.id} label={item.label}>{item.label}</SelectItem>}
        </ComboBox>
        <ComboBox size="md" label="Medium" items={users}>
            {(item) => <SelectItem id={item.id} label={item.label}>{item.label}</SelectItem>}
        </ComboBox>
        <ComboBox size="lg" label="Large" items={users}>
            {(item) => <SelectItem id={item.id} label={item.label}>{item.label}</SelectItem>}
        </ComboBox>
    </div>
);
