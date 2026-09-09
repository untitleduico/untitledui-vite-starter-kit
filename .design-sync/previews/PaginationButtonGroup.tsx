import type { ReactNode } from "react";
import { PaginationButtonGroup } from "untitledui-vite-starter-kit";

const ReportsCard = ({ children }: { children: ReactNode }) => (
    <div className="w-full max-w-3xl overflow-hidden rounded-xl bg-primary ring-1 ring-secondary">
        <div className="flex flex-col gap-1 px-6 py-5">
            <p className="text-lg font-semibold text-primary">Saved reports</p>
            <p className="text-sm text-tertiary">Reports shared with the finance team.</p>
        </div>
        {children}
    </div>
);

export const AlignLeft = () => (
    <ReportsCard>
        <PaginationButtonGroup align="left" page={1} total={10} />
    </ReportsCard>
);

export const AlignCenter = () => (
    <ReportsCard>
        <PaginationButtonGroup align="center" page={4} total={10} />
    </ReportsCard>
);

export const AlignRight = () => (
    <ReportsCard>
        <PaginationButtonGroup align="right" page={8} total={10} />
    </ReportsCard>
);
