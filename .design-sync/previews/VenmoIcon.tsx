import { VenmoIcon } from "untitledui-vite-starter-kit";

export const Default = () => <VenmoIcon className="h-10 w-auto" />;

export const Sizes = () => (
    <div className="flex flex-wrap items-end gap-6">
        <VenmoIcon className="h-6 w-auto" />
        <VenmoIcon className="h-8 w-auto" />
        <VenmoIcon className="h-10 w-auto" />
        <VenmoIcon className="h-14 w-auto" />
    </div>
);
