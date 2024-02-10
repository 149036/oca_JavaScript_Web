import { useEffect, useState } from "react";

export default function FetchData() {
  const [data, setData] = useState([0]);
  const url = "https://www.jma.go.jp/bosai/forecast/data/forecast/270000.json";
  useEffect(() => {
    fetch(url)
      .then((res) => {
        res.json().then((r) => {
          console.log(r[0]);

          setData(r[0]);
        });
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <ul>
      {Object.entries(data).map((a) => {
        return <li key={a[0]}>{JSON.stringify(a[1])}</li>;
      })}
    </ul>
  );
}
