import React , {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component {
	
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfeild: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users => this.setState({ robots: users}));
	}
	
	
	onSearchChange = (event) =>{
 	 	this.setState({ searchfeild: event.target.value})
	}

	render() {
		const filterRobots = this.state.robots.filter(robot =>{
 	 		return robot.name.toLowerCase().includes(this.state.searchfeild.toLowerCase());
 	 	})
		return(
			<div className='tc'>
			<h1 className='f1'>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<CardList robots={filterRobots} />
			</Scroll>
			</div>
		);
	}
}

export default App;