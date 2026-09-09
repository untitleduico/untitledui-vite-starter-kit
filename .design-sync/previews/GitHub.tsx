import { GitHub } from "untitledui-vite-starter-kit";

export const Default = () => <GitHub size={40} className="text-fg-primary" />;

export const Sizes = () => (
    <div className="flex flex-wrap items-end gap-6 text-fg-primary">
        <GitHub size={20} />
        <GitHub size={24} />
        <GitHub size={32} />
        <GitHub size={40} />
    </div>
);

export const Colors = () => (
    <div className="flex flex-wrap items-center gap-6">
        <GitHub size={32} className="text-fg-primary" />
        <GitHub size={32} className="text-fg-quaternary" />
        <GitHub size={32} className="text-fg-brand-primary" />
    </div>
);

export const InAFooterRow = () => (
    <div className="flex items-center gap-5 rounded-xl border border-secondary bg-primary px-5 py-4">
        <span className="text-sm font-medium text-secondary">Untitled UI on GitHub</span>
        <GitHub size={24} className="text-fg-quaternary" />
    </div>
);
