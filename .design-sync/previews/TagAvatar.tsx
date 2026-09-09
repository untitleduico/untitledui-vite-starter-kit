import { TagAvatar } from "untitledui-vite-starter-kit";

/** The 16px avatar that leads a `Tag`. Falls back to a user glyph when `src` is missing or fails. */
export const Default = () => (
    <div className="flex items-center gap-4">
        <TagAvatar src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" alt="Olivia Rhye" />
        <TagAvatar src="https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80" alt="Phoenix Baker" />
        <TagAvatar alt="Unknown member" />
    </div>
);

/** `contrastBorder` adds the hairline outline that keeps light photos separated from the tag. */
export const ContrastBorder = () => (
    <div className="flex items-center gap-4">
        <TagAvatar src="https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80" alt="Lana Steiner" />
        <TagAvatar src="https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80" alt="Lana Steiner" contrastBorder={false} />
    </div>
);

export const InsideTag = () => (
    <div className="inline-flex w-max items-center gap-1 rounded-md bg-primary py-0.75 pr-2 pl-1 text-xs font-medium text-secondary ring-1 ring-primary ring-inset">
        <TagAvatar src="https://www.untitledui.com/images/avatars/sienna-hewitt?fm=webp&q=80" alt="Sienna Hewitt" />
        Sienna Hewitt
    </div>
);
