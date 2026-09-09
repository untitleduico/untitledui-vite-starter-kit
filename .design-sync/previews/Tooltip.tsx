import { HelpCircle } from "@untitledui/icons";
import { Button, Tooltip, TooltipTrigger } from "untitledui-vite-starter-kit";

export const Default = () => (
    <div className="flex justify-center px-6 pt-16 pb-4">
        <Tooltip title="This is a tooltip" placement="bottom" isOpen>
            <TooltipTrigger>
                <HelpCircle className="size-4 text-fg-quaternary" />
            </TooltipTrigger>
        </Tooltip>
    </div>
);

export const WithDescription = () => (
    <div className="flex justify-center px-6 pt-24 pb-4">
        <Tooltip
            title="Monthly recurring revenue"
            description="Normalized to a 30-day month and excluding one-off charges."
            placement="bottom"
            arrow
            isOpen
        >
            <TooltipTrigger>
                <Button size="sm" color="secondary" iconLeading={HelpCircle}>
                    MRR
                </Button>
            </TooltipTrigger>
        </Tooltip>
    </div>
);
