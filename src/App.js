// #-----------------------------------------------------------------------------
// # Copyright (c) 2021, gluoNNet, SA / AG / Ltd., and Qubit Graph Contributors.
// # All rights reserved.
// # The full license is in the file LICENSE.txt, distributed with this software.
// #-----------------------------------------------------------------------------

import React,{useState,useRef,useEffect} from "react";
import Graphin, { Behaviors } from "@antv/graphin";
import { Hull } from "@antv/graphin-components";
import { Legend } from "@antv/graphin-components";
// import { Toolbar } from "@antv/graphin-components";
import { CreateEdge } from "@antv/graphin-components";
import { MiniMap } from "@antv/graphin-components";
import { ContextMenu } from "@antv/graphin-components";
// import { Tooltip } from "@antv/graphin-components";
import { ShowPaths } from "./ShowPaths";
import { CenterNodeBehavior } from "./CenterNodeBehavior";
import { CanvasMenu } from "./CanvasMenu";
import { quantumNode } from "./quantumNode";
// import { data } from "./quantumData_ExampleStates";
import { data } from "./quantumData";
import './App.css'

// import { data } from "./testDataQuantum1";
// import { Timebar } from "@antv/graphin-components";
// import { FindPathPanel } from "@antv/graphin-components";
// import iconLoader from "@antv/graphin-icons";
// const icons = Graphin.registerFontFamily(iconLoader);

// TODO: Custom interactive edges: https://g6.antv.vision/en/docs/manual/middle/elements/edges/schema-edge#4-schema-edge-with-interaction-styles
// TODO: Icons
// TODO: Zooming Tooltips? https://codesandbox.io/s/test-tootip-zoom-zc5yn?file=/index.js
// TODO: https://graphin.antv.vision/en-US/components/analysis/find-path-panel#findpathpanel

const { ZoomCanvas, ActivateRelations, TreeCollapse } = Behaviors;
// const { BreathingLamp } = CreateEdge;

const layout = {
  type: "forceAtlas2",
  preventOverlap: true,
  workerEnabled: true
};

// // Select by clicking, cancel by clicking again
// graph.on('edge:click', (ev) => {
//   const edge = ev.item;
//   graph.setItemState(edge, 'selected', !edge.hasState('selected')); // Switch the 'selected' state
// });

// graph.on('edge:mouseenter', (ev) => {
//   const edge = ev.item;
//   graph.setItemState(edge, 'active', true);
// });

// graph.on('edge:mouseleave', (ev) => {
//   const edge = ev.item;
//   graph.setItemState(edge, 'active', false);
// });

quantumNode();
const  App = () => {
const graphRef = useRef(null); 
const [graphData, setGraphData] = useState(data)
const [selectedNode, setSelectedNode] = useState(null)


function removeNode(){
  var gdata=graphData;
  console.log("graphData : ",gdata);
  var nodes=gdata.nodes.filter(item=>item.id!=selectedNode.id);
  var edges=gdata.edges.filter(item=>item.source!=selectedNode.id);

  gdata.nodes=nodes;
  gdata.edges=edges;

  setGraphData(gdata);
  if(graphRef){
    graphRef.current.graph.data(gdata);
    graphRef.current.graph.render();
    setSelectedNode(null)
  }
}

function addNode(){
  const Color1 = "#34ccc1";
  const edgeColor = "steelblue";
  var gdata=graphData;
  
  gdata.nodes.push({
    id: `node-${gdata.nodes.length}`,
    label: `QN${gdata.nodes.length}`,
    size: 100,
    x:selectedNode.model.x+100,
    y: selectedNode.model.y+150,
    type: "quantum-node",
    color: Color1,
    vector: "pi/2, 0",
    phi: (0 * Math.PI) / 24,
    theta: (5 * Math.PI) / 10
  })

  gdata.edges.push({
    id: `edge${gdata.edges.length}`,
    source: `node-${gdata.nodes.length-1}`,
    target:selectedNode.model.id ,
    style: {
      keyshape: {
        stroke: edgeColor,
        lineWidth: 3,
        lineDash: [5, 5]
      }
    }
  },)
  setGraphData(gdata);
  if(graphRef){
    graphRef.current.graph.data(gdata);
    graphRef.current.graph.render();
    setSelectedNode(null)
  }
  console.log("gdata node added : ",gdata.nodes)
}

useEffect(()=>{
if(graphRef){
  graphRef.current.graph.on('node:click', (e) => {
    console.log("clickNodes ---->> ",e.item?._cfg)
    if(e.item?._cfg){
      setSelectedNode(e.item._cfg)
    }
  });
}
},[graphRef.current])

console.log("graphData added : ",graphData)
console.log("get value in ref ",graphRef)
  return (
    <div>
      <div className="button-view">
          <button  onClick={()=>{
            if(selectedNode){
              addNode()
            }
            else{
              alert("Please select a Node!")
            }
            }} >
            Add Node
          </button>
          <button className="deleteBtn" onClick={()=>{
            if(selectedNode){
              removeNode()
            }
            else{
              alert("Please select a Node!")
            }
            }}>
            Delete Node
          </button>
      </div>
     
      {/* <Graphin data={data} layout={{ type: "preset" }} theme={{ mode: 'dark' }}> */}
      <Graphin  layout={layout} data={data} ref={graphRef} >
        {/* OPTION: Enable/disable canvas zoom */}

        <ZoomCanvas />
        {/* OPTION: Enable/disable center node on click */}
        <CenterNodeBehavior />
        {/* OPTION: Enable/disable highlight relations */}
        {/* TODO: ActivateRelations should not disallow node selection*/}
        {/* <ActivateRelations trigger="mouseenter" activeState="hover" /> */}
        {/* OPTION: Enable/disable minimap */}
        
        <MiniMap visible />
        {/* OPTION: Enable/disable hull */}
        {/* <Hull options={data.hulls} /> */}
        {/* OPTION: Enable/disable path selection */}
       
        <ShowPaths paths={data.paths} />
        {/* OPTION: Enable/disable node context menu */}
        <ContextMenu style={{ width: "170px" }} bindType="canvas">
          <CanvasMenu />
        </ContextMenu>
        {/* OPTION: Enable/disable node type legend */}
        <Legend bindType="node" sortKey="type" colorKey="color">
          <Legend.Node />
        </Legend>
        {/* OPTION: Enable/disable node tooltips */}
        {/* <Tooltip bindType="node" placement="right" hasArrow>
          <Tooltip.Node>
            {(model) => {
              return <div>{model.id}</div>;
            }}
          </Tooltip.Node>
        </Tooltip> */}
        {/* NOT USED: Tree Collapse */}
        {/* <TreeCollapse trigger="click" /> */}
        {/* NOT USED: Toolbar */}
        {/* <Toolbar>
          <Toolbar.Item></Toolbar.Item>
        </Toolbar> */}
      </Graphin>
    </div>
  );
};

export default App;
