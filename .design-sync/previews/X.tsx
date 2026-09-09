import { X } from "untitledui-vite-starter-kit";

export const Default = () => <X size={40} className="text-fg-primary" />;

export const Sizes = () => (
    <div className="flex flex-wrap items-end gap-6 text-fg-primary">
        <X size={20} />
        <X size={24} />
        <X size={32} />
        <X size={40} />
    </div>
);

export const Colors = () => (
    <div className="flex flex-wrap items-center gap-6">
        <X size={32} className="text-fg-primary" />
        <X size={32} className="text-fg-quaternary" />
        <X size={32} className="text-fg-brand-primary" />
    </div>
);

export const InAFooterRow = () => (
    <div className="flex items-center gap-5 rounded-xl border border-secondary bg-primary px-5 py-4">
        <span className="text-sm font-medium text-secondary">Untitled UI on X</span>
        <X size={24} className="text-fg-quaternary" />
    </div>
);
