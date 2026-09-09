import { NativeSelect } from "untitledui-vite-starter-kit";

const countries = [
    { label: "United States", value: "us" },
    { label: "United Kingdom", value: "uk" },
    { label: "Australia", value: "au" },
    { label: "Canada", value: "ca" },
];

export const Default = () => (
    <div className="w-80">
        <NativeSelect label="Country" options={countries} defaultValue="us" />
    </div>
);

export const WithHint = () => (
    <div className="w-80">
        <NativeSelect label="Billing country" hint="This determines the tax rate applied to your invoices." options={countries} defaultValue="uk" />
    </div>
);

export const Sizes = () => (
    <div className="flex w-80 flex-col gap-4">
        <NativeSelect size="sm" label="Small" options={countries} defaultValue="us" />
        <NativeSelect size="md" label="Medium" options={countries} defaultValue="us" />
        <NativeSelect size="lg" label="Large" options={countries} defaultValue="us" />
    </div>
);

export const Disabled = () => (
    <div className="w-80">
        <NativeSelect disabled label="Country" options={countries} defaultValue="ca" />
    </div>
);
