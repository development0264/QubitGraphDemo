// #-----------------------------------------------------------------------------
// # Copyright (c) 2021, gluoNNet, SA / AG / Ltd., and Qubit Graph Contributors.
// # All rights reserved.
// # The full license is in the file LICENSE.txt, distributed with this software.
// #-----------------------------------------------------------------------------

import React from "react";
import { GraphinContext } from "@antv/graphin";
import { ContextMenu } from "@antv/graphin-components";
import { TagFilled, DeleteFilled, ExpandAltOutlined } from "@ant-design/icons";

export const CanvasMenu = () => {
  const { Menu } = ContextMenu;
  const options = [
    {
      key: "download",
      icon: <TagFilled />,
      name: "Download Image"
    },
    {
      key: "downloadFull",
      icon: <DeleteFilled />,
      name: "Download Full Image"
    }
  ];
  const { graph, contextmenu } = React.useContext(GraphinContext);
  const context = contextmenu.canvas;
  const handleCanvasMenu = (menuItem: any, menuData: any) : void =>  {
    if (menuItem.key === "download") {
      graph.downloadImage("headron-pioneer-image."); // TODO: raise issue
      context.handleClose();
    } else if (menuItem.key === "downloadFull") {
      graph.downloadFullImage("headron-pioneer-fullimage");
      context.handleClose();
    }
  };
  return (
    <Menu
      bindType="canvas"
      onChange={handleCanvasMenu}
      options={options}
    ></Menu>
  );
};
