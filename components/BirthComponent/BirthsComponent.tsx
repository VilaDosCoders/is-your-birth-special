import { Births, BirthsEntity } from "../../types";

interface BirthsComponentTypes {
  births: Births;
}

export default function BirthsComponent({ births }: BirthsComponentTypes) {
  function birthsDescription() {
    return births?.births.map((item: BirthsEntity, index) => (
      <span key={index}> {item.description}<br/><br/></span>
    ));
  }

  return (
    <div>
      <span>
        These were the <span>Births</span> of {births?.date}<br/><br/>
      </span>
      <div>{birthsDescription()}</div>
    </div>
  );
}
