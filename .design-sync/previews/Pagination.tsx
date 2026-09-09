import { PaginationCardDefault, PaginationCardMinimal, PaginationPageDefault, PaginationPageMinimalCenter } from "untitledui-vite-starter-kit";

export const PageDefault = () => (
    <div className="w-full max-w-2xl">
        <PaginationPageDefault page={3} total={10} />
    </div>
);

export const MinimalCenter = () => (
    <div className="w-full max-w-2xl">
        <PaginationPageMinimalCenter page={5} total={10} />
    </div>
);

export const CardDefault = () => (
    <div className="w-full max-w-2xl rounded-xl ring-1 ring-secondary">
        <PaginationCardDefault page={2} total={8} />
    </div>
);

export const CardMinimal = () => (
    <div className="w-full max-w-2xl rounded-xl ring-1 ring-secondary">
        <PaginationCardMinimal page={2} total={8} />
    </div>
);

export const Rounded = () => (
    <div className="w-full max-w-2xl">
        <PaginationPageDefault rounded page={4} total={12} />
    </div>
);
