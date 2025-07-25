import { PaginationPageMinimalCenter } from "@/components/application/pagination/pagination";
import { Table, TableCard, TableRowActionsDropdown } from "@/components/application/table/table";
import teamMembers from "@/components/application/table/team-members.json";
import { Avatar } from "@/components/base/avatar/avatar";
import type { BadgeTypes } from "@/components/base/badges/badge-types";
import { Badge, BadgeWithDot, type BadgeColor } from "@/components/base/badges/badges";
import { ButtonUtility } from "@/components/base/buttons/button-utility";
import { Edit01, Trash01 } from "@untitledui/icons";
import { useMemo, useState } from "react";
import type { SortDescriptor } from "react-aria-components";

export const Table01DividerLine = () => {
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "status",
        direction: "ascending",
    });

    const sortedItems = useMemo(() => {
        return teamMembers.items.sort((a, b) => {
            const first = a[sortDescriptor.column as keyof typeof a];
            const second = b[sortDescriptor.column as keyof typeof b];

            // Compare numbers or booleans
            if ((typeof first === "number" && typeof second === "number") || (typeof first === "boolean" && typeof second === "boolean")) {
                return sortDescriptor.direction === "descending" ? second - first : first - second;
            }

            // Compare strings
            if (typeof first === "string" && typeof second === "string") {
                let cmp = first.localeCompare(second);
                if (sortDescriptor.direction === "descending") {
                    cmp *= -1;
                }
                return cmp;
            }

            return 0;
        }).map((item, index) => ({...item, id:index}))
    }, [sortDescriptor]);

    return (
        <TableCard.Root>
            <TableCard.Header
                title="Team members"
                badge="100 users"
                contentTrailing={
                    <div className="absolute top-5 right-4 md:right-6">
                        <TableRowActionsDropdown />
                    </div>
                }
            />
            <Table aria-label="Team members" selectionMode="multiple" sortDescriptor={sortDescriptor} onSortChange={setSortDescriptor}>
                <Table.Header>
                    <Table.Head id="name" label="Name" isRowHeader allowsSorting className="w-full max-w-1/4" />
                    <Table.Head id="status" label="Status" allowsSorting />
                    <Table.Head id="role" label="Role" allowsSorting tooltip="This is a tooltip" />
                    <Table.Head id="email" label="Email address" allowsSorting className="md:hidden xl:table-cell" />
                    <Table.Head id="teams" label="Teams" />
                    <Table.Head id="actions" />
                </Table.Header>

                <Table.Body items={sortedItems}>
                    {(item) => (
                        <Table.Row id={item.username+item.id}>
                            <Table.Cell>
                                <div className="flex items-center gap-3">
                                    <Avatar src={item.avatarUrl} alt={item.name} size="md" />
                                    <div className="whitespace-nowrap">
                                        <p className="text-sm font-medium text-primary">{item.name}</p>
                                        <p className="text-sm text-tertiary">{item.username}</p>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <BadgeWithDot size="sm" color={item.status === "active" ? "success" : "gray"} type="modern">
                                    {item.status === "active" ? "Active" : "Inactive"}
                                </BadgeWithDot>
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap">{item.role}</Table.Cell>
                            <Table.Cell className="whitespace-nowrap md:hidden xl:table-cell">{item.email}</Table.Cell>
                            <Table.Cell>
                                <div className="flex gap-1">
                                    {item.teams.slice(0, 3).map((team) => (
                                        <Badge key={team.name} color={team.color as BadgeColor<BadgeTypes>} size="sm">
                                            {team.name}
                                        </Badge>
                                    ))}

                                    {item.teams.length > 3 && (
                                        <Badge color="gray" size="sm">
                                            +{item.teams.length - 3}
                                        </Badge>
                                    )}
                                </div>
                            </Table.Cell>
                            <Table.Cell className="px-4">
                                <div className="flex justify-end gap-0.5">
                                    <ButtonUtility size="xs" color="tertiary" tooltip="Delete" icon={Trash01} />
                                    <ButtonUtility size="xs" color="tertiary" tooltip="Edit" icon={Edit01} />
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>

            <PaginationPageMinimalCenter page={1} total={10} className="px-4 py-3 md:px-6 md:pt-3 md:pb-4" />
        </TableCard.Root>
    );
};

export const HomeScreen = () => {
    return (
       <Table01DividerLine />
    );
};
