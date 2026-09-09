import { Tag, TagGroup, TagList } from "untitledui-vite-starter-kit";

const labels = [
    { id: "design", label: "Design" },
    { id: "research", label: "Research" },
    { id: "engineering", label: "Engineering" },
    { id: "marketing", label: "Marketing" },
    { id: "customer-success", label: "Customer success" },
];

/** The collection that lays the tags out. It has no layout of its own — give it a flex/gap class. */
export const Default = () => (
    <TagGroup label="Labels">
        <TagList className="flex flex-wrap gap-2">
            {labels.map((item) => (
                <Tag key={item.id} id={item.id}>
                    {item.label}
                </Tag>
            ))}
        </TagList>
    </TagGroup>
);

/** `items` plus a render function is the collection form. */
export const FromItems = () => (
    <TagGroup label="Labels" size="md">
        <TagList items={labels} className="flex flex-wrap gap-2">
            {(item) => <Tag id={item.id}>{item.label}</Tag>}
        </TagList>
    </TagGroup>
);

/** `onRemove` on the group makes every tag removable and renders its close button. */
export const Removable = () => (
    <TagGroup label="Applied filters" size="md" onRemove={() => {}}>
        <TagList items={labels.slice(0, 3)} className="flex flex-wrap gap-2">
            {(item) => <Tag id={item.id}>{item.label}</Tag>}
        </TagList>
    </TagGroup>
);

export const Stacked = () => (
    <TagGroup label="Labels">
        <TagList className="flex w-40 flex-col items-start gap-2">
            {labels.slice(0, 4).map((item) => (
                <Tag key={item.id} id={item.id}>
                    {item.label}
                </Tag>
            ))}
        </TagList>
    </TagGroup>
);
