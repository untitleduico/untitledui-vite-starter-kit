import { RatingBadge } from "untitledui-vite-starter-kit";

export const Default = () => <RatingBadge rating={5} title="Best Design Tool" subtitle="2,000+ reviews" />;

/** The `light` theme is for use on solid brand backgrounds. */
export const OnBrand = () => (
    <div className="flex justify-center rounded-xl bg-brand-solid px-10 py-6">
        <RatingBadge theme="light" rating={4.5} title="Editor's Choice 2025" subtitle="Product Hunt" />
    </div>
);
