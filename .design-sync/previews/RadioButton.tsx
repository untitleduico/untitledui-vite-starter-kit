import { RadioButton, RadioGroup } from "untitledui-vite-starter-kit";

export const WithLabel = () => (
    <RadioGroup defaultValue="monthly" aria-label="Billing period">
        <RadioButton value="monthly" label="Monthly billing" />
        <RadioButton value="annual" label="Annual billing" />
    </RadioGroup>
);

export const WithHint = () => (
    <RadioGroup defaultValue="annual" aria-label="Billing period" className="max-w-80">
        <RadioButton value="monthly" label="Monthly billing" hint="Pay $20 per member each month." />
        <RadioButton value="annual" label="Annual billing" hint="Pay $16 per member each month, billed yearly." />
    </RadioGroup>
);

export const Sizes = () => (
    <div className="flex flex-col gap-6">
        <RadioGroup size="sm" defaultValue="card" aria-label="Payment method, small">
            <RadioButton value="card" label="Credit card" />
            <RadioButton value="bank" label="Bank transfer" />
        </RadioGroup>
        <RadioGroup size="md" defaultValue="card" aria-label="Payment method, medium">
            <RadioButton value="card" label="Credit card" />
            <RadioButton value="bank" label="Bank transfer" />
        </RadioGroup>
    </div>
);

export const Disabled = () => (
    <RadioGroup defaultValue="card" aria-label="Payment method">
        <RadioButton value="card" label="Credit card" />
        <RadioButton value="bank" label="Bank transfer" isDisabled hint="Not available on the Basic plan." />
    </RadioGroup>
);
