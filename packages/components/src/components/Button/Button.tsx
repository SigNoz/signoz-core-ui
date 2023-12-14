import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { mergeClasses } from "../../utils/mergeClasses"

import * as styles from './Button.module.scss'

const buttonVariants = cva(
	styles.Base,
	{
		variants: {
			variant: {
				default: styles.ButtonDefault,
				primary: styles.ButtonDefault,
				secondary: styles.ButtonSecondary,
				danger: styles.ButtonDanger,
				warning: styles.ButtonWarning,
				border: styles.ButtonBorder,
				ghost: styles.ButtonGhost,
				link: styles.ButtonLink
			},
			size: {
				default: styles.ButtonSizeXS,
				xs: styles.ButtonSizeXS,
				sm: styles.ButtonSizeSM,
				md: styles.ButtonSizeMD,
				lg: styles.ButtonSizeLG,
			},
			border: {
				default: styles.ButtonBorderNone,
				solid: styles.ButtonBorderSolid,
				dashed: styles.ButtonBorderDashed
			}
		},
		defaultVariants: {
			variant: "primary",
			border: 'default',
			size: "xs",
		},
	}
)

export type ButtonVariantTypes = VariantProps<typeof buttonVariants>

export type ButtonVariant = ButtonVariantTypes['variant']
export type ButtonSize = ButtonVariantTypes['size']

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
	ButtonVariantTypes {
	asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, border, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button"
		return (
			<Comp
				className={mergeClasses(buttonVariants({ variant, size, border, className }))}
				ref={ref}
				{...props}
			/>
		)
	}
)
Button.displayName = "Button"

export { Button, buttonVariants }
