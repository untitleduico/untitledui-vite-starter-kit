import { AlertTriangle } from "@untitledui/icons";
import { Button, Dialog, FeaturedIcon, Modal, ModalOverlay } from "untitledui-vite-starter-kit";

/**
 * `Modal` is the centered panel; it must sit inside a `ModalOverlay` and wrap a `Dialog`.
 * Shown here already open - in an app the trio is driven by a `DialogTrigger`.
 */
export const ConfirmDialog = () => (
    <ModalOverlay isOpen>
        <Modal className="max-w-100">
            <Dialog>
                <div className="w-full rounded-xl bg-primary p-6 shadow-xl">
                    <FeaturedIcon icon={AlertTriangle} color="error" theme="light" size="lg" />
                    <h2 className="mt-4 text-lg font-semibold text-primary">Delete project</h2>
                    <p className="mt-1 text-sm text-tertiary">
                        This will permanently delete "Q3 Marketing Site" and all 42 of its files. This action cannot be undone.
                    </p>
                    <div className="mt-6 flex gap-3">
                        <Button color="secondary" size="lg" className="flex-1">
                            Cancel
                        </Button>
                        <Button color="primary-destructive" size="lg" className="flex-1">
                            Delete
                        </Button>
                    </div>
                </div>
            </Dialog>
        </Modal>
    </ModalOverlay>
);
