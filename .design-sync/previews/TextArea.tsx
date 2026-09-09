import { TextArea } from "untitledui-vite-starter-kit";

export const Default = () => (
    <div className="w-80">
        <TextArea label="Description" placeholder="Tell us a little about the project…" hint="A short summary helps your team find this later." rows={4} />
    </div>
);

export const Sizes = () => (
    <div className="flex w-80 flex-col gap-4">
        <TextArea size="sm" label="Small" placeholder="Leave a note for the team…" rows={2} />
        <TextArea size="md" label="Medium" placeholder="Leave a note for the team…" rows={2} />
    </div>
);

export const States = () => (
    <div className="flex w-80 flex-col gap-4">
        <TextArea
            isInvalid
            label="Bio"
            value="I'm a product designer based in Melbourne."
            hint="Your bio must be at least 60 characters."
            rows={2}
        />
        <TextArea isDisabled label="Bio" value="I'm a product designer based in Melbourne." rows={2} />
    </div>
);
