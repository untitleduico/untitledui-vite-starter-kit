import { MastercardIconWhite } from "untitledui-vite-starter-kit";

/**
 * The white Mastercard mark drawn for the credit-card illustration. It is painted in
 * solid white, so it only reads on a dark or coloured surface.
 */
export const Default = () => (
    <div className="flex items-center justify-center rounded-xl bg-primary-solid p-6">
        <MastercardIconWhite className="h-8 w-auto" />
    </div>
);

export const Sizes = () => (
    <div className="flex flex-wrap items-end gap-6 rounded-xl bg-primary-solid p-6">
        <MastercardIconWhite className="h-4 w-auto" />
        <MastercardIconWhite className="h-6 w-auto" />
        <MastercardIconWhite className="h-8 w-auto" />
        <MastercardIconWhite className="h-12 w-auto" />
    </div>
);

/** In context: the mark in the bottom-right corner of a card face, which is where it is used. */
export const OnACardFace = () => (
    <div className="flex h-48 w-80 flex-col justify-between rounded-2xl bg-brand-solid p-5">
        <p className="text-sm font-medium text-white">Untitled UI</p>
        <div className="flex items-end justify-between">
            <div>
                <p className="text-xs text-white opacity-80">Olivia Rhye</p>
                <p className="text-md font-medium tracking-widest text-white">•••• 4242</p>
            </div>
            <MastercardIconWhite className="h-8 w-auto" />
        </div>
    </div>
);
