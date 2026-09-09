import { Tab, TabList, TabPanel, Tabs } from "untitledui-vite-starter-kit";

/** The panel bound to the selected tab's `id`. Only the selected panel is mounted. */
export const Default = () => (
    <Tabs defaultSelectedKey="overview" className="w-full max-w-xl">
        <TabList type="underline" size="md">
            <Tab id="overview">Overview</Tab>
            <Tab id="usage">Usage</Tab>
            <Tab id="billing">Billing</Tab>
        </TabList>
        <TabPanel id="overview" className="pt-5">
            <h3 className="text-md font-semibold text-primary">Workspace overview</h3>
            <p className="mt-1 text-sm text-tertiary">
                Untitled UI used 68% of its monthly quota. 12 members joined this month and 4 projects shipped to production.
            </p>
        </TabPanel>
        <TabPanel id="usage" className="pt-5">
            <p className="text-sm text-tertiary">1.2M API calls this billing period.</p>
        </TabPanel>
        <TabPanel id="billing" className="pt-5">
            <p className="text-sm text-tertiary">Next invoice of $2,400.00 is due 1 October.</p>
        </TabPanel>
    </Tabs>
);

/** Panels work the same way beside a vertical list. */
export const Vertical = () => (
    <Tabs orientation="vertical" defaultSelectedKey="password" className="w-full max-w-xl flex-row gap-6">
        <TabList type="line" orientation="vertical">
            <Tab id="details">My details</Tab>
            <Tab id="password">Password</Tab>
            <Tab id="team">Team</Tab>
        </TabList>
        <TabPanel id="password">
            <h3 className="text-md font-semibold text-primary">Password</h3>
            <p className="mt-1 text-sm text-tertiary">Last changed 3 months ago. Passwords must be at least 8 characters.</p>
        </TabPanel>
        <TabPanel id="details">
            <p className="text-sm text-tertiary">Update your photo and personal details.</p>
        </TabPanel>
        <TabPanel id="team">
            <p className="text-sm text-tertiary">Manage who has access to this workspace.</p>
        </TabPanel>
    </Tabs>
);
