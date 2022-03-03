import styled from 'styled-components'

export const FormStyle = styled.div `
  display: flex;
  padding: 20px;
  flex-direction: column;
  gap: 50px;

  .form {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;    

    &__disclaimer {
      display: flex;
      max-width: 600px;
      align-items: center;

      p {
      margin-left: 15px;
    }
  
    }

    &__info {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .form__contact {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      gap: 12px;
      
      h4 {
        font-size: 29px;
        font-weight: 700;
        color: #E8BB15;
      }


      button {
        padding: 20px 50px;
        background-color: var(--yellow);
        font-weight: 700 ;
        display: flex;
        gap: 10px;
        white-space: nowrap;
      }
      
    }
  }

  img {
    max-width: 111px;
  }
`

export default FormStyle