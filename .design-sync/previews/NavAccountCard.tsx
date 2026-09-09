import { NavAccountCard } from "untitledui-vite-starter-kit";

export const Default = () => (
    <div className="w-72">
        <NavAccountCard />
    </div>
);

export const SquaredAvatar = () => (
    <div className="w-72">
        <NavAccountCard avatarRounded={false} selectedAccountId="sienna" />
    </div>
);
