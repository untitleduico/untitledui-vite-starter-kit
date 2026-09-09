import { type ReactNode, useEffect, useRef } from "react";
import { Table, TableCard, TableRowActionsDropdown } from "untitledui-vite-starter-kit";

/** Opens the menu with a real pointer sequence so the popover is in the static shot. */
const Opened = ({ children }: { children: ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const id = setTimeout(() => {
            const trigger = ref.current?.querySelector("button");
            if (!trigger) return;
            for (const type of ["pointerdown", "pointerup", "click"] as const) {
                trigger.dispatchEvent(new PointerEvent(type, { bubbles: true, pointerType: "mouse", detail: 1 }));
            }
        }, 0);
        return () => clearTimeout(id);
    }, []);
    return <div ref={ref}>{children}</div>;
};

const files = [
    { id: "1", name: "Brand guidelines.pdf", owner: "Olivia Rhye", updated: "22 Jan 2025" },
    { id: "2", name: "Q3 roadmap.fig", owner: "Phoenix Baker", updated: "18 Jan 2025" },
    { id: "3", name: "Pricing experiments.xlsx", owner: "Lana Steiner", updated: "11 Jan 2025" },
];

/** The standard trailing actions cell: a dots button opening Edit / Copy link / Delete. */
export const InTableRows = () => (
    <TableCard.Root>
        <TableCard.Header title="Shared files" description="Every row ends in the same actions menu." />
        <Table aria-label="Shared files">
            <Table.Header>
                <Table.Head id="name" label="File name" isRowHeader />
                <Table.Head id="owner" label="Owner" />
                <Table.Head id="updated" label="Last updated" />
                <Table.Head id="actions" />
            </Table.Header>
            <Table.Body items={files}>
                {(row) => (
                    <Table.Row id={row.id}>
                        <Table.Cell className="font-medium text-primary">{row.name}</Table.Cell>
                        <Table.Cell>{row.owner}</Table.Cell>
                        <Table.Cell>{row.updated}</Table.Cell>
                        <Table.Cell className="px-4">
                            <TableRowActionsDropdown />
                        </Table.Cell>
                    </Table.Row>
                )}
            </Table.Body>
        </Table>
    </TableCard.Root>
);

/** The same menu, opened. It takes no props — the three items are fixed. */
export const OpenMenu = () => (
    <Opened>
        <div className="flex h-72 items-start justify-center pt-4">
            <TableRowActionsDropdown />
        </div>
    </Opened>
);
