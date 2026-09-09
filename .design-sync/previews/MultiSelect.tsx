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

import { MultiSelect } from "untitledui-vite-starter-kit";

const teams = [
    { id: "design", label: "Design", supportingText: "12 people" },
    { id: "engineering", label: "Engineering", supportingText: "48 people" },
    { id: "marketing", label: "Marketing", supportingText: "9 people" },
    { id: "sales", label: "Sales", supportingText: "23 people" },
    { id: "support", label: "Customer Support", supportingText: "15 people" },
];

export const Default = () => (
    <div className="w-80">
        <MultiSelect
            label="Teams"
            placeholder="Select teams"
            items={teams}
            selectedKeys={new Set(["design", "engineering"])}
            hint="Members of these teams get access."
        >
            {(item) => (
                <MultiSelect.Item id={item.id} label={item.label} supportingText={item.supportingText}>
                    {item.label}
                </MultiSelect.Item>
            )}
        </MultiSelect>
    </div>
);

/** The trigger opens a searchable checkbox list with reset / select-all in the footer. */
export const OpenListbox = () => (
    <Opened>
        <div className="w-80">
            <MultiSelect label="Teams" placeholder="Select teams" items={teams} selectedKeys={new Set(["design", "engineering"])}>
                {(item) => (
                    <MultiSelect.Item id={item.id} label={item.label} supportingText={item.supportingText}>
                        {item.label}
                    </MultiSelect.Item>
                )}
            </MultiSelect>
        </div>
    </Opened>
);

export const States = () => (
    <div className="flex w-80 flex-col gap-4">
        <MultiSelect isRequired label="Teams" placeholder="Select teams" items={teams}>
            {(item) => <MultiSelect.Item id={item.id} label={item.label}>{item.label}</MultiSelect.Item>}
        </MultiSelect>
        <MultiSelect isDisabled label="Teams" placeholder="Select teams" items={teams} selectedKeys={new Set(["sales"])}>
            {(item) => <MultiSelect.Item id={item.id} label={item.label}>{item.label}</MultiSelect.Item>}
        </MultiSelect>
    </div>
);
