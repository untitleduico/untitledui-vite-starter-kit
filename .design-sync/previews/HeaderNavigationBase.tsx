import { BarChartSquare02, CheckDone01, Home01, Rows01, Users01 } from "@untitledui/icons";
import { Button, HeaderNavigationBase } from "untitledui-vite-starter-kit";

const items = [
    { label: "Home", href: "/", icon: Home01 },
    { label: "Dashboard", href: "/dashboard", icon: BarChartSquare02 },
    { label: "Projects", href: "/projects", icon: Rows01 },
    { label: "Tasks", href: "/tasks", icon: CheckDone01 },
    { label: "Users", href: "/users", icon: Users01 },
];

const subItems = [
    { label: "Overview", href: "/projects" },
    { label: "Timeline", href: "/projects/timeline" },
    { label: "Files", href: "/projects/files" },
    { label: "Members", href: "/projects/members" },
];

/** The application header: logo, primary nav, then search / settings / notifications and the account menu. */
export const Default = () => <HeaderNavigationBase activeUrl="/dashboard" items={items} />;

/** `subItems` adds a secondary bar under the primary one. `secondaryType` picks pills or underline tabs. */
export const WithSubNav = () => (
    <div className="flex flex-col gap-8">
        <HeaderNavigationBase activeUrl="/projects" items={items} subItems={subItems} secondaryType="buttons" />
        <HeaderNavigationBase activeUrl="/projects" items={items} subItems={subItems} secondaryType="tabs" />
    </div>
);

/** `centered` balances the nav between the logo and the actions. */
export const Centered = () => <HeaderNavigationBase centered activeUrl="/dashboard" items={items} />;

/** `actions` replaces the whole right-hand cluster. */
export const CustomActions = () => (
    <HeaderNavigationBase
        activeUrl="/projects"
        items={items}
        actions={
            <>
                <Button color="secondary" size="md">
                    Invite
                </Button>
                <Button size="md">New project</Button>
            </>
        }
    />
);
