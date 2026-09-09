import { Plus, SearchLg, UploadCloud01 } from "@untitledui/icons";
import { Button, EmptyState } from "untitledui-vite-starter-kit";

export const NoSearchResults = () => (
    <EmptyState size="sm">
        <EmptyState.Header>
            <EmptyState.FeaturedIcon icon={SearchLg} color="gray" theme="modern" />
        </EmptyState.Header>
        <EmptyState.Content>
            <EmptyState.Title>No projects found</EmptyState.Title>
            <EmptyState.Description>Your search for "annual report" did not match any projects. Try a different keyword.</EmptyState.Description>
        </EmptyState.Content>
        <EmptyState.Footer>
            <Button color="secondary" size="md">
                Clear search
            </Button>
            <Button size="md" iconLeading={Plus}>
                New project
            </Button>
        </EmptyState.Footer>
    </EmptyState>
);

export const WithIllustration = () => (
    <EmptyState size="md">
        <EmptyState.Header>
            <EmptyState.Illustration type="cloud" />
        </EmptyState.Header>
        <EmptyState.Content>
            <EmptyState.Title>Nothing uploaded yet</EmptyState.Title>
            <EmptyState.Description>Drop your first file here and it will be available to everyone on the Design team.</EmptyState.Description>
        </EmptyState.Content>
        <EmptyState.Footer>
            <Button size="md" iconLeading={UploadCloud01}>
                Upload files
            </Button>
        </EmptyState.Footer>
    </EmptyState>
);

export const WithFileTypeIcon = () => (
    <EmptyState size="sm">
        <EmptyState.Header pattern="none">
            <EmptyState.FileTypeIcon type="folder" />
        </EmptyState.Header>
        <EmptyState.Content>
            <EmptyState.Title>This folder is empty</EmptyState.Title>
            <EmptyState.Description>Move files here to keep your Q3 campaign assets together.</EmptyState.Description>
        </EmptyState.Content>
    </EmptyState>
);
