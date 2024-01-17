import React, { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import classes from "./commonGrid.module.css";
import PopupWrapper from "../../PopupWrapper";
import CommonGridV2 from "./index";

function PaginationComponent({
  pagesCount,
  currentPage,
  setCurrentPage,
  alwaysShown = true,
  pageIndex,
  pageOptions,
  title = "title",
  gridColumns = null,
  columnData = null,
  viewAllModal,
  filter,
  filterOption,
  totalSection,
  pagination,
  numberOfRows,
}) {
  const [viewAll, setViewAll] = useState(false);
  const isPaginationShown = alwaysShown ? true : pagesCount > 1;
  const isCurrentPageFirst = currentPage === 1;
  const isCurrentPageLast = currentPage === pagesCount;

  const changePage = (number) => {
    if (currentPage === number + 1) return;

    setCurrentPage(number);
  };

  const onPageNumberClick = (pageNumber) => {
    changePage(pageNumber);
  };

  const onPreviousPageClick = () => {
    changePage((currentPage) => currentPage - 1);
  };

  const onNextPageClick = () => {
    changePage((currentPage) => currentPage + 1);
  };

  const setLastPageAsCurrent = () => {
    if (currentPage > pagesCount) {
      setCurrentPage(pagesCount);
    }
  };

  let isPageNumberOutOfRange;

  const pageNumbers = [...new Array(pagesCount)]?.map((_, index) => {
    const pageNumber = index + 1;
    const isPageNumberFirst = pageNumber === 1;
    const isPageNumberLast = pageNumber === pagesCount;
    const isCurrentPageWithinTwoPageNumbers =
      Math.abs(pageNumber - currentPage) <= 1;

    if (
      isPageNumberFirst ||
      isPageNumberLast ||
      isCurrentPageWithinTwoPageNumbers
    ) {
      isPageNumberOutOfRange = false;
      return (
        <Pagination.Item
          key={pageNumber}
          onClick={() => onPageNumberClick(pageNumber - 1)}
          active={pageNumber === currentPage}
        >
          {pageNumber}
        </Pagination.Item>
      );
    }

    if (!isPageNumberOutOfRange) {
      isPageNumberOutOfRange = true;
      return <Pagination.Ellipsis key={pageNumber} className={classes.muted} />;
    }

    return null;
  });

  useEffect(setLastPageAsCurrent, [currentPage, pagesCount, setCurrentPage]);

  return (
    <>
      {isPaginationShown && (
        <div
          className={`mt-3 d-flex justify-content-between align-items-center ${classes.tableBottom}`}
        >
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ gap: "36px" }}
          >
            {pagination ? (
              pagination
            ) : (
              <>
                <p>
                  Page {pageIndex + 1} of {pageOptions.length}
                </p>
                <Pagination className={classes.pagination}>
                  <Pagination.Prev
                    onClick={onPreviousPageClick}
                    disabled={isCurrentPageFirst}
                  />
                  {pageNumbers}
                  <Pagination.Next
                    onClick={onNextPageClick}
                    disabled={isCurrentPageLast}
                  />
                </Pagination>
              </>
            )}
          </div>
          {viewAllModal && (
            <button
              onClick={() => {setViewAll(true);}}
              className={classes.buttonViewAll}
            >
              View All
            </button>
          )}
        </div>
      )}
      <style>
        {`.page-item a,
        .page-link:hover {
          color: #8992a9;
        }
        .page-item.active .page-link {
          border-color: #ff8057;
          border-radius: 50%;
          background-color: #ff8057;
        }
        .page-link {
          padding: 0px;
          height:35px;
          width:35px;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
        }
        .page-link:focus {
          box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.25);
        }`}
      </style>
      <PopupWrapper
        Component={
          <CommonGridV2
            title={title}
            gridColumns={gridColumns}
            columnData={columnData}
            className={"portfolio-at-glance col-sm-12"}
            viewAllModal={false}
            tHeight={"70vh"}
            filter={filter}
            filterOption={filterOption}
            totalSection={totalSection}
            numberOfRows={numberOfRows}
            pagination={pagination}
          />
        }
        toShow={viewAll}
        closeEventHandler={() => {
          setViewAll(false);
        }}
      />
    </>
  );
}

export default PaginationComponent;
