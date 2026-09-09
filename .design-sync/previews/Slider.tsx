import { Slider } from "untitledui-vite-starter-kit";

export const Default = () => (
    <div className="w-80">
        <Slider defaultValue={40} />
    </div>
);

export const LabelPositions = () => (
    <div className="flex w-80 flex-col gap-24 py-10">
        <Slider labelPosition="bottom" defaultValue={60} />
        <Slider labelPosition="top-floating" defaultValue={25} />
    </div>
);

export const Range = () => (
    <div className="w-80">
        <Slider defaultValue={[20, 75]} labelPosition="bottom" />
    </div>
);
