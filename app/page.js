"use client";
import { useEffect, useState } from "react";
import FetchData from "./fetch_data";

function Header({ title }) {
  return <li key={title}>{title}</li>;
}

function Component1() {
  const student = ["Mike", "Bob", "Jane"];
  return student.map((a) => <li key={a}>{a}</li>);
}

function ChangeColor() {
  const [color, setColor] = useState("white");

  useEffect(() => {
    console.log("useEffect");
    document.body.style.backgroundColor = color;

    return () => {
      document.body.style.backgroundColor = "initial";
    };
  }, [color]);

  const changeColor = () => {
    if (color === "white") {
      setColor("red");
      console.log("setColorRed");
    } else {
      setColor("white");
      console.log("setColorWhite");
    }
  };

  return (
    <div>
      <button onClick={changeColor}>ChangeColor</button>
    </div>
  );
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
      <ul>
        <Component1 />
      </ul>
      <ChangeColor />

      <FetchData />
    </div>
  );
}
