import { GooglePlayButtonOutline } from "untitledui-vite-starter-kit";

/** The outlined Google Play badge. It is drawn in `currentColor`, so it inherits the surrounding text colour. */
export const Default = () => (
    <div className="flex">
        <GooglePlayButtonOutline href="#" />
    </div>
);

/** The badge ships in two fixed sizes: `md` (135x40) and `lg` (149x44). */
export const Sizes = () => (
    <div className="flex flex-wrap items-end gap-4">
        <GooglePlayButtonOutline size="md" />
        <GooglePlayButtonOutline size="lg" />
    </div>
);

/** In context: an app-download row in a marketing footer. */
export const InADownloadRow = () => (
    <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold text-secondary">Get the Untitled UI app</p>
        <div className="flex flex-wrap items-center gap-3">
            <GooglePlayButtonOutline href="https://play.google.com/store" /></div>
    </div>
);
