function ListData(props) {
    return (
      <>
      {
           props.infoData.map(val =>{
                return (
                    <div>
                      
        <p>name: {val.name}</p> 
        <img src={val.image}  width="500" height="600"></img>
                  <hr/>
                    </div>
                    
                )
      })
      }
      </>
    );}
  
  export default ListData;