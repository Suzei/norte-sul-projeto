import styled from 'styled-components'


export const SobreHospitalContainer = styled.div `
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;

p {
  border-bottom: 1px solid black;
  margin-bottom: 2px;
}


  img {
    max-width: 360px;
  }

  .hospital {
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 0 20px 0;
    box-shadow: var(--border-shadow);

    h4 {
      margin-top: 10px;
      color: var(--yellow);
      font-weight: 700;
      font-size: 20px;
    }
  }

  .hospital__info {
    display: none;
    max-width: 360px;
  }

  .hospital__info-show {
    display: flex;
    flex-direction: column;

    .hospital__call {
      display: flex;
    }

    .hospital__info {
      
    }
  }
`



export default SobreHospitalContainer