import { IPhoneMockup } from "untitledui-vite-starter-kit";

/** The mockup only draws the device chrome - `image` supplies the screen artwork. */
const screen = (accent: string, ground: string, text: string) =>
    "data:image/svg+xml," +
    encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="750" height="1624" viewBox="0 0 750 1624">
            <rect width="750" height="1624" fill="${ground}"/>
            <rect x="48" y="120" width="240" height="28" rx="14" fill="${text}" opacity="0.85"/>
            <rect x="48" y="188" width="420" height="52" rx="12" fill="${text}" opacity="0.5"/>
            <rect x="48" y="300" width="654" height="300" rx="28" fill="${accent}"/>
            <rect x="96" y="360" width="300" height="24" rx="12" fill="#ffffff" opacity="0.9"/>
            <rect x="96" y="410" width="460" height="18" rx="9" fill="#ffffff" opacity="0.6"/>
            <rect x="96" y="500" width="220" height="56" rx="28" fill="#ffffff" opacity="0.95"/>
            <rect x="48" y="660" width="654" height="160" rx="24" fill="${text}" opacity="0.08"/>
            <rect x="48" y="860" width="654" height="160" rx="24" fill="${text}" opacity="0.08"/>
            <rect x="48" y="1060" width="654" height="160" rx="24" fill="${text}" opacity="0.08"/>
            <rect x="48" y="1420" width="654" height="120" rx="32" fill="${text}" opacity="0.06"/>
        </svg>`,
    );

export const Default = () => <IPhoneMockup className="w-56" image={screen("#7f56d9", "#ffffff", "#101828")} />;

/** `theme` controls the device frame color; pair it with matching screen artwork. */
export const Themes = () => (
    <div className="flex items-start gap-8">
        <IPhoneMockup className="w-48" theme="light" image={screen("#7f56d9", "#ffffff", "#101828")} />
        <IPhoneMockup className="w-48" theme="dark" image={screen("#9e77ed", "#0c111d", "#ffffff")} />
    </div>
);
