import { HelpCircle } from "@untitledui/icons";
import { Button, Tooltip, TooltipTrigger } from "untitledui-vite-starter-kit";

/** The pressable target a `Tooltip` attaches to. It has no styling of its own — wrap any content. */
export const Default = () => (
    <div className="flex h-72 items-start justify-center pt-16">
        <Tooltip title="Monthly recurring revenue" placement="bottom" isOpen>
            <TooltipTrigger>
                <HelpCircle className="size-5 text-fg-quaternary" />
            </TooltipTrigger>
        </Tooltip>
    </div>
);

/** Any element can be the trigger, including a full button. */
export const ButtonTrigger = () => (
    <div className="flex h-72 items-start justify-center pt-20">
        <Tooltip
            title="Export as CSV"
            description="Includes every invoice in the selected date range."
            placement="bottom"
            arrow
            isOpen
        >
            <TooltipTrigger>
                <Button size="sm" color="secondary">
                    Export
                </Button>
            </TooltipTrigger>
        </Tooltip>
    </div>
);

/** Alongside a form label — the trigger stays enabled even when the field is disabled. */
export const InlineHelp = () => (
    <div className="flex h-72 items-start justify-center pt-16">
        <div className="flex items-center gap-1">
            <span className="text-sm font-medium text-secondary">Annual contract value</span>
            <Tooltip title="Total committed spend over 12 months." placement="bottom" isOpen>
                <TooltipTrigger className="cursor-pointer text-fg-quaternary">
                    <HelpCircle className="size-4 stroke-[2.25px]" />
                </TooltipTrigger>
            </Tooltip>
        </div>
    </div>
);
