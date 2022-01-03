import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const ProductCardContainer = styled.div`
  max-width: 185px;
  width: 400px;
  padding: 10px;
  margin-right: 8px;
  text-align: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
`;
export const Details = styled.div`
  margin: 10px 10px 0 10px;
  text-align: center;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`;
export const Title = styled.div`
  font-size: 15px;
  color: #000080;
  font-family: "Roboto Light", serif;
  text-decoration: none;
  margin-bottom: 5px;
`;
export const Price = styled.div`
  font-size: 15px;
  margin-right: 5px;
  color: #000080;
  font-family: "Roboto Light", serif;
`;
export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
