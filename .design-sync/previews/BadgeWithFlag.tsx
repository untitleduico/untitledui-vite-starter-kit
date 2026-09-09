import { BadgeWithFlag } from "untitledui-vite-starter-kit";

export const Countries = () => (
    <div className="flex flex-wrap items-center gap-3">
        <BadgeWithFlag flag="AU">Australia</BadgeWithFlag>
        <BadgeWithFlag flag="US" color="blue">United States</BadgeWithFlag>
        <BadgeWithFlag flag="DE" color="warning">Germany</BadgeWithFlag>
        <BadgeWithFlag flag="JP" color="error">Japan</BadgeWithFlag>
    </div>
);

export const Types = () => (
    <div className="flex flex-wrap items-center gap-3">
        <BadgeWithFlag type="pill-color" flag="FR" color="brand">France</BadgeWithFlag>
        <BadgeWithFlag type="color" flag="FR" color="brand">France</BadgeWithFlag>
        <BadgeWithFlag type="modern" flag="FR">France</BadgeWithFlag>
    </div>
);

export const Sizes = () => (
    <div className="flex flex-wrap items-center gap-3">
        <BadgeWithFlag size="sm" flag="GB">United Kingdom</BadgeWithFlag>
        <BadgeWithFlag size="md" flag="GB">United Kingdom</BadgeWithFlag>
        <BadgeWithFlag size="lg" flag="GB">United Kingdom</BadgeWithFlag>
    </div>
);
