import { GradientScan } from "untitledui-vite-starter-kit";

/**
 * `GradientScan` is the brand-tinted scan sweep drawn over a QR code. It is
 * absolutely positioned against the bottom of its parent, so it must be composed
 * inside a `relative` container — on its own it paints nothing.
 */
export const Default = () => (
    <div className="relative h-40 w-40 overflow-hidden rounded-xl bg-primary ring-1 ring-secondary ring-inset">
        <GradientScan />
    </div>
);

/** In context: over a QR code, which is where the sweep is meant to sit. */
export const OverAQRCode = () => (
    <div className="relative flex size-48 items-center justify-center overflow-hidden rounded-xl bg-primary p-3 ring-1 ring-secondary ring-inset">
        <div className="grid grid-cols-8 gap-1">
            {Array.from({ length: 64 }).map((_, i) => (
                <span key={i} className={i % 3 === 0 || i % 7 === 0 ? "size-3 rounded-xs bg-primary-solid" : "size-3 rounded-xs bg-primary"} />
            ))}
        </div>
        <GradientScan />
    </div>
);

/** The sweep is a half-height overlay, so a taller frame gives it more room. */
export const OnATallFrame = () => (
    <div className="relative h-64 w-48 overflow-hidden rounded-xl bg-secondary ring-1 ring-secondary ring-inset">
        <p className="p-4 text-sm font-medium text-secondary">Point your camera here</p>
        <GradientScan />
    </div>
);
