import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Toast from "./Toast";

export const ToastList = () => {
  const toast = useSelector((state: RootState) => state.toast);

  return (
    <Warpper>
      {toast.map((item, index) => (
        <Toast key={index} msg={item.msg} isSuccess={item.success} />
      ))}
    </Warpper>
  );
};

const Warpper = styled.div`
  width: 250px;
  height: auto;
  position: fixed;
  right: 10px;
  top: 20px;
  z-index: 999;

  @media (max-width: 860px) {
    right: 10px;
    transform: translate(0, 0);
  }
`;
