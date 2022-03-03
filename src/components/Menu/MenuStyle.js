import styled from "styled-components"

export const NavMenu = styled.nav`
display: flex;
background-color: white;
box-shadow: var(--border-shadow);
padding: 20px;
justify-content: space-between;
align-items: center;

ul {
  display: flex;
  list-style: none;

  a {
    margin: 10px;
    text-decoration: none;
    color: var(--dark-yellowish) ;
    font-weight: 600;
  }
}

.menu__hamburger {
    display: none;
  }

div {
  display: flex;
  gap: 30px;
}

@media screen and (max-width: 768px) {
  ul {
    display: none
  }

  .menu__hamburger {
    display: block;
    max-width: 21px;
  }
}
`

export default NavMenu