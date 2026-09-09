import { Mail01, SearchLg } from "@untitledui/icons";
import { InputBase, InputGroup, TextField } from "untitledui-vite-starter-kit";

/**
 * `InputBase` is the bordered field itself — the part `Input` renders between its
 * label and hint. Use it directly when you are composing your own field, e.g. inside
 * an `InputGroup`.
 */
export const Default = () => (
    <div className="w-80">
        <InputBase placeholder="olivia@untitledui.com" aria-label="Email" />
    </div>
);

export const Sizes = () => (
    <div className="flex w-80 flex-col gap-4">
        <InputBase size="sm" placeholder="Small" aria-label="Small" />
        <InputBase size="md" placeholder="Medium" aria-label="Medium" />
        <InputBase size="lg" placeholder="Large" aria-label="Large" />
    </div>
);

/** A leading `icon`, a `tooltip` help affordance and a keyboard `shortcut` badge. */
export const WithAffordances = () => (
    <div className="flex w-80 flex-col gap-4">
        <InputBase icon={Mail01} placeholder="olivia@untitledui.com" aria-label="Email" />
        <InputBase icon={Mail01} tooltip="We only use this to send receipts." placeholder="olivia@untitledui.com" aria-label="Email" />
        <InputBase icon={SearchLg} shortcut placeholder="Search invoices" aria-label="Search" />
        <InputBase type="password" defaultValue="correcthorsebattery" aria-label="Password" />
    </div>
);

export const States = () => (
    <div className="flex w-80 flex-col gap-4">
        <InputBase defaultValue="Olivia Rhye" aria-label="Full name" />
        <InputBase isInvalid tooltip="Required" defaultValue="olivia@" aria-label="Email" />
        <InputBase isDisabled placeholder="Locked field" aria-label="Locked" />
    </div>
);

/** Its main job: the field slotted into an `InputGroup` or a bare `TextField`. */
export const InsideAField = () => (
    <div className="flex w-80 flex-col gap-4">
        <InputGroup label="Website" prefix="untitledui.com/" hint="This is your public profile URL.">
            <InputBase placeholder="olivia" />
        </InputGroup>
        <TextField size="lg">
            <InputBase icon={SearchLg} placeholder="Search team members" aria-label="Search team members" />
        </TextField>
    </div>
);
