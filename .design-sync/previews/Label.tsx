import { Label } from "untitledui-vite-starter-kit";

export const Default = () => <Label>Email address</Label>;

/** `isRequired` appends the required asterisk. */
export const Required = () => <Label isRequired>Work email</Label>;

/** A `tooltip` renders a help icon after the label text. */
export const WithTooltip = () => (
    <Label tooltip="We use this to send billing receipts." tooltipDescription="You can change it at any time in Settings.">
        Billing email
    </Label>
);
