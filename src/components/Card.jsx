import PropTypes from "prop-types";

function Card(props) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {props.image && (
        <img
          className="w-full"
          src={props.image}
          alt="Sunset in the mountains"
        />
      )}
      <div className="px-6 py-4">
        {props.title && (
          <div className="font-bold text-xl mb-2">props.title</div>
        )}
        {props.content && (
          <p className="text-gray-700 text-base">{props.content}</p>
        )}
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
};

Card.defaultProps = {
  title: "",
  content: "",
  image: "",
};
export default Card;
