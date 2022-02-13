function ListData(props) {
    return (
      <>
      {
           props.xx.map(val =>{
                return (
                    <>
            <p>id: {val.id}</p>
        <p>name: {val.name}</p>
        <p>info: {val.info}</p>

        <img src={val.image}  width="500" height="600"></img>
        <p>price: {val.price}</p>
                    </>
                )
      })
      }
      </>
    );}
  
  export default ListData;