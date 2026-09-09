import { Avatar, AvatarAddButton } from "untitledui-vite-starter-kit";

const olivia = "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80";
const phoenix = "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80";

export const Sizes = () => (
    <div className="flex items-center gap-4">
        <AvatarAddButton size="xs" />
        <AvatarAddButton size="sm" />
        <AvatarAddButton size="md" />
    </div>
);

export const InAvatarGroup = () => (
    <div className="flex items-center gap-2">
        <Avatar size="md" src={olivia} alt="Olivia Rhye" border />
        <Avatar size="md" src={phoenix} alt="Phoenix Baker" border />
        <Avatar size="md" initials="LS" border />
        <AvatarAddButton size="md" title="Invite a team member" />
    </div>
);
