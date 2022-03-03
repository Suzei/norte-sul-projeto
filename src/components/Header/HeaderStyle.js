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
    color: var(--button-color);
    line-height: 1.2;
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
    display:block;
    content: "";
    position: relative;
    left: 0;
    bottom: 0;
    max-width: 200px;
    margin-top: 5px;
    border-bottom:3px solid var(--white);
    padding:4px 0px;
  }

  button {
    border-radius: 31px;
    padding: 15px 40px;
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 21px;
    background-color: var(--yellow);
    border: none;
    color: var(--button-color);
    white-space: nowrap;
    box-shadow: var(--border-shadow);
  }

    p {
    max-width: 298px;
    line-height: 1.5;
    font-size: 21px;
    font-weight: 400;
    color: var(--button-color);
    font-weight: 400;
  }

  @media screen and (max-width: 769px) {
    p {
      display: none;
    }

    span {
      font-size: 13px;
    }
  }

  @media screen and (max-width: 769px) {
     button {
       padding: 12px 19px;
       font-size: 13px;
     }

     h3, h2 {
      font-size: 30px;
    }

    h3 {
      max-width: 500px
    }

    button {
      padding: 10px 20px;
    }
  }
}
`



export default HeaderStyle