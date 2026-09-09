import { AppGalleryButtonOutline } from "untitledui-vite-starter-kit";

export const Default = () => (
    <div className="flex items-center">
        <AppGalleryButtonOutline />
    </div>
);

export const Sizes = () => (
    <div className="flex flex-wrap items-center gap-4">
        <AppGalleryButtonOutline size="md" />
        <AppGalleryButtonOutline size="lg" />
    </div>
);
