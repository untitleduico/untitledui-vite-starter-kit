import { AvatarLabelGroup } from "untitledui-vite-starter-kit";

const olivia = "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80";
const phoenix = "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80";

export const Sizes = () => (
    <div className="flex flex-col gap-5">
        <AvatarLabelGroup size="sm" src={olivia} alt="Olivia Rhye" title="Olivia Rhye" subtitle="olivia@untitledui.com" />
        <AvatarLabelGroup size="md" src={olivia} alt="Olivia Rhye" title="Olivia Rhye" subtitle="olivia@untitledui.com" />
        <AvatarLabelGroup size="lg" src={olivia} alt="Olivia Rhye" title="Olivia Rhye" subtitle="olivia@untitledui.com" />
    </div>
);

export const WithIndicators = () => (
    <div className="flex flex-col gap-5">
        <AvatarLabelGroup size="md" src={phoenix} alt="Phoenix Baker" title="Phoenix Baker" subtitle="Product Manager" status="online" />
        <AvatarLabelGroup size="md" src={phoenix} alt="Phoenix Baker" title="Phoenix Baker" subtitle="Product Manager" verified />
        <AvatarLabelGroup size="md" initials="LS" title="Lana Steiner" subtitle="lana@untitledui.com" />
    </div>
);
