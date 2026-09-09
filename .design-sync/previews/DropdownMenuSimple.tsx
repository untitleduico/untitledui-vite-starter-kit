import { DropdownMenuSimple } from "untitledui-vite-starter-kit";

/**
 * The "Resources" mega-menu panel used by the marketing header. It takes no props —
 * the five resource links are baked in — and is passed as the `menu` of a header nav item.
 */
export const Default = () => <DropdownMenuSimple />;

/** In context: the panel as it appears hanging below a header nav item. */
export const UnderANavItem = () => (
    <div className="flex flex-col items-start">
        <span className="px-3 py-2 text-md font-semibold text-brand-secondary">Resources</span>
        <DropdownMenuSimple />
    </div>
);
