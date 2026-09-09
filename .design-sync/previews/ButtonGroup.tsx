import { BarChart01, Grid01, List, Rows01 } from "@untitledui/icons";
import { ButtonGroup, ButtonGroupItem } from "untitledui-vite-starter-kit";

export const Default = () => (
    <ButtonGroup defaultSelectedKeys={["12m"]}>
        <ButtonGroupItem id="12m">12 months</ButtonGroupItem>
        <ButtonGroupItem id="30d">30 days</ButtonGroupItem>
        <ButtonGroupItem id="7d">7 days</ButtonGroupItem>
        <ButtonGroupItem id="24h">24 hours</ButtonGroupItem>
    </ButtonGroup>
);

export const Sizes = () => (
    <div className="flex flex-col items-start gap-4">
        <ButtonGroup size="sm" defaultSelectedKeys={["list"]}>
            <ButtonGroupItem id="list">List</ButtonGroupItem>
            <ButtonGroupItem id="board">Board</ButtonGroupItem>
            <ButtonGroupItem id="timeline">Timeline</ButtonGroupItem>
        </ButtonGroup>
        <ButtonGroup size="md" defaultSelectedKeys={["list"]}>
            <ButtonGroupItem id="list">List</ButtonGroupItem>
            <ButtonGroupItem id="board">Board</ButtonGroupItem>
            <ButtonGroupItem id="timeline">Timeline</ButtonGroupItem>
        </ButtonGroup>
        <ButtonGroup size="lg" defaultSelectedKeys={["list"]}>
            <ButtonGroupItem id="list">List</ButtonGroupItem>
            <ButtonGroupItem id="board">Board</ButtonGroupItem>
            <ButtonGroupItem id="timeline">Timeline</ButtonGroupItem>
        </ButtonGroup>
    </div>
);

export const WithIcons = () => (
    <div className="flex flex-col items-start gap-4">
        <ButtonGroup defaultSelectedKeys={["grid"]}>
            <ButtonGroupItem id="grid" iconLeading={Grid01}>
                Grid
            </ButtonGroupItem>
            <ButtonGroupItem id="rows" iconLeading={Rows01}>
                Rows
            </ButtonGroupItem>
            <ButtonGroupItem id="chart" iconLeading={BarChart01}>
                Chart
            </ButtonGroupItem>
        </ButtonGroup>
        <ButtonGroup defaultSelectedKeys={["grid"]}>
            <ButtonGroupItem id="grid" iconLeading={Grid01} />
            <ButtonGroupItem id="rows" iconLeading={Rows01} />
            <ButtonGroupItem id="list" iconLeading={List} />
        </ButtonGroup>
    </div>
);

export const Disabled = () => (
    <ButtonGroup defaultSelectedKeys={["board"]}>
        <ButtonGroupItem id="list">List</ButtonGroupItem>
        <ButtonGroupItem id="board">Board</ButtonGroupItem>
        <ButtonGroupItem id="timeline" isDisabled>
            Timeline
        </ButtonGroupItem>
    </ButtonGroup>
);
