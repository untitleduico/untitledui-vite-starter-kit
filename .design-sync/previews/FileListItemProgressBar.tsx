import { FileListItemProgressBar } from "untitledui-vite-starter-kit";

/** A file mid-upload. Progress is reported with a progress bar under the file name. */
export const Uploading = () => (
    <ul className="flex w-96 flex-col gap-3">
        <FileListItemProgressBar name="q3-brand-guidelines.pdf" type="pdf" size={7_340_032} progress={64} />
    </ul>
);

/** `progress={100}` switches the status line to "Complete". */
export const States = () => (
    <ul className="flex w-96 flex-col gap-3">
        <FileListItemProgressBar name="q3-brand-guidelines.pdf" type="pdf" size={7_340_032} progress={32} />
        <FileListItemProgressBar name="team-offsite.mp4" type="video" size={214_958_080} progress={100} />
        <FileListItemProgressBar name="payroll-january.xlsx" type="spreadsheets" size={1_258_291} progress={12} failed />
    </ul>
);

/** `type` picks the file-type glyph; `fileIconVariant` switches its treatment. */
export const FileTypes = () => (
    <ul className="flex w-96 flex-col gap-3">
        <FileListItemProgressBar name="dashboard-hero.png" type="img" size={2_411_724} progress={100} />
        <FileListItemProgressBar name="onboarding-flow.fig" type="fig" size={18_874_368} progress={100} fileIconVariant="solid" />
        <FileListItemProgressBar name="api-client.ts" type="code" size={48_128} progress={100} fileIconVariant="gray" />
    </ul>
);
