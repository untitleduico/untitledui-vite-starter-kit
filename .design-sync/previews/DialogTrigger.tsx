import { Trash01 } from "@untitledui/icons";
import { Button, Dialog, DialogTrigger, FeaturedIcon, Modal, ModalOverlay } from "untitledui-vite-starter-kit";

/**
 * `DialogTrigger` wires a trigger element to the overlay that follows it, and owns the
 * open state. `defaultOpen` renders it already open, which is what a real click produces.
 */
export const Open = () => (
    <DialogTrigger defaultOpen>
        <Button color="primary-destructive" iconLeading={Trash01}>
            Delete project
        </Button>
        <ModalOverlay>
            <Modal className="max-w-100">
                <Dialog>
                    <div className="w-full rounded-xl bg-primary p-6 shadow-xl">
                        <FeaturedIcon icon={Trash01} color="error" theme="light" size="lg" />
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
    </DialogTrigger>
);
