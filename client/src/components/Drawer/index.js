import React from 'react';
import Drawer from '@material-ui/core/Drawer';

const DrawerComponent = props => {
  return <Drawer anchor="right" open={props.isOpen} onClose={() => props.onClose(false)}>
    <div
      tabIndex={0}
      role="button"
      onClick={() => props.onClose(false)}
      onKeyDown={() => props.onClose(false)}
    >
      Drawer Menu
    </div>
  </Drawer>
}

export default DrawerComponent;