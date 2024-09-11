"use client";
import homeStyle from "@/app/page.module.css";
import aboutStyle from "@/app/about/about.module.css";
export default function About() {
  return (
    <main>
      <nav className={homeStyle.homeNav}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
      <section>
        <h1>About</h1>
        <h3>Interest</h3>
        <ul className={aboutStyle.interestList}>
          <li>Coding</li>
          <li>Board Games</li>
          <li>IoT Development</li>
          <li>VR/AR</li>
          <li>Idk</li>
        </ul>
      </section>
    </main>
  );
}
