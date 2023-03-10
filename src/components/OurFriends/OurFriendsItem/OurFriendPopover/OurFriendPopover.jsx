import { useState } from "react";
import { styled } from '@mui/material/styles';
import { Button, Popover } from '@mui/material';
import { ContentOfPopover } from '../ContentOfPopover/ContentOfPopover';

const CustomizedBtn = styled(Button)`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.3;
  display: flex;
  align-items: center;
  background-color: transparent;
  outline: none;
  box-shadow: none;
  overflow: no-scroll;
  margin: 0;
  padding: 0;
  text-transform: capitalize;
  text-align: start;
  min-width: 0;
  color: #000000;
  :hover {
    color: #f59256;
    background-color: transparent;
    outline: none;
    box-shadow: none;
    margin: 0;
    padding: 0;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.35;
  }
  @media screen and (min-width: 1280px) {
font-size: 16px;
  }
`;

export const OurFriendsPopover = ({ workDays }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const from = workDays.find(({ from }) => from);
  const to = workDays.find(({ to }) => to);
  return (
    <div>
      <CustomizedBtn
       style={{
        overflow: "no-scroll"
      }}
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        Time: <br />
        {from.from} - {to.to}
      </CustomizedBtn>

      <Popover
      elevation={444}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        disableScrollLock={true}
        paddingThreshold={0}
      >
        <ContentOfPopover workDays={workDays} />
      </Popover>
    </div>
  );
};
