import { Button, SlideoutMenu } from "untitledui-vite-starter-kit";

/**
 * A right-hand drawer. `SlideoutMenu` composes the overlay, panel and dialog; wrap it in
 * `SlideoutMenu.Trigger` in an app. Shown here already open.
 */
export const NotificationsPanel = () => (
    <SlideoutMenu isOpen>
        <SlideoutMenu.Header>
            <h2 className="text-lg font-semibold text-primary">Notifications</h2>
            <p className="mt-1 text-sm text-tertiary">You have 3 unread updates.</p>
        </SlideoutMenu.Header>
        <SlideoutMenu.Content>
            {[
                { name: "Phoenix Baker", action: "requested access to Design System", time: "2 min ago" },
                { name: "Lana Steiner", action: "commented on Q3 Marketing Site", time: "1 hour ago" },
                { name: "Demi Wilkinson", action: "shipped v2.4 to production", time: "Yesterday" },
            ].map((item) => (
                <div key={item.name} className="flex flex-col gap-1 border-b border-secondary pb-4">
                    <p className="text-sm text-secondary">
                        <span className="font-semibold text-primary">{item.name}</span> {item.action}
                    </p>
                    <p className="text-xs text-tertiary">{item.time}</p>
                </div>
            ))}
        </SlideoutMenu.Content>
        <SlideoutMenu.Footer>
            <div className="flex gap-3">
                <Button color="secondary" size="md" className="flex-1">
                    Mark all read
                </Button>
                <Button size="md" className="flex-1">
                    View all
                </Button>
            </div>
        </SlideoutMenu.Footer>
    </SlideoutMenu>
);
