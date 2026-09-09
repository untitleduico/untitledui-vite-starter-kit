import { BarChart01, CheckDone01, Home01, PieChart03, Rows01, Users01 } from "@untitledui/icons";
import { NavList } from "untitledui-vite-starter-kit";

const items = [
    { label: "Home", href: "/", icon: Home01 },
    { label: "Dashboard", href: "/dashboard", icon: BarChart01 },
    { label: "Projects", href: "/projects", icon: Rows01, badge: "8" },
    { label: "Tasks", href: "/tasks", icon: CheckDone01, badge: "12" },
    { label: "Reporting", href: "/reporting", icon: PieChart03 },
    { divider: true as const },
    { label: "Users", href: "/users", icon: Users01 },
];

export const Default = () => (
    <div className="w-72 rounded-xl py-2 ring-1 ring-secondary">
        <NavList activeUrl="/dashboard" items={items} />
    </div>
);

export const WithSubItems = () => (
    <div className="w-72 rounded-xl py-2 ring-1 ring-secondary">
        <NavList
            activeUrl="/settings/team"
            items={[
                { label: "Home", href: "/", icon: Home01 },
                {
                    label: "Settings",
                    href: "/settings",
                    icon: Rows01,
                    items: [
                        { label: "General", href: "/settings/general" },
                        { label: "Team", href: "/settings/team" },
                        { label: "Billing", href: "/settings/billing" },
                    ],
                },
                { label: "Reporting", href: "/reporting", icon: PieChart03 },
            ]}
        />
    </div>
);
