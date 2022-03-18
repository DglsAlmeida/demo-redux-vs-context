import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  h3 {
    margin: 12px 0;
  }

  button {
    border: 0;
    background-color: aquamarine;
    height: 40px;
    width: 200px;
    border-radius: 5px;
    cursor: pointer;
    transition: filter 0.2s;
    font-size: 18px;
    font-weight: bold;

    &:hover {
      filter: brightness(0.8)
    }
  }

  span {
    margin-top: 8px;
    font-size: 16px;
    font-weight: bold;
    color: red;
  }
`