import { PaginationStyled } from './Pagination.styled';
import { PaginationItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const PaginationComponent = ({ paginateData }) => {
  const { setPage, totalPage, page, titleRequest } = paginateData;
  const { pathname } = useLocation();

  const scrollToTop = num => {
    if (page === num) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PaginationStyled
      variant="outlined"
      count={totalPage}
      siblingCount={0}
      onChange={(_, num) => {
        setPage(num);
        scrollToTop(num);
      }}
      size="large"
      page={page}
      renderItem={item => (
        <PaginationItem
          component={Link}
          to={
            `${pathname}?page=${item.page}` +
            (titleRequest !== '' ? `&search=${titleRequest}` : '')
          }
          {...item}
        />
      )}
    />
  );
};
