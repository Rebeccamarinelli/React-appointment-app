import { useEffect } from "react"
import { appuntamenti } from "../data/data"
import {useState} from "react"
import Btn from "./Btn"





const Card = () =>{
    const [appoint, setAppoint] = useState(appuntamenti)

    useEffect(()=>{
        console.log('ciao')
    })

    const handleClick = (nome)=>{
       let newList = appoint.filter(el=>el.nome != nome)

       setAppoint(newList)
      

    }
    


    return (
        <>
        <div className='c-card' >
            {appoint.map((card, index)=>{
                return (
                    <>
                    <div className="c-card-cont" key={index}>
                        <div>
                            <img src={card.avatar} alt={card.impegno} />
                        </div>
                        <div className='c-card-name'>
                            <h3>{card.nome}</h3>
                            <p>{card.impegno}</p>
                        </div>
                        <div>
                            <button onClick={()=>handleClick(card.nome)}>x</button>
                        </div>
                    </div>
                    </>
                ) 
            })}
            <div className='c-btns'>
                <Btn click={()=>setAppoint(appuntamenti)} cla='first' text='Reload'/>
                <button className='scd'onClick={()=>setAppoint([])}>Delete All</button>
            </div>
        </div>
        
        </>
    )
}

export default Card