import Card from './card/Card.jsx'
import Carga from './Carga.jsx'
import data from '../../../db/dbProductos.json'


function CardList() {
  const [autos,setAutos] =useState([]);
  useEffect(() =>{
    const autosList = new Promise((res,rej) =>{
      setTimeout(() => {
        let autosList = data;
        return res(autosList)
      }, 2000);
    })
    setAutos(autosList)
  },[])
 
  return (
    <>
      <div>
        <ul>
        {
            autos.lenght === 0 ? <Carga/>: autos.map(auto=>(
             <li><Card props={auto}/></li> 
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default CardList