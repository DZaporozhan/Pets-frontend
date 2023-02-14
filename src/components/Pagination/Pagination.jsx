import { PaginationStyled } from './Pagination.styled';

export const PaginationComponent = ({ paginateData }) => {
  const { setPage, totalPage } = paginateData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PaginationStyled
      count={totalPage}
      onChange={(_, num) => {
        setPage(num);
        scrollToTop();
      }}
      size="large"
    />
  );
};
