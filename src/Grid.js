import { useEffect, useState } from "react";

const Element = ({ data }) => {
  let src = data.backdrop_path || data.poster_path;
  if (src && data.overview) {
    return (
      <article>
        <img
          className={data.backdrop_path ? "poster_h" : "poster_v"}
          src={`https://image.tmdb.org/t/p/original${src}`}
          alt={data.title}
          loading="lazy"
        />
        <p>{data.overview}</p>
        <h1>{data.title || data.name}</h1>
        <div>
          <p>{data.release_date || data.first_air_date}</p>
          <p>{data.vote_average || data.vote_count}</p>
        </div>
      </article>
    );
  }
  return null;
};

export default function Grid({ request, currentPage, setNbrTotalPages }) {
  const [data, setData] = useState({ results: [] });

  const fetchData = () => {
    fetch(`https://api.themoviedb.org/3${request}&page=${currentPage}`).then(
      (response) =>
        response.json().then((obj) => {
          setNbrTotalPages(obj.total_pages);
          setData(obj);
        })
    );
  };

  useEffect(fetchData, [request, currentPage, setNbrTotalPages]);

  if (data.sucess !== false && data.errors === undefined) {
    return (
      <section>
        {data.results.map((res) => (
          <Element key={res.id} data={res} />
        ))}
      </section>
    );
  } else {
    return <p>{data.status_message || data.errors}</p>;
  }
}
