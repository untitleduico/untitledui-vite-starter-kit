import { Mail01, SearchLg } from "@untitledui/icons";
import { Input } from "untitledui-vite-starter-kit";

export const Default = () => (
    <div className="w-80">
        <Input label="Email" placeholder="olivia@untitledui.com" hint="We'll never share your email." />
    </div>
);

export const WithIcon = () => (
    <div className="flex w-80 flex-col gap-4">
        <Input icon={Mail01} label="Email" placeholder="olivia@untitledui.com" />
        <Input icon={SearchLg} placeholder="Search" />
    </div>
);

export const Sizes = () => (
    <div className="flex w-80 flex-col gap-4">
        <Input size="sm" label="Small" placeholder="olivia@untitledui.com" />
        <Input size="md" label="Medium" placeholder="olivia@untitledui.com" />
        <Input size="lg" label="Large" placeholder="olivia@untitledui.com" />
    </div>
);

export const Validation = () => (
    <div className="flex w-80 flex-col gap-4">
        <Input isRequired label="Work email" placeholder="olivia@untitledui.com" />
        <Input isInvalid label="Email" value="olivia@untitled" hint="Please enter a valid email address." />
        <Input isDisabled label="Email" value="olivia@untitledui.com" />
    </div>
);
