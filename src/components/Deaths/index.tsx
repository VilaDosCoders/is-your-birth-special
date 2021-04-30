import * as S from '../Main/styles'

interface DeathsComponentTypes {
  deaths: Deaths | undefined
  showDeaths: boolean
}

export default function DeathsComponent({
  deaths,
  showDeaths
}: DeathsComponentTypes) {
  function deathsDescription() {
    return deaths?.deaths?.map((item: DeathsEntity, index) => (
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
      {showDeaths && (
        <S.ContentWrapper>
          <S.ContentTitle>
            These were the <span>Deaths</span> of {deaths?.date}
            <br />
            <br />
          </S.ContentTitle>
          <div>{deathsDescription()}</div>
        </S.ContentWrapper>
      )}
    </>
  )
}
