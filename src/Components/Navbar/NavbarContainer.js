import { connect } from 'react-redux';
import { moveTaskAC } from '../../redux/todoReduser';
import Navbar from './Navbar';






const mapDispatchToProps = (dispatch) => {
	return {
		moveTask: (sourceId, sourceIndex, destinationId, destinationIndex) => (dispatch(moveTaskAC(sourceId, sourceIndex, destinationId, destinationIndex))),

	}
}

export default connect(null, mapDispatchToProps)(Navbar)