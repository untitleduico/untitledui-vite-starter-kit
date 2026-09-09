import { BarChart01, CheckDone01, LifeBuoy01, PieChart03, Rows01, Settings01, Users01 } from "@untitledui/icons";
import { SidebarNavigationSimple } from "untitledui-vite-starter-kit";

const items = [
    { label: "Dashboard", href: "/", icon: BarChart01 },
    { label: "Projects", href: "/projects", icon: Rows01, badge: "8" },
    { label: "Tasks", href: "/tasks", icon: CheckDone01, badge: "12" },
    { label: "Reporting", href: "/reporting", icon: PieChart03 },
    { label: "Users", href: "/users", icon: Users01 },
];

const footerItems = [
    { label: "Support", href: "/support", icon: LifeBuoy01 },
    { label: "Settings", href: "/settings", icon: Settings01 },
];

/** The 280px product sidebar: logo, search, nav list, footer links and the account card. */
const DefaultStory = () => <SidebarNavigationSimple activeUrl="/projects" items={items} footerItems={footerItems} />;

/** `featureCard` drops a promo block above the account card; `showAccountCard` hides it. */
const WithFeatureCardStory = () => (
    <SidebarNavigationSimple
        activeUrl="/reporting"
        items={items}
        showAccountCard={false}
        featureCard={
            <div className="flex flex-col gap-2 rounded-xl bg-secondary p-4">
                <p className="text-sm font-semibold text-primary">Used 80% of your plan</p>
                <p className="text-sm text-tertiary">8 of 10 projects created. Upgrade to add more.</p>
            </div>
        }
    />
);

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

export const WithFeatureCard = () => (
    <Frame>
        <WithFeatureCardStory />
    </Frame>
);
