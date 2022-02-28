import styled from "styled-components"

export const HeaderStyle = styled.div `
  display: flex;
  background: url('/src/images/banner.png') right center no-repeat;
  background-repeat: no-repeat;  
  background-size: cover;
`
export const HeaderStyleInfo = styled.div `
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 120px 0;
  margin-left: 30px;
  gap: 25px;
  justify-content: center;

  sub {
    max-width: 450px;
    color: var(--button-color)
  }

  .header__prices {
    display: flex;
    align-items: center;
    gap: 10px;
    white-space: nowrap;
    width: 100%;
    
    span {
      display: flex;
      align-items: center;
      gap: 7px;
      font-weight: 300;
      color: var(--button-color);
      font-size: 17px;

      h2 {
        font-weight: 700;
        font-size: 33px;
      }
    }
  }
  h3 {
    max-width: 500px;
    font-size: 40px;
    color: white;
    text-shadow: #00000082 2px 2px 5px;
  }

  h3::after {
    
  }

  button {
    border-radius: 31px;
    padding: 15.5px;
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 13px;
    text-transform: uppercase;
    background-color: var(--yellow);
    border: none;
    color: var(--button-color);
    white-space: nowrap;
  }

    p {
    max-width: 298px;
    line-height: 1.5;
    font-size: 21px;
    font-weight: 400;
    color: var(--button-color);
    font-weight: 400;
  }

  @media screen and (max-width: 600px) {
    p {
      display: none;
    }

    h3 {
      max-width: 500px;
    }
    span {
      align-self: center;
    }
  }

  @media screen and (max-width: 378px) {
     button {
       padding: 12px 19px ;
     }
  }
}
`



export default HeaderStyle