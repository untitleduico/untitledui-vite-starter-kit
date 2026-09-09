import { Button, Calendar } from "untitledui-vite-starter-kit";

export const Default = () => (
    <div className="w-max rounded-2xl bg-primary px-6 py-5 shadow-lg ring-1 ring-secondary_alt">
        <Calendar />
    </div>
);

export const InDatePickerDialog = () => (
    <div className="w-max rounded-2xl bg-primary shadow-xl ring-1 ring-secondary_alt">
        <div className="px-6 py-5">
            <Calendar />
        </div>
        <div className="grid grid-cols-2 gap-3 border-t border-secondary p-4">
            <Button size="md" color="secondary">
                Cancel
            </Button>
            <Button size="md">Apply</Button>
        </div>
    </div>
);
