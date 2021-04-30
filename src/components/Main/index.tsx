import * as S from './styles'
import { useState } from 'react'
import EventsComponent from '../Events'
import BirthsComponent from '../Births'
import DeathsComponent from '../Deaths'
import Days from '../../utils/Days'
import Header from '../Header'
import Months from '../../utils/Months'

export default function Home() {
  const [month, setMonth] = useState('1') // The input starts with Jan selected
  const [day, setDay] = useState('1') // The input starts with day 1 selected
  const [events, setEvents] = useState<Events>()
  const [births, setBirths] = useState<Events>()
  const [deaths, setDeaths] = useState<Events>()
  const [showEvents, setShowEvents] = useState(false)
  const [showBirths, setShowBirths] = useState(false)
  const [showDeaths, setShowDeaths] = useState(false)

  function handleMonthChange(e: any) {
    setMonth(e.target.value)
  }
  function handleDayChange(e: any) {
    setDay(e.target.value)
  }

  function handleSubmit(e: any) {
    e.preventDefault()

    if (month && day) {
      getEvents(month, day)
      getBirths(month, day)
      getDeaths(month, day)
    }
  }

  function getEvents(month: string, day: string) {
    fetch('https://byabbe.se/on-this-day/' + month + '/' + day + '/events.json')
      .then((response) => response.json())
      .then((data: Events) => {
        setEvents(data)
        setShowEvents(true)
      })
  }
  function getBirths(month: string, day: string) {
    fetch('https://byabbe.se/on-this-day/' + month + '/' + day + '/births.json')
      .then((response) => response.json())
      .then((data: Events) => {
        setBirths(data)
        setShowBirths(true)
      })
  }
  function getDeaths(month: string, day: string) {
    fetch('https://byabbe.se/on-this-day/' + month + '/' + day + '/deaths.json')
      .then((response) => response.json())
      .then((data: Events) => {
        setDeaths(data)
        setShowDeaths(true)
      })
  }

  return (
    <S.Wrapper>
      <Header />
      <form onSubmit={handleSubmit}>
        <S.FormSelectWrapper>
        <S.Label htmlFor="months">Choose a Month:</S.Label>
          <S.Select onChange={handleMonthChange} id="months" value={month}>
            <Months />
          </S.Select>

          <S.Label htmlFor="days">Choose a day:</S.Label>
          <S.Select onChange={handleDayChange} value={day} id="days">
            <Days />
          </S.Select>
        </S.FormSelectWrapper>
        <div>
          <button type="submit">Tell me if my birthday mean something</button>
        </div>
      </form>
      <S.ContentDiv>
        <EventsComponent events={events} showEvents={showEvents} />
        <BirthsComponent births={births} showBirths={showBirths} />
        <DeathsComponent deaths={deaths} showDeaths={showDeaths} />
      </S.ContentDiv>
    </S.Wrapper>
  )
}
