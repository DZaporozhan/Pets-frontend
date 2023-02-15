import { PaginationStyled } from './Pagination.styled';

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
  const { setPage, totalPage } = paginateData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={theme}>
      <PaginationStyled
        count={totalPage}
        onChange={(_, num) => {
          setPage(num);
          scrollToTop();
        }}
        size="large"
        color="primary"
      />
    </ThemeProvider>
  );
};
