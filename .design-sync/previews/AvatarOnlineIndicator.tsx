import { Avatar, AvatarOnlineIndicator } from "untitledui-vite-starter-kit";

const olivia = "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80";

/** The indicator is absolutely positioned, so it must sit inside a `relative` parent - normally an Avatar. */
export const OnAvatar = () => (
    <div className="flex items-center gap-5">
        <div className="relative inline-flex">
            <Avatar size="lg" src={olivia} alt="Olivia Rhye" />
            <AvatarOnlineIndicator size="lg" status="online" />
        </div>
        <div className="relative inline-flex">
            <Avatar size="lg" src={olivia} alt="Olivia Rhye" />
            <AvatarOnlineIndicator size="lg" status="offline" />
        </div>
    </div>
);

export const Sizes = () => (
    <div className="flex items-end gap-6">
        {(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map((size) => (
            <div key={size} className="relative flex size-10 items-center justify-center rounded-full bg-tertiary">
                <AvatarOnlineIndicator size={size} status="online" />
            </div>
        ))}
    </div>
);
