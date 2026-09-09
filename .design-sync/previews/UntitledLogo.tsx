import { UntitledLogo } from "untitledui-vite-starter-kit";

export const Default = () => <UntitledLogo className="h-8" />;

/** The mark, gap and wordmark all scale from the container height. */
export const Sizes = () => (
    <div className="flex flex-col items-start gap-6">
        <UntitledLogo className="h-6" />
        <UntitledLogo className="h-8" />
        <UntitledLogo className="h-10" />
    </div>
);

export const InAppHeader = () => (
    <div className="flex w-full max-w-xl items-center justify-between rounded-xl border border-secondary bg-primary px-5 py-4">
        <UntitledLogo className="h-6" />
        <nav className="flex items-center gap-5 text-sm font-semibold text-secondary">
            <span>Dashboard</span>
            <span>Projects</span>
            <span>Reporting</span>
        </nav>
    </div>
);
