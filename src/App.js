import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchDogAction } from './store/reducers';
import { connect } from 'react-redux';

// import { fetchDogAction } from "./store/reducers/index";
// import { connect } from "react-redux";

class App extends Component {
  render() {
	  // This is Object Desctructuring
	  //	We are creating a family of objects to be taken from the members
	  //	of props. Now the compiler is expecting props to contain these
	  //	list properties.
	  const { fetching, dog, error, onRequestDog } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
		<div>
			{
				dog ? 
					(<p classname="App-intro">Kepp clicking for new dogs!</p>) : 
					(<p classname="App-intro">Click the button to fetch a dog.</p>)
			}
		</div>
		<div>
			{
				fetching ?
					(<button disabled>Fetching...</button>):
					(<button onClick={onRequestDog}>Fetch a dog</button>)
			}
		</div>
		<div>
			{
				// This will evaluate until one of the terms is falsy
				//	If they are all falsy, it will return the last in the list or undefined
				//	Otherwise, it will return the first that is truthy.
				error && <p style={{ color: "red" }}>WTH? there was a bad! {error}</p>
			}
		</div>
		<div>
			{/* If any of these terms are truthy, the first one will be returned */}
			<img src={dog || logo} alt="Love that doggo!" />
		</div>
      </div>
    );
  }
}

// this maps our state to our local props object
const mapStateToProps = state => {
	return {
		fetching: state.fetching,
		dog: state.dog,
		error: state.error
	};
};

const mapDispatchtoProps = dispatch => {
	return {
		// We are using redux's dispatch method below
		onRequestDog: () => dispatch(fetchDogAction())
	};
};

// We cannot export our actual app, but we need to export something that wraps our app.
// export default App;

// The objects returned by both functions in connect are mapped into a single object that is
//	in turn passed as the props into the react component
export default connect(mapStateToProps, mapDispatchtoProps)(App);
