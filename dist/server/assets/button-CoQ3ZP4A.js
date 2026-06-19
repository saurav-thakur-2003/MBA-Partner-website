import * as React from "react";
import { jsx } from "react/jsx-runtime";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/ui/button.tsx
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-primary-soft hover:text-primary",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-primary-soft hover:text-primary",
			link: "text-primary underline-offset-4 hover:underline",
			accent: "bg-accent text-accent-foreground font-semibold shadow-[var(--shadow-glow)] hover:brightness-110",
			hero: "gradient-amber text-accent-foreground font-bold shadow-[var(--shadow-glow)] hover:brightness-110",
			navy: "bg-primary text-primary-foreground font-semibold shadow-[var(--shadow-elegant)] hover:bg-primary/90"
		},
		size: {
			default: "h-10 px-5 py-2",
			sm: "h-9 rounded-md px-3.5 text-xs",
			lg: "h-12 rounded-lg px-7 text-base",
			xl: "h-14 rounded-xl px-9 text-base",
			icon: "h-10 w-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ jsx(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
export { cn as n, Button as t };
