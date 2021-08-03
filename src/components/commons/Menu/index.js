import { Logo } from '../../../theme/Logo'
import { MenuWrapper } from "./styles/MenuWrapper"

export default function Menu() {
  const links = [
    {
      texto: 'Home',
      url: '/'
    },
    {
      texto: 'Perguntas frequentes',
      url: '/faq'
    },
    {
      texto: 'Sobre',
      url: '/sobre'
    }
  ]

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide as="ul">
        {links.map((link) => {
          return (
            <li>
              <a href={link.url}>
                {link.texto}
              </a>
            </li>
          )
        })}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <button type="button">
          Entrar
        </button>
        <button type="button">
          Cadastrar
        </button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}