import { PinInput } from "untitledui-vite-starter-kit";

const noop = () => {};

export const FourDigits = () => (
    <PinInput size="sm">
        <PinInput.Label>Verification code</PinInput.Label>
        <PinInput.Group maxLength={4} value="8291" onChange={noop}>
            <PinInput.Slot index={0} />
            <PinInput.Slot index={1} />
            <PinInput.Slot index={2} />
            <PinInput.Slot index={3} />
        </PinInput.Group>
        <PinInput.Description>We sent a code to olivia@untitledui.com.</PinInput.Description>
    </PinInput>
);

/** `PinInput.Separator` splits a longer code into groups. */
export const WithSeparator = () => (
    <PinInput size="xs">
        <PinInput.Label>Authentication code</PinInput.Label>
        <PinInput.Group maxLength={6} value="042913" onChange={noop}>
            <PinInput.Slot index={0} />
            <PinInput.Slot index={1} />
            <PinInput.Slot index={2} />
            <PinInput.Separator />
            <PinInput.Slot index={3} />
            <PinInput.Slot index={4} />
            <PinInput.Slot index={5} />
        </PinInput.Group>
    </PinInput>
);

export const Invalid = () => (
    <PinInput size="xs" invalid>
        <PinInput.Label isInvalid>Verification code</PinInput.Label>
        <PinInput.Group maxLength={4} value="1204" onChange={noop}>
            <PinInput.Slot index={0} />
            <PinInput.Slot index={1} />
            <PinInput.Slot index={2} />
            <PinInput.Slot index={3} />
        </PinInput.Group>
        <PinInput.Description isInvalid>That code has expired. Request a new one.</PinInput.Description>
    </PinInput>
);
