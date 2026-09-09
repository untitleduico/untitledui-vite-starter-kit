import { Toggle } from "untitledui-vite-starter-kit";

export const Sizes = () => (
    <div className="flex flex-col gap-4">
        <Toggle size="sm" label="Weekly digest" defaultSelected />
        <Toggle size="md" label="Weekly digest" defaultSelected />
    </div>
);

export const WithHint = () => (
    <div className="flex w-80 flex-col gap-4">
        <Toggle size="md" label="Two-factor authentication" hint="Require a one-time code at every sign in." defaultSelected />
        <Toggle size="md" label="Public profile" hint="Anyone with the link can view your profile." />
    </div>
);

export const States = () => (
    <div className="flex flex-col gap-4">
        <Toggle label="On" isSelected />
        <Toggle label="Off" isSelected={false} />
        <Toggle label="Disabled" isDisabled />
        <Toggle label="Disabled and on" isDisabled isSelected />
        <Toggle slim label="Slim track" isSelected />
    </div>
);
