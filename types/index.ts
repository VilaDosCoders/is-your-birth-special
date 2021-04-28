export interface Events {
    wikipedia: string;
    date: string;
    events?: (EventsEntity)[] | null;
  }
  export interface EventsEntity {
    year: string;
    description: string;
    wikipedia?: (WikipediaEntity)[] | null;
  }
  export interface WikipediaEntity {
    title: string;
    wikipedia: string;
  }
  
  export interface Births {
    wikipedia: string;
    date: string;
    births?: (BirthsEntity)[] | null;
  }
  export interface BirthsEntity {
    year: string;
    description: string;
    wikipedia?: (WikipediaEntity)[] | null;
  }
  export interface Deaths {
    wikipedia: string;
    date: string;
    deaths?: (BirthsEntity)[] | null;
  }
  export interface DeathsEntity {
    year: string;
    description: string;
    wikipedia?: (WikipediaEntity)[] | null;
  }

