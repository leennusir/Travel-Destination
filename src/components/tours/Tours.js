import { Routes, Route, Link } from "react-router-dom";
import Tour from './tour/Tour'

function ListData(props) {
    return (
      <>
      {
           props.infoData.map(val =>{
                return (
          <>
          <Tour tour={val}/>
          </>
                    
                )
      })
      }
      </>
    );}
  
  export default ListData;