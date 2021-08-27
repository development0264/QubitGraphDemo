// #-----------------------------------------------------------------------------
// # Copyright (c) 2021, gluoNNet, SA / AG / Ltd., and Qubit Graph Contributors.
// # All rights reserved.
// # The full license is in the file LICENSE.txt, distributed with this software.
// #-----------------------------------------------------------------------------

export const primaryColor = "#ff6a00";
export const Color1 = "#fa6d01";
export const Color2 = "#34ccc1";
export const edgeColor = "steelblue";

export const data = {
  nodes: [
    {
      id: "node-0",
      label: "QN1",
      size: 100,
      x: 100,
      y: 150,
      type: "quantum-node",
      color: Color1,
      vector: "pi/2, 0",
      phi: (0 * Math.PI) / 24,
      theta: (5 * Math.PI) / 10
    },
    {
      id: "node-1",
      label: "QN2",
      size: 150,
      x: 380,
      y: 250,
      type: "quantum-node",
      color: Color1,
      vector: "0, pi3/4",
      phi: (18 * Math.PI) / 24,
      theta: (0 * Math.PI) / 10
    },
    {
      id: "node-2",
      label: "QN3",
      size: 110,
      x: 180,
      y: 300,
      type: "quantum-node",
      color: Color2,
      vector: "7/10pi, pi3/4",
      phi: (18 * Math.PI) / 24,
      theta: (7 * Math.PI) / 10
    },
    {
      id: "node-3",
      label: "QN4",
      size: 110,
      x: 300,
      y: 450,
      type: "quantum-node",
      color: "green",
      vector: "2/10pi, pi/4",
      phi: (6 * Math.PI) / 24,
      theta: (2 * Math.PI) / 10
    },
    {
      id: "node-4",
      label: "QN5",
      size: 110,
      x: 600,
      y: 350,
      type: "quantum-node",
      color: "blue",
      vector: "3/10pi, pi/2",
      phi: (12 * Math.PI) / 24,
      theta: (3 * Math.PI) / 10
    },
    {
      id: "node-5",
      label: "QN6",
      size: 110,
      x: 500,
      y: 550,
      type: "quantum-node",
      color: "pink",
      vector: "4/10pi, pi/2",
      phi: (12 * Math.PI) / 24,
      theta: (4 * Math.PI) / 10
    },
    {
      id: "node-6",
      label: "QN7",
      size: 110,
      x: 200,
      y: 650,
      type: "quantum-node",
      color: "magenta",
      vector: "pi, pi/2",
      phi: (12 * Math.PI) / 24,
      theta: (10 * Math.PI) / 10
    }
  ],
  edges: [
    {
      id: "edge0",
      source: "node-0",
      target: "node-1",
      style: {
        keyshape: {
          stroke: edgeColor,
          lineWidth: 3,
          lineDash: [5, 5]
        }
      }
    },
    {
      id: "edge1",
      source: "node-1",
      target: "node-2",
      style: {
        keyshape: {
          stroke: edgeColor,
          lineWidth: 3,
          lineDash: [5, 5]
        }
      }
    },
    {
      id: "edge2",
      source: "node-0",
      target: "node-2",
      style: {
        keyshape: {
          stroke: edgeColor,
          lineWidth: 3,
          lineDash: [5, 5]
        }
      }
    },
    {
      id: "edge3",
      source: "node-2",
      target: "node-3",
      style: {
        keyshape: {
          stroke: edgeColor,
          lineWidth: 3,
          lineDash: [5, 5]
        }
      }
    },
    {
      id: "edge4",
      source: "node-2",
      target: "node-4",
      style: {
        keyshape: {
          stroke: edgeColor,
          lineWidth: 3,
          lineDash: [5, 5]
        }
      }
    },
    {
      id: "edge5",
      source: "node-3",
      target: "node-4",
      style: {
        keyshape: {
          stroke: edgeColor,
          lineWidth: 3,
          lineDash: [5, 5]
        }
      }
    },
    {
      id: "edge6",
      source: "node-1",
      target: "node-4",
      style: {
        keyshape: {
          stroke: edgeColor,
          lineWidth: 3,
          lineDash: [5, 5]
        }
      }
    },
    {
      id: "edge7",
      source: "node-4",
      target: "node-5",
      style: {
        keyshape: {
          stroke: edgeColor,
          lineWidth: 3,
          lineDash: [5, 5]
        }
      }
    },
    {
      id: "edge8",
      source: "node-5",
      target: "node-6",
      style: {
        keyshape: {
          stroke: edgeColor,
          lineWidth: 3,
          lineDash: [5, 5]
        },
        label: {
          value: "label",
          fill: "#fff",
          fontSize: 12,
          background: {
            fill: "green",
            radius: 8,
            stroke: "#000"
          }
        }
      }
    },
    {
      id: "edge9",
      source: "node-4",
      target: "node-6",
      style: {
        keyshape: {
          stroke: edgeColor,
          lineWidth: 3,
          lineDash: [5, 5]
        }
      }
    },
    {
      id: "edge10",
      source: "node-3",
      target: "node-5",
      style: {
        keyshape: {
          stroke: edgeColor,
          lineWidth: 3,
          lineDash: [5, 5]
        }
      }
    }
  ],
  paths: [
    { edges: ["edge1"], nodes: ["node-1", "node-2"] },
    { edges: ["edge8"], nodes: ["node-5", "node-6"] }
  ],
  hulls: [
    {
      members: ["node-0", "node-1", "node-2"] // Required
    },
    {
      members: ["node-1", "node-3", "node-4"],
      // type: 'bubble',
      padding: 30,
      style: {
        fill: "lightgreen",
        stroke: "green"
      }
    }
  ]
};
