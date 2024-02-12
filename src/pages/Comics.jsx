import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../pages/Comics.css";

const Comics = () => {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://site--marvel-backend--htp8z88mdn8c.code.run/comics")
      .then((response) => {
        setComics(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur lors du chargement{error.message}</div>;
  const handleComicClick = (comicId) => {
    navigate(`/comic/${comicId}`);
  };
  return (
    <div className="comics-container">
      {comics.map((comic) => (
        <div
          key={comic.id}
          className="comic-card"
          onClick={() => handleComicClick(comic.id)}
        >
          <img
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt={comic.title}
          />
          <h2>{comic.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Comics;
