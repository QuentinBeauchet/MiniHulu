import { useEffect } from "react";
import requests from "./requests.js";

export default function Navigation({ setRequest }) {
  useEffect(() => {
    let element = document.getElementById("genders").firstChild;
    element.addEventListener(
      "wheel",
      (evt) => {
        element.scrollLeft += evt.deltaY;
      },
      { passive: true }
    );
  }, []);

  return (
    <nav id="genders">
      <div>
        {Object.entries(requests.genders).map(([key, { title, url }]) => {
          return (
            <h1
              key={key}
              onClick={() => {
                setRequest(url);
              }}
            >
              {title}
            </h1>
          );
        })}
      </div>
    </nav>
  );
}
