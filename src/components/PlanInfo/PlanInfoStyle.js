import styled from "styled-components"


export const PlanInfoStyle = styled.div `
  display: flex;
  background-color: var(--dark-yellowish);
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 12px;
  width: 100%;
  max-width: 1125px;
  padding: 40px 0 ;
  gap: 30px;
  align-self: center;
  .content {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  gap: 20px;
  
  &__plan {
    display: flex;
    flex-direction: column;
    
    h2 {
      font-size: 2rem;
      color: var(--white);
    }

    span {
      color: #F8D074;
      font-weight: 600;
      font-size: 25px;
    }

    sup:nth-child(1) {
      font-weight: 400;
    }
  }

  &__law {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    @media screen and (max-width: 768px) {
      img {
        align-self: center;
      }
    }

    p {
      font-size: 7px;
      max-width: 13rem;
      min-width: 12rem;
      text-align: left;
      color: white;
    }

    img {
      height: 19px;
      max-width: 89px;
      display: block;
      margin-top: 12px
    }
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 12px;

    button {
      border-radius: 30px;
      background-color: var(--yellow);
      border: none;
      padding: 10px 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      cursor: pointer;
      text-transform: uppercase;
      font-weight: 700;
      color: white;
    }

    button:nth-child(2) {
      background-color: var(--dark-yellow);
    }
  }

  &__benefits {

  }
}
  
`

export default PlanInfoStyle