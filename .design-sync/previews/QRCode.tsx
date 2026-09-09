import { QRCode } from "untitledui-vite-starter-kit";

export const Sizes = () => (
    <div className="flex flex-wrap items-end gap-8">
        <QRCode size="md" value="https://www.untitledui.com" />
        <QRCode size="lg" value="https://www.untitledui.com" />
    </div>
);

export const InCard = () => (
    <div className="flex w-80 flex-col items-center gap-4 rounded-xl bg-primary p-6 ring-1 ring-secondary">
        <p className="text-lg font-semibold text-primary">Scan to sign in</p>
        <QRCode size="lg" value="https://www.untitledui.com/login" />
        <p className="text-center text-sm text-tertiary">Open the mobile app and point your camera at this code.</p>
    </div>
);
