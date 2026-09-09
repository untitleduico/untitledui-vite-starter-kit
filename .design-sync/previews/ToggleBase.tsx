import { ToggleBase } from "untitledui-vite-starter-kit";

/** The presentational switch. `Toggle` drives it from React Aria state; pass the states directly here. */
export const States = () => (
    <div className="flex items-center gap-8">
        {[
            { label: "Off", props: {} },
            { label: "On", props: { isSelected: true } },
            { label: "Disabled", props: { isDisabled: true } },
            { label: "On, disabled", props: { isSelected: true, isDisabled: true } },
        ].map((state) => (
            <div key={state.label} className="flex flex-col items-center gap-2">
                <ToggleBase {...state.props} />
                <span className="text-xs font-medium text-tertiary">{state.label}</span>
            </div>
        ))}
    </div>
);

export const Sizes = () => (
    <div className="flex items-center gap-8">
        <div className="flex flex-col items-center gap-2">
            <ToggleBase size="sm" isSelected />
            <span className="text-xs font-medium text-tertiary">sm</span>
        </div>
        <div className="flex flex-col items-center gap-2">
            <ToggleBase size="md" isSelected />
            <span className="text-xs font-medium text-tertiary">md</span>
        </div>
    </div>
);

/** `slim` is the low-profile treatment used inside dense settings rows. */
export const Slim = () => (
    <div className="flex items-center gap-8">
        <ToggleBase slim size="sm" />
        <ToggleBase slim size="sm" isSelected />
        <ToggleBase slim size="md" />
        <ToggleBase slim size="md" isSelected />
    </div>
);
