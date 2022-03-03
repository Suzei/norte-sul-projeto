import { useEffect, useState } from "react";
import api from "../../services/api.js"
import { BsChevronDown } from 'react-icons/all'
import SobreHospitalContainer from "./SobreHospitalStyle.js"


export default function DestaqueHospital() {
  const [hospitais, setHospitais] = useState([])

  useEffect(() => {
    api.get("hospital").then(({data}) => {
      setHospitais(data)
    })
  }, [])

  function toggleInfo() {
    
  }
 

  const hospital = hospitais.slice(0, 3)

    
  return(
    <SobreHospitalContainer id="hospitais">
      {hospital.map((hospital) =>(
        <div className="hospital" key={hospital.id}>
        <img src={hospital.image}></img>
        <h4>{hospital.name}</h4>
        <BsChevronDown className="hospital__show" />
        <div className="hospital__info">
          <p>{hospital.detail}</p>
          <div className="hospital__call">
          <span>Endereço: {hospital.address}</span>
          <span>Telefone: {hospital.phone}</span>
          </div> 
        </div>
        </div>
        
      ))}
    </SobreHospitalContainer>
  )


  
  
}