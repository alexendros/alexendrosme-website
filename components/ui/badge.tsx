import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

/* Badge · Patrón VAP §9.3 + estados semánticos.
   Sin hover por opacidad; tokens semánticos para success/warning/error/info. */

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap [transition:background-color_var(--duration-fast)_var(--ease-out-expo),color_var(--duration-fast)_var(--ease-out-expo),border-color_var(--duration-fast)_var(--ease-out-expo)] focus-visible:[box-shadow:var(--ring-focus)] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        outline: "border-border text-foreground [a]:hover:bg-muted",
        ghost: "text-muted-foreground [a]:hover:bg-muted [a]:hover:text-foreground",
        success:
          "[background:var(--color-success-bg)] [color:var(--color-success-fg)] [border-color:var(--color-success-border)]",
        warning:
          "[background:var(--color-warning-bg)] [color:var(--color-warning-fg)] [border-color:var(--color-warning-border)]",
        destructive:
          "[background:var(--color-error-bg)] [color:var(--color-error-fg)] [border-color:var(--color-error-border)]",
        info: "[background:var(--color-info-bg)] [color:var(--color-info-fg)] [border-color:var(--color-info-border)]",
        link: "text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span";

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
