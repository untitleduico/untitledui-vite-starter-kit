import type { ReactNode } from "react";
import { BarChartSquare02, HomeLine, LifeBuoy01, Settings01, Users01 } from "@untitledui/icons";
import { Badge, NavItemBase } from "untitledui-vite-starter-kit";

const Sidebar = ({ children }: { children: ReactNode }) => (
    <ul className="flex w-72 flex-col gap-0.5 rounded-xl bg-primary p-3 ring-1 ring-secondary">{children}</ul>
);

export const NavList = () => (
    <Sidebar>
        <li>
            <NavItemBase type="link" href="/" icon={HomeLine} current>
                Home
            </NavItemBase>
        </li>
        <li>
            <NavItemBase type="link" href="/dashboard" icon={BarChartSquare02}>
                Dashboard
            </NavItemBase>
        </li>
        <li>
            <NavItemBase type="link" href="/team" icon={Users01} badge={12}>
                Team
            </NavItemBase>
        </li>
        <li>
            <NavItemBase type="link" href="/settings" icon={Settings01}>
                Settings
            </NavItemBase>
        </li>
    </Sidebar>
);

export const WithBadge = () => (
    <Sidebar>
        <li>
            <NavItemBase type="link" href="/inbox" icon={LifeBuoy01} badge={<Badge color="brand" type="pill-color" size="sm">New</Badge>}>
                Support
            </NavItemBase>
        </li>
        <li>
            <NavItemBase type="link" href="/team" icon={Users01} badge={8}>
                Team
            </NavItemBase>
        </li>
    </Sidebar>
);

export const Collapsible = () => (
    <Sidebar>
        <li>
            <details open>
                <NavItemBase type="collapsible" icon={BarChartSquare02} open>
                    Reporting
                </NavItemBase>
                <ul className="flex flex-col gap-0.5">
                    <li>
                        <NavItemBase type="collapsible-child" href="/reports/revenue" current>
                            Revenue
                        </NavItemBase>
                    </li>
                    <li>
                        <NavItemBase type="collapsible-child" href="/reports/retention">
                            Retention
                        </NavItemBase>
                    </li>
                </ul>
            </details>
        </li>
    </Sidebar>
);

export const ExternalLink = () => (
    <Sidebar>
        <li>
            <NavItemBase type="link" href="https://www.untitledui.com/docs" icon={LifeBuoy01}>
                Documentation
            </NavItemBase>
        </li>
    </Sidebar>
);
