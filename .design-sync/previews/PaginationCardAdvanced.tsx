import type { ReactNode } from "react";
import { PaginationCardAdvanced } from "untitledui-vite-starter-kit";

const OrdersCard = ({ children }: { children: ReactNode }) => (
    <div className="w-full overflow-hidden rounded-xl bg-primary ring-1 ring-secondary">
        <div className="flex flex-col gap-1 px-6 py-5">
            <p className="text-lg font-semibold text-primary">Orders</p>
            <p className="text-sm text-tertiary">1,204 orders placed in the last 30 days.</p>
        </div>
        {children}
    </div>
);

export const SpaceBetween = () => (
    <OrdersCard>
        <PaginationCardAdvanced align="space-between" page={3} total={25} pageSize={25} />
    </OrdersCard>
);

export const Centered = () => (
    <OrdersCard>
        <PaginationCardAdvanced align="center" page={3} total={25} pageSize={50} />
    </OrdersCard>
);
