import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import PropTypes from "prop-types";

export const GifGrid = ({ category, onRemoveCategory, limit }) => {
  const { images, isLoading } = useFetchGifs(category, limit);

  const handleClickRemove = (event) => {
    event.preventDefault();
    onRemoveCategory(category);
  };

  return (
    <>
      <div className="container-title">
        <h3 className="title">{category}</h3>
        <button className="delete" onClick={handleClickRemove}>
          Eliminar
        </button>
      </div>
      <hr />

      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
  onRemoveCategory: PropTypes.func.isRequired,
  limit: PropTypes.number.isRequired,
};
