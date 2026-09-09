import { AvatarProfilePhoto } from "untitledui-vite-starter-kit";

const sienna = "https://www.untitledui.com/images/avatars/sienna-hewitt?fm=webp&q=80";

export const Sizes = () => (
    <div className="flex flex-wrap items-end gap-6">
        <AvatarProfilePhoto size="sm" src={sienna} alt="Sienna Hewitt" />
        <AvatarProfilePhoto size="md" src={sienna} alt="Sienna Hewitt" />
        <AvatarProfilePhoto size="lg" src={sienna} alt="Sienna Hewitt" />
    </div>
);

export const WithStatus = () => (
    <div className="flex flex-wrap items-end gap-6">
        <AvatarProfilePhoto size="lg" src={sienna} alt="Sienna Hewitt" status="online" />
        <AvatarProfilePhoto size="lg" src={sienna} alt="Sienna Hewitt" verified />
        <AvatarProfilePhoto size="lg" initials="SH" />
    </div>
);
