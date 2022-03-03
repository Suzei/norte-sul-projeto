import styled from 'styled-components'

export default function Footer() {

  const FooterFormat = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    color: white;
    background-color: var(--dark-yellow);

    div {
      display: flex;
      align-items: center;
    
    }

    img {
      max-width: 100px;
    }

    p {
      max-width: 516px;
      text-align: center;
    }
  `
  return (
      <FooterFormat>
        <div>
        <p>Desenvolvimento</p> 
        <img src="/src/images/Marlin_Logo_Branca_Verde_Vetor_RGB.png" alt="" />
        </div>

        <p>Todos os direitos reservados. © 2021 Norte a Sul Corretora de Seguros de Vida, Capitalização, Previdência Privada e Planos de Saúde LTDA CNPJ 14.280.310/0001-11 Av. Nilo Peçanha, 50 - Sala 809 - Centro Rio de Janeiro/RJ - CEP: 20.020-906</p>
      </FooterFormat>
  )
}