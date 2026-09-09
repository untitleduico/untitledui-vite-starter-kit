import type { ReactNode } from "react";
import { BarChartSquare02, Codepen, LayersTwo01, Zap } from "@untitledui/icons";
import { Badge, Button, NavMenuItemLink } from "untitledui-vite-starter-kit";

const MenuPanel = ({ children }: { children: ReactNode }) => (
    <div className="w-96 rounded-xl bg-primary p-2 shadow-lg ring-1 ring-secondary">{children}</div>
);

export const Default = () => (
    <MenuPanel>
        <NavMenuItemLink href="/products/analytics" icon={BarChartSquare02} title="Analytics" subtitle="Track conversion, retention and revenue in one place." />
        <NavMenuItemLink href="/products/automations" icon={Zap} title="Automations" subtitle="Trigger workflows from any event in your product." />
    </MenuPanel>
);

export const WithBadge = () => (
    <MenuPanel>
        <NavMenuItemLink
            href="/products/design-system"
            icon={LayersTwo01}
            title="Design system"
            subtitle="A shared component library for product and marketing."
            badge={
                <Badge color="brand" type="pill-color" size="sm">
                    New
                </Badge>
            }
        />
    </MenuPanel>
);

export const WithActions = () => (
    <MenuPanel>
        <NavMenuItemLink
            href="/products/integrations"
            icon={Codepen}
            title="Integrations"
            subtitle="Connect Slack, GitHub and Figma to your workspace."
            actionsContent={
                <div className="flex gap-3">
                    <Button color="link-color" size="sm">
                        Browse all
                    </Button>
                    <Button color="link-gray" size="sm">
                        Read the docs
                    </Button>
                </div>
            }
        />
    </MenuPanel>
);
