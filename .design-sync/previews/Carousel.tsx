import { ArrowLeft, ArrowRight } from "@untitledui/icons";
import { Carousel } from "untitledui-vite-starter-kit";

const slides = [
    { title: "Track every dollar", body: "Untitled brings spend, budgets and forecasts into one dashboard." },
    { title: "Close the books faster", body: "Automated reconciliation cuts month-end from days to hours." },
    { title: "Share with your team", body: "Invite finance and ops, and keep everyone on the same numbers." },
];

export const Default = () => (
    <Carousel.Root className="w-full max-w-xl">
        <Carousel.Content>
            {slides.map((slide) => (
                <Carousel.Item key={slide.title}>
                    <div className="flex h-48 flex-col justify-end gap-1 rounded-xl bg-secondary p-6">
                        <span className="text-lg font-semibold text-primary">{slide.title}</span>
                        <span className="text-sm text-tertiary">{slide.body}</span>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel.Content>
    </Carousel.Root>
);

export const WithTriggersAndIndicators = () => (
    <Carousel.Root className="w-full max-w-xl">
        <Carousel.Content>
            {slides.map((slide) => (
                <Carousel.Item key={slide.title}>
                    <div className="flex h-48 flex-col justify-end gap-1 rounded-xl bg-secondary p-6">
                        <span className="text-lg font-semibold text-primary">{slide.title}</span>
                        <span className="text-sm text-tertiary">{slide.body}</span>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel.Content>

        <div className="mt-4 flex items-center justify-between">
            <Carousel.IndicatorGroup className="flex items-center gap-2">
                {({ index }) => (
                    <Carousel.Indicator
                        key={index}
                        index={index}
                        className={({ isSelected }) => (isSelected ? "size-2.5 rounded-full bg-brand-solid" : "size-2.5 rounded-full bg-quaternary")}
                    />
                )}
            </Carousel.IndicatorGroup>

            <div className="flex items-center gap-2">
                <Carousel.PrevTrigger className="flex size-9 items-center justify-center rounded-lg bg-primary text-fg-secondary shadow-xs ring-1 ring-primary ring-inset">
                    <ArrowLeft className="size-5" />
                </Carousel.PrevTrigger>
                <Carousel.NextTrigger className="flex size-9 items-center justify-center rounded-lg bg-primary text-fg-secondary shadow-xs ring-1 ring-primary ring-inset">
                    <ArrowRight className="size-5" />
                </Carousel.NextTrigger>
            </div>
        </div>
    </Carousel.Root>
);

export const PeekingSlides = () => (
    <Carousel.Root className="w-full max-w-xl" opts={{ align: "start" }}>
        <Carousel.Content className="gap-4">
            {["Growth", "Retention", "Revenue", "Churn"].map((metric, index) => (
                <Carousel.Item key={metric} style={{ flexBasis: "50%" }}>
                    <div className="flex h-32 flex-col justify-between rounded-xl border border-secondary bg-primary p-4">
                        <span className="text-sm font-medium text-tertiary">{metric}</span>
                        <span className="text-2xl font-semibold text-primary">{[42, 88, 61, 7][index]}%</span>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel.Content>
    </Carousel.Root>
);
