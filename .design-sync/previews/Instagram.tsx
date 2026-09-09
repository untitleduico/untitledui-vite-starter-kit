import { Instagram } from "untitledui-vite-starter-kit";

export const Default = () => <Instagram size={40} className="text-fg-primary" />;

export const Sizes = () => (
    <div className="flex flex-wrap items-end gap-6 text-fg-primary">
        <Instagram size={20} />
        <Instagram size={24} />
        <Instagram size={32} />
        <Instagram size={40} />
    </div>
);

export const Colors = () => (
    <div className="flex flex-wrap items-center gap-6">
        <Instagram size={32} className="text-fg-primary" />
        <Instagram size={32} className="text-fg-quaternary" />
        <Instagram size={32} className="text-fg-brand-primary" />
    </div>
);

export const InAFooterRow = () => (
    <div className="flex items-center gap-5 rounded-xl border border-secondary bg-primary px-5 py-4">
        <span className="text-sm font-medium text-secondary">Untitled UI on Instagram</span>
        <Instagram size={24} className="text-fg-quaternary" />
    </div>
);
