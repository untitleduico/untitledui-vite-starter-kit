import { Pinterest } from "untitledui-vite-starter-kit";

export const Default = () => <Pinterest size={40} className="text-fg-primary" />;

export const Sizes = () => (
    <div className="flex flex-wrap items-end gap-6 text-fg-primary">
        <Pinterest size={20} />
        <Pinterest size={24} />
        <Pinterest size={32} />
        <Pinterest size={40} />
    </div>
);

export const Colors = () => (
    <div className="flex flex-wrap items-center gap-6">
        <Pinterest size={32} className="text-fg-primary" />
        <Pinterest size={32} className="text-fg-quaternary" />
        <Pinterest size={32} className="text-fg-brand-primary" />
    </div>
);

export const InAFooterRow = () => (
    <div className="flex items-center gap-5 rounded-xl border border-secondary bg-primary px-5 py-4">
        <span className="text-sm font-medium text-secondary">Untitled UI on Pinterest</span>
        <Pinterest size={24} className="text-fg-quaternary" />
    </div>
);
