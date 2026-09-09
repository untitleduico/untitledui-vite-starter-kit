import { BackgroundPattern } from "untitledui-vite-starter-kit";

const centerer = { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", lineHeight: 0 } as const;
const frame = { position: "relative", height: 240, overflow: "hidden" } as const;

export const Patterns = () => (
    <div className="grid w-full grid-cols-2 gap-4">
        {(["circle", "square", "grid", "grid-check"] as const).map((pattern) => (
            <div key={pattern} className="flex items-center justify-center rounded-xl border border-secondary bg-primary" style={frame}>
                <div style={centerer}>
                    <BackgroundPattern pattern={pattern} size="md" />
                </div>
                <span className="relative text-xs font-medium text-tertiary">{pattern}</span>
            </div>
        ))}
    </div>
);

export const Sizes = () => (
    <div className="flex w-full flex-wrap gap-4">
        {(["sm", "md", "lg"] as const).map((size) => (
            <div key={size} className="flex items-center justify-center rounded-xl border border-secondary bg-primary" style={{ ...frame, width: 220, height: 220 }}>
                <div style={centerer}>
                    <BackgroundPattern pattern="circle" size={size} />
                </div>
                <span className="relative text-xs font-medium text-tertiary">{size}</span>
            </div>
        ))}
    </div>
);

export const BehindEmptyState = () => (
    <div className="flex w-full items-center justify-center rounded-xl bg-primary" style={{ position: "relative", height: 288, overflow: "hidden" }}>
        <div style={centerer}>
            <BackgroundPattern pattern="grid" size="md" />
        </div>
        <div className="relative flex flex-col items-center gap-1 text-center">
            <span className="text-lg font-semibold text-primary">No invoices yet</span>
            <span className="text-sm text-tertiary">Invoices you issue will show up here.</span>
        </div>
    </div>
);
