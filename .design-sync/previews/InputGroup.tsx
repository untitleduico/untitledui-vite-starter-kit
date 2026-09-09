import { Copy01 } from "@untitledui/icons";
import { Button, InputBase, InputGroup } from "untitledui-vite-starter-kit";

/** `prefix` sits inside the input box, sharing its border. */
export const WithPrefix = () => (
    <div className="w-80">
        <InputGroup label="Website" prefix="untitledui.com/" hint="This is your public profile URL.">
            <InputBase placeholder="olivia" />
        </InputGroup>
    </div>
);

/** Addons are visually separated from the input by their own border. */
export const WithAddons = () => (
    <div className="flex w-96 flex-col gap-4">
        <InputGroup label="Website" leadingAddon={<InputGroup.Prefix>https://</InputGroup.Prefix>}>
            <InputBase placeholder="www.untitledui.com" />
        </InputGroup>
        <InputGroup label="Share link" trailingAddon={<Button color="secondary" iconLeading={Copy01} className="rounded-l-none" />}>
            <InputBase value="untitledui.com/i/8Kf2p" />
        </InputGroup>
    </div>
);
