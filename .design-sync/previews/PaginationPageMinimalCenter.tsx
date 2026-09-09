import { PaginationPageMinimalCenter } from "untitledui-vite-starter-kit";

export const Default = () => (
    <div className="w-full max-w-3xl">
        <PaginationPageMinimalCenter page={4} total={10} />
    </div>
);

export const Rounded = () => (
    <div className="w-full max-w-3xl">
        <PaginationPageMinimalCenter rounded page={1} total={10} />
    </div>
);

export const ManyPages = () => (
    <div className="w-full max-w-3xl">
        <PaginationPageMinimalCenter page={9} total={32} siblingCount={1} />
    </div>
);
