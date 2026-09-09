import { PaginationLine } from "untitledui-vite-starter-kit";

/** Progress-bar style pagination: equal-width segments, the current one filled. */
export const Default = () => <PaginationLine page={2} total={4} className="w-80" />;

export const Sizes = () => (
    <div className="flex flex-col gap-5">
        <PaginationLine size="md" page={2} total={4} className="w-80" />
        <PaginationLine size="lg" page={2} total={4} className="w-80" />
    </div>
);

/** `framed` wraps the bars in a translucent pill for use over imagery. */
export const OverMedia = () => (
    <div className="w-80 rounded-xl bg-brand-solid p-6">
        <PaginationLine framed page={3} total={4} className="w-full" />
    </div>
);
