import type { ReactNode } from "react";
import { PaginationCardDefault } from "untitledui-vite-starter-kit";

const InvoicesCard = ({ children }: { children: ReactNode }) => (
    <div className="w-full max-w-3xl overflow-hidden rounded-xl bg-primary ring-1 ring-secondary">
        <div className="flex flex-col gap-1 px-6 py-5">
            <p className="text-lg font-semibold text-primary">Invoices</p>
            <p className="text-sm text-tertiary">Download previous invoices for your records.</p>
        </div>
        {children}
    </div>
);

export const Default = () => (
    <InvoicesCard>
        <PaginationCardDefault page={2} total={10} />
    </InvoicesCard>
);

export const Rounded = () => (
    <InvoicesCard>
        <PaginationCardDefault rounded page={6} total={10} />
    </InvoicesCard>
);
