import { useState } from "react";

export default function Header({ setRequest }) {
  let [searching, setSeachStatus] = useState(false);

  const resetCookie = () => {
    document.cookie = "request=, page=1";
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/" className="menuEl" onClick={resetCookie}>
              <img
                src="https://www.svgrepo.com/show/30556/home.svg"
                alt="Home"
                className="menuElSvg"
              />
            </a>
            <h4>Home</h4>
          </li>
          <li>
            <a href="/Trends" className="menuEl" onClick={resetCookie}>
              <img
                src="https://www.svgrepo.com/show/7370/bolt.svg"
                alt="Trends"
                className="menuElSvg"
              />
            </a>
            <h4>Trends</h4>
          </li>
          <li>
            <a href="/OnlyHulu" className="menuEl" onClick={resetCookie}>
              <img
                src="https://www.svgrepo.com/show/22239/check.svg"
                alt="Only on hulu"
                className="menuElSvg"
              />
            </a>
            <h4>Only on hulu</h4>
          </li>
          <li>
            <a href="/Folder" className="menuEl">
              <img
                src="https://www.svgrepo.com/show/343781/folder.svg"
                alt="Folder"
                className="menuElSvg"
              />
            </a>
            <h4>Folder</h4>
          </li>
          <li>
            <a href="/Account" className="menuEl">
              <img
                src="https://www.svgrepo.com/show/327461/person.svg"
                alt="Account"
                className="menuElSvg"
              />
            </a>
            <h4>Account</h4>
          </li>
          <li>
            {searching ? (
              <input
                type="text"
                onKeyUp={(event) => {
                  setRequest(
                    `/search/movie?api_key=9e8ec4ee6415928af11a0d5a6f3d67b9&query=${event.target.value}`
                  );
                }}
                id="search"
                placeholder="Search for show..."
              />
            ) : (
              <>
                <input
                  className="menuEl"
                  id="searchSvg"
                  type="image"
                  onClick={() => setSeachStatus(true)}
                  src="https://www.svgrepo.com/show/22706/search.svg"
                  alt="Search"
                />
                <h4>Search</h4>
              </>
            )}
          </li>
        </ul>
      </nav>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/03/Hulu_logo_%282014%29.svg"
        alt="Hulu logo"
      />
    </header>
  );
}
