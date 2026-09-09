import { BarChart01, CheckDone01, CreditCard01, File05, Rows01, Settings01, Users01 } from "@untitledui/icons";
import { SidebarNavigationSectionsSubheadings } from "untitledui-vite-starter-kit";

const sections = [
    {
        label: "Workspace",
        items: [
            { label: "Dashboard", href: "/", icon: BarChart01 },
            { label: "Projects", href: "/projects", icon: Rows01, badge: "8" },
            { label: "Tasks", href: "/tasks", icon: CheckDone01, badge: "12" },
        ],
    },
    {
        label: "Company",
        items: [
            { label: "People", href: "/people", icon: Users01 },
            { label: "Documents", href: "/documents", icon: File05 },
        ],
    },
    {
        label: "Account",
        items: [
            { label: "Billing", href: "/billing", icon: CreditCard01 },
            { label: "Settings", href: "/settings", icon: Settings01 },
        ],
    },
];

/** A 276px sidebar whose nav is grouped under uppercase section subheadings. */
const DefaultStory = () => <SidebarNavigationSectionsSubheadings activeUrl="/projects" items={sections} />;

const AccountSectionActiveStory = () => <SidebarNavigationSectionsSubheadings activeUrl="/billing" items={sections} />;

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

export const AccountSectionActive = () => (
    <Frame>
        <AccountSectionActiveStory />
    </Frame>
);
