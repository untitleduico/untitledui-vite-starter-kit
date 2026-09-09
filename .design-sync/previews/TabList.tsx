import { Tab, TabList, Tabs } from "untitledui-vite-starter-kit";

const periods = [
    { id: "today", label: "Today" },
    { id: "week", label: "This week" },
    { id: "month", label: "This month" },
];

/** The five horizontal `type` treatments. */
export const HorizontalTypes = () => (
    <div className="flex flex-col gap-5">
        {(["button-brand", "button-gray", "button-border", "button-minimal", "underline"] as const).map((type) => (
            <div key={type} className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-tertiary">{type}</span>
                <Tabs defaultSelectedKey="week" className="w-max">
                    <TabList type={type}>
                        {periods.map((period) => (
                            <Tab key={period.id} id={period.id}>
                                {period.label}
                            </Tab>
                        ))}
                    </TabList>
                </Tabs>
            </div>
        ))}
    </div>
);

export const Sizes = () => (
    <div className="flex flex-col gap-5">
        <Tabs defaultSelectedKey="week" className="w-max">
            <TabList type="button-border" size="sm">
                {periods.map((period) => (
                    <Tab key={period.id} id={period.id}>
                        {period.label}
                    </Tab>
                ))}
            </TabList>
        </Tabs>
        <Tabs defaultSelectedKey="week" className="w-max">
            <TabList type="button-border" size="md">
                {periods.map((period) => (
                    <Tab key={period.id} id={period.id}>
                        {period.label}
                    </Tab>
                ))}
            </TabList>
        </Tabs>
    </div>
);

/** Vertical lists get `line`, the left-rail treatment used on settings pages. */
export const Vertical = () => (
    <Tabs orientation="vertical" defaultSelectedKey="password">
        <TabList type="line" orientation="vertical">
            <Tab id="details">My details</Tab>
            <Tab id="password">Password</Tab>
            <Tab id="team">Team</Tab>
            <Tab id="plan">Plan</Tab>
            <Tab id="notifications">Notifications</Tab>
        </TabList>
    </Tabs>
);

/** `fullWidth` stretches underline tabs to fill their container. */
export const FullWidth = () => (
    <Tabs defaultSelectedKey="overview" className="w-full max-w-xl">
        <TabList type="underline" fullWidth>
            <Tab id="overview">Overview</Tab>
            <Tab id="usage">Usage</Tab>
            <Tab id="members">Members</Tab>
            <Tab id="billing">Billing</Tab>
        </TabList>
    </Tabs>
);
