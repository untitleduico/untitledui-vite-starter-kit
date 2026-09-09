import { useEffect, useRef, type ReactNode } from "react";
import { BarChartSquare02, HomeLine, Settings01, Users01 } from "@untitledui/icons";
import { MobileNavigationHeader, NavItemBase } from "untitledui-vite-starter-kit";

/** Renders the header with its drawer already open so the navigation panel is visible in a static shot. */
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

const drawer = (
    <aside className="flex h-full flex-col gap-1 bg-primary p-4">
        <NavItemBase type="link" href="/" icon={HomeLine} current>
            Home
        </NavItemBase>
        <NavItemBase type="link" href="/dashboard" icon={BarChartSquare02}>
            Dashboard
        </NavItemBase>
        <NavItemBase type="link" href="/team" icon={Users01} badge={12}>
            Team
        </NavItemBase>
        <NavItemBase type="link" href="/settings" icon={Settings01}>
            Settings
        </NavItemBase>
    </aside>
);

export const Collapsed = () => (
    <div className="w-full">
        <MobileNavigationHeader>{drawer}</MobileNavigationHeader>
        <div className="flex flex-col gap-1 p-4">
            <h1 className="text-lg font-semibold text-primary">Dashboard</h1>
            <p className="text-sm text-tertiary">Revenue is up 12% against last month.</p>
        </div>
    </div>
);

export const MenuOpen = () => (
    <Opened>
        <MobileNavigationHeader>{drawer}</MobileNavigationHeader>
    </Opened>
);
