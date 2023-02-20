import { PaginationStyled } from './Pagination.styled';
import { PaginationItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#f59256',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

export const PaginationComponent = ({ paginateData }) => {
  const { setPage, totalPage, page, titleRequest } = paginateData;
  const { pathname } = useLocation();

  const scrollToTop = num => {
    if (page === num) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={theme}>
      <PaginationStyled
        count={totalPage}
        siblingCount={0}
        onChange={(_, num) => {
          setPage(num);
          scrollToTop(num);
        }}
        size="large"
        color="primary"
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
    </ThemeProvider>
  );
};
