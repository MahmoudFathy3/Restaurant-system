import PropTypes from "prop-types";
import "./Table.module.css";

const Table = ({ children, column, row }) => {
  return (
    <table>
      <thead>
        <tr>
          {column.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

Table.propTypes = {
  children: PropTypes.node.isRequired,
  column: PropTypes.arrayOf(PropTypes.string).isRequired,
  row: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
