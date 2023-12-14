//import { array } from "../utils/mockdata";
import React, { useEffect } from "react";
import ResCard from "./Rescard";
import Shimmer from "./Shimmer";
const ResContainer = () => {
    const [listOfArray, modifyArray] = React.useState([]); // State Variables
    const [searchValue, setSearchValue] = React.useState("");
    const [filteredArray, setFilteredArray] = React.useState([]);
    useEffect(() => {
      Fetch();
    },[])
    async function Fetch() {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9590541&lng=77.64015069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json.data.cards);
        modifyArray(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredArray(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(filteredArray?.length == 0) {
      return <Shimmer/>
    }
    return (<div className="res-container">
        {/* <button onClick={()=> {
            modifyArray(listOfArray.filter((res)=> {
               return res.info.avgRating > 4.2
            }));
        }}> Click Me </button> */}
        <div>
          <input type="text" value = {searchValue} name = "searchValue" onChange={(e)=> {
            setSearchValue(e.target.value)
          }}></input>
          <button onClick={()=> {
            setFilteredArray(listOfArray.filter((res)=> {
              let name = res.info.name;
              return name.toLowerCase().includes(searchValue.toLowerCase());
            }))
          }}>Search</button>
        </div>
        <div className="card-container">
            {
              filteredArray && filteredArray.map((res)=> {
                return <ResCard key = {res.info.id} resDetails={res}/>
              })
            }

        </div>
    </div>)
}
export default ResContainer;