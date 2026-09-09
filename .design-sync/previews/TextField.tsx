import { Mail01, SearchLg } from "@untitledui/icons";
import { HintText, InputBase, Label, TextField } from "untitledui-vite-starter-kit";

/**
 * The unstyled field wrapper: it owns validation state and passes `size` down to
 * `InputBase` through context. `Input` is the batteries-included version.
 */
export const Default = () => (
    <div className="w-96">
        <TextField>
            <Label>Email address</Label>
            <InputBase icon={Mail01} placeholder="olivia@untitledui.com" />
            <HintText>We'll only use this to send receipts.</HintText>
        </TextField>
    </div>
);

/** `size` set on the field flows to the nested `InputBase`. */
export const Sizes = () => (
    <div className="flex w-96 flex-col gap-4">
        <TextField size="sm">
            <Label>Small</Label>
            <InputBase icon={SearchLg} placeholder="Search projects" />
        </TextField>
        <TextField size="md">
            <Label>Medium</Label>
            <InputBase icon={SearchLg} placeholder="Search projects" />
        </TextField>
        <TextField size="lg">
            <Label>Large</Label>
            <InputBase icon={SearchLg} placeholder="Search projects" />
        </TextField>
    </div>
);

export const States = () => (
    <div className="flex w-96 flex-col gap-5">
        <TextField isRequired defaultValue="Untitled UI">
            <Label isRequired>Workspace name</Label>
            <InputBase />
        </TextField>
        <TextField isInvalid defaultValue="olivia@untitled">
            <Label isInvalid>Email address</Label>
            <InputBase icon={Mail01} />
            <HintText isInvalid>This is not a valid email address.</HintText>
        </TextField>
        <TextField isDisabled defaultValue="billing@untitledui.com">
            <Label>Billing email</Label>
            <InputBase icon={Mail01} />
        </TextField>
    </div>
);
