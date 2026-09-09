import { BarChart01, Grid01, Rows01 } from "@untitledui/icons";
import { ButtonGroup, ButtonGroupItem } from "untitledui-vite-starter-kit";

/** `ButtonGroupItem` throws outside a `ButtonGroup`, so every cell composes the parent. */
export const Default = () => (
    <ButtonGroup defaultSelectedKeys={["12-months"]}>
        <ButtonGroupItem id="12-months">12 months</ButtonGroupItem>
        <ButtonGroupItem id="30-days">30 days</ButtonGroupItem>
        <ButtonGroupItem id="7-days">7 days</ButtonGroupItem>
        <ButtonGroupItem id="24-hours">24 hours</ButtonGroupItem>
    </ButtonGroup>
);

export const WithIcons = () => (
    <ButtonGroup defaultSelectedKeys={["grid"]}>
        <ButtonGroupItem id="grid" iconLeading={Grid01}>
            Grid
        </ButtonGroupItem>
        <ButtonGroupItem id="rows" iconLeading={Rows01}>
            List
        </ButtonGroupItem>
        <ButtonGroupItem id="chart" iconLeading={BarChart01}>
            Chart
        </ButtonGroupItem>
    </ButtonGroup>
);

export const IconOnly = () => (
    <ButtonGroup defaultSelectedKeys={["grid"]}>
        <ButtonGroupItem id="grid" iconLeading={Grid01} />
        <ButtonGroupItem id="rows" iconLeading={Rows01} />
        <ButtonGroupItem id="chart" iconLeading={BarChart01} />
    </ButtonGroup>
);

export const Disabled = () => (
    <ButtonGroup defaultSelectedKeys={["monthly"]}>
        <ButtonGroupItem id="monthly">Monthly</ButtonGroupItem>
        <ButtonGroupItem id="quarterly">Quarterly</ButtonGroupItem>
        <ButtonGroupItem id="annual" isDisabled>
            Annual
        </ButtonGroupItem>
    </ButtonGroup>
);
