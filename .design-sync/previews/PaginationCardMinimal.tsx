import type { ReactNode } from "react";
import { PaginationCardMinimal } from "untitledui-vite-starter-kit";

const TeamCard = ({ children }: { children: ReactNode }) => (
    <div className="w-full max-w-3xl overflow-hidden rounded-xl bg-primary ring-1 ring-secondary">
        <div className="flex flex-col gap-1 px-6 py-5">
            <p className="text-lg font-semibold text-primary">Team members</p>
            <p className="text-sm text-tertiary">Manage who has access to this workspace.</p>
        </div>
        {children}
    </div>
);

export const AlignLeft = () => (
    <TeamCard>
        <PaginationCardMinimal align="left" page={2} total={10} pageSize={25} />
    </TeamCard>
);

export const AlignCenter = () => (
    <TeamCard>
        <PaginationCardMinimal align="center" page={2} total={10} pageSize={25} />
    </TeamCard>
);

export const AlignRight = () => (
    <TeamCard>
        <PaginationCardMinimal align="right" page={7} total={10} pageSize={25} />
    </TeamCard>
);
