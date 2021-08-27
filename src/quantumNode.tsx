// #-----------------------------------------------------------------------------
// # Copyright (c) 2021, gluoNNet, SA / AG / Ltd., and Qubit Graph Contributors.
// # All rights reserved.
// # The full license is in the file LICENSE.txt, distributed with this software.
// #-----------------------------------------------------------------------------

import Graphin from "@antv/graphin";

export function quantumNode() {
  // variable that are needed as graph wide defaults with state changes
  var stateColor = "red";
  var inactiveColor = "lightgray";
  Graphin.registerNode(
    "quantum-node",
    {
      options: {
        style: {},
        stateStyles: {
          hover: {},
          selected: {}
        }
      },
      draw(cfg: { color: string; id: any; label: any; size: number; projection: number[]; realProjection: any; phi: number; theta: number; hideAxis: any; hidePoles: any; vector: string | any[]; }, group: {
          addShape: (arg0: string, arg1: {
            attrs: { id: string; lineWidth: number; r: number; fill: string; fillOpacity: number; stroke: string; shadowColor: string; shadowBlur: number; } | { id: string; lineWidth: number; r: number; fill: string; fillOpacity: number; } | { id: string; lineWidth: number; lineDash: number[]; rx: number; ry: number; stroke: string; fill: string; fillOpacity: number; } | { id: string; lineWidth: number; lineDash: number[]; path: (string | number)[][]; stroke: string; } | { id: string; lineWidth: number; stroke: string; fill: string; r: number; y: number; } | { id: string; lineWidth: number; stroke: string; fill: string; r: number; y: number; } | { id: string; lineWidth: number; fill: string; r: number; x: number; y: number; } | { id: string; lineWidth: number; path: (string | number)[][]; stroke: string; } | { id: string; lineWidth: number; x: number; y: number; radius: number; width: number; height: number; fill: string; stroke: string; } | {
              id: string; fontSize: number; x: number; y: number; text: any; fill: string;
              // fontFamily: "normal",
              textAlign: string; textBaseline: string;
            } | { id: string; lineWidth: number; x: number; y: number; radius: number; width: number; height: number; fill: string; stroke: string; } | {
              id: string; fontSize: number; x: number; y: number; text: any; fill: string;
              // fontFamily: "normal",
              textAlign: string; textBaseline: string;
            }; draggable: boolean; name: string;
          }) => void;
        }) {
        // variables that are needed as individual node defaults with state changes
        var color = "#fa6d01";
        if (cfg.color) {
          color = cfg.color;
        } else {
          cfg.color = color;
        }
        // variables that are not needed as defaults with state changes
        var label = cfg.id;
        if (cfg.label) {
          label = cfg.label;
        }
        var size = 100;
        if (cfg.size) {
          size = cfg.size;
        }
        var projection = [60, -20];
        if (cfg.projection) {
          projection = cfg.projection;
        }
        const radius = size / 2;
        const sin45_radius = radius * 0.70710678118;
        const comp_tilt_sin = 1 - Math.sin((projection[0] * Math.PI) / 180);
        const rot_sin = Math.sin((projection[1] * Math.PI) / 180);
        const rot_cos = Math.cos((projection[1] * Math.PI) / 180);
        var tilt_sin = 1;
        if (cfg.realProjection) {
          tilt_sin = 1 - comp_tilt_sin;
        }
        const corr = projection[1] * (Math.PI / 180);
        const x = radius * Math.cos(cfg.phi - corr) * Math.sin(cfg.theta);
        const y = radius * Math.sin(cfg.phi - corr) * Math.sin(cfg.theta);
        const z = radius * Math.cos(cfg.theta);
        const keyshape = group.addShape("circle", {
          attrs: {
            id: "node-floor",
            lineWidth: 3,
            r: radius,
            fill: color,
            fillOpacity: 0.2,
            stroke: color,
            shadowColor: color,
            shadowBlur: 0
          },
          draggable: true,
          name: "node-floor"
        });
        // Halo
        group.addShape("circle", {
          attrs: {
            id: "node-highlight",
            lineWidth: 0,
            r: radius + 30 / 2,
            fill: color,
            fillOpacity: 0.0
          },
          draggable: true,
          name: "node-highlight"
        });
        // Quantum
        group.addShape("ellipse", {
          attrs: {
            id: "node-equator",
            lineWidth: 3,
            lineDash: [5, 5],
            rx: radius,
            ry: radius * comp_tilt_sin,
            stroke: color,
            fill: "",
            fillOpacity: 1.0
          },
          draggable: true,
          name: "node-equator"
        });
        if (!cfg.hideAxis) {
          group.addShape("path", {
            attrs: {
              id: "node-axis",
              lineWidth: 2,
              lineDash: [3, 3],
              path: [
                ["M", 0, 0],
                ["L", radius * rot_sin, radius * rot_cos * comp_tilt_sin],
                ["M", 0, 0],
                ["L", radius * rot_cos, radius * -rot_sin * comp_tilt_sin],
                ["M", 0, 0],
                ["L", 0, -radius * tilt_sin]
              ],
              stroke: color
            },
            draggable: true,
            name: "node-axis"
          });
        }
        if (!cfg.hidePoles) {
          group.addShape("circle", {
            attrs: {
              id: "node-northpole",
              lineWidth: 2,
              stroke: color,
              fill: "white",
              r: 5,
              y: -radius * tilt_sin
            },
            draggable: true,
            name: "node-northpole"
          });
          group.addShape("circle", {
            attrs: {
              id: "node-southpole",
              lineWidth: 2,
              stroke: color,
              fill: "white",
              r: 5,
              y: radius * tilt_sin
            },
            draggable: true,
            name: "node-southpole"
          });
        }
        group.addShape("circle", {
          attrs: {
            id: "node-state",
            lineWidth: 0,
            fill: stateColor,
            r: 5,
            x: x,
            y: y * comp_tilt_sin + z
          },
          draggable: true,
          name: "node-state"
        });
        group.addShape("path", {
          attrs: {
            id: "node-state-line",
            lineWidth: 2,
            path: [
              ["M", 0, 0],
              ["L", x, y * comp_tilt_sin + z]
            ],
            stroke: stateColor
          },
          draggable: true,
          name: "node-state-line"
        });
        // Label Badge
        var label_badge_width = 20 + label.length * 5;
        const label_badge_height = 25;
        const label_badge_font_size = 12;
        group.addShape("rect", {
          attrs: {
            id: "badge-rt-floor",
            lineWidth: 1,
            x: -sin45_radius - label_badge_width,
            y: -sin45_radius - label_badge_height,
            radius: 3,
            width: label_badge_width,
            height: label_badge_height,
            fill: color,
            stroke: "#fff"
          },
          draggable: true,
          name: "badge-rt-floor"
        });
        group.addShape("text", {
          attrs: {
            id: "badge-label",
            fontSize: label_badge_font_size,
            x: -sin45_radius - label_badge_width / 2,
            y: -sin45_radius - label_badge_height / 2,

            text: label,
            fill: "#fff",
            // fontFamily: "normal",
            textAlign: "center",
            textBaseline: "middle"
          },
          draggable: true,
          name: "badge-rt-label"
        });
        // Vector Badge
        if (cfg.vector) {
          const vector_badge_width = 20 + cfg.vector.length * 5;
          const vector_badge_height = 25;
          const vector_badge_font_size = 12;
          group.addShape("rect", {
            attrs: {
              id: "badge-rt-floor",
              lineWidth: 1,
              x: sin45_radius,
              y: -sin45_radius - vector_badge_height,
              radius: 3,
              width: vector_badge_width,
              height: vector_badge_height,
              fill: color,
              stroke: "#fff"
            },
            draggable: true,
            name: "badge-rt-floor"
          });
          group.addShape("text", {
            attrs: {
              id: "badge-label",
              fontSize: vector_badge_font_size,
              x: sin45_radius + vector_badge_width / 2,
              y: -sin45_radius - vector_badge_height / 2,

              text: cfg.vector,
              fill: "#fff",
              // fontFamily: "normal",
              textAlign: "center",
              textBaseline: "middle"
            },
            draggable: true,
            name: "badge-rt-label"
          });
        }
        return keyshape;
      },
      // Response the states
      setState(name: string, value: any, item: { getContainer: () => any; _cfg: { model: { color: any; }; }; }) {
        const group = item.getContainer();
        const childs = group.get("children");
        const shape1 = childs[0]; // Find the first graphics shape of the node. It is determined by the order of being added
        const shape2 = childs[1]; // Find the second graphics shape of the node. It is determined by the order of being added
        const shape3 = childs[2]; // Find the second graphics shape of the node. It is determined by the order of being added
        const shape4 = childs[3]; // Find the second graphics shape of the node. It is determined by the order of being added
        const shape5 = childs[4]; // Find the second graphics shape of the node. It is determined by the order of being added
        const shape6 = childs[5]; // Find the second graphics shape of the node. It is determined by the order of being added
        const shape7 = childs[6]; // Find the second graphics shape of the node. It is determined by the order of being added
        const shape8 = childs[7]; // Find the second graphics shape of the node. It is determined by the order of being added
        const shape9 = childs[8]; // Find the second graphics shape of the node. It is determined by the order of being added
        const shape10 = childs[10]; // Find the second graphics shape of the node. It is determined by the order of being added
        if (name === "selected") {
          if (value) {
            shape1.attr("shadowBlur", 30);
            shape1.attr("lineWidth", 5);
          } else {
            shape1.attr("shadowBlur", 0);
            shape1.attr("lineWidth", 3);
          }
        } else if (name === "hover") {
          if (value) {
            shape2.attr("fillOpacity", 0.1);
          } else {
            shape2.attr("fillOpacity", 0);
          }
        } else if (name === "active") {
          if (value) {
            shape1.attr("fillOpacity", 0.2);
            shape1.attr("stroke", item._cfg.model.color);
            shape3.attr("stroke", item._cfg.model.color);
            shape4.attr("stroke", item._cfg.model.color);
            shape5.attr("stroke", item._cfg.model.color);
            shape6.attr("stroke", item._cfg.model.color);
            shape7.attr("fill", stateColor);
            shape8.attr("stroke", stateColor);
            shape9.attr("fill", item._cfg.model.color);
            shape10.attr("fill", item._cfg.model.color);
          } else {
            shape1.attr("fillOpacity", 0);
            shape1.attr("stroke", inactiveColor);
            shape3.attr("stroke", inactiveColor);
            shape4.attr("stroke", inactiveColor);
            shape5.attr("stroke", inactiveColor);
            shape6.attr("stroke", inactiveColor);
            shape7.attr("fill", inactiveColor);
            shape8.attr("stroke", inactiveColor);
            shape9.attr("fill", inactiveColor);
            shape10.attr("fill", inactiveColor);
          }
        } else if (name === "inactive") {
          if (value) {
            shape1.attr("fillOpacity", 0.05);
            shape1.attr("opacity", 0.05);
          } else {
            shape1.attr("fillOpacity", 0.2);
            shape1.attr("opacity", 1);
          }
        }
      }
    },
    "single-node"
  );
}
