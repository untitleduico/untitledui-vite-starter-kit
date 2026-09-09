import { Discord } from "untitledui-vite-starter-kit";

export const Default = () => <Discord size={40} className="text-fg-primary" />;

export const Sizes = () => (
    <div className="flex flex-wrap items-end gap-6 text-fg-primary">
        <Discord size={20} />
        <Discord size={24} />
        <Discord size={32} />
        <Discord size={40} />
    </div>
);

export const Colors = () => (
    <div className="flex flex-wrap items-center gap-6">
        <Discord size={32} className="text-fg-primary" />
        <Discord size={32} className="text-fg-quaternary" />
        <Discord size={32} className="text-fg-brand-primary" />
    </div>
);

export const InAFooterRow = () => (
    <div className="flex items-center gap-5 rounded-xl border border-secondary bg-primary px-5 py-4">
        <span className="text-sm font-medium text-secondary">Untitled UI on Discord</span>
        <Discord size={24} className="text-fg-quaternary" />
    </div>
);
