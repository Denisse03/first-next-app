"use client";
import homeStyle from "@/app/page.module.css";

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

      <div className={homeStyle.product}>
        <h3>Tofu</h3>
        <p>This is definitly tofu</p>
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/1d1c83da-7e31-4e77-916f-96faf7003173/d2z2tzw-033be9ea-1aee-4a43-bb37-12a615824631.png/v1/fit/w_700,h_700,q_70,strp/a_can_of_spam_by_zellfaze_d2z2tzw-375w-2x.jpg" />
      </div>

      <div className={homeStyle.productList}>
        <h3>Tofu</h3>
        <p>This is definitly tofu</p>
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/1d1c83da-7e31-4e77-916f-96faf7003173/d2z2tzw-033be9ea-1aee-4a43-bb37-12a615824631.png/v1/fit/w_700,h_700,q_70,strp/a_can_of_spam_by_zellfaze_d2z2tzw-375w-2x.jpg" />
      </div>
    </main>
  );
}
