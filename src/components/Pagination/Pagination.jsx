import { Pagination } from '@mui/material';

export const PaginationComponent = ({ paginateData }) => {
  const { setPage, totalPage } = paginateData;

  return (
    <Pagination
      count={totalPage}
      showFirstButton
      showLastButton
      onChange={(_, num) => setPage(num)}
    />
  );
};
