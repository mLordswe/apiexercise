import "./style.css";
//lista med alla tillgängliga tidszoner,
//söka i listan, autocomplete?
//med hjälp av namnet välja rätt tidszon och stad
//visa upp resultatet i konsolen
const timeZoneUrl = "https://timeapi.io/api/timezone/availabletimezones";
const locationUrl = "https://timeapi.io/api/time/current/zone?timeZone="; //https://timeapi.io/api/time/current/zone?timeZone=område/stad
const zone = prompt("Skriv Område/Stad") as string;
const getTimeZones = async () => {
  const response = await fetch(
    "https://timeapi.io/api/timezone/availabletimezones"
  );
  const data = response.json();
  console.log(data);
};
const getLocation = async (x: string) => {
  const response = await fetch(locationUrl + `${x}`);
  const data = response.json();
  console.log(data);
};
getTimeZones();
getLocation(zone);
