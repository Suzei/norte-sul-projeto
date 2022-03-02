import PlanInfoStyle from "./PlanInfoStyle.js"
import { MdFileDownload } from 'react-icons/all';

export default function PlanInfo () {

  return (
    <PlanInfoStyle>
    <div className="content">
        <div className="content__plan"> 
          <span>Plano Ouro</span>
          <sup style={{
            fontWeight: "400",
            fontSize: "25px",
            color: "white"

          }}>A partir de</sup>
          <h2><sup>R$</sup>255<sup>,65*</sup></h2>
        </div>

        <div className="content__law">
          <p>*Valor referente ao plano Ouro Copar Q (ANS: 481.277/18-8) de 3 à 9 vidas, com 20% de copart. com faixa etária entre 0 e 18 anos. Sem IOF. Promoção válida até 30 de abril de 2021.</p>
          <img src="/src/images/lei.png" alt="" />
        </div>
      </div>  

      <div className="content__buttons">
          <button>veja a cobertura completa</button>
          <button> <MdFileDownload/> Baixe a tabela de preços do plano</button>
      </div>

    </PlanInfoStyle>
  )
}