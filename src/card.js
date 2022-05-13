

function Card(props){
  return (
        
        <div className="card m-2" style={{width: '18rem'}}>
  <img src={props.img} style={{height: "150px"}} className="card-img-top" alt="..." />
  <div className="card-body">
    <button className='btn btn-primary' onClick={props.click}>add to</button>
  </div>
</div>
    
      
  )
}
export default Card;