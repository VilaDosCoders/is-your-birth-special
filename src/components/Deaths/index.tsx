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
      <span key={index}>
        {' '}
        {item.description}
        <br />
        <br />
      </span>
    ))
  }

  return (
    <>
      {showDeaths && (
        <div>
          <span>
            These were the <span>Deaths</span> of {deaths?.date}
            <br />
            <br />
          </span>
          <div>{deathsDescription()}</div>
        </div>
      )}
    </>
  )
}
