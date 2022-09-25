import Form from './components/Form/Form';
import GlobalStyle, { Row, Section, Text } from './globalStyles';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Simulation from './components/Simulation';

function App() {
	return (
		<Router>
			<GlobalStyle/>
			{<Row gap="2rem" height="80px" justify="center" align="center" background="black">
				
				<Link to="/home">
					<Text size="2rem">Home</Text>
				</Link>
				<Link to="/about">
					<Text size="2rem">About</Text>
				</Link>
				<Link to="form">
					<Text size="2rem">Model</Text>
				</Link>
				<Link to="/simulation">
					<Text size="2rem">Simulation</Text>
				</Link>

			</Row>}
			<Routes>
				<Route exact path='/' element ={<Simulation />}>Simulation</Route>
				<Route exact path="/home" element={<Home />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path='/form' element={<Form />}>Model</Route>
				<Route exact path='/simulation' element ={<Simulation />}>Simulation</Route>
			</Routes>
		</Router>
	);
}
function About() {
	  // 👇️ redirect to external URL
	  window.location.replace('https://sergiolmrivero.github.io/ecos_p.github.io/');
	  return null;

}

function Home(){
	 // 👇️ redirect to external URL
	 window.location.replace('https://github.com/sergiolmrivero/EcoSim_p');
	 return null;

}


'https://github.com/sergiolmrivero/EcoSim_p'

export default App;

