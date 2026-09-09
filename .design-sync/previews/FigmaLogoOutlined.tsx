import { FigmaLogoOutlined } from "untitledui-vite-starter-kit";

/** The outlined Figma mark. It is a single `currentColor` path, so colour is inherited. */
export const Default = () => <FigmaLogoOutlined className="size-10 text-fg-primary" />;

export const Sizes = () => (
    <div className="flex flex-wrap items-end gap-6 text-fg-primary">
        <FigmaLogoOutlined className="size-5" />
        <FigmaLogoOutlined className="size-6" />
        <FigmaLogoOutlined className="size-8" />
        <FigmaLogoOutlined className="size-12" />
    </div>
);

export const Colors = () => (
    <div className="flex items-center gap-8">
        <FigmaLogoOutlined className="size-8 text-fg-primary" />
        <FigmaLogoOutlined className="size-8 text-fg-quaternary" />
        <FigmaLogoOutlined className="size-8 text-fg-brand-primary" />
    </div>
);

/** The outlined mark is what `SocialButton theme="gray"` uses, so it sits on a neutral button. */
export const OnAButton = () => (
    <button className="flex items-center gap-3 rounded-lg bg-primary px-4 py-2.5 text-md font-semibold text-secondary shadow-xs ring-1 ring-primary ring-inset">
        <FigmaLogoOutlined className="size-6 text-fg-primary" />
        Continue with Figma
    </button>
);
