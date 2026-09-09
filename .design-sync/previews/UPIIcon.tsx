import { UPIIcon } from "untitledui-vite-starter-kit";

export const Default = () => <UPIIcon className="h-10 w-auto" />;

/** Fixed 34x24 artwork — set a height and let the width follow to keep the card ratio. */
export const Sizes = () => (
    <div className="flex items-end gap-6">
        <UPIIcon className="h-6 w-auto" />
        <UPIIcon className="h-8 w-auto" />
        <UPIIcon className="h-10 w-auto" />
        <UPIIcon className="h-14 w-auto" />
    </div>
);
