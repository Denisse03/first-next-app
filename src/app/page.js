"use client";
import homeStyle from "@/app/page.module.css";
import Hairbrush from "@/app/components/Hairbrush";

export default function Home() {
  const headerStyle = {
    backgroundColor: "lightcoral",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  function openModal() {
    console.log("Open");
  }
  const myName = "Denisse";

  const farmAnimals = [
    "seal",
    "polar bear",
    "iguana",
    "chimpanzee",
    "tasmanian devil",
  ];

  const what = 0;

  const isTuesday = false;

  const person = {
    name: "Ty the Ghost guy",
    hairColor: "black",
    eyeColor: "void",
  };

  return (
    <main>
      <nav className={homeStyle.homeNav}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
      <h1 style={headerStyle}>Next.js App</h1>
      <p className={homeStyle.callout}>
        This is a very sunny day here in Rainyville. Suprising not the sunny day
        this week. Signing off, {myName}.
      </p>
      <p>Array of farm animals: {farmAnimals.join(", ")} </p>
      <p>Person: {JSON.stringify(person)} </p>
      <p>Tome Ty Said idk: {what} </p>
      <p>Is it Tuesday: {String(isTuesday)} </p>
      <button onClick={openModal}>View Sun</button>
    </main>
  );
}
