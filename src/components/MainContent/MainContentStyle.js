import styled from "styled-components"


export const MainContentContainer = styled.div `
  padding: 20px 0;
  margin: auto;
  max-width: 1162px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`

export const MainContentInfo = styled.div `
  padding: 30px;
   h3 {
    margin-bottom: 13px;
  }

  p {
    color: var(--matte-black)
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

export default MainContentContainer