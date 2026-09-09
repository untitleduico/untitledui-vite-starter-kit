import { BadgeWithDot } from "untitledui-vite-starter-kit";

export const Statuses = () => (
    <div className="flex flex-wrap items-center gap-3">
        <BadgeWithDot color="success">Live</BadgeWithDot>
        <BadgeWithDot color="warning">Degraded</BadgeWithDot>
        <BadgeWithDot color="error">Outage</BadgeWithDot>
        <BadgeWithDot color="gray">Maintenance</BadgeWithDot>
    </div>
);

export const Types = () => (
    <div className="flex flex-wrap items-center gap-3">
        <BadgeWithDot type="pill-color" color="success">Live</BadgeWithDot>
        <BadgeWithDot type="color" color="success">Live</BadgeWithDot>
        <BadgeWithDot type="modern">Live</BadgeWithDot>
    </div>
);

export const Sizes = () => (
    <div className="flex flex-wrap items-center gap-3">
        <BadgeWithDot size="sm" color="brand">Beta</BadgeWithDot>
        <BadgeWithDot size="md" color="brand">Beta</BadgeWithDot>
        <BadgeWithDot size="lg" color="brand">Beta</BadgeWithDot>
    </div>
);

export const Colors = () => (
    <div className="flex flex-wrap items-center gap-2">
        {(["gray", "brand", "error", "warning", "success", "blue", "indigo", "purple", "pink", "orange"] as const).map((color) => (
            <BadgeWithDot key={color} color={color}>
                {color}
            </BadgeWithDot>
        ))}
    </div>
);
