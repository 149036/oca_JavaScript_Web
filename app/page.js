"use client";
import { useState } from "react";

function Header({ title }) {
  return <li key={title}>{title}</li>;
}

export default function HomePage() {
  const [likes, setLikes] = useState(0);
  const [pom, setPom] = useState("pom");

  function handleClick() {
    console.log("increment like count");
    setLikes(likes + 2);
    setPom(pom + " a ");
  }

  const list = ["a", "b", "c"];
  return (
    <div>
      <ul>
        {list.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <button onClick={handleClick}>
        Likes ({likes}){pom}
      </button>
    </div>
  );
}
