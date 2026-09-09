import { Badge } from "untitledui-vite-starter-kit";

export const Types = () => (
    <div className="flex flex-wrap items-center gap-3">
        <Badge type="pill-color" color="success">Paid</Badge>
        <Badge type="color" color="success">Paid</Badge>
        <Badge type="modern">Paid</Badge>
    </div>
);

export const Colors = () => (
    <div className="flex flex-wrap items-center gap-2">
        {(["gray", "brand", "error", "warning", "success", "slate", "sky", "blue", "indigo", "purple", "pink", "orange"] as const).map((color) => (
            <Badge key={color} color={color}>
                {color}
            </Badge>
        ))}
    </div>
);

export const Sizes = () => (
    <div className="flex flex-wrap items-center gap-3">
        <Badge size="sm" color="brand">Enterprise</Badge>
        <Badge size="md" color="brand">Enterprise</Badge>
        <Badge size="lg" color="brand">Enterprise</Badge>
    </div>
);

export const InvoiceStatuses = () => (
    <div className="flex flex-wrap items-center gap-3">
        <Badge color="success">Paid</Badge>
        <Badge color="warning">Pending</Badge>
        <Badge color="error">Overdue</Badge>
        <Badge color="gray">Draft</Badge>
    </div>
);
