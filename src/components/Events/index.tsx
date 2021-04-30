import * as S from '../Main/styles'

interface EventsComponentTypes {
  events: Events | undefined
  showEvents: boolean
}

export default function EventsComponent({
  events,
  showEvents
}: EventsComponentTypes) {
  function eventsDescription() {
    return events?.events?.map((item: EventsEntity, index) => (
      <S.ContentDescription key={index}>
        {' '}
        {item.description}
        <br />
        <br />
      </S.ContentDescription>
    ))
  }

  return (
    <>
      {showEvents && (
        <S.ContentWrapper>
          <S.ContentTitle>
            These were the <span>Events</span> of {events?.date}
            <br />
            <br />
          </S.ContentTitle>
          <div>{eventsDescription()}</div>
        </S.ContentWrapper>
      )}
    </>
  )
}
