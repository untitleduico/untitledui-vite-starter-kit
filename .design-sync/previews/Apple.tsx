import { Apple } from "untitledui-vite-starter-kit";

export const Default = () => <Apple size={40} className="text-fg-primary" />;

export const Sizes = () => (
    <div className="flex flex-wrap items-end gap-6 text-fg-primary">
        <Apple size={20} />
        <Apple size={24} />
        <Apple size={32} />
        <Apple size={40} />
    </div>
);

export const Colors = () => (
    <div className="flex flex-wrap items-center gap-6">
        <Apple size={32} className="text-fg-primary" />
        <Apple size={32} className="text-fg-quaternary" />
        <Apple size={32} className="text-fg-brand-primary" />
    </div>
);

export const InAFooterRow = () => (
    <div className="flex items-center gap-5 rounded-xl border border-secondary bg-primary px-5 py-4">
        <span className="text-sm font-medium text-secondary">Untitled UI on Apple</span>
        <Apple size={24} className="text-fg-quaternary" />
    </div>
);
