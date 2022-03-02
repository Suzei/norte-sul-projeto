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

div {
  display: flex;
  gap: 30px;
}

@media screen and (max-width: 768px) {
  ul {
    display: none
  }
}
`

export default NavMenu