import MainContentContainer, {MainContentInfo} from "./MainContentStyle.js"
import PlanInfo from "../PlanInfo/PlanInfo.tsx"
import DestaqueHospital from "../SobreHospital/SobreHospital.tsx"

export default function MainContent() {
  return (
<MainContentContainer>
    <MainContentInfo>
      <h3>O plano Ouro é ideal para a sua empresa</h3>
        <p>Com o plano Ouro, os beneficiários contam com uma ampla Rede Referenciada de hospitais e laboratórios, além de terem mais flexibilidade para solicitar o reembolso de consultas e exames, de forma ágil e prática, e o conforto da acomodação hospitalar em apartamento.</p>
    </MainContentInfo>

    <PlanInfo/>
      
    <MainContentInfo>
      <h3>Hospitais em destaque</h3>
        <p>Contando com os melhores hospitais do Rio de Janeiro, o plano Ouro dispõe para sua empresa as redes mais referenciadas com diversos benefícios para que você tenha um atendimento totalmente personalizado.</p>
    </MainContentInfo>
    
    <DestaqueHospital></DestaqueHospital>

</MainContentContainer>
  )
}