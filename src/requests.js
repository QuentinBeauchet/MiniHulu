const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  TopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}`,
  },
  Trending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}`,
  },
  Discover: {
    title: "Discover",
    url: `/discover/movie?api_key=${API_KEY}`,
  },
  genders: {
    Action: {
      title: "Action",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
    Adventure: {
      title: "Adventure",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
    },
    Animation: {
      title: "Animation",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    },
    Comedy: {
      title: "Comedy",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    },
    Documentary: {
      title: "Documentary",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    },
    Drama: {
      title: "Drama",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
    },
    Fantasy: {
      title: "Fantasy",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
    },
    Horror: {
      title: "Horror",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    Romance: {
      title: "Romance",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
    ScienceFiction: {
      title: "Science Fiction",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    },
    Western: {
      title: "Western",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    },
  },
};

export default requests;
