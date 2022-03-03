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
.main__wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 0 auto;
    flex-wrap: wrap;
    gap: 30px;

    h5::after {
      display:flex;
      align-self: center;
    content: "";
    position: relative;
    margin-top: 5px;
    border-bottom:2px solid var(--yellow);
    padding:4px 0px;

    }
  }
  
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

export const MainContentCard = styled.div `
  box-shadow: var(--border-shadow);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 0 20px 20px 0;
  max-width: 505px;

  .main__spacer {
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: center;
  }
  
  h4 {
    font-size: 15px;
    color: #E8BB15;
    font-weight: 700;
    text-align: center;
    margin-top: 12px;
  }

  ul {
    padding: 20px;
  }

  p {
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    padding: 20px;
  }

  @media screen and (min-width: 740px) {
    h4 {
    font-size: 30px;
    max-width: 504px;
  }

  p {
    font-size: 20px;
    max-width: 504px;
  }

  .main__wrapper {
    flex-wrap: nowrap
  }
}

@media screen and (max-width: 375px) {
      h3 {
        max-width: 220px;      
      }
    }

    .main__wrapper {
    flex-wrap: wrap
  }
`


export default MainContentContainer