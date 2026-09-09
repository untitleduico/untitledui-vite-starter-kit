import { Tag, TagGroup, TagList } from "untitledui-vite-starter-kit";

const teams = [
    { id: "design", label: "Design" },
    { id: "engineering", label: "Engineering" },
    { id: "marketing", label: "Marketing" },
    { id: "sales", label: "Sales" },
];

/** The group owns `size` and `selectionMode` and hands them to every `Tag` through context. */
export const Default = () => (
    <TagGroup label="Teams">
        <TagList className="flex flex-wrap gap-2">
            {teams.map((team) => (
                <Tag key={team.id} id={team.id}>
                    {team.label}
                </Tag>
            ))}
        </TagList>
    </TagGroup>
);

/** `selectionMode="single"` shows a checkbox in each tag and disallows an empty selection. */
export const SingleSelection = () => (
    <TagGroup label="Teams" selectionMode="single" defaultSelectedKeys={["engineering"]}>
        <TagList className="flex flex-wrap gap-2">
            {teams.map((team) => (
                <Tag key={team.id} id={team.id}>
                    {team.label}
                </Tag>
            ))}
        </TagList>
    </TagGroup>
);

export const MultipleSelection = () => (
    <TagGroup label="Teams" size="md" selectionMode="multiple" defaultSelectedKeys={["design", "marketing"]}>
        <TagList className="flex flex-wrap gap-2">
            {teams.map((team) => (
                <Tag key={team.id} id={team.id}>
                    {team.label}
                </Tag>
            ))}
        </TagList>
    </TagGroup>
);

export const Sizes = () => (
    <div className="flex flex-col items-start gap-3">
        {(["sm", "md", "lg"] as const).map((size) => (
            <TagGroup key={size} label={`Teams, ${size}`} size={size}>
                <TagList className="flex flex-wrap gap-2">
                    {teams.slice(0, 3).map((team) => (
                        <Tag key={team.id} id={team.id}>
                            {team.label}
                        </Tag>
                    ))}
                </TagList>
            </TagGroup>
        ))}
    </div>
);
