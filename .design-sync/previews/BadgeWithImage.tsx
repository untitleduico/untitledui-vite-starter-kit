import { BadgeWithImage } from "untitledui-vite-starter-kit";

const olivia = "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80";
const phoenix = "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80";
const lana = "https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80";

export const Assignees = () => (
    <div className="flex flex-wrap items-center gap-3">
        <BadgeWithImage imgSrc={olivia}>Olivia Rhye</BadgeWithImage>
        <BadgeWithImage imgSrc={phoenix} color="brand">Phoenix Baker</BadgeWithImage>
        <BadgeWithImage imgSrc={lana} color="success">Lana Steiner</BadgeWithImage>
    </div>
);

export const Types = () => (
    <div className="flex flex-wrap items-center gap-3">
        <BadgeWithImage type="pill-color" color="brand" imgSrc={olivia}>Olivia Rhye</BadgeWithImage>
        <BadgeWithImage type="color" color="brand" imgSrc={olivia}>Olivia Rhye</BadgeWithImage>
        <BadgeWithImage type="modern" imgSrc={olivia}>Olivia Rhye</BadgeWithImage>
    </div>
);

export const Sizes = () => (
    <div className="flex flex-wrap items-center gap-3">
        <BadgeWithImage size="sm" imgSrc={phoenix}>Phoenix Baker</BadgeWithImage>
        <BadgeWithImage size="md" imgSrc={phoenix}>Phoenix Baker</BadgeWithImage>
        <BadgeWithImage size="lg" imgSrc={phoenix}>Phoenix Baker</BadgeWithImage>
    </div>
);
