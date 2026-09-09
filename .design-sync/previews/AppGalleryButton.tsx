import { AppGalleryButton } from "untitledui-vite-starter-kit";

export const Default = () => (
    <div className="flex items-center">
        <AppGalleryButton />
    </div>
);

export const Sizes = () => (
    <div className="flex flex-wrap items-center gap-4">
        <AppGalleryButton size="md" />
        <AppGalleryButton size="lg" />
    </div>
);
