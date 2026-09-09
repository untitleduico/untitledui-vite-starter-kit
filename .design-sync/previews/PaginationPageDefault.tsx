import { PaginationPageDefault } from "untitledui-vite-starter-kit";

export const Default = () => (
    <div className="w-full max-w-3xl">
        <PaginationPageDefault page={3} total={10} />
    </div>
);

export const Rounded = () => (
    <div className="w-full max-w-3xl">
        <PaginationPageDefault rounded page={5} total={10} />
    </div>
);

export const ManyPages = () => (
    <div className="w-full max-w-3xl">
        <PaginationPageDefault page={12} total={48} siblingCount={1} />
    </div>
);
