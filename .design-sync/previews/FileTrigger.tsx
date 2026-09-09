import { UploadCloud02 } from "@untitledui/icons";
import { Button, FileTrigger } from "untitledui-vite-starter-kit";

/**
 * `FileTrigger` turns any single pressable child into a file picker: it clones the
 * child with an `onClick` that opens the OS file dialog and renders a hidden
 * `<input type="file">` beside it. It draws nothing of its own.
 */
export const Default = () => (
    <FileTrigger onSelect={() => {}}>
        <Button iconLeading={UploadCloud02}>Upload a file</Button>
    </FileTrigger>
);

/** `acceptedFileTypes` and `allowsMultiple` are forwarded to the hidden input. */
export const Variants = () => (
    <div className="flex flex-wrap items-center gap-3">
        <FileTrigger acceptedFileTypes={["application/pdf"]} onSelect={() => {}}>
            <Button color="secondary">Attach a PDF</Button>
        </FileTrigger>
        <FileTrigger allowsMultiple acceptedFileTypes={["image/png", "image/jpeg"]} onSelect={() => {}}>
            <Button color="secondary">Add photos</Button>
        </FileTrigger>
        <FileTrigger acceptDirectory onSelect={() => {}}>
            <Button color="tertiary">Choose a folder</Button>
        </FileTrigger>
    </div>
);

/** Any pressable element works as the trigger, not only `Button`. */
export const WithACustomTrigger = () => (
    <FileTrigger onSelect={() => {}}>
        <button className="flex w-96 flex-col items-center gap-1 rounded-xl bg-primary px-6 py-5 ring-1 ring-secondary ring-inset">
            <UploadCloud02 className="size-5 text-fg-quaternary" />
            <span className="text-sm font-semibold text-brand-secondary">Click to upload</span>
            <span className="text-xs text-tertiary">PNG, JPG or GIF (max. 800x400px)</span>
        </button>
    </FileTrigger>
);
