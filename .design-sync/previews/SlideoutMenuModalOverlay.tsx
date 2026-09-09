import { SlideoutMenuDialog, SlideoutMenuModal, SlideoutMenuModalOverlay } from "untitledui-vite-starter-kit";

/**
 * The dimmed, full-screen backdrop of a slideout. It pins the panel to the right edge
 * and keeps a 24-40px gutter. Compose it with `SlideoutMenuModal` and `SlideoutMenuDialog`
 * (or use the `SlideoutMenu` shorthand). Shown open.
 */
export const Open = () => (
    <SlideoutMenuModalOverlay isOpen>
        <SlideoutMenuModal>
            <SlideoutMenuDialog>
                <header className="w-full px-6 pt-6">
                    <h2 className="text-lg font-semibold text-primary">Filters</h2>
                    <p className="mt-1 text-sm text-tertiary">Narrow the invoice list.</p>
                </header>
                <div className="flex w-full flex-col gap-4 px-6">
                    {["Status", "Date range", "Amount", "Owner"].map((group) => (
                        <div key={group} className="flex flex-col gap-1 border-b border-secondary pb-3">
                            <span className="text-sm font-medium text-secondary">{group}</span>
                            <span className="text-sm text-tertiary">Any</span>
                        </div>
                    ))}
                </div>
            </SlideoutMenuDialog>
        </SlideoutMenuModal>
    </SlideoutMenuModalOverlay>
);
