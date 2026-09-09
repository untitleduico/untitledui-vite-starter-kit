import { BarChart01, Home01, Settings01, Users01 } from "@untitledui/icons";
import { Tab, TabList, Tabs } from "untitledui-vite-starter-kit";

/** A single tab. It reads size and type from the enclosing `TabList`, so always compose it inside one. */
export const Default = () => (
    <Tabs defaultSelectedKey="overview" className="w-max">
        <TabList type="button-brand">
            <Tab id="overview">Overview</Tab>
            <Tab id="members">Members</Tab>
            <Tab id="billing">Billing</Tab>
        </TabList>
    </Tabs>
);

/** `icon` takes a component reference and is tinted from the tab's own state. */
export const WithIcons = () => (
    <Tabs defaultSelectedKey="dashboard" className="w-max">
        <TabList type="button-gray" size="md">
            <Tab id="dashboard" icon={Home01}>
                Dashboard
            </Tab>
            <Tab id="reports" icon={BarChart01}>
                Reports
            </Tab>
            <Tab id="team" icon={Users01}>
                Team
            </Tab>
            <Tab id="settings" icon={Settings01}>
                Settings
            </Tab>
        </TabList>
    </Tabs>
);

/** `badge` renders a pill count on brand/underline/line lists and a modern badge elsewhere. */
export const WithBadges = () => (
    <Tabs defaultSelectedKey="all" className="w-max">
        <TabList type="underline" size="md">
            <Tab id="all" badge={128}>
                All invoices
            </Tab>
            <Tab id="paid" badge={96}>
                Paid
            </Tab>
            <Tab id="overdue" badge={12}>
                Overdue
            </Tab>
        </TabList>
    </Tabs>
);

/** Tabs pick up `size` from the list: `sm` is 14px, `md` is 16px with larger icons. */
export const Sizes = () => (
    <div className="flex flex-col gap-4">
        <Tabs defaultSelectedKey="general" className="w-max">
            <TabList type="button-border" size="sm">
                <Tab id="general">General</Tab>
                <Tab id="notifications">Notifications</Tab>
                <Tab id="audit">Audit log</Tab>
            </TabList>
        </Tabs>
        <Tabs defaultSelectedKey="general" className="w-max">
            <TabList type="button-border" size="md">
                <Tab id="general">General</Tab>
                <Tab id="notifications">Notifications</Tab>
                <Tab id="audit">Audit log</Tab>
            </TabList>
        </Tabs>
    </div>
);
