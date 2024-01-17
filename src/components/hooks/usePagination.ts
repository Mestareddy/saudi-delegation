import { useCallback, useState } from "react";

 const usePagination = (defaultCurrentPage?: number) => {
  const [currentPage, setCurrentPage] = useState<number>(
    defaultCurrentPage || 1
  );
  const [itemPerPage, seItemPerPage] = useState<number>(100);
  const [totalPages, setTotalPages] = useState<number>(0);

  const paginateHandler = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);


  const setLimitHander = useCallback((limit: number) => {
    seItemPerPage(limit);
  }, []);

  const seTotalPageHandler = useCallback((pages: number) => {
    setTotalPages(pages);
  }, []);

  return {
    paginateHandler,
    currentPage,
    setLimitHander,
    itemPerPage,
    totalPages,
    seTotalPageHandler,
  };
};


export default usePagination