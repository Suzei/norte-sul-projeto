import { useEffect, useState } from "react";
import api from "../../services/api.js"

export default function DestaqueHospital() {
  const [hospitais, setHospitais] = useState([])

  useEffect(() => {
    api.get("hospital").then(({data}) => {
      setHospitais(data)
    })
  }, [])

  const hospital = hospitais.slice(0, 3)

  return(
    <>
  
    </>
  )
}