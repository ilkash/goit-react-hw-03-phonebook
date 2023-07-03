import PropTypes from 'prop-types';
export const Filter = ({ handleFilter, filter }) => {
  return (
    <input
      type="text"
      value={filter}
      onChange={handleFilter}
      placeholder="filter contact"
    />
  );
};
Filter.propTypes = {
  handleFilter: PropTypes.func,
  filter: PropTypes.func,
};