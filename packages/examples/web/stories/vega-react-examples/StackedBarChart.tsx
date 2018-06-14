/*{
    "$schema": "https://vega.github.io/schema/vega/v4.json",
    "width": 500,
    "height": 200,
    "padding": 5,
  
    "data": [
      {
        "name": "table",
        "values": [
          {"x": 0, "y": 28, "c":0}, {"x": 0, "y": 55, "c":1},
          {"x": 1, "y": 43, "c":0}, {"x": 1, "y": 91, "c":1},
          {"x": 2, "y": 81, "c":0}, {"x": 2, "y": 53, "c":1},
          {"x": 3, "y": 19, "c":0}, {"x": 3, "y": 87, "c":1},
          {"x": 4, "y": 52, "c":0}, {"x": 4, "y": 48, "c":1},
          {"x": 5, "y": 24, "c":0}, {"x": 5, "y": 49, "c":1},
          {"x": 6, "y": 87, "c":0}, {"x": 6, "y": 66, "c":1},
          {"x": 7, "y": 17, "c":0}, {"x": 7, "y": 27, "c":1},
          {"x": 8, "y": 68, "c":0}, {"x": 8, "y": 16, "c":1},
          {"x": 9, "y": 49, "c":0}, {"x": 9, "y": 15, "c":1}
        ],
        "transform": [
          {
            "type": "stack",
            "groupby": ["x"],
            "sort": {"field": "c"},
            "field": "y"
          }
        ]
      }
    ],
  
    "scales": [
      {
        "name": "color",
        "type": "ordinal",
        "range": "category",
        "domain": {"data": "table", "field": "c"}
      }
    ],
  
    "axes": [
      {"orient": "bottom", "scale": "x", "zindex": 1},
      {"orient": "left", "scale": "y", "zindex": 1}
    ],
  
    "marks": [
      {
        "type": "rect",
        "from": {"data": "table"},
        "encode": {
          "enter": {
            "x": {"scale": "x", "field": "x"},
            "width": {"scale": "x", "band": 1, "offset": -1},
            "y": {"scale": "y", "field": "y0"},
            "y2": {"scale": "y", "field": "y1"},
            "fill": {"scale": "color", "field": "c"}
          },
          "update": {
            "fillOpacity": {"value": 1}
          },
          "hover": {
            "fillOpacity": {"value": 0.5}
          }
        }
      }
    ]
  }*/
// tslint:disable
import * as React from 'react'
import {
	Chart,
	Rect,
	LinearScale,
	BandScale,
	Dimension,
	OrdinalScale,
	CategoricalColorScheme,
} from '@gog/react'
import { Renderer } from '@gog/react-svg-renderer'
const renderer = new Renderer()
const data = [
	{ x: 0, y: 28, c: 0 },
	{ x: 0, y: 55, c: 1 },
	{ x: 1, y: 43, c: 0 },
	{ x: 1, y: 91, c: 1 },
	{ x: 2, y: 81, c: 0 },
	{ x: 2, y: 53, c: 1 },
	{ x: 3, y: 19, c: 0 },
	{ x: 3, y: 87, c: 1 },
	{ x: 4, y: 52, c: 0 },
	{ x: 4, y: 48, c: 1 },
	{ x: 5, y: 24, c: 0 },
	{ x: 5, y: 49, c: 1 },
	{ x: 6, y: 87, c: 0 },
	{ x: 6, y: 66, c: 1 },
	{ x: 7, y: 17, c: 0 },
	{ x: 7, y: 27, c: 1 },
	{ x: 8, y: 68, c: 0 },
	{ x: 8, y: 16, c: 1 },
	{ x: 9, y: 49, c: 0 },
	{ x: 9, y: 15, c: 1 },
]

export interface StackedBarChartState {}

export class StackedBarChart extends React.Component<{}, StackedBarChartState> {
	constructor(props: {}) {
		super(props)
		this.state = {}
	}
	public render() {
		console.log('Render Chart')

		return (
			<Chart width={500} height={200} data={data} renderer={renderer}>
				<BandScale
					name="x"
					widthName="width"
					bindRange={Dimension.WIDTH}
					bindDomain="x"
				/>
				<LinearScale
					name="y"
					bindRange={Dimension.HEIGHT}
					bindDomain="y1"
					nice={true}
					//zero={true}
				/>
				<OrdinalScale
					name="color"
					bindDomain="c"
					colorScheme={CategoricalColorScheme.category10}
				/>
				<Rect
					x={({ scales: { x }, row }) => x(row.x)}
					width={({ scales: { width }, row }) => width()}
					y={({ scales: { y }, row }) => y(row.y)}
					y2={({ scales: { y }, row }) => y(row.y1)}
					fill={({ scales: { color }, row }) => color(row.c)}
				/>
			</Chart>
		)
	}
}