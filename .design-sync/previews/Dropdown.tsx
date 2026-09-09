import { ChevronDown, Copy01, Download01, Settings01, Trash01, User01 } from "@untitledui/icons";
import { Button, Dropdown } from "untitledui-vite-starter-kit";

export const OpenMenu = () => (
    <div className="flex h-72 justify-center">
        <Dropdown.Root isOpen>
            <Button color="secondary" iconTrailing={ChevronDown}>
                Actions
            </Button>
            <Dropdown.Popover placement="bottom">
                <Dropdown.Menu>
                    <Dropdown.Item icon={User01} addon="⌘P">
                        View profile
                    </Dropdown.Item>
                    <Dropdown.Item icon={Copy01} addon="⌘D">
                        Duplicate
                    </Dropdown.Item>
                    <Dropdown.Item icon={Download01}>Export as CSV</Dropdown.Item>
                    <Dropdown.Separator />
                    <Dropdown.Item icon={Trash01}>Delete project</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown.Root>
    </div>
);

export const SelectableSection = () => (
    <div className="flex h-72 justify-center">
        <Dropdown.Root isOpen>
            <Button color="secondary" iconTrailing={ChevronDown}>
                Sort by
            </Button>
            <Dropdown.Popover placement="bottom">
                <Dropdown.Menu>
                    <Dropdown.Section selectionMode="single" selectedKeys={["newest"]}>
                        <Dropdown.SectionHeader className="px-4 pt-1.5 pb-0.5 text-xs font-semibold text-brand-secondary">Order</Dropdown.SectionHeader>
                        <Dropdown.Item id="newest">Newest first</Dropdown.Item>
                        <Dropdown.Item id="oldest">Oldest first</Dropdown.Item>
                        <Dropdown.Item id="name">Name A–Z</Dropdown.Item>
                    </Dropdown.Section>
                    <Dropdown.Separator />
                    <Dropdown.Item icon={Settings01}>Sort settings</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown.Root>
    </div>
);

export const Triggers = () => (
    <div className="flex items-center gap-6">
        <Dropdown.Root>
            <Button color="secondary" iconTrailing={ChevronDown}>
                Actions
            </Button>
            <Dropdown.Popover>
                <Dropdown.Menu>
                    <Dropdown.Item>Rename</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown.Root>

        <Dropdown.Root>
            <Dropdown.DotsButton />
            <Dropdown.Popover>
                <Dropdown.Menu>
                    <Dropdown.Item>Rename</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown.Root>
    </div>
);
