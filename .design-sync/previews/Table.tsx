import { Badge, Button, Table, TableCard } from "untitledui-vite-starter-kit";

const invoices = [
    { id: "1", invoice: "Invoice #007", status: "Paid", customer: "Olivia Rhye", amount: "$1,200.00" },
    { id: "2", invoice: "Invoice #006", status: "Paid", customer: "Phoenix Baker", amount: "$980.00" },
    { id: "3", invoice: "Invoice #005", status: "Pending", customer: "Lana Steiner", amount: "$2,400.00" },
    { id: "4", invoice: "Invoice #004", status: "Failed", customer: "Demi Wilkinson", amount: "$640.00" },
];

const tone = { Paid: "success", Pending: "warning", Failed: "error" } as const;

export const InvoiceTable = () => (
    <TableCard.Root>
        <TableCard.Header
            title="Invoices"
            badge="4 invoices"
            description="Recent billing activity for this workspace."
            contentTrailing={
                <Button size="sm" color="secondary">
                    Export
                </Button>
            }
        />
        <Table aria-label="Invoices">
            <Table.Header>
                <Table.Head id="invoice" label="Invoice" isRowHeader />
                <Table.Head id="customer" label="Customer" />
                <Table.Head id="status" label="Status" />
                <Table.Head id="amount" label="Amount" />
            </Table.Header>
            <Table.Body items={invoices}>
                {(row) => (
                    <Table.Row id={row.id}>
                        <Table.Cell className="font-medium text-primary">{row.invoice}</Table.Cell>
                        <Table.Cell>{row.customer}</Table.Cell>
                        <Table.Cell>
                            <Badge size="sm" type="pill-color" color={tone[row.status as keyof typeof tone]}>
                                {row.status}
                            </Badge>
                        </Table.Cell>
                        <Table.Cell>{row.amount}</Table.Cell>
                    </Table.Row>
                )}
            </Table.Body>
        </Table>
    </TableCard.Root>
);
