import { KlarnaIcon } from "untitledui-vite-starter-kit";

export const Default = () => <KlarnaIcon className="h-10 w-auto" />;

export const Sizes = () => (
    <div className="flex flex-wrap items-end gap-6">
        <KlarnaIcon className="h-6 w-auto" />
        <KlarnaIcon className="h-8 w-auto" />
        <KlarnaIcon className="h-10 w-auto" />
        <KlarnaIcon className="h-14 w-auto" />
    </div>
);
