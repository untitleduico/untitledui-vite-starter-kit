import { PaypassIcon } from "untitledui-vite-starter-kit";

export const Default = () => <PaypassIcon className="h-8 w-auto text-fg-primary" />;

export const Sizes = () => (
    <div className="flex flex-wrap items-end gap-6 text-fg-primary">
        <PaypassIcon className="h-5 w-auto" />
        <PaypassIcon className="h-6 w-auto" />
        <PaypassIcon className="h-8 w-auto" />
        <PaypassIcon className="h-12 w-auto" />
    </div>
);

export const OnCard = () => (
    <div className="flex h-36 w-60 flex-col justify-between rounded-xl bg-primary-solid p-4">
        <PaypassIcon className="h-6 w-auto self-end text-fg-white" />
        <p className="text-sm font-medium text-white">•••• •••• •••• 1234</p>
    </div>
);
