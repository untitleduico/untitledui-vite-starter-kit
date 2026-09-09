import { User01 } from "@untitledui/icons";
import { Select } from "untitledui-vite-starter-kit";

const teammates = [
    { id: "olivia", label: "Olivia Rhye", supportingText: "olivia@untitledui.com" },
    { id: "phoenix", label: "Phoenix Baker", supportingText: "phoenix@untitledui.com" },
    { id: "lana", label: "Lana Steiner", supportingText: "lana@untitledui.com" },
    { id: "demi", label: "Demi Wilkinson", supportingText: "demi@untitledui.com", isDisabled: true },
];

export const Default = () => (
    <div className="w-80">
        <Select label="Team member" placeholder="Select a team member" items={teammates} hint="They will be added as an editor.">
            {(item) => (
                <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled}>
                    {item.label}
                </Select.Item>
            )}
        </Select>
    </div>
);

export const Sizes = () => (
    <div className="flex w-80 flex-col gap-4">
        <Select size="sm" label="Small" placeholder="Select a team member" items={teammates}>
            {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
        </Select>
        <Select size="md" label="Medium" placeholder="Select a team member" items={teammates}>
            {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
        </Select>
        <Select size="lg" label="Large" placeholder="Select a team member" items={teammates}>
            {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
        </Select>
    </div>
);

export const States = () => (
    <div className="flex w-80 flex-col gap-4">
        <Select isRequired label="Owner" icon={User01} placeholder="Select an owner" items={teammates}>
            {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
        </Select>
        <Select selectedKey="olivia" label="Owner" items={teammates}>
            {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
        </Select>
        <Select isDisabled label="Owner" placeholder="Select an owner" items={teammates}>
            {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
        </Select>
    </div>
);

export const SearchableComboBox = () => (
    <div className="w-80">
        <Select.ComboBox label="Assign to" placeholder="Search team members" items={teammates}>
            {(item) => (
                <Select.Item id={item.id} supportingText={item.supportingText}>
                    {item.label}
                </Select.Item>
            )}
        </Select.ComboBox>
    </div>
);
