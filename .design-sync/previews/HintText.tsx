import { HintText } from "untitledui-vite-starter-kit";

export const Default = () => (
    <div className="w-80">
        <HintText>This will be the name shown on your public profile.</HintText>
    </div>
);

/** `isInvalid` switches the hint to the error semantic color - this is how field validation messages render. */
export const Invalid = () => (
    <div className="w-80">
        <HintText isInvalid>Please enter a valid email address.</HintText>
    </div>
);

export const Sizes = () => (
    <div className="flex w-80 flex-col gap-3">
        <HintText size="sm">Small - 8 characters minimum.</HintText>
        <HintText size="md">Medium - 8 characters minimum.</HintText>
    </div>
);
