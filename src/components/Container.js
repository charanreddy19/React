import { array } from "../utils/mockdata";
import React from "react";
import ResCard from "./Rescard";
const ResContainer = () => {
    const [listOfArray, modifyArray] = React.useState(array);
    return (<div className="res-container">
        <button onClick={()=> {
            modifyArray(array.filter((res)=> {
               return res.rating > 4.2
            }));
        }}> Click Me </button>
        <div className="card-container">
            {
              listOfArray.map((res)=> {
                return <ResCard key = {res.id} resDetails={res}/>
              })
            }

        </div>
    </div>)
}
export default ResContainer;