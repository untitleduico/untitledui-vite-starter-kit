import { FileUpload } from "untitledui-vite-starter-kit";

/**
 * `FileUpload` is a namespace of the four pieces that make an uploader:
 * `Root` (the column), `DropZone` (the drop target), `List` (the animated `<ul>`)
 * and the two list-item variants.
 */
export const DropZone = () => (
    <div className="w-96">
        <FileUpload.Root>
            <FileUpload.DropZone hint="SVG, PNG, JPG or GIF (max. 800x400px)" />
        </FileUpload.Root>
    </div>
);

/** The whole uploader: drop zone plus the queue of files below it. */
export const WithFileList = () => (
    <div className="w-96">
        <FileUpload.Root>
            <FileUpload.DropZone accept="application/pdf,image/*" hint="PDF, PNG or JPG (max. 20 MB)" />
            <FileUpload.List>
                <FileUpload.ListItemProgressBar name="q3-brand-guidelines.pdf" type="pdf" size={7_340_032} progress={64} />
                <FileUpload.ListItemProgressBar name="dashboard-hero.png" type="img" size={2_411_724} progress={100} />
            </FileUpload.List>
        </FileUpload.Root>
    </div>
);

/** `ListItemProgressFill` is the alternative row: the progress sweeps across the whole card. */
export const ProgressFillRows = () => (
    <div className="w-96">
        <FileUpload.Root>
            <FileUpload.List>
                <FileUpload.ListItemProgressFill name="team-offsite.mp4" type="video" size={214_958_080} progress={41} />
                <FileUpload.ListItemProgressFill name="payroll-january.xlsx" type="spreadsheets" size={1_258_291} progress={100} />
            </FileUpload.List>
        </FileUpload.Root>
    </div>
);

/** A disabled drop zone refuses drops and greys its icon. */
export const Disabled = () => (
    <div className="w-96">
        <FileUpload.Root>
            <FileUpload.DropZone isDisabled hint="Uploads are paused while your plan is over quota." />
        </FileUpload.Root>
    </div>
);
