import { SectionDivider } from "untitledui-vite-starter-kit";

/** A full-bleed hairline used to separate marketing page sections. */
export const BetweenSections = () => (
    <div className="w-full">
        <div className="px-4 py-8 md:px-8">
            <h2 className="text-xl font-semibold text-primary">Built for modern product teams</h2>
            <p className="mt-1 text-md text-tertiary">Everything you need to design, build and ship faster.</p>
        </div>
        <SectionDivider />
        <div className="px-4 py-8 md:px-8">
            <h2 className="text-xl font-semibold text-primary">Trusted by 4,000+ companies</h2>
            <p className="mt-1 text-md text-tertiary">From seed-stage startups to the Fortune 500.</p>
        </div>
    </div>
);
