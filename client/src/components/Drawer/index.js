import React from "react";
import Drawer from "@material-ui/core/Drawer";
import styled from 'styled-components';
import DrawerContent from './DrawerContent';

const DrawerDiv = styled.div`
  width: 260px;
  padding: 20px 8px;
`;

const DrawerComponent = props => {
  return (
    <Drawer
      anchor="right"
      elevation={10}
      open={props.isOpen}
      onClose={() => props.onClose(false)}
    >
      <div
        tabIndex={0}
        role="button"
        onKeyDown={() => props.onClose(false)}
      >
        <DrawerDiv>
          <DrawerContent handleOnClick={() => props.onClose(false)} />
        </DrawerDiv>
      </div>
    </Drawer>
  );
};

export default DrawerComponent;
