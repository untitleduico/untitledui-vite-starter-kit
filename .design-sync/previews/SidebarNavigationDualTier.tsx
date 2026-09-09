import { useEffect, useRef } from "react";
import { BarChartSquare02, CheckDone01, HomeLine, LifeBuoy01, PieChart03, Settings01, Users01 } from "@untitledui/icons";
import { SidebarNavigationDualTier } from "untitledui-vite-starter-kit";

const items = [
    { label: "Home", href: "/", icon: HomeLine },
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: BarChartSquare02,
        items: [
            { label: "Overview", href: "/dashboard/overview" },
            { label: "Revenue", href: "/dashboard/revenue" },
            { label: "Retention", href: "/dashboard/retention" },
        ],
    },
    { label: "Projects", href: "/projects", icon: CheckDone01, badge: 8 },
    { label: "Reporting", href: "/reporting", icon: PieChart03 },
    { label: "Team", href: "/team", icon: Users01 },
];

const footerItems = [
    { label: "Support", href: "/support", icon: LifeBuoy01 },
    { label: "Settings", href: "/settings", icon: Settings01 },
];

const DefaultStory = () => <SidebarNavigationDualTier activeUrl="/dashboard" items={items} footerItems={footerItems} />;

// The sidebar is `lg:fixed`. The preview card's wrapper carries a transform, which
// makes it the containing block for fixed descendants - and it has no height of its
// own, so the sidebar collapses to 0px. This frame is a sized containing block of its
// own (a transform is what establishes one), giving the sidebar somewhere to lay out.
const Frame = ({ children }: { children: any }) => (
    <div style={{ position: "relative", width: "100%", height: 640, transform: "translateZ(0)", overflow: "hidden" }}>{children}</div>
);

export const Default = () => (
    <Frame>
        <DefaultStory />
    </Frame>
);

/**
 * The second tier is the point of this component, and it only opens on pointer-enter
 * of the desktop sidebar wrapper. React synthesises enter/leave from `pointerover`,
 * so the preview dispatches a bubbling one on mount.
 */
const SecondTierStory = () => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const id = setTimeout(() => {
            const target = ref.current?.querySelector("aside");
            target?.dispatchEvent(new PointerEvent("pointerover", { bubbles: true, pointerType: "mouse" }));
        }, 0);
        return () => clearTimeout(id);
    }, []);
    return (
        <div ref={ref}>
            <SidebarNavigationDualTier activeUrl="/dashboard" items={items} footerItems={footerItems} />
        </div>
    );
};

export const SecondTier = () => (
    <Frame>
        <SecondTierStory />
    </Frame>
);
