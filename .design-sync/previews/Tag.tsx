import { Tag, TagGroup, TagList } from "untitledui-vite-starter-kit";

const labels = [
    { id: "design", label: "Design" },
    { id: "research", label: "Research" },
    { id: "engineering", label: "Engineering" },
];

export const Default = () => (
    <TagGroup label="Project labels">
        <TagList className="flex flex-wrap gap-2">
            {labels.map((item) => (
                <Tag key={item.id} id={item.id}>
                    {item.label}
                </Tag>
            ))}
        </TagList>
    </TagGroup>
);

/** A tag can lead with a status dot or an avatar, and trail with a count or a remove button. */
export const LeadingAndTrailing = () => (
    <TagGroup label="Filters">
        <TagList className="flex flex-wrap gap-2">
            <Tag id="online" dot>
                Online
            </Tag>
            <Tag id="failed" dot dotClassName="text-fg-error-secondary">
                Failed
            </Tag>
            <Tag id="olivia" avatarSrc="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80">
                Olivia Rhye
            </Tag>
            <Tag id="open" count={24}>
                Open issues
            </Tag>
            <Tag id="beta" onClose={() => {}}>
                Beta
            </Tag>
        </TagList>
    </TagGroup>
);

export const Sizes = () => (
    <div className="flex flex-col items-start gap-3">
        {(["sm", "md", "lg"] as const).map((size) => (
            <TagGroup key={size} label={`Labels, ${size}`} size={size}>
                <TagList className="flex flex-wrap gap-2">
                    <Tag id="design" count={12}>
                        Design
                    </Tag>
                    <Tag id="olivia" avatarSrc="https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80">
                        Phoenix Baker
                    </Tag>
                    <Tag id="beta" onClose={() => {}}>
                        Beta
                    </Tag>
                </TagList>
            </TagGroup>
        ))}
    </div>
);

/** Inside a selectable group each tag grows a checkbox and a selected state. */
export const Selectable = () => (
    <TagGroup label="Plan features" size="md" selectionMode="multiple" defaultSelectedKeys={["sso", "audit"]}>
        <TagList className="flex flex-wrap gap-2">
            <Tag id="sso">SSO</Tag>
            <Tag id="audit">Audit log</Tag>
            <Tag id="scim">SCIM provisioning</Tag>
        </TagList>
    </TagGroup>
);
