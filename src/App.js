import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import NavbarContainer from './Components/Navbar/NavbarContainer';
import TodoContainer from './Components/TodoContainer';



const styles = {
	wrapper: {
		// width: 1000,
		// margin: '0px auto',
		display: 'flex',
		justifyContent: 'space-between',
	},

	// h1: {
	// 	textAlign: 'center'
	// }
	content: {

		flex: '1 1 60%',
		maxWidth: '60%',
		padding: 20,



	},
	navbar: {
		flex: '1 1 30%',
		maxWidth: '20%',
		border: '1px solid green',
		backgroundColor: 'lavender',
		padding: 15
	}
}

function App() {



	return (

		<div style={styles.wrapper}>
			<div style={styles.content}>
				<h1 style={styles.h1}>Список дел</h1>
				<Switch>
					<Route exact path='/' render={() => <TodoContainer day='Понедельник' />} />
					<Route path='/monday' render={() => <TodoContainer day='Понедельник' />} />
					<Route path='/tuesday' render={() => <TodoContainer day='Вторник' />} />
					<Route path='/wednesday' render={() => <TodoContainer day='Среда' />} />
					<Route path='/thursday' render={() => <TodoContainer day='Четверг' />} />
					<Route path='/friday' render={() => <TodoContainer day='Пятница' />} />
					<Route path='/saturday' render={() => <TodoContainer day='Суббота' />} />
					<Route path='/sunday' render={() => <TodoContainer day='Воскресенье' />} />
				</Switch>
			</div>
			<div style={styles.navbar}>
				<NavbarContainer />
			</div>
		</div>

	);
}

export default withRouter(App);
