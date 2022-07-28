import React, {useState, useEffect} from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {

  const [mainData, setMainData] = useState([])

  useEffect(() => {
    const data = async () => {
      let req = await fetch('http://localhost:8003/planeteers')
      let res = await req.json()
      setMainData(res)
    }
    data()
  }, [])

  const [searchInput, setSearchInput] = useState('')



  const handleChange = (e) => {
    e.preventDefault()
    setSearchInput(e.target.value)
  }

  const newArray = mainData.filter(planeteer => {return planeteer.name.toLowerCase().includes(searchInput.toLowerCase())})

console.log(newArray)

  // console.log(mainData)

  return (
    <div>
      <Header />
      <SearchBar
      handleChange={handleChange}
      searchInput={searchInput}
      setSearchInput={setSearchInput}
      mainData={mainData}
      newArray={newArray}
      />
      <RandomButton />
      <PlaneteersContainer
      newArray={newArray}
      searchInput={searchInput}
      mainData={mainData}/>
    </div>
  );
}

export default App;
