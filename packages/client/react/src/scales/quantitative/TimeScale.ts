/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */

import { time } from '@chart-parts/scales'
import {
	QuantitativeScale,
	QuantitativeScaleProps,
	TimeValue,
} from './QuantitativeScale'

export interface TimeScaleProps
	extends QuantitativeScaleProps<TimeValue, number> {}

export class TimeScale extends QuantitativeScale<
	TimeScaleProps,
	TimeValue,
	number
> {
	protected createScale() {
		return time(this.props.name)
			.domain(this.props.domain)
			.range(this.props.range)
			.zero(this.props.zero)
			.clamp(this.props.clamp)
			.nice(this.props.nice)
			.reverse(this.props.reverse)
			.padding(this.props.padding)
	}
}
