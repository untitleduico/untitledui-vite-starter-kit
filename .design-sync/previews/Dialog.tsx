import { AlertTriangle } from "@untitledui/icons";
import { Button, Dialog, FeaturedIcon, Modal, ModalOverlay } from "untitledui-vite-starter-kit";

/**
 * `Dialog` is the accessible container for a modal's contents — it owns the focus
 * trap and the `role="dialog"` semantics. It must sit inside a `Modal`, which in
 * turn sits inside a `ModalOverlay`. Shown here already open.
 */
export const InsideAModal = () => (
    <ModalOverlay isOpen>
        <Modal className="max-w-100">
            <Dialog>
                <div className="w-full rounded-xl bg-primary p-6 shadow-xl">
                    <FeaturedIcon icon={AlertTriangle} color="warning" theme="light" size="lg" />
                    <h2 className="mt-4 text-lg font-semibold text-primary">Cancel subscription</h2>
                    <p className="mt-1 text-sm text-tertiary">
                        Your team keeps access to Untitled UI until 31 March 2025. After that, all 12 seats are removed.
                    </p>
                    <div className="mt-6 flex gap-3">
                        <Button color="secondary" size="lg" className="flex-1">
                            Keep plan
                        </Button>
                        <Button color="primary-destructive" size="lg" className="flex-1">
                            Cancel plan
                        </Button>
                    </div>
                </div>
            </Dialog>
        </Modal>
    </ModalOverlay>
);
