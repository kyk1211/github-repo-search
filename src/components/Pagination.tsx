import styled from "@emotion/styled";
import React from "react";
import { DOTS, usePagination } from "../hooks/usePagination";

interface Props {
  dataCount: number;
  rowsPerPage?: number;
  currentPage: number;
  siblingCount?: number;
  onPageChange: React.Dispatch<React.SetStateAction<number>>;
}

function Pagination({ dataCount, rowsPerPage = 10, currentPage, siblingCount = 2, onPageChange }: Props) {
  const paginationRange = usePagination({
    currentPage,
    dataCount,
    siblingCount,
    rowsPerPage,
  });

  if (currentPage === 0 || paginationRange.length < 2) return null;

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onDoubleNext = () => {
    if (currentPage >= Math.ceil(dataCount / rowsPerPage) - 10) {
      onPageChange(Math.ceil(dataCount / rowsPerPage));
    } else {
      onPageChange(currentPage + 10);
    }
  };

  const onPrev = () => {
    onPageChange(currentPage - 1);
  };

  const onDoublePrev = () => {
    if (currentPage <= 10) {
      onPageChange(1);
    } else {
      onPageChange(currentPage - 10);
    }
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <Container>
      <DbArrow onClick={onDoublePrev} disabled={currentPage === 1}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M77.25 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C175.6 444.9 183.8 448 192 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L77.25 256zM269.3 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C367.6 444.9 375.8 448 384 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L269.3 256z" />
        </svg>
      </DbArrow>
      <Arrow onClick={onPrev} disabled={currentPage === 1}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
          <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
        </svg>
      </Arrow>
      {paginationRange.map((pageNum, idx) => {
        if (pageNum === DOTS) {
          return (
            <Dot key={idx} className="pagination-item dots">
              &#8230;
            </Dot>
          );
        } else if (typeof pageNum === "number") {
          return (
            <PageBtn key={idx} onClick={() => onPageChange(pageNum)} active={currentPage === pageNum}>
              {pageNum}
            </PageBtn>
          );
        } else {
          return null;
        }
      })}
      <Arrow onClick={onNext} disabled={currentPage === lastPage}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
          <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />
        </svg>
      </Arrow>
      <DbArrow onClick={onDoubleNext} disabled={currentPage === lastPage}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z" />
        </svg>
      </DbArrow>
    </Container>
  );
}

interface ArrowProps {
  disabled: boolean;
}

interface PageActive {
  active: boolean;
}

const Container = styled.ul({
  width: "400px",
  display: "flex",
  listStyle: "none",
  alignItems: "center",
  margin: "auto",
  marginBottom: "10px",
  fontSize: "20px",
});

const Dot = styled.li({
  pointerEvents: "none",
});

const DefaultLi = styled.li({
  width: "40px",
  textAlign: "center",
  verticalAlign: "center",
  cursor: "pointer",
  borderRadius: "10px",
  padding: "2px",
  "&:hover": {
    backgroundColor: "lightgray",
  },
});

const Arrow = styled(DefaultLi)<ArrowProps>(
  {
    "& svg": {
      width: "8px",
    },
  },
  (props) => props.disabled && { opacity: "0.7", pointerEvents: "none", cursor: "default" }
);

const DbArrow = styled(Arrow)({
  "& svg": {
    width: "14px",
  },
});

const PageBtn = styled(DefaultLi)<PageActive>(
  {},
  (props) => props.active && { fontWeight: "bold", backgroundColor: "lightgray" }
);

export default Pagination;
