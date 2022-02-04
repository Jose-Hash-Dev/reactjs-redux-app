import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";

export const CardContainer = styled.div`
  display: flex;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
`;
export const CardDetails = styled.div`
  justify-content: space-between;
  width: 300px;
`;
export const TitleButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
`;
export const Title = styled.p`
  font-family: "Roboto Light", serif;
  font-size: 20px;
  color: #000080;
`;
export const PriceSpinner = styled.div`
  justify-content: space-between;
  display: flex;
  //align-items: center;
  margin-left: 10px;
`;
export const Price = styled.div`
  margin-top: 20px;
  font-family: "Roboto Light", serif;
  font-size: 20px;
  color: #000080;
`;
export const Subtotal = styled.p`
  margin-top: 20px;
  font-family: "Roboto Light", serif;
  font-size: 15px;
  color: #000080;
  height: 10px;
`;
export const SpinnerStyle = styled.div`
  margin-top: 10px;
  margin-right: 60px;
  width: 20px;
`;
export const Image = styled.img`
  height: 110px;
  width: 90px;
`;
export const CloseButton = styled(CloseIcon)`
  cursor: pointer;
`;
export const DeleteButton = styled(DeleteIcon)`
  cursor: pointer;
`;
