import React from 'react';
import NextLink from 'next/link';
import {ArrowUpRight} from 'lucide-react';

type LinkVariant = 'primary' | 'secondary';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  variant?: LinkVariant;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Link: React.FC<LinkProps> = ({
  href,
  children,
  variant = 'primary',
  className = '',
  onClick,
}) => {
  // Base styles
  const baseStyles = "inline-flex items-center body-md duration-200 gap-3xs";
  
  
  // Variant styles - simplified to just primary and secondary
  const variantStyles = {
    primary: `text-primary-1200 hover:underline`,
    secondary: `text-primary-900 hover:underline`,
  };
  
  // Combine all styles
  const linkStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  // External link props - all links are external
  const externalProps = { 
    target: "_blank", 
    rel: "noopener noreferrer" 
  };
  
  // Handle click
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }
  };
  
  return (
    <NextLink 
      href={href}
      className={linkStyles}
      onClick={handleClick}
      {...externalProps}
    >
      {children}
        <ArrowUpRight size={16} strokeWidth={2.5}/>
    </NextLink>
  );
};

export default Link;
