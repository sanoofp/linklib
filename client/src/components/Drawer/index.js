import React from "react";
import Drawer from "@material-ui/core/Drawer";
import styled from "styled-components";
import DrawerContent from "./DrawerContent";

const DrawerDiv = styled.div`
  width: 260px;
  padding: 30px 8px;
`;

const DrawerComponent = props => {
  return (
    <Drawer
      anchor="right"
      elevation={10}
      open={props.isOpen}
      onClose={() => props.onCloseDrawer(false)}
    >
      <div
        tabIndex={0}
        role="button"
        onKeyDown={() => props.onCloseDrawer(false)}
      >
        <DrawerDiv>
          <DrawerContent />
        </DrawerDiv>
      </div>
    </Drawer>
  );
};

export default DrawerComponent;
