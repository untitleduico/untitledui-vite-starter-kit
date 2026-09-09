import { CoinbaseIcon } from "untitledui-vite-starter-kit";

export const Default = () => <CoinbaseIcon className="h-10 w-auto" />;

export const Sizes = () => (
    <div className="flex flex-wrap items-end gap-6">
        <CoinbaseIcon className="h-6 w-auto" />
        <CoinbaseIcon className="h-8 w-auto" />
        <CoinbaseIcon className="h-10 w-auto" />
        <CoinbaseIcon className="h-14 w-auto" />
    </div>
);
