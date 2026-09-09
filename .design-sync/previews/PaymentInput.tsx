import { PaymentInput } from "untitledui-vite-starter-kit";

export const Default = () => (
    <div className="w-80">
        <PaymentInput label="Card number" placeholder="1234 1234 1234 1234" defaultValue="4242424242424242" />
    </div>
);

export const CardTypes = () => (
    <div className="flex w-80 flex-col gap-4">
        <PaymentInput label="Visa" defaultValue="4242424242424242" />
        <PaymentInput label="Mastercard" defaultValue="5555555555554444" />
        <PaymentInput label="American Express" defaultValue="378282246310005" />
    </div>
);

export const Empty = () => (
    <div className="w-80">
        <PaymentInput isRequired label="Card number" placeholder="1234 1234 1234 1234" hint="We never store your full card number." />
    </div>
);

export const Invalid = () => (
    <div className="w-80">
        <PaymentInput isInvalid label="Card number" defaultValue="4242424200" hint="This card number is incomplete." />
    </div>
);
