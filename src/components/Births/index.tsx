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
      {showBirths && (
        <div>
          <span>
            These were the <span>Births</span> of {births?.date}
            <br />
            <br />
          </span>
          <div>{birthsDescription()}</div>
        </div>
      )}
    </>
  )
}
