
import { Routes, Route, Link } from "react-router-dom";

function Tour(props) {
    return (
      <>
              <div>
                      
                      <h4>Name: <Link to={`/city/${props.tour.id}`}>{props.tour.name}</Link></h4>
                      <img src={props.tour.image}  width="500" height="600"></img>
                      <br/>
                     <Link to={`/city/${props.tour.id}`}>Show More</Link>

                                <hr/>
                                  </div>
                                  
      </>
    );}
  
  export default Tour;
