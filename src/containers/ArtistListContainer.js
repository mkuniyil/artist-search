import { connect } from "react-redux";
import ArtistList from "../components/ArtistList";
import { getArtistDetails } from "../actions";

/**
 * Transfer a state to component's props
 *
 * @param {Object} state
 * @return {Object}
 */
const mapStateToProps = state => {
  return {
    artistList: state.matchList
  };
};

/**
 * Defines callbacks to change a state of store
 *
 * @property {Function} getArtistDetails
 */
const mapDispatchToProps = {
  onClick: getArtistDetails
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistList);
