import { AppStoreButtonOutline } from "untitledui-vite-starter-kit";

export const Default = () => (
    <div className="flex items-center">
        <AppStoreButtonOutline />
    </div>
);

export const Sizes = () => (
    <div className="flex flex-wrap items-center gap-4">
        <AppStoreButtonOutline size="md" />
        <AppStoreButtonOutline size="lg" />
    </div>
);
