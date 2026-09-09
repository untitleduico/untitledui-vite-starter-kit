import { useEffect, useRef, type ReactNode } from "react";

/** Renders the dropdown with its menu already open so the panel is visible in a static shot. */
const Opened = ({ children }: { children: ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const id = setTimeout(() => {
            const trigger = ref.current?.querySelector("button");
            if (!trigger) return;
            const opts = { bubbles: true, cancelable: true, composed: true, pointerType: "mouse", button: 0, detail: 1 } as PointerEventInit;
            trigger.dispatchEvent(new PointerEvent("pointerdown", opts));
            trigger.dispatchEvent(new PointerEvent("pointerup", opts));
            trigger.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, detail: 1 }));
        }, 0);
        return () => clearTimeout(id);
    }, []);
    return <div ref={ref}>{children}</div>;
};

import { DropdownSearchAdvanced } from "untitledui-vite-starter-kit";

/** The closed "Manage access" trigger. */
export const Trigger = () => <DropdownSearchAdvanced />;

/** Searchable team list with checkbox selection, a nested member submenu and a Create team footer. */
export const OpenMenu = () => (
    <Opened>
        <DropdownSearchAdvanced />
    </Opened>
);
