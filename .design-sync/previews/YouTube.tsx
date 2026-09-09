import { YouTube } from "untitledui-vite-starter-kit";

export const Default = () => <YouTube size={40} className="text-fg-primary" />;

export const Sizes = () => (
    <div className="flex flex-wrap items-end gap-6 text-fg-primary">
        <YouTube size={20} />
        <YouTube size={24} />
        <YouTube size={32} />
        <YouTube size={40} />
    </div>
);

export const Colors = () => (
    <div className="flex flex-wrap items-center gap-6">
        <YouTube size={32} className="text-fg-primary" />
        <YouTube size={32} className="text-fg-quaternary" />
        <YouTube size={32} className="text-fg-brand-primary" />
    </div>
);

export const InAFooterRow = () => (
    <div className="flex items-center gap-5 rounded-xl border border-secondary bg-primary px-5 py-4">
        <span className="text-sm font-medium text-secondary">Untitled UI on YouTube</span>
        <YouTube size={24} className="text-fg-quaternary" />
    </div>
);
