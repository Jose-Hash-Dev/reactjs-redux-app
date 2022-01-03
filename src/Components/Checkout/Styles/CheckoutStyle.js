import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  height: 70px;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
`;
export const CardDetails = styled.div`
  margin-top: 10px;
`;
export const TitlePriceContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
`;
export const Title = styled.div`
  font-size: 20px;
  margin-left: 5px;
`;
export const Price = styled.p`
  font-size: 20px;
  font-family: "Roboto Light", serif;
`;
export const TotalCostContainer = styled.div`
  text-align: center;
`;
export const TotalCost = styled.p`
  font-size: 20px;
`;
export const Image = styled.img`
  height: 70px;
  width: 60px;
`;
export const DefaultText = styled.p`
  font-size: 20px;
  font-family: "Roboto Light", serif;
  color: #000080;
`;
