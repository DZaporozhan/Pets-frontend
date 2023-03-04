import styled from 'styled-components';
import { Pagination } from '@mui/material';

export const PaginationStyled = styled(Pagination)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 90px;
  .Mui-selected {
    background-color: #f59256 !important;
    color: #ffffff !important;
  }

  .MuiPaginationItem-root {
    border: 2px solid #f59256;
    color: #f59256;
    &:hover {
      background-color: #f59256;
      color: #ffffff;
      cursor: pointer;
    }
  }
`;
