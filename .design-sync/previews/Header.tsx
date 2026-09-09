import { Header } from "untitledui-vite-starter-kit";

/** The marketing site header: logo, primary nav with dropdown triggers, and sign-up actions. */
export const Default = () => <Header />;

/** `isFloating` lifts the bar into a rounded, shadowed card. */
export const Floating = () => (
    <div className="bg-secondary py-2">
        <Header isFloating />
    </div>
);
