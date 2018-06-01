import { Renderer } from '@gog/render-interfaces'
import { StrokeCap, StrokeJoin } from '@gog/mark-interfaces'
import { VDomNode } from './base'

export type FlexAlignType =
	| 'flex-start'
	| 'flex-end'
	| 'center'
	| 'stretch'
	| 'baseline'

export interface SvgCommonStyle {
	/**
	 * flex
	 */
	alignContent?:
		| 'flex-start'
		| 'flex-end'
		| 'center'
		| 'stretch'
		| 'space-between'
		| 'space-around'
	alignItems?: FlexAlignType
	alignSelf?: 'auto' | FlexAlignType
	aspectRatio?: number
	bottom?: number | string
	display?: 'none' | 'flex'
	end?: number | string
	flex?: number
	flexBasis?: number | string
	flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
	flexGrow?: number
	flexShrink?: number
	flexWrap?: 'wrap' | 'nowrap'
	height?: number | string
	justifyContent?:
		| 'flex-start'
		| 'flex-end'
		| 'center'
		| 'space-between'
		| 'space-around'
		| 'space-evenly'

	/**
	 * background
	 */
	backgroundColor?: string
	borderBottomColor?: string
	borderBottomEndRadius?: number
	borderBottomLeftRadius?: number
	borderBottomRightRadius?: number
	borderBottomStartRadius?: number
	borderBottomWidth?: number
	borderColor?: string
	borderEndColor?: string
	borderLeftColor?: string
	borderLeftWidth?: number
	borderRadius?: number
	borderRightColor?: string
	borderRightWidth?: number
	borderStartColor?: string
	borderStyle?: 'solid' | 'dotted' | 'dashed'
	borderTopColor?: string
	borderTopEndRadius?: number
	borderTopLeftRadius?: number
	borderTopRightRadius?: number
	borderTopStartRadius?: number
	borderTopWidth?: number
	borderWidth?: number
	borderEndWidth?: number | string
	borderStartWidth?: number | string

	/**
	 * Other
	 */
	backfaceVisibility?: 'visible' | 'hidden'
	opacity?: number

	/**
	 * Padding
	 */
	padding?: number | string
	paddingBottom?: number | string
	paddingEnd?: number | string
	paddingHorizontal?: number | string
	paddingLeft?: number | string
	paddingRight?: number | string
	paddingStart?: number | string
	paddingTop?: number | string
	paddingVertical?: number | string

	/**
	 * Margin
	 */
	margin?: number | string
	marginBottom?: number | string
	marginEnd?: number | string
	marginHorizontal?: number | string
	marginLeft?: number | string
	marginRight?: number | string
	marginStart?: number | string
	marginTop?: number | string
	marginVertical?: number | string

	// Catchall
	[key: string]: any
}

/**
 * Common props for SVG-based virtual doms
 */
export interface CommonSvgProps {
	/**
	 * The color inside the shape.
	 * @default '#000'
	 */
	fill?: string

	/**
	 * This specifies the opacity of the color or the content the current object is filled with.
	 * @default 1
	 */
	fillOpacity?: number

	/**
	 * The fillRule prop determines what side of a path is inside a shape, which determines how fill
	 * will paint the shape, can be nonzero or evenodd
	 *
	 * @default "nonzero"
	 */
	fillRule?: 'nonzero' | 'evenodd'

	/**
	 * 	'none'	The stroke prop controls how the outline of a shape appears.
	 * @default 'none'
	 */
	stroke?: string

	/**
	 * 	The strokeWidth prop specifies the width of the outline on the current object.
	 * 	@default 1
	 */
	strokeWidth?: number

	/**
	 * The strokeOpacity prop specifies the opacity of the outline on the current object.
	 * @default 1
	 */
	strokeOpacity?: number

	/**
	 * The strokeLinecap prop specifies the shape to be used at the end of open subpaths when they are stroked.
	 * Can be either 'butt', 'square' or 'round'.
	 *
	 * @default 'square'
	 */
	strokeLinecap?: StrokeCap

	/**
	 * 	The strokeLinejoin prop specifies the shape to be used at the corners of paths or basic shapes when they are stroked.
	 * Can be either 'miter', 'bevel' or 'round'.
	 * 	@default 'miter'
	 */
	strokeLinejoin?: StrokeJoin

	/**
	 * The strokeDasharray prop controls the pattern of dashes and gaps used to stroke paths.
	 * @default []
	 */
	strokeDasharray?: number[]

	/**
	 * The strokeDashoffset prop specifies the distance into the dash pattern to start the dash.
	 * @default undefined
	 */
	strokeDashoffset?: number

	/**
	 * Translate distance on x-axis.
	 * @default 0
	 */
	x?: number

	/**
	 * Translate distance on y-axis.
	 * @default 0
	 */
	y?: number

	/**
	 * Rotation degree value on the current object.
	 * @default 0
	 */
	rotation?: number

	/**
	 * Rotation degree value on the current object.
	 * @default 1
	 */
	scale?: number

	/**
	 * Transform origin coordinates for the current object.
	 * @default [0,0]
	 */
	origin?: [number, number]

	/**
	 * Transform originX coordinates for the current object.
	 * @default 0
	 */
	originX?: number

	/**
	 * Transform originY coordinates for the current object.
	 * @default 0
	 */
	originY?: number

	/**
	 * catch-all
	 */
	[key: string]: any
}

export interface VSvgNode extends VDomNode<CommonSvgProps, SvgCommonStyle> {}