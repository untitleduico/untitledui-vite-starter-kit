import { AlertTriangle, CheckCircle, Settings01, UploadCloud01, XCircle } from "@untitledui/icons";
import { FeaturedIcon } from "untitledui-vite-starter-kit";

export const Colors = () => (
    <div className="flex flex-wrap items-center gap-4">
        <FeaturedIcon icon={UploadCloud01} color="brand" theme="light" size="lg" />
        <FeaturedIcon icon={CheckCircle} color="success" theme="light" size="lg" />
        <FeaturedIcon icon={AlertTriangle} color="warning" theme="light" size="lg" />
        <FeaturedIcon icon={XCircle} color="error" theme="light" size="lg" />
        <FeaturedIcon icon={Settings01} color="gray" theme="light" size="lg" />
    </div>
);

export const Themes = () => (
    <div className="flex flex-wrap items-center gap-4">
        <FeaturedIcon icon={UploadCloud01} color="brand" theme="light" size="lg" />
        <FeaturedIcon icon={UploadCloud01} color="brand" theme="gradient" size="lg" />
        <FeaturedIcon icon={UploadCloud01} color="brand" theme="dark" size="lg" />
        <FeaturedIcon icon={UploadCloud01} color="brand" theme="outline" size="lg" />
    </div>
);

/** The `modern` and `modern-neue` themes are gray-only. */
export const ModernThemes = () => (
    <div className="flex flex-wrap items-center gap-4">
        <FeaturedIcon icon={Settings01} color="gray" theme="modern" size="lg" />
        <FeaturedIcon icon={Settings01} color="gray" theme="modern-neue" size="lg" />
    </div>
);

export const Sizes = () => (
    <div className="flex flex-wrap items-center gap-4">
        <FeaturedIcon icon={CheckCircle} color="success" theme="light" size="sm" />
        <FeaturedIcon icon={CheckCircle} color="success" theme="light" size="md" />
        <FeaturedIcon icon={CheckCircle} color="success" theme="light" size="lg" />
        <FeaturedIcon icon={CheckCircle} color="success" theme="light" size="xl" />
    </div>
);
