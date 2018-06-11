import { connect } from "react-redux";
import Search from "../components/Search";
import { getArtistDetails, updateSearchList } from "../actions";

/**
 * Transfer a state to component's props
 *
 * @param {Object} state
 * @return {Object}
 */
const mapStateToProps = state => {
  return { ...state };
};
/**
 * Defines callbacks to change a state of store
 *
 * @property {Function} getArtistDetails
 * @property {Function} updateSearchList
 */
const mapDispatchToProps = {
  onSubmit: getArtistDetails,
  onChange: updateSearchList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
