import { ChatGPTIcon } from "untitledui-vite-starter-kit";

export const Default = () => <ChatGPTIcon className="size-8" />;

export const Grayscale = () => (
    <div className="flex items-center gap-6">
        <ChatGPTIcon className="size-8" />
        <ChatGPTIcon grayscale className="size-8" />
    </div>
);

export const InAnIntegrationRow = () => (
    <div className="flex w-full max-w-sm items-center gap-3 rounded-xl border border-secondary bg-primary p-4">
        <span className="flex size-10 items-center justify-center rounded-lg border border-secondary bg-primary">
            <ChatGPTIcon className="size-6" />
        </span>
        <div className="flex flex-col">
            <span className="text-sm font-medium text-primary">ChatGPT</span>
            <span className="text-sm text-tertiary">Connected 3 days ago</span>
        </div>
    </div>
);
