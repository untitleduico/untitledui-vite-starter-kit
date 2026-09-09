import { User01 } from "@untitledui/icons";
import { Avatar } from "untitledui-vite-starter-kit";

const olivia = "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80";

export const Sizes = () => (
    <div className="flex flex-wrap items-end gap-4">
        <Avatar size="xs" src={olivia} alt="Olivia Rhye" />
        <Avatar size="sm" src={olivia} alt="Olivia Rhye" />
        <Avatar size="md" src={olivia} alt="Olivia Rhye" />
        <Avatar size="lg" src={olivia} alt="Olivia Rhye" />
        <Avatar size="xl" src={olivia} alt="Olivia Rhye" />
        <Avatar size="2xl" src={olivia} alt="Olivia Rhye" />
    </div>
);

export const Fallbacks = () => (
    <div className="flex flex-wrap items-center gap-4">
        <Avatar size="lg" initials="OR" />
        <Avatar size="lg" placeholderIcon={User01} />
        <Avatar size="lg" />
        <Avatar size="lg" rounded={false} initials="PB" />
    </div>
);

export const Indicators = () => (
    <div className="flex flex-wrap items-center gap-5">
        <Avatar size="lg" src={olivia} alt="Olivia Rhye" status="online" />
        <Avatar size="lg" src={olivia} alt="Olivia Rhye" status="offline" />
        <Avatar size="lg" src={olivia} alt="Olivia Rhye" verified />
        <Avatar size="lg" src={olivia} alt="Olivia Rhye" count={8} />
        <Avatar size="lg" src={olivia} alt="Olivia Rhye" border />
    </div>
);
