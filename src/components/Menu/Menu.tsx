import NavMenu from "./MenuStyle"

export default function Nav(){
  return (
    <NavMenu>
        <div>
          <img src="/src/images/norte-sul.png" alt="" />
          <img src="/src/images/porto-seguro.png" alt="" />
        </div>
        
        <ul>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Hospitais</a></li>
          <li><a href="#">Benefícios</a></li>
          <li><a href="#">Serviços especiais</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
    </NavMenu>
  )
}