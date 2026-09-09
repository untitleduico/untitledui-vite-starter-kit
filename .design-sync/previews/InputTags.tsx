import { InputTags } from "untitledui-vite-starter-kit";

/** Tags live inside the input box. */
export const Default = () => (
    <div className="w-96">
        <InputTags label="Team members" value={["Olivia Rhye", "Phoenix Baker"]} placeholder="Add a name" hint="Press Enter to add someone." />
    </div>
);

export const Sizes = () => (
    <div className="flex w-96 flex-col gap-4">
        <InputTags size="sm" label="Small" value={["Design", "Research"]} />
        <InputTags size="md" label="Medium" value={["Design", "Research"]} />
        <InputTags size="lg" label="Large" value={["Design", "Research"]} />
    </div>
);

export const States = () => (
    <div className="flex w-96 flex-col gap-4">
        <InputTags isRequired label="Topics" value={["Product", "Engineering"]} tooltip="Used to route the request to the right team." />
        <InputTags isInvalid label="Topics" value={["Product"]} hint="Add at least two topics." />
        <InputTags isDisabled label="Topics" value={["Product", "Engineering"]} />
    </div>
);
