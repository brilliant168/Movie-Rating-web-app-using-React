import React from 'react';
import './App.css';
import Moviebox from './components/moviecontainer/Moviebox'

function App() {

  // useEffect(() => {
  //   const url = "https://api.tvmaze.com/search/shows?q=all";

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url);
  //       const json = await response.json();
  //       console.log(json);
  //       return json;
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };

  //   const data = fetchData();
  //   console.log(data);
  // }, []);

  return (
    <div className="App">
      <Moviebox />
    </div>
  );
}

export default App;