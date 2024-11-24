import { useState, useEffect} from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import Search from './component/Search';

  function App() {
    let value_prev;
    let array_name_home = ["Popular", "Action", "Science Fiction", "Drama"]
    let array_url_home = [`https://api.themoviedb.org/3/movie/popular?api_key=1634b8f4e23aa2e72393442aa9fdbeb6`,
        `https://api.themoviedb.org/3/discover/movie?api_key=1634b8f4e23aa2e72393442aa9fdbeb6&with_genres=28`,
        `https://api.themoviedb.org/3/discover/movie?api_key=1634b8f4e23aa2e72393442aa9fdbeb6&with_genres=878`,
        `https://api.themoviedb.org/3/discover/movie?api_key=1634b8f4e23aa2e72393442aa9fdbeb6&with_genres=18`]
    let [home, sethome] = useState([]);
    let data = [];
    
    useEffect(()=>{
        let fetchHome = async ()=>{
            try{
                for(let i =0; i<=array_name_home.length; i++){
                    if(array_name_home.some(item=>item.name!==array_name_home[i])){
                        value_prev = await fetch(array_url_home[i]);
                        value_prev = await value_prev.json();
                        data[i] = {id: i, name: array_name_home[i], movie: value_prev.results};
                    }
                }
                sethome(data)
                onDataFetched(data)
            }
            catch(error){
                console.log(`Error: ${error}`)
            }
        }
        fetchHome();
    },[]);
    //console.log(home)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home data={home} />} />
          <Route path='/search'  element={<Search/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
