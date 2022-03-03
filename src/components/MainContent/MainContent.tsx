import MainContentContainer, {MainContentInfo, MainContentCard} from "./MainContentStyle.js"
import PlanInfo from "../PlanInfo/PlanInfo.tsx"
import DestaqueHospital from "../SobreHospital/SobreHospital.tsx"
import {GrCheckmark} from 'react-icons/all'
import Form from "../Form/Form.tsx"

export default function MainContent() {
  return (
<MainContentContainer>
    <MainContentInfo>
      <h3>O plano Ouro é ideal para a sua empresa</h3>
        <p>Com o plano Ouro, os beneficiários contam com uma ampla rede referenciada de hospitais e laboratórios, além de terem mais flexibilidade para solicitar o reembolso de consultas e exames, de forma ágil e prática, e o conforto da acomodação hospitalar em apartamento.</p>
    </MainContentInfo>

    <PlanInfo/>
      
    <MainContentInfo>
      <h3>Hospitais em destaque</h3>
        <p>Contando com os melhores hospitais do Rio de Janeiro, o plano Ouro dispõe para sua empresa as redes mais referenciadas com diversos benefícios para que você tenha um atendimento totalmente personalizado.</p>
    </MainContentInfo>
    
    <DestaqueHospital></DestaqueHospital>

    <MainContentInfo id="beneficios">
      <h3>Benefícios do plano</h3>
      <div className="main__wrapper">
      <MainContentCard>
        <img src="/src/images/beneficio-1.png" alt="" />
        <h4>Rede referenciada</h4>
        <p>Com o plano Ouro da Porto Seguro Saúde, você conta com uma <b>rede referenciada de hospitais</b> com toda a comodidade que você e seus funcionários precisam.</p>
        <button>veja a lista completa de hospitais</button>
      </MainContentCard>

      <MainContentCard>
        <img src="/src/images/beneficio-2.png" alt="" />
        <h4>Reembolso de consultas e exames simples</h4>
        <p>Com o plano Ouro, receba o <b>reembolso de seus exames e consultas</b> em até <b>48 horas</b> úteis, a partir da data de entrega de todos os documentos necessários. <br/> Plano Ouro Max: R$280,00</p>
      </MainContentCard>
      </div>
    </MainContentInfo>

    <MainContentInfo id="servicos">
      <h3>Outros serviços especiais</h3>
      <div className="main__wrapper">
      <MainContentCard>
        <div className="main__spacer">
          <img src="/src/images/pexels-edward-jenner-4031820.png" alt="" />
          <h4>ALÔ SAÚDE</h4>
          <h5>Orientação médica 24h por dia, 7 dias por semana, via telefone.</h5>
          <ul>
            <li><GrCheckmark/> Médico via ligação</li>
            <li><GrCheckmark/> Orientação nutricional, esportiva para gestantes</li>
            <li><GrCheckmark/> Dor/imprevisto</li>
            <li><GrCheckmark/> Auxílio na preparação de exames</li>
            <li><GrCheckmark/> Indicação de prestador isentando a cobrança de coparticipação</li>
          </ul>
        </div>
      </MainContentCard>
      
      <MainContentCard>
      <div className="main__spacer">
      <img src="/src/images/pexels-anna-shvets-4225881@2x.png" alt="" />
        <h4>PSICOLOGIA VIVA</h4>
        <h5>Psicólogo via vídeo chamada</h5>
      <p style={{maxWidth:"350px"}}><GrCheckmark/> Conecta psicólogos com pacientes por meio de atendimento on-line. Com ela, o segurado tem acesso a uma ampla rede de psicólogos referenciados para cuidar da sua saúde emocional, 24 horas por dia.</p>
      </div>
      </MainContentCard>
      </div>
    </MainContentInfo>

    <MainContentInfo>
      <h3>Quer saber mais?</h3>

      <Form></Form>
    </MainContentInfo>

</MainContentContainer>
  )
}