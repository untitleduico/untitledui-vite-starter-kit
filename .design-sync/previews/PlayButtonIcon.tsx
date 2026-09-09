import { PlayButtonIcon } from "untitledui-vite-starter-kit";

/** Translucent white over a backdrop blur - it is always placed on top of media, never on a plain background. */
export const OverMedia = () => (
    <div className="flex size-40 items-center justify-center rounded-xl bg-brand-solid">
        <PlayButtonIcon />
    </div>
);

/** `isPlaying` swaps the triangle for a pause glyph. */
export const PlayingAndPaused = () => (
    <div className="flex gap-4">
        <div className="flex size-40 items-center justify-center rounded-xl bg-primary-solid">
            <PlayButtonIcon />
        </div>
        <div className="flex size-40 items-center justify-center rounded-xl bg-primary-solid">
            <PlayButtonIcon isPlaying />
        </div>
    </div>
);
