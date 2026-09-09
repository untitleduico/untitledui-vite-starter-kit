import { Copy01, DotsVertical, Edit01, Star01, Trash01 } from "@untitledui/icons";
import { ButtonUtility } from "untitledui-vite-starter-kit";

export const Colors = () => (
    <div className="flex items-center gap-3">
        <ButtonUtility color="secondary" icon={Edit01} tooltip="Edit" />
        <ButtonUtility color="tertiary" icon={Edit01} tooltip="Edit" />
    </div>
);

export const Sizes = () => (
    <div className="flex items-center gap-3">
        <ButtonUtility size="xs" icon={Copy01} tooltip="Copy link" />
        <ButtonUtility size="sm" icon={Copy01} tooltip="Copy link" />
    </div>
);

export const ToolbarRow = () => (
    <div className="flex w-max items-center gap-2 rounded-lg p-2 ring-1 ring-secondary">
        <ButtonUtility color="tertiary" icon={Star01} tooltip="Add to favourites" />
        <ButtonUtility color="tertiary" icon={Copy01} tooltip="Duplicate" />
        <ButtonUtility color="tertiary" icon={Trash01} tooltip="Delete" />
        <ButtonUtility color="tertiary" icon={DotsVertical} tooltip="More" />
    </div>
);

export const Disabled = () => (
    <div className="flex items-center gap-3">
        <ButtonUtility isDisabled color="secondary" icon={Trash01} tooltip="Delete" />
        <ButtonUtility isDisabled color="tertiary" icon={Trash01} tooltip="Delete" />
    </div>
);
