"use client";

import * as React from "react";
import { LucideIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "destructive"
  | "positive";

// Simple button with fixed styling
const buttonVariants = cva(
  "button-md h-[49px] relative inline-flex items-center justify-center rounded-xs gap-2xs transition-colors hover:cursor-pointer disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "text-primary-1200 bg-primary-700 pt-2xs pb-sm px-sm shadow-[inset_0px_-6px_0px_0px_theme(colors.primary.800)] hover:bg-primary-800 hover:shadow-[inset_0px_-6px_0px_0px_theme(colors.primary.900)] active:bg-primary-900 active:shadow-[inset_0px_6px_0px_0px_theme(colors.primary.1000)] active:pt-sm active:pb-2xs",
        secondary:
          "text-primary-1200 bg-primary-100 pt-2xs pb-sm px-sm shadow-[inset_0px_-6px_0px_0px_theme(colors.primary.200)] hover:bg-primary-200 hover:shadow-[inset_0px_-6px_0px_0px_theme(colors.primary.300)] active:bg-primary-600 active:shadow-[inset_0px_6px_0px_0px_theme(colors.primary.700)] active:pt-sm active:pb-2xs",
        accent:
          "text-primary-000 bg-accent-700 pt-2xs pb-sm px-sm shadow-[inset_0px_-6px_0px_0px_theme(colors.accent.800)] hover:bg-accent-800 hover:shadow-[inset_0px_-6px_0px_0px_theme(colors.accent.900)] active:bg-accent-900 active:shadow-[inset_0px_6px_0px_0px_theme(colors.accent.1000)] active:pt-sm active:pb-2xs",
        destructive:
          "text-primary-000 bg-destructive-700 pt-2xs pb-sm px-sm shadow-[inset_0px_-6px_0px_0px_theme(colors.destructive.800)] hover:bg-destructive-800 hover:shadow-[inset_0px_-6px_0px_0px_theme(colors.destructive.900)] active:bg-destructive-900 active:shadow-[inset_0px_6px_0px_0px_theme(colors.destructive.1000)] active:pt-sm active:pb-2xs",
        positive:
          "text-primary-000 bg-positive-700 pt-2xs pb-sm px-sm shadow-[inset_0px_-6px_0px_0px_theme(colors.positive.800)] hover:bg-positive-800 hover:shadow-[inset_0px_-6px_0px_0px_theme(colors.positive.900)] active:bg-positive-900 active:shadow-[inset_0px_6px_0px_0px_theme(colors.positive.1000)] active:pt-sm active:pb-2xs",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  icon?: LucideIcon;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      children,
      disabled,
      icon: Icon,
      onClick,
      ...props
    },
    ref
  ) => {
    const handleClick = React.useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled) {
          event.preventDefault();
          event.stopPropagation();
          return;
        }

        onClick?.(event);
      },
      [disabled, onClick]
    );

    return (
      <div className="relative inline-block" style={{ display: "inline-flex" }}>
        <button
          className={`${buttonVariants({
            variant,
          })} ${className}`}
          ref={ref}
          disabled={disabled}
          onClick={handleClick}
          {...props}
        >
          {children}
          {Icon && <Icon size={16} strokeWidth={2.5} />}
        </button>
        {disabled && (
          <div
            className="absolute top-0 left-0 w-full h-full cursor-not-allowed rounded-xs z-10"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            aria-hidden="true"
          />
        )}
      </div>
    );
  }
);

Button.displayName = "Button";
