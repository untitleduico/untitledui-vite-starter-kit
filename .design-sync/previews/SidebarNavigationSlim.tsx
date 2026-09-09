import { BarChart01, CheckDone01, LifeBuoy01, PieChart03, Rows01, Settings01, Users01 } from "@untitledui/icons";
import { SidebarNavigationSlim } from "untitledui-vite-starter-kit";

const items = [
    { label: "Dashboard", href: "/", icon: BarChart01 },
    {
        label: "Projects",
        href: "/projects",
        icon: Rows01,
        items: [
            { label: "All projects", href: "/projects" },
            { label: "Shared with me", href: "/projects/shared" },
            { label: "Archived", href: "/projects/archived" },
        ],
    },
    { label: "Tasks", href: "/tasks", icon: CheckDone01, badge: "12" },
    { label: "Reporting", href: "/reporting", icon: PieChart03 },
    { label: "Users", href: "/users", icon: Users01 },
];

const footerItems = [
    { label: "Support", href: "/support", icon: LifeBuoy01 },
    { label: "Settings", href: "/settings", icon: Settings01 },
];

/** The 68px icon rail. Hovering an item with sub-items slides out a second 256px panel. */
const DefaultStory = () => <SidebarNavigationSlim activeUrl="/projects" items={items} footerItems={footerItems} />;

/** `hideBorder` drops the rail's ring until the secondary panel opens. */
const BorderlessStory = () => <SidebarNavigationSlim hideBorder activeUrl="/reporting" items={items} footerItems={footerItems} />;

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

export const Borderless = () => (
    <Frame>
        <BorderlessStory />
    </Frame>
);
