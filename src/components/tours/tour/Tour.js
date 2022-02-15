
import { Routes, Route, Link } from "react-router-dom";
import { useParams } from 'react-router-dom'
import {useState} from "react";
import {If,Then,Else} from 'react-if';
function Tour(props) {
    const [isShow,setShow] = useState(false);
    function handleShow(){
      setShow(!isShow);
    }
    return (
      <>
              <div>
                      
                      <h4>Name: <Link to={`/city/${props.tour.id}`}>{props.tour.name}</Link></h4>
                      <img src={props.tour.image}  width="500" height="600"></img>
                      <br/>
                      {
                        !isShow ? <button onClick={handleShow}>Show More</button> : <button onClick={handleShow}>Hide</button>
                    }
<If condition={isShow}>
  <Then>
  <h4>Description: {props.tour.info}</h4>
  </Then>
</If>

                                <hr/>
                                  </div>
                                  
      </>
    );}
  
  export default Tour;
