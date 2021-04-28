import { Events, EventsEntity } from "../../types";

interface EventsComponentTypes {
  events: Events;
}

export default function EventsComponent({ events }: EventsComponentTypes) {
  function eventsDescription() {
    return events?.events.map((item: EventsEntity, index) => (
      <span key={index}> {item.description}<br/><br/></span>
    ));
  }

  return (
    <div>
      <span>
        These were the <span>Events</span> of {events?.date}<br/><br/>
      </span>
      <div>{eventsDescription()}</div>
    </div>
  );
}
