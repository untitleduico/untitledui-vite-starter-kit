import { Dribbble } from "untitledui-vite-starter-kit";

export const Default = () => <Dribbble size={40} className="text-fg-primary" />;

export const Sizes = () => (
    <div className="flex flex-wrap items-end gap-6 text-fg-primary">
        <Dribbble size={20} />
        <Dribbble size={24} />
        <Dribbble size={32} />
        <Dribbble size={40} />
    </div>
);

export const Colors = () => (
    <div className="flex flex-wrap items-center gap-6">
        <Dribbble size={32} className="text-fg-primary" />
        <Dribbble size={32} className="text-fg-quaternary" />
        <Dribbble size={32} className="text-fg-brand-primary" />
    </div>
);

export const InAFooterRow = () => (
    <div className="flex items-center gap-5 rounded-xl border border-secondary bg-primary px-5 py-4">
        <span className="text-sm font-medium text-secondary">Untitled UI on Dribbble</span>
        <Dribbble size={24} className="text-fg-quaternary" />
    </div>
);
