import { Wreath } from "untitledui-vite-starter-kit";

export const Default = () => <Wreath className="h-20 w-auto" />;

/** The laurel is drawn as a single left-hand branch; mirror it to frame a rating. */
export const RatingBadge = () => (
    <div className="flex items-center gap-1">
        <Wreath className="h-20 w-auto" />
        <div className="flex flex-col items-center gap-1">
            <span className="text-xl font-semibold text-primary">4.9</span>
            <span className="text-xs font-medium text-tertiary">Rated by 2,000+ teams</span>
        </div>
        <Wreath className="h-20 w-auto" style={{ transform: "scaleX(-1)" }} />
    </div>
);

export const Sizes = () => (
    <div className="flex items-end gap-8">
        <Wreath className="h-12 w-auto" />
        <Wreath className="h-16 w-auto" />
        <Wreath className="h-24 w-auto" />
    </div>
);
