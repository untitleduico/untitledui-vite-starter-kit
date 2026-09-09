import { Avatar, VerifiedTick } from "untitledui-vite-starter-kit";

const olivia = "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80";

export const Sizes = () => (
    <div className="flex items-end gap-4">
        <VerifiedTick size="sm" />
        <VerifiedTick size="md" />
        <VerifiedTick size="lg" />
        <VerifiedTick size="xl" />
        <VerifiedTick size="2xl" />
        <VerifiedTick size="4xl" />
    </div>
);

export const OnAvatar = () => (
    <div className="flex items-center gap-5">
        <div className="relative inline-flex">
            <Avatar size="lg" src={olivia} alt="Olivia Rhye" />
            <VerifiedTick size="lg" className="absolute right-0 bottom-0" />
        </div>
        <div className="flex items-center gap-1.5">
            <p className="text-sm font-semibold text-primary">Olivia Rhye</p>
            <VerifiedTick size="md" />
        </div>
    </div>
);
