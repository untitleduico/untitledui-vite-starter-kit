import { Avatar, AvatarCompanyIcon } from "untitledui-vite-starter-kit";

const olivia = "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80";
const logo = "https://www.untitledui.com/logos/images/Sisyphus.jpg?fm=webp&q=80";

/** The company icon is absolutely positioned, so it must sit inside a `relative` parent - normally an Avatar. */
export const OnAvatar = () => (
    <div className="flex items-end gap-6">
        <div className="relative inline-flex">
            <Avatar size="md" src={olivia} alt="Olivia Rhye" />
            <AvatarCompanyIcon size="md" src={logo} alt="Sisyphus" />
        </div>
        <div className="relative inline-flex">
            <Avatar size="lg" src={olivia} alt="Olivia Rhye" />
            <AvatarCompanyIcon size="lg" src={logo} alt="Sisyphus" />
        </div>
        <div className="relative inline-flex">
            <Avatar size="xl" src={olivia} alt="Olivia Rhye" />
            <AvatarCompanyIcon size="xl" src={logo} alt="Sisyphus" />
        </div>
    </div>
);
