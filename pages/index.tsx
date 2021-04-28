import styles from "../styles/Home.module.css";
import { useState } from "react";
import { Events } from "../types";
import EventsComponent from "../components/EventsComponent/EventsComponent"
import BirthsComponent from "../components/BirthComponent/BirthsComponent"
import DeathsComponent from "../components/DeathComponent/DeathsComponent"
import Days from "../components/utils/Days"
import Header from "../components/header/Header"
import Months from "../components/utils/Months"


export default function Home() {
  const [month, setMonth] = useState("1"); // The input starts with Jan selected
  const [day, setDay] = useState("1"); // The input starts with day 1 selected
  const [events, setEvents] = useState<Events>()
  const [births, setBirths] = useState<Events>()
  const [deaths, setDeaths] = useState<Events>()

  function handleMonthChange(e: any) {
    setMonth(e.target.value);
  }
  function handleDayChange(e: any) {
    setDay(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    if (month && day) {
      getEvents(month, day);
      getBirths(month, day);
      getDeaths(month, day);
    }
  }

  function getEvents(month: string, day: string) {
    fetch("https://byabbe.se/on-this-day/" + month + "/" + day + "/events.json")
      .then((response) => response.json())
      .then((data:Events) => {
        setEvents(data)
      });
  }
  function getBirths(month: string, day: string) {
    fetch("https://byabbe.se/on-this-day/" + month + "/" + day + "/births.json")
      .then((response) => response.json())
      .then((data:Events) => {
        setBirths(data)
      });
  }
  function getDeaths(month: string, day: string) {
    fetch("https://byabbe.se/on-this-day/" + month + "/" + day + "/deaths.json")
      .then((response) => response.json())
      .then((data:Events) => {
        setDeaths(data)
      });
  }

  return (
    <div className={styles.container}>
      <Header/>
      <form onSubmit={handleSubmit}>
        <div>
          <select onChange={handleMonthChange} value={month}>
            <Months/>
          </select>

          <select onChange={handleDayChange} value={day}>
            <Days/>
          </select>
        </div>
        <div>
          <button type="submit">
            Tell me if my birthday mean something
          </button>
        </div>
      </form>
    
      <EventsComponent events={events} />
      <BirthsComponent births={births} />
      <DeathsComponent deaths={deaths} />

    </div>
  );
}
