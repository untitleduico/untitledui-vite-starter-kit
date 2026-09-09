import { HintText, Label, TextAreaBase, TextField } from "untitledui-vite-starter-kit";

/** The unlabelled textarea control. `TextArea` wraps it with a label and hint. */
export const Default = () => (
    <div className="w-96">
        <TextField aria-label="Release notes">
            <TextAreaBase rows={4} placeholder="Tell us what changed in this release..." />
        </TextField>
    </div>
);

export const Sizes = () => (
    <div className="flex w-96 flex-col gap-4">
        <TextField aria-label="Summary, small">
            <TextAreaBase size="sm" rows={3} placeholder="Small — 14px, 12px padding" />
        </TextField>
        <TextField aria-label="Summary, medium">
            <TextAreaBase size="md" rows={3} placeholder="Medium — 16px, 14px padding" />
        </TextField>
    </div>
);

export const WithValue = () => (
    <div className="w-96">
        <TextField aria-label="Bio" defaultValue="Product designer at Untitled UI. Previously at Layers and Sisyphus. Based in Melbourne.">
            <TextAreaBase rows={4} />
        </TextField>
    </div>
);

export const States = () => (
    <div className="flex w-96 flex-col gap-5">
        <TextField isInvalid className="gap-1.5">
            <Label isInvalid>Feedback</Label>
            <TextAreaBase rows={3} defaultValue="Too" />
            <HintText isInvalid>Please write at least 20 characters.</HintText>
        </TextField>
        <TextField isDisabled className="gap-1.5">
            <Label>Feedback</Label>
            <TextAreaBase rows={3} placeholder="Reviews are closed for this release." />
        </TextField>
    </div>
);
