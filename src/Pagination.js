export default function Pagination({ currentPage, nbrPages, setPage }) {
  let buttons = [];
  let maxDiff = 2;

  for (let i = 1; i <= nbrPages; i++) {
    let diff = Math.abs(currentPage - i);
    if (diff <= maxDiff) {
      buttons.push(
        <button
          key={i}
          onClick={() => {
            setPage(i);
          }}
        >
          {i}
        </button>
      );
    } else {
      if (i === 1) {
        buttons.push(
          <button
            key={i}
            onClick={() => {
              setPage(i);
            }}
            id="firstButton"
          >
            {i}
          </button>
        );
      }
      if (i === nbrPages) {
        buttons.push(
          <button
            key={i}
            onClick={() => {
              setPage(i);
            }}
            id="lastButton"
          >
            {i}
          </button>
        );
      }
    }
  }

  return <nav id="pagination">{buttons}</nav>;
}
