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

import { ComboBox, Select, SelectItem } from "untitledui-vite-starter-kit";

const roles = [
    { id: "owner", label: "Owner", supportingText: "Full access" },
    { id: "admin", label: "Admin", supportingText: "Manage members" },
    { id: "editor", label: "Editor", supportingText: "Edit content" },
    { id: "viewer", label: "Viewer", supportingText: "Read only" },
];

/**
 * `Popover` is the floating listbox panel shared by `Select` and `ComboBox`. It is never used
 * on its own - it takes its width from the trigger - so it is shown here inside an open `Select`.
 */
export const InsideSelect = () => (
    <Opened>
        <div className="w-80">
            <Select label="Role" placeholder="Select a role" items={roles}>
                {(item) => (
                    <SelectItem id={item.id} label={item.label} supportingText={item.supportingText}>
                        {item.label}
                    </SelectItem>
                )}
            </Select>
        </div>
    </Opened>
);

/** The same panel under a `ComboBox` trigger. */
export const InsideComboBox = () => (
    <Opened>
        <div className="w-80">
            <ComboBox label="Role" placeholder="Search roles" items={roles}>
                {(item) => (
                    <SelectItem id={item.id} label={item.label} supportingText={item.supportingText}>
                        {item.label}
                    </SelectItem>
                )}
            </ComboBox>
        </div>
    </Opened>
);
