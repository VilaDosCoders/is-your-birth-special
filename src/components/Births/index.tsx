import * as S from '../Main/styles'

interface BirthsComponentTypes {
  births: Births | undefined
  showBirths: boolean
}

export default function BirthsComponent({
  births,
  showBirths
}: BirthsComponentTypes) {
  function birthsDescription() {
    return births?.births?.map((item: BirthsEntity, index) => (
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
      {showBirths && (
        <S.ContentWrapper>
          <S.ContentTitle>
            These were the <span>Births</span> of {births?.date}
            <br />
            <br />
          </S.ContentTitle>
          <div>{birthsDescription()}</div>
        </S.ContentWrapper>
      )}
    </>
  )
}
