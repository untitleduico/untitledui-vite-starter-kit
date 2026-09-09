import { StripeIcon } from "untitledui-vite-starter-kit";

export const Default = () => <StripeIcon className="h-10 w-auto" />;

export const Sizes = () => (
    <div className="flex flex-wrap items-end gap-6">
        <StripeIcon className="h-6 w-auto" />
        <StripeIcon className="h-8 w-auto" />
        <StripeIcon className="h-10 w-auto" />
        <StripeIcon className="h-14 w-auto" />
    </div>
);
