import * as React from "react"
import { cn } from "@/lib/utils"

export const Card = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("rounded-lg border bg-white shadow-sm", className)} {...props} />
  )
)
Card.displayName = "Card"

export const CardHeader = ({ className, ...props }) => (
  <div className={cn("border-b p-4", className)} {...props} />
)

export const CardTitle = ({ className, ...props }) => (
  <h3 className={cn("text-lg font-semibold", className)} {...props} />
)

export const CardDescription = ({ className, ...props }) => (
  <p className={cn("text-sm text-muted-foreground", className)} {...props} />
)

export const CardContent = ({ className, ...props }) => (
  <div className={cn("p-4", className)} {...props} />
)

export const CardFooter = ({ className, ...props }) => (
  <div className={cn("border-t p-4", className)} {...props} />
)
