import { CreditCardMastercardIcon } from "untitledui-vite-starter-kit";

/** The Mastercard mark drawn for the credit-card illustration (the payment-icons set has its own). */
export const Default = () => <CreditCardMastercardIcon />;

export const Sizes = () => (
    <div className="flex items-end gap-6">
        <CreditCardMastercardIcon width={30} height={19} />
        <CreditCardMastercardIcon width={48} height={30} />
        <CreditCardMastercardIcon width={72} height={45} />
    </div>
);

export const OnACard = () => (
    <div className="flex h-44 w-72 flex-col justify-between rounded-xl bg-primary-solid p-5">
        <span className="text-sm font-medium text-white">Untitled Bank</span>
        <div className="flex items-end justify-between">
            <span className="text-sm text-white">•••• 4242</span>
            <CreditCardMastercardIcon width={44} height={28} />
        </div>
    </div>
);
