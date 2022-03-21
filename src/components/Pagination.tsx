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
    <ul>
      <li onClick={onDoublePrev}>
        <div className="arrow left" />
        <div className="arrow left" />
      </li>
      <li onClick={onPrev}>
        <div className="arrow left" />
      </li>
      {paginationRange.map((pageNum) => {
        if (pageNum === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        } else if (typeof pageNum === "number") {
          return <li onClick={() => onPageChange(pageNum)}>{pageNum}</li>;
        }
      })}
      <li onClick={onNext}>
        <div className="arrow right" />
      </li>
      <li onClick={onDoubleNext}>
        <div className="arrow right" />
        <div className="arrow right" />
      </li>
    </ul>
  );
}

export default Pagination;
