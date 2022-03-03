import NavMenu from "./MenuStyle"

export default function Nav(){
  return (
    <NavMenu>
        <div>
          <img src="/src/images/norte-sul.png" alt="" />
          <img src="/src/images/porto-seguro.png" alt="" />
        </div>
        
        <ul>
          <li><a href="#plano">Sobre</a></li>
          <li><a href="#hospitais">Hospitais</a></li>
          <li><a href="#beneficios">Benefícios</a></li>
          <li><a href="#servicos">Serviços especiais</a></li>
          <li><a href="#conato">Contato</a></li>
        </ul>

        <img className="menu__hamburger" src="/src/images/harmburguer.png" alt="" />
    </NavMenu>
  )
}