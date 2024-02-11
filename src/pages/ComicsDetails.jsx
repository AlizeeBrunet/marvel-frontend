import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../pages/ComicsDetails.css";

const ComicDetails = () => {
  const { comicId } = useParams();
  const [comic, setComic] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://site--marvel-backend--htp8z88mdn8c.code.run/comic/5fce19b478edeb0017c944a3`
      )
      .then((response) => {
        setComic(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des détails du comic:",
          error
        );
        setError(error);
        setLoading(false);
      });
  }, [comicId]);

  if (loading) return <div>Chargement des détails du comic...</div>;
  if (error)
    return (
      <div>Erreur lors du chargement des détails du comic: {error.message}</div>
    );
  if (!comic) return <div>Détails du comic non trouvés.</div>;

  return (
    <div className="comic-details-container">
      <h1>{comic.title}</h1>
      <img
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={comic.title}
      />
      <p>{comic.description}</p>
    </div>
  );
};

export default ComicDetails;
