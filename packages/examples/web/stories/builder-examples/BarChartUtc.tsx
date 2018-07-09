// tslint:disable
import * as React from 'react'
import { Renderer } from '@gog/react-svg-renderer'
import { scene, rect, area, axis } from '@gog/builder'
import { Dimension, SceneNode, AxisOrientation } from '@gog/interfaces'
import { linear, time, band } from '@gog/scales'
import { VirtualSvgPipeline } from '@gog/core'

const renderer = new Renderer()
const pipeline = new VirtualSvgPipeline(renderer)

const data: any[] = []
for (let month = 1; month <= 12; ++month) {
	for (let day = 1; day <= 29; ++day) {
		const date = new Date(2017, month, day)
		const amount = Math.random() * 100
		data.push({ date, amount })
	}
}

export interface BarChartState {
	hoverRowIndex: number | undefined
}

/**
 * Adapted from https://vega.github.io/vega/examples/bar-chart/
 */
export class BarChartUtc extends React.Component<{}, BarChartState> {
	private chart: SceneNode

	constructor(props: {}) {
		super(props)
		this.state = { hoverRowIndex: undefined }
		const isHovered = (index: number) => this.state.hoverRowIndex === index

		this.chart = scene(
			n =>
				n
					.scale(
						linear('y')
							.table('data')
							.bindDomain('amount')
							.bindRange(Dimension.Height)
							.nice(),
						time('x')
							.table('data')
							.bindDomain('date')
							.bindRange(Dimension.Width)
							.nice(),
						band('xband', 'xbandwidth')
							.table('data')
							.bindDomain('date')
							.bindRange(Dimension.Width),
					)
					.axes(
						axis('y', AxisOrientation.Left),
						axis('x', AxisOrientation.Bottom)
							.tickCount(4)
							.labelFormat('%b %m %d'),
					)
					.mark(
						area('dataline')
							.table('data')
							.encode({
								x: ({ datum }, { xband }) => xband(datum.date),
								y: ({ datum }, { y }) => y(datum.amount),
								y2: (d, { y }) => y(0),
								stroke: () => 'black',
								strokeWidth: () => 0.5,
								fill: () => 'green',
							}),
						rect('highlight')
							.table('data')
							.encode({
								x: ({ datum }, { xband }) => xband(datum.date),
								y: ({ datum }, { y }) => y(datum.amount),
								y2: (d, { y }) => y(0),
								width: (d, { xbandwidth }) => xbandwidth(),
								fill: ({ index }) =>
									isHovered(index) ? 'firebrick' : 'transparent',
							})
							.handle({
								onMouseEnter: (evt, { index }) => {
									if (this.state.hoverRowIndex !== index) {
										this.setState({ hoverRowIndex: index })
									}
								},
								onMouseLeave: (evt, { index }) => {
									if (this.state.hoverRowIndex === index) {
										this.setState({ hoverRowIndex: undefined })
									}
								},
							}),
					),
			{ width: 400, height: 200 },
		).build()
	}

	public render() {
		return pipeline.handleData(
			this.chart,
			{ width: 400, height: 200, padding: 30 },
			{ data },
		)
	}
}