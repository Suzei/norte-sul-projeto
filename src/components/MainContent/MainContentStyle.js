import styled from "styled-components"


export const MainContentContainer = styled.div `
  padding: 20px;
  width: 100%;
  h3 {
    margin-bottom: 13px;
  }

  h3::after {
    display:block;
    content: "";
    position: relative;
    left: 0;
    bottom: 0;
    max-width: 150px;
    margin-top: 5px;
    border-bottom:2px solid var(--yellow);
    padding:4px 0px;
}

@media screen and (max-width: 375px) {
      h3 {
        max-width: 220px;      
      }
    }
  
`

export const MainContentPlano = styled.div `
  background-color: var(--yellow);
  margin: 0 auto;
  
`

export default MainContentContainer