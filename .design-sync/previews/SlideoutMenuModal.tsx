import { Button, SlideoutMenuDialog, SlideoutMenuModal, SlideoutMenuModalOverlay } from "untitledui-vite-starter-kit";

/**
 * The sliding panel itself: full height, right-aligned, capped at 400px, with the
 * slide-in transition. It sits inside `SlideoutMenuModalOverlay` and wraps a
 * `SlideoutMenuDialog`. Shown open.
 */
export const Open = () => (
    <SlideoutMenuModalOverlay isOpen>
        <SlideoutMenuModal>
            <SlideoutMenuDialog>
                <header className="w-full px-6 pt-6">
                    <h2 className="text-lg font-semibold text-primary">Invite teammates</h2>
                    <p className="mt-1 text-sm text-tertiary">They'll get an email with a link to join Untitled UI.</p>
                </header>
                <div className="flex w-full flex-1 flex-col gap-4 px-6">
                    {[
                        { name: "Phoenix Baker", email: "phoenix@untitledui.com" },
                        { name: "Lana Steiner", email: "lana@untitledui.com" },
                        { name: "Demi Wilkinson", email: "demi@untitledui.com" },
                    ].map((person) => (
                        <div key={person.email} className="flex flex-col gap-0.5 border-b border-secondary pb-3">
                            <span className="text-sm font-medium text-primary">{person.name}</span>
                            <span className="text-sm text-tertiary">{person.email}</span>
                        </div>
                    ))}
                </div>
                <footer className="w-full p-6">
                    <Button size="md" className="w-full">
                        Send 3 invites
                    </Button>
                </footer>
            </SlideoutMenuDialog>
        </SlideoutMenuModal>
    </SlideoutMenuModalOverlay>
);
