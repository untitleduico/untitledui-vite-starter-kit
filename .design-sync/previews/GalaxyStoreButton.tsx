import { GalaxyStoreButton } from "untitledui-vite-starter-kit";

/** The filled black Galaxy Store badge. It renders as an anchor, so it takes an `href`. */
export const Default = () => (
    <div className="flex">
        <GalaxyStoreButton href="#" />
    </div>
);

/** The badge ships in two fixed sizes: `md` (135x40) and `lg` (149x44). */
export const Sizes = () => (
    <div className="flex flex-wrap items-end gap-4">
        <GalaxyStoreButton size="md" />
        <GalaxyStoreButton size="lg" />
    </div>
);

/** In context: an app-download row in a marketing footer. */
export const InADownloadRow = () => (
    <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold text-secondary">Get the Untitled UI app</p>
        <div className="flex flex-wrap items-center gap-3">
            <GalaxyStoreButton href="https://galaxystore.samsung.com" /></div>
    </div>
);
