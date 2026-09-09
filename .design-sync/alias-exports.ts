// Re-exports for the source files that .design-sync/overrides/source-kit.mjs
// keeps out of the synth entry.
//
// The synth entry star-exports every component file, and ESM drops any name
// that two star-exported modules both export - which silently removed
// AppStoreButton, Modal, Dialog, ModalOverlay and MastercardIcon from
// window.UntitledUI. Each file below duplicated names owned by another file,
// so it is excluded from the entry and re-exported here: the primary
// implementation keeps the plain name (via the entry), and the second one gets
// a qualified alias. Re-exports only - nothing is reimplemented.

// Outlined app-store buttons. The filled set keeps the plain names.
export {
    AppStoreButton as AppStoreButtonOutline,
    GooglePlayButton as GooglePlayButtonOutline,
    GalaxyStoreButton as GalaxyStoreButtonOutline,
    AppGalleryButton as AppGalleryButtonOutline,
} from "@/components/base/buttons/app-store-buttons-outline";

// The slideout menu, plus its own overlay primitives. The plain Modal, Dialog
// and ModalOverlay names belong to components/application/modals/modal.tsx.
export { SlideoutMenu } from "@/components/application/slideout-menus/slideout-menu";
export {
    Modal as SlideoutMenuModal,
    Dialog as SlideoutMenuDialog,
    ModalOverlay as SlideoutMenuModalOverlay,
} from "@/components/application/slideout-menus/slideout-menu";

// Marks drawn for the credit-card illustration. MastercardIcon is a different
// drawing from the one in the payment-icons set, which keeps the plain name.
export { PaypassIcon, MastercardIconWhite } from "@/components/shared-assets/credit-card/icons";
export { MastercardIcon as CreditCardMastercardIcon } from "@/components/shared-assets/credit-card/icons";
