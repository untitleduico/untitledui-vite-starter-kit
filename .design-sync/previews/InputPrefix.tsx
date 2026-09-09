import { InputBase, InputGroup, InputPrefix } from "untitledui-vite-starter-kit";

/**
 * `InputPrefix` is the bordered addon that sits beside an input. It is exposed as
 * `InputGroup.Prefix` and gets its rounding from the `leading`/`trailing` position.
 */
export const Default = () => (
    <div className="w-80">
        <InputGroup label="Website" leadingAddon={<InputPrefix>https://</InputPrefix>}>
            <InputBase placeholder="www.untitledui.com" />
        </InputGroup>
    </div>
);

/** A leading addon rounds its left edge; a trailing addon rounds its right. */
export const Positions = () => (
    <div className="flex w-80 flex-col gap-4">
        <InputGroup label="Website" leadingAddon={<InputPrefix>https://</InputPrefix>}>
            <InputBase placeholder="www.untitledui.com" />
        </InputGroup>
        <InputGroup label="Email" trailingAddon={<InputPrefix>@untitledui.com</InputPrefix>}>
            <InputBase placeholder="olivia" />
        </InputGroup>
    </div>
);

/** The addon picks up the size of the `InputGroup` it sits in. */
export const Sizes = () => (
    <div className="flex w-80 flex-col gap-4">
        <InputGroup size="sm" label="Small" leadingAddon={<InputPrefix>https://</InputPrefix>}>
            <InputBase placeholder="www.untitledui.com" />
        </InputGroup>
        <InputGroup size="lg" label="Large" leadingAddon={<InputPrefix>https://</InputPrefix>}>
            <InputBase placeholder="www.untitledui.com" />
        </InputGroup>
    </div>
);

/** Standalone, it is just a bordered label chip. */
export const Standalone = () => (
    <div className="flex items-center gap-4">
        <InputPrefix className="rounded-lg">https://</InputPrefix>
        <InputPrefix className="rounded-lg">USD</InputPrefix>
    </div>
);
