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
      label: "longLabel",
      // size: 100,
      x: 100,
      y: 150,
      type: "quantum-node",
      // realProjection: true,
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
  edges: [],
  paths: [],
  hulls: []
};
