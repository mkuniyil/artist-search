import { connect } from "react-redux";
import ArtistEvents from "../components/ArtistEvents";

/**
 * Transfer a state to component's props
 *
 * @param {Object} state
 * @return {Object}
 */
const mapStateToProps = state => {
  return { events: state.events };
};

export default connect(mapStateToProps)(ArtistEvents);
