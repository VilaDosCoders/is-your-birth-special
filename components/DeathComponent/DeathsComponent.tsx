import { Deaths, DeathsEntity } from "../../types";

interface DeathsComponentTypes {
  deaths: Deaths;
}

export default function DeathsComponent({ deaths }: DeathsComponentTypes) {
  function deathsDescription() {
    return deaths?.deaths.map((item: DeathsEntity, index) => (
      <span key={index}> {item.description}<br/><br/></span>
    ));
  }

  return (
    <div>
      <span>
        These were the <span>Deaths</span> of {deaths?.date}<br/><br/>
      </span>
      <div>{deathsDescription()}</div>
    </div>
  );
}
