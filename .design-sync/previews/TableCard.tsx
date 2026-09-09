import { Badge, Button, Table, TableCard } from "untitledui-vite-starter-kit";

const members = [
    { id: "1", name: "Olivia Rhye", email: "olivia@untitledui.com", role: "Owner", status: "Active" },
    { id: "2", name: "Phoenix Baker", email: "phoenix@untitledui.com", role: "Admin", status: "Active" },
    { id: "3", name: "Lana Steiner", email: "lana@untitledui.com", role: "Member", status: "Invited" },
];

/** The card shell around a table: a rounded, ringed surface plus a header slot. */
export const Default = () => (
    <TableCard.Root>
        <TableCard.Header
            title="Team members"
            badge="3 users"
            description="Manage who has access to this workspace."
            contentTrailing={
                <Button size="sm" color="secondary">
                    Invite
                </Button>
            }
        />
        <Table aria-label="Team members">
            <Table.Header>
                <Table.Head id="name" label="Name" isRowHeader />
                <Table.Head id="email" label="Email" />
                <Table.Head id="role" label="Role" />
                <Table.Head id="status" label="Status" />
            </Table.Header>
            <Table.Body items={members}>
                {(row) => (
                    <Table.Row id={row.id}>
                        <Table.Cell className="font-medium text-primary">{row.name}</Table.Cell>
                        <Table.Cell>{row.email}</Table.Cell>
                        <Table.Cell>{row.role}</Table.Cell>
                        <Table.Cell>
                            <Badge size="sm" type="pill-color" color={row.status === "Active" ? "success" : "gray"}>
                                {row.status}
                            </Badge>
                        </Table.Cell>
                    </Table.Row>
                )}
            </Table.Body>
        </Table>
    </TableCard.Root>
);

/** `size="sm"` on the root tightens the header padding and is inherited by the table. */
export const Small = () => (
    <TableCard.Root size="sm">
        <TableCard.Header title="Recent activity" description="Last 24 hours." />
        <Table aria-label="Recent activity">
            <Table.Header>
                <Table.Head id="event" label="Event" isRowHeader />
                <Table.Head id="actor" label="Actor" />
                <Table.Head id="time" label="Time" />
            </Table.Header>
            <Table.Body
                items={[
                    { id: "1", event: "Deployed v2.4.1", actor: "Demi Wilkinson", time: "09:24" },
                    { id: "2", event: "Merged #1842", actor: "Candice Wu", time: "08:51" },
                    { id: "3", event: "Invited 2 members", actor: "Olivia Rhye", time: "08:02" },
                ]}
            >
                {(row) => (
                    <Table.Row id={row.id}>
                        <Table.Cell className="font-medium text-primary">{row.event}</Table.Cell>
                        <Table.Cell>{row.actor}</Table.Cell>
                        <Table.Cell>{row.time}</Table.Cell>
                    </Table.Row>
                )}
            </Table.Body>
        </Table>
    </TableCard.Root>
);

/** A `ReactNode` badge is used as-is; a string is wrapped in a gray modern badge. */
export const HeaderOnly = () => (
    <TableCard.Root>
        <TableCard.Header
            title="Invoices"
            badge={<Badge size="sm" type="pill-color" color="warning">2 overdue</Badge>}
            description="Billing history for the Untitled UI workspace."
            contentTrailing={
                <div className="flex gap-3">
                    <Button size="sm" color="secondary">
                        Export
                    </Button>
                    <Button size="sm">New invoice</Button>
                </div>
            }
        />
    </TableCard.Root>
);
