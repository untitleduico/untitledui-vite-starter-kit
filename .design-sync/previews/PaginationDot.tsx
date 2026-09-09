import { PaginationDot } from "untitledui-vite-starter-kit";

/** Carousel-style pagination: one dot per slide, the current one filled with the brand color. */
export const Default = () => <PaginationDot page={2} total={5} />;

export const Sizes = () => (
    <div className="flex flex-col gap-4">
        <PaginationDot size="md" page={2} total={5} />
        <PaginationDot size="lg" page={2} total={5} />
    </div>
);

/** `isBrand` inverts the dots for imagery; `framed` instead wraps them in a translucent pill. */
export const OverMedia = () => (
    <div className="flex w-96 flex-col items-center gap-4 rounded-xl bg-brand-solid p-6">
        <PaginationDot isBrand page={3} total={5} />
        <PaginationDot framed page={3} total={5} />
    </div>
);
