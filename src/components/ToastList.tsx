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
  width: 15.625rem;
  height: auto;
  max-height: 100rem;
  position: fixed;
  right: 10%;
  top: 1rem;
  transform: translate(50%, 0);
  z-index: 999;

  @media (max-width: 860px) {
    right: 1.5rem;
    transform: translate(0, 0);
  }
`;
