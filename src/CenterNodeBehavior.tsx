// #-----------------------------------------------------------------------------
// # Copyright (c) 2021, gluoNNet, SA / AG / Ltd., and Qubit Graph Contributors.
// # All rights reserved.
// # The full license is in the file LICENSE.txt, distributed with this software.
// #-----------------------------------------------------------------------------

import { useContext, useEffect } from "react";
import { IG6GraphEvent, GraphinContext } from "@antv/graphin";
import { INode, NodeConfig } from "@antv/g6";

export const CenterNodeBehavior = () => {
  const { graph, apis } = useContext(GraphinContext);
  useEffect(() => {
    // OPTION: Initial focus / highlight:
    // apis.focusNodeById("node-0");
    const handleClick = (evt: IG6GraphEvent) => {
      const node = evt.item ;
      const model = node?.getModel() as NodeConfig;
      apis.focusNodeById(model.id);
      // TODO: Not working together with HighlightRelations
    };
    graph.on("node:click", handleClick);
    return () => {
      graph.off("node:click", handleClick);
    };
  }, []);
  return null;
};
