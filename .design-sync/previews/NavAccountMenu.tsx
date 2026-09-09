import { NavAccountMenu } from "untitledui-vite-starter-kit";

export const Default = () => (
    <div className="flex justify-center py-4">
        <NavAccountMenu selectedAccountId="caitlyn" />
    </div>
);

export const OtherAccountSelected = () => (
    <div className="flex justify-center py-4">
        <NavAccountMenu selectedAccountId="sienna" />
    </div>
);
