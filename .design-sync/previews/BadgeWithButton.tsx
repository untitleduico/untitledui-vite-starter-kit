import { X } from "@untitledui/icons";
import { BadgeWithButton } from "untitledui-vite-starter-kit";

export const Default = () => (
    <div className="flex flex-wrap items-center gap-3">
        <BadgeWithButton color="brand" buttonLabel="Remove Design filter">
            Design
        </BadgeWithButton>
        <BadgeWithButton color="gray" buttonLabel="Remove Engineering filter">
            Engineering
        </BadgeWithButton>
    </div>
);

export const Types = () => (
    <div className="flex flex-wrap items-center gap-3">
        <BadgeWithButton type="pill-color" color="brand" buttonLabel="Remove filter">
            San Francisco
        </BadgeWithButton>
        <BadgeWithButton type="color" color="brand" buttonLabel="Remove filter">
            San Francisco
        </BadgeWithButton>
        <BadgeWithButton type="modern" buttonLabel="Remove filter">
            San Francisco
        </BadgeWithButton>
    </div>
);

export const Sizes = () => (
    <div className="flex flex-wrap items-center gap-3">
        <BadgeWithButton size="sm" color="success" buttonLabel="Remove filter">
            Active
        </BadgeWithButton>
        <BadgeWithButton size="md" color="success" buttonLabel="Remove filter">
            Active
        </BadgeWithButton>
        <BadgeWithButton size="lg" color="success" buttonLabel="Remove filter">
            Active
        </BadgeWithButton>
    </div>
);

export const AsAppliedFilters = () => (
    <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-secondary">Filters:</span>
        <BadgeWithButton color="brand" icon={X} buttonLabel="Remove status filter">
            Status: Paid
        </BadgeWithButton>
        <BadgeWithButton color="brand" icon={X} buttonLabel="Remove plan filter">
            Plan: Enterprise
        </BadgeWithButton>
        <BadgeWithButton color="brand" icon={X} buttonLabel="Remove region filter">
            Region: EMEA
        </BadgeWithButton>
    </div>
);
