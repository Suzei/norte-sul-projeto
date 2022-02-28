import HeaderStyle, { HeaderStyleInfo } from "./HeaderStyle"

export default function Header() {
  return (
    <HeaderStyle>
      <HeaderStyleInfo>
        <h3>Conforto e qualidade para levar bem-estar com alto padrão <br/> de atendimento a <br/> seus funcionários.</h3>
        <p>Conheça o plano de Ouro da Porto Seguro Saúde.</p>
          <div className="header__prices">
            <span>A partir de <h2><sup>R$</sup>255<sup>,65*</sup></h2></span>
            <button>Ver Mais</button>
          </div>
        <sub>*Valor referente ao plano Ouro Copar Q (ANS: 481.277/18-8) de 3 à 9 vidas, com 20% de copart. com faixa etária entre 0 e 18 anos. Sem IOF. Promoção válida até 30 de abril de 2021</sub>
    </HeaderStyleInfo>
  </HeaderStyle>
  )
}

