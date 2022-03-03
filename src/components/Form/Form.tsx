import FormStyle from "./FormStyle.js"
import Logo from '/phone-call.svg'
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn,
} from 'mdb-react-ui-kit';

import { BsWhatsapp, BsFillTelephoneFill } from "react-icons/all";

export default function Form() {
  return (
    <FormStyle>
      <div className="form__disclaimer">
        <img src={Logo} alt="" />
        <p>Ainda sobrou alguma dúvida sobre qual o melhor Plano para sua empresa? Envie seus dados e deixe que a NS Benefícios entrará em contato assim que possível.</p>
      </div>

      <div className="form">
      <form>
      <MDBInput wrapperClass='mb-4' label='Insira aqui o seu nome' />
      <MDBInput type='email' wrapperClass='mb-4' label='Endereço de E-mail' />
      <MDBInput wrapperClass='mb-4' type='tel' label='Insira o seu telefone' />

      <button style={{backgroundColor: "var(--yellow)", minWidth: '289px' }} type='submit' className='mb-4' block>
        Enviar Contato
      </button>
    </form>

    <div className="form__contact">
      <h5>Fale conosco agora mesmo:</h5>
      <h4>4020-6440</h4>
      <button><BsWhatsapp size={40} style={{ fill: 'white' }} />clique aqui para <br/> enviar uma mensagem</button>
      <button><BsFillTelephoneFill size={40}/>clique aqui para ligar</button>
    </div>
      </div>
    </FormStyle>
  )
}