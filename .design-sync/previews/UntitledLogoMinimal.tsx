import { UntitledLogoMinimal } from "untitledui-vite-starter-kit";

export const Default = () => <UntitledLogoMinimal className="size-10" />;

/** The logomark alone — used where the wordmark will not fit, such as a slim sidebar. */
export const Sizes = () => (
    <div className="flex items-end gap-6">
        <UntitledLogoMinimal className="size-6" />
        <UntitledLogoMinimal className="size-8" />
        <UntitledLogoMinimal className="size-12" />
    </div>
);
