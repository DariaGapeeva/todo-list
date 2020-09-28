import React from 'react';
import { NavLink } from 'react-router-dom';
import DayTodo from './DayTodo/DayTodo';
import DayTodoContainer from './DayTodo/DayTodoContainer';

const styles = {
	navbar: {
		display: 'flex',
	},
	navbarItem: {

	},
	link: {
      textDecoration: 'none',
	  color: 'black',
	  fontWeight: '600'
	},
	
	active: {
		color: 'grey',
	},
}

const Navbar = () => {
	return (
		<div styles={styles.navbar}>
			<div styles={styles.navbarItem}>
				<NavLink to='/monday' activeClassName={styles.active} style={styles.link}> Понедельник </NavLink>
				<DayTodoContainer day='Понедельник' />
			</div>
			<div styles={styles.navbarItem}>
				<NavLink to='/tuesday' activeClassName={styles.active} style={styles.link}> Вторник </NavLink>
					<DayTodoContainer  day='Вторник' />
			</div>
			<div styles={styles.navbarItem}>
				<NavLink to='/wednesday' activeClassName={styles.active} style={styles.link}> Среда </NavLink>
					<DayTodoContainer day='Среда' />
			</div>
			<div styles={styles.navbarItem}>
				<NavLink to='/thursday' activeClassName={styles.active} style={styles.link}> Четверг </NavLink>
					<DayTodoContainer day='Четверг' />
			</div>
			<div styles={styles.navbarItem}>
				<NavLink to='/friday' activeClassName={styles.active} style={styles.link}> Пятница </NavLink>
					<DayTodoContainer day='Пятница' />
			</div>
			<div styles={styles.navbarItem}>
				<NavLink to='/saturday' activeClassName={styles.active} style={styles.link}> Суббота </NavLink>
					<DayTodoContainer day='Суббота' />
			</div>
			<div styles={styles.navbarItem}>
				<NavLink to='/sunday' activeClassName={styles.active} style={styles.link}> Воскресенье </NavLink>
					<DayTodoContainer day='Воскресенье' />
			</div>
		</div>
	)
}


export default Navbar;