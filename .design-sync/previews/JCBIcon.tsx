import { JCBIcon } from "untitledui-vite-starter-kit";

/** The JCB card mark. It draws its own bordered white plate, so it reads on any light surface. */
export const Default = () => <JCBIcon className="h-10 w-auto" />;

export const Sizes = () => (
    <div className="flex flex-wrap items-end gap-6">
        <JCBIcon className="h-6 w-auto" />
        <JCBIcon className="h-8 w-auto" />
        <JCBIcon className="h-10 w-auto" />
        <JCBIcon className="h-14 w-auto" />
    </div>
);

/** In context: an accepted-cards row at checkout. */
export const AtCheckout = () => (
    <div className="flex items-center gap-3 rounded-xl bg-primary p-4 ring-1 ring-secondary ring-inset">
        <span className="text-sm font-medium text-secondary">We accept</span>
        <JCBIcon className="h-8 w-auto" />
    </div>
);
