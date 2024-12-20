import PropTypes from "prop-types";

function List(props) {
  return (
    <ol className="ml-4 mt-2 mb-2">
      {props.items.map((item) => (
        <li key={item.number}>
          <a href="#">{item.name}</a>
        </li>
      ))}
    </ol>
  );
}
List.propTypes = {
  items: PropTypes.array,
};
List.defaultProps = {
  items: [],
};
export default List;
