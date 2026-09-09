import { BarChart01, Home01, Settings01, Users01 } from "@untitledui/icons";
import { NavButton } from "untitledui-vite-starter-kit";

export const WithLabel = () => (
    <div className="flex w-max flex-col gap-1">
        <NavButton icon={Home01} label="Dashboard" href="/" current>
            Dashboard
        </NavButton>
        <NavButton icon={BarChart01} label="Reports" href="/reports">
            Reports
        </NavButton>
        <NavButton icon={Users01} label="Team" href="/team">
            Team
        </NavButton>
    </div>
);

export const IconOnly = () => (
    <div className="flex w-max flex-col gap-1 rounded-xl p-2 ring-1 ring-secondary">
        <NavButton icon={Home01} label="Dashboard" href="/" current />
        <NavButton icon={BarChart01} label="Reports" href="/reports" />
        <NavButton icon={Users01} label="Team" href="/team" />
        <NavButton icon={Settings01} label="Settings" href="/settings" />
    </div>
);
