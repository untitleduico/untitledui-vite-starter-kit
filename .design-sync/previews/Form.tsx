import { Button, Checkbox, Form, Input, Select, TextArea } from "untitledui-vite-starter-kit";

const plans = [
    { id: "starter", label: "Starter — $19/mo" },
    { id: "growth", label: "Growth — $49/mo" },
    { id: "scale", label: "Scale — $99/mo" },
];

export const SignUpForm = () => (
    <Form className="flex w-80 flex-col gap-4">
        <Input isRequired name="name" label="Full name" placeholder="Olivia Rhye" />
        <Input isRequired name="email" type="email" label="Work email" placeholder="olivia@untitledui.com" />
        <Select name="plan" label="Plan" placeholder="Choose a plan" items={plans}>
            {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
        </Select>
        <Checkbox name="terms" label="I agree to the terms of service" />
        <Button type="submit" size="md">
            Create account
        </Button>
    </Form>
);

export const FeedbackForm = () => (
    <Form className="flex w-80 flex-col gap-4">
        <TextArea isRequired name="feedback" label="What could we improve?" placeholder="Share as much detail as you can…" rows={3} />
        <div className="flex gap-3">
            <Button type="reset" color="secondary" size="md" className="flex-1">
                Clear
            </Button>
            <Button type="submit" size="md" className="flex-1">
                Send feedback
            </Button>
        </div>
    </Form>
);
