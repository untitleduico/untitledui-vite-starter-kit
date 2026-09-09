import { Avatar, AvatarCount } from "untitledui-vite-starter-kit";

const olivia = "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80";

/** AvatarCount is absolutely positioned, so it must sit inside a `relative` parent - normally an Avatar. */
export const OnAvatar = () => (
    <div className="flex items-center gap-5">
        <div className="relative inline-flex">
            <Avatar size="lg" src={olivia} alt="Olivia Rhye" />
            <AvatarCount count={3} />
        </div>
        <div className="relative inline-flex">
            <Avatar size="lg" initials="PB" />
            <AvatarCount count={12} />
        </div>
    </div>
);
