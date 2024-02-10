import { useEffect, useState } from "react";

export default function getStaticProps() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/books")
      .then((res) => {
        res.json().then((r) => {
          console.log(r);
          console.log(r[0]);
          setData(r);
        });
      })
      .catch((e) => e);
  }, []);

  return (
    <ul>
      {data.map((a) => {
        return (
          <li key={a["id"]}>
            {a["title"]}:{a["author"]}
          </li>
        );
      })}
    </ul>
  );
}
