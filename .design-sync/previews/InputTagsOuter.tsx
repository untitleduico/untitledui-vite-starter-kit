import { InputTagsOuter } from "untitledui-vite-starter-kit";

/** Same API as `InputTags`, but the tags render below the input instead of inside it. */
export const Default = () => (
    <div className="w-96">
        <InputTagsOuter
            label="Recipients"
            value={["olivia@untitledui.com", "phoenix@untitledui.com", "lana@untitledui.com"]}
            placeholder="Add an email address"
        />
    </div>
);

/** The hint only shows while no tags have been added yet. */
export const Empty = () => (
    <div className="w-96">
        <InputTagsOuter label="Recipients" placeholder="Add an email address" hint="Press Enter after each address." />
    </div>
);

export const Sizes = () => (
    <div className="flex w-96 flex-col gap-6">
        <InputTagsOuter size="sm" label="Small" value={["Design", "Research"]} />
        <InputTagsOuter size="md" label="Medium" value={["Design", "Research"]} />
        <InputTagsOuter size="lg" label="Large" value={["Design", "Research"]} />
    </div>
);

export const States = () => (
    <div className="flex w-96 flex-col gap-6">
        <InputTagsOuter isRequired label="Recipients" placeholder="Add an email address" />
        <InputTagsOuter isInvalid label="Recipients" placeholder="Add an email address" hint="Enter at least one recipient." />
        <InputTagsOuter isDisabled label="Recipients" value={["olivia@untitledui.com"]} />
    </div>
);
