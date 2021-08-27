// #-----------------------------------------------------------------------------
// # Copyright (c) 2021, gluoNNet, SA / AG / Ltd., and Qubit Graph Contributors.
// # All rights reserved.
// # The full license is in the file LICENSE.txt, distributed with this software.
// #-----------------------------------------------------------------------------

import React, { useContext } from "react";
import { GraphinContext } from "@antv/graphin";

export const ShowPaths = ({ paths = [] }) => {
  const { graph } = useContext(GraphinContext);
  const nodes = graph.getNodes();
  const edges = graph.getEdges();
  function handleShowPath(path : any) {
    nodes.forEach((node: any) => {
      const model = node.getModel();
      if (!path.nodes.includes(model.id)) {
        // graph.setItemState(node, "hover", false);
        graph.setItemState(node, "inactive", true);
        graph.setItemState(node, "hover", false);
      } else {
        graph.setItemState(node, "hover", true);
        // graph.setItemState(node, "active", true);
      }
    });
    edges.forEach((edge:any) => {
      const model = edge.getModel();
      if (!path.edges.includes(model.id)) {
        // graph.setItemState(edge, "inactive", true);
        graph.setItemState(edge, "hover", false);
      } else {
        // graph.setItemState(edge, "active", true);
        graph.setItemState(edge, "hover", true);
      }
    });
  }
  function handleClear(path:any) {
    nodes.forEach((node:any) => {
      const model = node.getModel();
      if (!path.nodes.includes(model.id)) {
        graph.setItemState(node, "inactive", false);
      } else {
        // graph.setItemState(node, 'active', false);
      }
    });
    edges.forEach((edge:any) => {
      const model = edge.getModel();
      if (!path.edges.includes(model.id)) {
        graph.setItemState(edge, "inactive", false);
      } else {
        graph.setItemState(edge, "active", false);
      }
    });
  }
  return (
    <div style={{ position: "absolute", top: 5 }}>
      <ul className="status-ul">
        <h3>Highlight Paths:</h3>
        {paths.map((path, index) => {
          return (
          // eslint-disable-next-line react/no-array-index-key
            <li
              key={index}
              onMouseEnter={() => handleShowPath(path)}
              onMouseLeave={() => handleClear(path)}
            >
              Path-{index + 1}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
