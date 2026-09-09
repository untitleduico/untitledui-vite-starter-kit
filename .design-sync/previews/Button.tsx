import { ArrowRight, Check, Plus, Trash01 } from "@untitledui/icons";
import { Button } from "untitledui-vite-starter-kit";

export const Colors = () => (
    <div className="flex flex-wrap items-center gap-3">
        <Button color="primary">Save changes</Button>
        <Button color="secondary">Cancel</Button>
        <Button color="tertiary">Skip for now</Button>
    </div>
);

export const Sizes = () => (
    <div className="flex flex-wrap items-center gap-3">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra large</Button>
    </div>
);

export const WithIcons = () => (
    <div className="flex flex-wrap items-center gap-3">
        <Button iconLeading={Plus}>Add member</Button>
        <Button color="secondary" iconTrailing={ArrowRight}>
            Continue
        </Button>
        <Button color="secondary" iconLeading={Check} />
    </div>
);

export const Destructive = () => (
    <div className="flex flex-wrap items-center gap-3">
        <Button color="primary-destructive" iconLeading={Trash01}>
            Delete project
        </Button>
        <Button color="secondary-destructive">Remove</Button>
    </div>
);

export const States = () => (
    <div className="flex flex-wrap items-center gap-3">
        <Button isLoading showTextWhileLoading>
            Submitting
        </Button>
        <Button isLoading />
        <Button isDisabled>Disabled</Button>
    </div>
);

/** There is no separate Link component - a Button with `href` and a `link-*` color is the link. */
export const AsLink = () => (
    <div className="flex flex-wrap items-center gap-4">
        <Button href="/pricing" color="link-color">
            View pricing
        </Button>
        <Button href="/docs" color="link-gray" iconTrailing={ArrowRight}>
            Read the docs
        </Button>
    </div>
);
