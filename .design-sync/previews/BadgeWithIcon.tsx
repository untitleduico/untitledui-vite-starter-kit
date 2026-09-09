import { ArrowUp, Check, TrendUp01, Zap } from "@untitledui/icons";
import { BadgeWithIcon } from "untitledui-vite-starter-kit";

export const LeadingAndTrailing = () => (
    <div className="flex flex-wrap items-center gap-3">
        <BadgeWithIcon iconLeading={Check} color="success">Verified</BadgeWithIcon>
        <BadgeWithIcon iconTrailing={ArrowUp} color="success">12%</BadgeWithIcon>
    </div>
);

export const Types = () => (
    <div className="flex flex-wrap items-center gap-3">
        <BadgeWithIcon type="pill-color" color="brand" iconLeading={Zap}>Pro plan</BadgeWithIcon>
        <BadgeWithIcon type="color" color="brand" iconLeading={Zap}>Pro plan</BadgeWithIcon>
        <BadgeWithIcon type="modern" iconLeading={Zap}>Pro plan</BadgeWithIcon>
    </div>
);

export const Sizes = () => (
    <div className="flex flex-wrap items-center gap-3">
        <BadgeWithIcon size="sm" color="success" iconLeading={TrendUp01}>+8.2%</BadgeWithIcon>
        <BadgeWithIcon size="md" color="success" iconLeading={TrendUp01}>+8.2%</BadgeWithIcon>
        <BadgeWithIcon size="lg" color="success" iconLeading={TrendUp01}>+8.2%</BadgeWithIcon>
    </div>
);

export const Colors = () => (
    <div className="flex flex-wrap items-center gap-2">
        {(["gray", "brand", "error", "warning", "success", "blue", "indigo", "purple", "pink", "orange"] as const).map((color) => (
            <BadgeWithIcon key={color} color={color} iconLeading={Zap}>
                {color}
            </BadgeWithIcon>
        ))}
    </div>
);
