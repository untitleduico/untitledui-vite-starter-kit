import { InputFile } from "untitledui-vite-starter-kit";

export const Default = () => (
    <div className="w-80">
        <InputFile label="Company logo" hint="SVG, PNG or JPG (max. 800×400px)." />
    </div>
);

export const Sizes = () => (
    <div className="flex w-80 flex-col gap-4">
        <InputFile size="sm" label="Small" placeholder="Choose a file" />
        <InputFile size="md" label="Medium" placeholder="Choose a file" />
        <InputFile size="lg" label="Large" placeholder="Choose a file" />
    </div>
);

export const States = () => (
    <div className="flex w-80 flex-col gap-4">
        <InputFile isRequired label="Signed contract" buttonText="Browse" acceptedFileTypes={["application/pdf"]} />
        <InputFile isInvalid label="Signed contract" hint="This file type is not supported." />
        <InputFile isLoading label="Uploading" placeholder="q3-report.pdf" />
        <InputFile isDisabled label="Disabled" />
    </div>
);
