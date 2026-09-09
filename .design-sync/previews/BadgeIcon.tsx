import { Check, Plus, Zap } from "@untitledui/icons";
import { BadgeIcon } from "untitledui-vite-starter-kit";

/** `BadgeIcon` is icon-only: it needs an `icon` prop to paint anything. */
export const Default = () => (
    <div className="flex flex-wrap items-center gap-3">
        <BadgeIcon icon={Check} color="success" />
        <BadgeIcon icon={Zap} color="brand" />
        <BadgeIcon icon={Plus} color="gray" />
    </div>
);

export const Types = () => (
    <div className="flex flex-wrap items-center gap-3">
        <BadgeIcon type="pill-color" color="brand" icon={Zap} />
        <BadgeIcon type="color" color="brand" icon={Zap} />
        <BadgeIcon type="modern" icon={Zap} />
    </div>
);

export const Sizes = () => (
    <div className="flex flex-wrap items-center gap-3">
        <BadgeIcon size="sm" color="success" icon={Check} />
        <BadgeIcon size="md" color="success" icon={Check} />
        <BadgeIcon size="lg" color="success" icon={Check} />
    </div>
);

export const Colors = () => (
    <div className="flex flex-wrap items-center gap-2">
        {(["gray", "brand", "error", "warning", "success", "blue", "indigo", "purple", "pink", "orange"] as const).map((color) => (
            <BadgeIcon key={color} color={color} icon={Zap} />
        ))}
    </div>
);
