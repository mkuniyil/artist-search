import { connect } from "react-redux";
import ArtistInfo from "../components/ArtistInfo";
import { getArtistDetails } from "../actions";

/**
 * Transfer a state to component's props
 *
 * @param {Object} state
 * @return {Object}
 */
const mapStateToProps = state => {
  return { ...state.artist };
};

/**
 * Defines callbacks to change a state of store
 *
 * @property {Function} getArtistDetails
 */
const mapDispatchToProps = {
  onChangeHandler: getArtistDetails
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistInfo);
