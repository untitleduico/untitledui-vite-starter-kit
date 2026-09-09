import { Reddit } from "untitledui-vite-starter-kit";

export const Default = () => <Reddit size={40} className="text-fg-primary" />;

export const Sizes = () => (
    <div className="flex flex-wrap items-end gap-6 text-fg-primary">
        <Reddit size={20} />
        <Reddit size={24} />
        <Reddit size={32} />
        <Reddit size={40} />
    </div>
);

export const Colors = () => (
    <div className="flex flex-wrap items-center gap-6">
        <Reddit size={32} className="text-fg-primary" />
        <Reddit size={32} className="text-fg-quaternary" />
        <Reddit size={32} className="text-fg-brand-primary" />
    </div>
);

export const InAFooterRow = () => (
    <div className="flex items-center gap-5 rounded-xl border border-secondary bg-primary px-5 py-4">
        <span className="text-sm font-medium text-secondary">Untitled UI on Reddit</span>
        <Reddit size={24} className="text-fg-quaternary" />
    </div>
);
