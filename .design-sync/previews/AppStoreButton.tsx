import { AppStoreButton } from "untitledui-vite-starter-kit";

export const Default = () => (
    <div className="flex items-center">
        <AppStoreButton />
    </div>
);

export const Sizes = () => (
    <div className="flex flex-wrap items-center gap-4">
        <AppStoreButton size="md" />
        <AppStoreButton size="lg" />
    </div>
);
