import { ArrowRight } from "@untitledui/icons";
import { BadgeGroup } from "untitledui-vite-starter-kit";

export const Themes = () => (
    <div className="flex flex-wrap items-center gap-3">
        <BadgeGroup theme="light" color="brand" addonText="New">
            Usage analytics are live
        </BadgeGroup>
        <BadgeGroup theme="modern" color="brand" addonText="New">
            Usage analytics are live
        </BadgeGroup>
    </div>
);

export const Colors = () => (
    <div className="flex flex-wrap items-center gap-3">
        {(["gray", "brand", "error", "warning", "success"] as const).map((color) => (
            <BadgeGroup key={color} color={color} addonText="v4.2">
                Now available
            </BadgeGroup>
        ))}
    </div>
);

export const Alignment = () => (
    <div className="flex flex-wrap items-center gap-3">
        <BadgeGroup align="leading" color="brand" addonText="New feature">
            Check it out
        </BadgeGroup>
        <BadgeGroup align="trailing" color="brand" addonText="New feature">
            Check it out
        </BadgeGroup>
    </div>
);

export const WithTrailingIcon = () => (
    <div className="flex flex-wrap items-center gap-3">
        <BadgeGroup size="md" color="brand" addonText="New" iconTrailing={ArrowRight}>
            Read the changelog
        </BadgeGroup>
        <BadgeGroup size="lg" theme="modern" color="gray" addonText="New" iconTrailing={ArrowRight}>
            Read the changelog
        </BadgeGroup>
    </div>
);
