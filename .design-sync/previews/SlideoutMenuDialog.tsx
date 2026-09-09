import { Button, SlideoutMenuDialog, SlideoutMenuModal, SlideoutMenuModalOverlay } from "untitledui-vite-starter-kit";

/**
 * The scrollable content surface inside a slideout panel — `bg-primary` with a
 * hairline ring, stacking its children in a 24px column. Shown open.
 */
export const Open = () => (
    <SlideoutMenuModalOverlay isOpen>
        <SlideoutMenuModal>
            <SlideoutMenuDialog>
                <header className="w-full px-6 pt-6">
                    <h2 className="text-lg font-semibold text-primary">Notifications</h2>
                    <p className="mt-1 text-sm text-tertiary">You have 3 unread updates.</p>
                </header>
                <div className="flex w-full flex-1 flex-col gap-4 px-6">
                    {[
                        { name: "Phoenix Baker", action: "requested access to Design System", time: "2 min ago" },
                        { name: "Lana Steiner", action: "commented on Q3 Marketing Site", time: "1 hour ago" },
                        { name: "Demi Wilkinson", action: "shipped v2.4 to production", time: "Yesterday" },
                    ].map((item) => (
                        <div key={item.name} className="flex flex-col gap-1 border-b border-secondary pb-4">
                            <p className="text-sm text-secondary">
                                <span className="font-semibold text-primary">{item.name}</span> {item.action}
                            </p>
                            <p className="text-xs text-tertiary">{item.time}</p>
                        </div>
                    ))}
                </div>
                <footer className="w-full p-6">
                    <Button size="md" color="secondary" className="w-full">
                        Mark all as read
                    </Button>
                </footer>
            </SlideoutMenuDialog>
        </SlideoutMenuModal>
    </SlideoutMenuModalOverlay>
);
