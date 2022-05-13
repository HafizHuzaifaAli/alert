import './App.css';
import Card from './card';
import {useState} from 'react'
function App() {
  const abc = [{price: 250, category:"A", title: "ABC1",image: "https://picsum.photos/200/300",size:25,description:"Description1" },
{price: 250, category:"B",  title: "ABC2" ,image: "https://picsum.photos/200",size:28,description:"Description2"},
{price: 250, category:"A", title: "ABC3",image: "https://picsum.photos/200",size:30,description:"Description3"},
{price: 250, category:"A", title: "ABC4",image: "https://picsum.photos/200/300",size:32,description:"Description4"},
{price: 250, category:"C", title: "ABC5",image: "https://picsum.photos/200/300",size:35,description:"Description5" },
{price: 250, category:'B',  title: "ABC6" ,image: "https://picsum.photos/200/300",size:37,description:"Description6"},
{price: 250, category:"A", title: "ABC7",image: "https://picsum.photos/200/300",size:38,description:"Description7"},
{price: 250, category:"C", title: "ABC8",image: "https://picsum.photos/200/300",size:40,description:"Description8"},
]
const [alert,setalert]= useState(false)
const [item,setItem]= useState([])

const render= (tit,pri,ima,des,siz,cat)=>{
      setItem([tit,pri,ima,des,siz,cat])
      setalert(true)
}
  return (
    
    <div className="App">
        {
          alert?  <div class="alert alert-primary" role="alert">
          {
            item.map((e)=>{
              return(<div className='fw-bold'>{e}</div>)
            })
          }
        </div> :null}
      
      <h1 className='fs-5 p-3 bg-warning d-flex justify-content-between my-5'>
        {abc.map((e)=> <Card  img={e.image}  click={()=>render(e.title,e.price,e.image,e.description,e.size,e.category)}/>)}
      </h1>
    
  </div>
    
  );
}

export default App;
