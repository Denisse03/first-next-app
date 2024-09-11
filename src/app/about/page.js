"use client";
import homeStyle from "@/app/page.module.css";

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
      <h1>About</h1>
    </main>
  );
}
