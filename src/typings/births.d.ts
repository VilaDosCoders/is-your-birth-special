interface Events {
  wikipedia: string
  date: string
  events?: EventsEntity[] | null
}

interface EventsEntity {
  year: string
  description: string
  wikipedia?: WikipediaEntity[] | null
}

interface WikipediaEntity {
  title: string
  wikipedia: string
}

interface Births {
  wikipedia: string
  date: string
  births?: BirthsEntity[] | null
}

interface BirthsEntity {
  year: string
  description: string
  wikipedia?: WikipediaEntity[] | null
}

interface Deaths {
  wikipedia: string
  date: string
  deaths?: BirthsEntity[] | null
}

interface DeathsEntity {
  year: string
  description: string
  wikipedia?: WikipediaEntity[] | null
}
