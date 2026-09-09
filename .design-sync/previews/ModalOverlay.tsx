import { Trash01, Zap } from "@untitledui/icons";
import { Button, Dialog, FeaturedIcon, Modal, ModalOverlay } from "untitledui-vite-starter-kit";

export const ConfirmDialog = () => (
    <ModalOverlay isOpen>
        <Modal className="max-w-100">
            <Dialog>
                <div className="w-full rounded-xl bg-primary p-6 shadow-xl">
                    <FeaturedIcon icon={Trash01} color="error" theme="light" size="lg" />
                    <h2 className="mt-4 text-lg font-semibold text-primary">Delete workspace</h2>
                    <p className="mt-1 text-sm text-tertiary">
                        Deleting "Acme Design" removes all 18 projects and revokes access for 7 members. This cannot be undone.
                    </p>
                    <div className="mt-6 flex gap-3">
                        <Button color="secondary" size="lg" className="flex-1">
                            Cancel
                        </Button>
                        <Button color="primary-destructive" size="lg" className="flex-1">
                            Delete workspace
                        </Button>
                    </div>
                </div>
            </Dialog>
        </Modal>
    </ModalOverlay>
);

export const WidePanel = () => (
    <ModalOverlay isOpen>
        <Modal className="max-w-160">
            <Dialog>
                <div className="w-full rounded-xl bg-primary p-6 shadow-xl">
                    <FeaturedIcon icon={Zap} color="brand" theme="light" size="lg" />
                    <h2 className="mt-4 text-lg font-semibold text-primary">Upgrade to Business</h2>
                    <p className="mt-1 text-sm text-tertiary">
                        Unlimited projects, SSO and audit logs for $32 per member each month. Your next invoice is issued on 1 June.
                    </p>
                    <div className="mt-6 flex justify-end gap-3">
                        <Button color="secondary" size="lg">
                            Maybe later
                        </Button>
                        <Button size="lg">Upgrade plan</Button>
                    </div>
                </div>
            </Dialog>
        </Modal>
    </ModalOverlay>
);
