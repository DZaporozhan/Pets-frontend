import { PaginationStyled } from './Pagination.styled';

export const PaginationComponent = ({ paginateData }) => {
  const { setPage, totalPage } = paginateData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PaginationStyled
      count={totalPage}
      // showFirstButton
      // showLastButton
      onChange={(_, num) => {
        setPage(num);
        scrollToTop();
      }}
      color="primary"
      size="large"
    />
  );
};
