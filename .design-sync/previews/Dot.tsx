import { Dot } from "untitledui-vite-starter-kit";

/** A filled `currentColor` circle used as a status marker. It has no colour of its own. */
export const Default = () => <Dot className="text-fg-success-secondary" />;

/** Two sizes: `sm` is an 8px dot, `md` (default) is 10px. */
export const Sizes = () => (
    <div className="flex items-center gap-4 text-fg-success-secondary">
        <Dot size="sm" />
        <Dot size="md" />
    </div>
);

/** The dot carries the semantic colour of whatever state it marks. */
export const Colors = () => (
    <div className="flex items-center gap-6">
        <Dot className="text-fg-success-secondary" />
        <Dot className="text-fg-warning-primary" />
        <Dot className="text-fg-error-secondary" />
        <Dot className="text-fg-quaternary" />
        <Dot className="text-fg-brand-primary" />
    </div>
);

/** In context: leading each row of a deployment status list. */
export const InAStatusList = () => (
    <ul className="flex w-96 flex-col gap-3 rounded-xl bg-primary p-4 ring-1 ring-secondary ring-inset">
        <li className="flex items-center gap-2">
            <Dot className="text-fg-success-secondary" />
            <span className="text-sm text-secondary">Production — deployed 4 min ago</span>
        </li>
        <li className="flex items-center gap-2">
            <Dot className="text-fg-warning-primary" />
            <span className="text-sm text-secondary">Staging — build queued</span>
        </li>
        <li className="flex items-center gap-2">
            <Dot className="text-fg-error-secondary" />
            <span className="text-sm text-secondary">Preview — build failed</span>
        </li>
    </ul>
);
