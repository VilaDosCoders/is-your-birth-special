type BirthEventsProps = {
  startDate: Date | null
}

type BirthEventsData = {
  date: string
  events: Events[]
  wikipedia: string
}

type Events = {
  description: string
  wikipedia: Wikipedia[]
  year: string
}

type Wikipedia = {
  title: string
  wikipedia: string
}

type Tabs = 'events' | 'deaths' | 'births'
