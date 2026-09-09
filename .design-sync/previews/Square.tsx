import { Square } from "untitledui-vite-starter-kit";

const centerer = { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", lineHeight: 0 } as const;

export const Default = () => (
    <div className="flex w-full items-center justify-center rounded-xl bg-primary" style={{ position: "relative", height: 288, overflow: "hidden" }}>
        <div style={centerer}>
            <Square size="md" />
        </div>
        <div className="relative flex flex-col items-center gap-1 text-center">
            <span className="text-lg font-semibold text-primary">Start a new design</span>
            <span className="text-sm text-tertiary">Pick a template or begin from a blank canvas.</span>
        </div>
    </div>
);

export const Sizes = () => (
    <div className="flex w-full flex-wrap gap-4">
        {(["sm", "md", "lg"] as const).map((size) => (
            <div
                key={size}
                className="flex items-center justify-center rounded-xl border border-secondary bg-primary"
                style={{ position: "relative", height: 220, width: 220, overflow: "hidden" }}
            >
                <div style={centerer}>
                    <Square size={size} />
                </div>
                <span className="relative text-xs font-medium text-tertiary">{size}</span>
            </div>
        ))}
    </div>
);

export const BehindAFeaturedIcon = () => (
    <div className="flex w-full items-center justify-center rounded-xl bg-primary" style={{ position: "relative", height: 240, overflow: "hidden" }}>
        <div style={centerer}>
            <Square size="md" />
        </div>
        <div className="relative flex size-12 items-center justify-center rounded-lg border border-secondary bg-primary text-sm font-semibold text-primary shadow-xs">UI</div>
    </div>
);
