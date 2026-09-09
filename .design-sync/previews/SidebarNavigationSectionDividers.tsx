import { BarChartSquare02, CheckDone01, HomeLine, LifeBuoy01, PieChart03, Settings01, Users01 } from "@untitledui/icons";
import { SidebarNavigationSectionDividers } from "untitledui-vite-starter-kit";

const items = [
    { label: "Home", href: "/", icon: HomeLine },
    { label: "Dashboard", href: "/dashboard", icon: BarChartSquare02 },
    { label: "Projects", href: "/projects", icon: CheckDone01, badge: 8 },
    { label: "Reporting", href: "/reporting", icon: PieChart03 },
    { divider: true as const },
    { label: "Team", href: "/team", icon: Users01 },
    { label: "Support", href: "/support", icon: LifeBuoy01 },
    { label: "Settings", href: "/settings", icon: Settings01 },
];

const DefaultStory = () => <SidebarNavigationSectionDividers activeUrl="/dashboard" items={items} />;

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
