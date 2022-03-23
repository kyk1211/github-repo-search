import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addToast, deleteToast } from "../store/toastSlice";
import { useAppDispatch } from "./useAppdispatch";
import useDebounce from "./useDebounce";

export const useToast = () => {
  const toastState = useSelector((state: RootState) => state.toast);
  const toast = useDebounce<Toast[]>(toastState, 2500);
  const dispatch = useAppDispatch();

  const handleToast = (msg: string, success: boolean) => {
    dispatch(
      addToast({
        msg: msg,
        success: success,
      })
    );
  };

  useEffect(() => {
    toast.forEach(() => {
      dispatch(deleteToast());
    });
  }, [dispatch, toast]);

  return handleToast;
};
