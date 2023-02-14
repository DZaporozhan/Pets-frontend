import styled from 'styled-components';
import { Pagination } from '@mui/material';

export const PaginationStyled = styled(Pagination)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 90px;
  ul {
    li {
      .css-rppfq7-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
        background-color: #f59256;
      }
    }
  }
`;
