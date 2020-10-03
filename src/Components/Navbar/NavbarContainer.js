import { connect } from 'react-redux';
import { moveTaskInSameColumnAC, moveTaskInOtherColumnAC } from '../../redux/todoReduser';
import Navbar from './Navbar';






const mapDispatchToProps = (dispatch) => {
	return {
		moveTaskInSameColumn: (sourceIndex, destinationIndex) => (dispatch(moveTaskInSameColumnAC(sourceIndex, destinationIndex))),
		moveTaskInOtherColumn: (sourceIndex, destinationIndex, destinationId) => (dispatch(moveTaskInOtherColumnAC(sourceIndex, destinationIndex, destinationId))),
	}
}

export default connect(null, mapDispatchToProps)(Navbar)