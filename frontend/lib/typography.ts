import { cva, VariantProps } from "class-variance-authority";
export const textVariants = cva("font-sans tarcking-tight", {
  variants: {
    type: {
      title: "font-semibold",
      body: "font-normal",
      mono: "font-mono",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    tone: {
      default: "text-foreground",
      subtle: "text-muted-foreground",
      positive: "text-emerald-600",
      danger: "text-red-600",
    },
  },
  compoundVariants: [{ type: "title", size: "xl", className: "leading-tight" }],
  defaultVariants: {
    type: "body",
    size: "md",
    tone: "default",
  },
});

export type TextVariantsProps = VariantProps<typeof textVariants>;
