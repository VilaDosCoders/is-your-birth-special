import { Events, EventsEntity } from "../../types";

interface EventsComponentTypes {
  events: Events;
  showEvents: Boolean;
}

export default function EventsComponent({
  events,
  showEvents,
}: EventsComponentTypes) {
  function eventsDescription() {
    return events?.events.map((item: EventsEntity, index) => (
      <span key={index}>
        {" "}
        {item.description}
        <br />
        <br />
      </span>
    ));
  }

  return (
    showEvents && (
      <div>
        <span>
          These were the <span>Events</span> of {events?.date}
          <br />
          <br />
        </span>
        <div>{eventsDescription()}</div>
      </div>
    )
  );
}
