import { BarChart01, Home01, Settings01, Users01 } from "@untitledui/icons";
import { Tabs } from "untitledui-vite-starter-kit";

export const Underline = () => (
    <Tabs defaultSelectedKey="overview" className="w-full max-w-xl">
        <Tabs.List type="underline" size="md">
            <Tabs.Item id="overview">Overview</Tabs.Item>
            <Tabs.Item id="members" badge={16}>
                Members
            </Tabs.Item>
            <Tabs.Item id="usage">Usage</Tabs.Item>
            <Tabs.Item id="billing">Billing</Tabs.Item>
        </Tabs.List>
        <Tabs.Panel id="overview" className="pt-4 text-sm text-tertiary">
            Your workspace used 68% of its monthly quota.
        </Tabs.Panel>
    </Tabs>
);

export const ButtonTypes = () => (
    <div className="flex flex-col gap-5">
        <Tabs defaultSelectedKey="week" className="w-max">
            <Tabs.List type="button-brand">
                <Tabs.Item id="day">Today</Tabs.Item>
                <Tabs.Item id="week">This week</Tabs.Item>
                <Tabs.Item id="month">This month</Tabs.Item>
            </Tabs.List>
        </Tabs>
        <Tabs defaultSelectedKey="week" className="w-max">
            <Tabs.List type="button-gray">
                <Tabs.Item id="day">Today</Tabs.Item>
                <Tabs.Item id="week">This week</Tabs.Item>
                <Tabs.Item id="month">This month</Tabs.Item>
            </Tabs.List>
        </Tabs>
        <Tabs defaultSelectedKey="week" className="w-max">
            <Tabs.List type="button-border">
                <Tabs.Item id="day">Today</Tabs.Item>
                <Tabs.Item id="week">This week</Tabs.Item>
                <Tabs.Item id="month">This month</Tabs.Item>
            </Tabs.List>
        </Tabs>
        <Tabs defaultSelectedKey="week" className="w-max">
            <Tabs.List type="button-minimal">
                <Tabs.Item id="day">Today</Tabs.Item>
                <Tabs.Item id="week">This week</Tabs.Item>
                <Tabs.Item id="month">This month</Tabs.Item>
            </Tabs.List>
        </Tabs>
    </div>
);

export const WithIcons = () => (
    <Tabs defaultSelectedKey="dashboard">
        <Tabs.List type="button-brand" size="md">
            <Tabs.Item id="dashboard" icon={Home01}>
                Dashboard
            </Tabs.Item>
            <Tabs.Item id="reports" icon={BarChart01}>
                Reports
            </Tabs.Item>
            <Tabs.Item id="team" icon={Users01}>
                Team
            </Tabs.Item>
            <Tabs.Item id="settings" icon={Settings01}>
                Settings
            </Tabs.Item>
        </Tabs.List>
    </Tabs>
);

export const Vertical = () => (
    <Tabs orientation="vertical" defaultSelectedKey="profile">
        <Tabs.List type="line" orientation="vertical">
            <Tabs.Item id="profile">My details</Tabs.Item>
            <Tabs.Item id="password">Password</Tabs.Item>
            <Tabs.Item id="team">Team</Tabs.Item>
            <Tabs.Item id="plan">Plan</Tabs.Item>
        </Tabs.List>
    </Tabs>
);
