import { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';

export interface IState {
	people: {
		name: string;
		url: string;
		age: number;
		note?: string;
	}[];
}

function App() {
   const [people, setPeople] = useState<IState['people']>([
		{
			name: 'Kelvin mwangemi',
			url: 'https://cdn.pixabay.com/photo/2021/03/03/14/55/rhino-6065480__480.jpg',
			age: 36,
			note: 'Allergic to staying on the same team',
		},
	]);

	return (
		<div className='App'>
			<h1>People Invited to my Party</h1>
         <List people={people} />
         <AddToList people={people} setPeople={setPeople} />
		</div>
	);
}

export default App;
