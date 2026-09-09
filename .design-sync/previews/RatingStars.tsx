import { RatingStars } from "untitledui-vite-starter-kit";

export const Default = () => <RatingStars rating={5} />;

/** Partial ratings are rendered by clipping the last star. */
export const Ratings = () => (
    <div className="flex flex-col gap-3">
        <RatingStars rating={5} />
        <RatingStars rating={4.5} />
        <RatingStars rating={3} />
        <RatingStars rating={1.5} />
    </div>
);

export const InContext = () => (
    <div className="flex max-w-md flex-col gap-2">
        <RatingStars rating={4.5} starClassName="size-4" className="gap-0.5" />
        <p className="text-md font-medium text-primary">"We've saved thousands of hours of design work."</p>
        <p className="text-sm text-tertiary">Olivia Rhye · Head of Design, Untitled UI</p>
    </div>
);
