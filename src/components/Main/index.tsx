import BirthEvents from 'components/Events'
import React, { useState, useCallback } from 'react'
import DatePicker from 'react-datepicker'

import * as S from './styles'

const Main = () => {
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [currentActiveTab, setCurrentActiveTab] = useState<Tabs>('events')

  const handleActiveTab = useCallback((tabName: Tabs) => {
    setCurrentActiveTab(tabName)
  }, [])

  return (
    <S.Wrapper>
      <S.Title>Is your birthday special?</S.Title>
      <S.Description>
        put in your birthday date and discover if something special was
        happening or not
      </S.Description>
      <DatePicker
        selected={startDate}
        locale="en-US"
        onChange={(date) => setStartDate(date as Date)}
      />
      <section>
        <ul>
          <li>
            <button onClick={() => handleActiveTab('events')}>Events</button>
          </li>
          <li>
            <button onClick={() => handleActiveTab('deaths')}>Deaths</button>
          </li>
          <li>
            <button onClick={() => handleActiveTab('births')}>Births</button>
          </li>
        </ul>

        {currentActiveTab === 'events' && <BirthEvents startDate={startDate} />}
      </section>
    </S.Wrapper>
  )
}

export default Main
