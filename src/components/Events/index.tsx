import React, { useState, useEffect, useCallback } from 'react'

import * as S from './styles'

const BirthEvents = ({ startDate }: BirthEventsProps) => {
  const [events, setEvents] = useState<BirthEventsData>({} as BirthEventsData)
  const [eventsPerPage, setEventsPerPage] = useState<Events[]>([])
  const [counterPerPage, setCounterPerPage] = useState(10)

  const handleLoadMoreButton = useCallback(() => {
    setCounterPerPage(counterPerPage + 10)
  }, [counterPerPage])

  const isAllEventsLoaded = !!(eventsPerPage?.length === events?.events?.length)

  useEffect(() => {
    if (startDate) {
      fetch(
        `https://byabbe.se/on-this-day/${
          startDate.getMonth() + 1
        }/${startDate.getDate()}/events.json`
      )
        .then((res) => res.json())
        .then((response) => setEvents(response))
    }
  }, [startDate])

  useEffect(() => {
    events?.events?.length &&
      setEventsPerPage(events?.events.slice(0, counterPerPage))
  }, [events, counterPerPage])

  return (
    <>
      <S.EventsContainer>
        {!!events?.events?.length && (
          <>
            <S.EventsContainerTitleContent>
              <S.EventsContainerWikiLink
                href={events.wikipedia}
                rel="noreferrer"
                target="_blank"
              >
                {events.date}
              </S.EventsContainerWikiLink>
            </S.EventsContainerTitleContent>
            <S.EventsContainerList>
              {eventsPerPage.map((event, index) => (
                <S.EventsContainerListItemLink
                  key={`event-${event.year}-${index}`}
                  href={event.wikipedia[0].wikipedia}
                  rel="noreferrer"
                  target="_blank"
                >
                  <S.EventsContainerListItem>
                    <article>
                      <S.EventsContainerListItemDate>
                        {event.year}
                      </S.EventsContainerListItemDate>
                      <S.EventsContainerListItemDescription>
                        {event.description}
                      </S.EventsContainerListItemDescription>
                    </article>
                  </S.EventsContainerListItem>
                </S.EventsContainerListItemLink>
              ))}
            </S.EventsContainerList>

            {!isAllEventsLoaded && (
              <S.LoadMoreButton onClick={handleLoadMoreButton}>
                Load more
              </S.LoadMoreButton>
            )}
          </>
        )}
      </S.EventsContainer>
    </>
  )
}

export default BirthEvents
