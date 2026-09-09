import { Google } from "untitledui-vite-starter-kit";

export const Default = () => <Google size={40} className="text-fg-primary" />;

export const Sizes = () => (
    <div className="flex flex-wrap items-end gap-6 text-fg-primary">
        <Google size={20} />
        <Google size={24} />
        <Google size={32} />
        <Google size={40} />
    </div>
);

export const Colors = () => (
    <div className="flex flex-wrap items-center gap-6">
        <Google size={32} className="text-fg-primary" />
        <Google size={32} className="text-fg-quaternary" />
        <Google size={32} className="text-fg-brand-primary" />
    </div>
);

export const InAFooterRow = () => (
    <div className="flex items-center gap-5 rounded-xl border border-secondary bg-primary px-5 py-4">
        <span className="text-sm font-medium text-secondary">Untitled UI on Google</span>
        <Google size={24} className="text-fg-quaternary" />
    </div>
);
