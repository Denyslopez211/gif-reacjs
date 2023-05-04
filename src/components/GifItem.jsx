import PropTypes from "prop-types";
import { saveAs } from "file-saver";

export const GifItem = ({ title, url }) => {
  const downloadImage = () => {
    saveAs(url, `${title}.gif`); // Put your image url here.
  };
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
      <div>
        <button onClick={downloadImage} className="btn-buscar">
          Descargar
        </button>
      </div>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
