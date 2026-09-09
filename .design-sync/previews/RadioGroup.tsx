import { RadioButton, RadioGroup } from "untitledui-vite-starter-kit";

export const Vertical = () => (
    <RadioGroup defaultValue="annual" aria-label="Billing period" className="max-w-80">
        <RadioButton value="monthly" label="Monthly billing" hint="Pay $20 per member each month." />
        <RadioButton value="annual" label="Annual billing" hint="Pay $16 per member each month, billed yearly." />
    </RadioGroup>
);

export const Horizontal = () => (
    <RadioGroup orientation="horizontal" defaultValue="standard" aria-label="Shipping speed" className="flex-row gap-6">
        <RadioButton value="standard" label="Standard" />
        <RadioButton value="express" label="Express" />
        <RadioButton value="overnight" label="Overnight" />
    </RadioGroup>
);

export const SizeMd = () => (
    <RadioGroup size="md" defaultValue="card" aria-label="Payment method" className="max-w-80">
        <RadioButton value="card" label="Credit card" hint="Visa, Mastercard and American Express." />
        <RadioButton value="bank" label="Bank transfer" hint="Takes 2–3 business days to clear." />
    </RadioGroup>
);

export const DisabledGroup = () => (
    <RadioGroup isDisabled defaultValue="monthly" aria-label="Billing period">
        <RadioButton value="monthly" label="Monthly billing" />
        <RadioButton value="annual" label="Annual billing" />
    </RadioGroup>
);
