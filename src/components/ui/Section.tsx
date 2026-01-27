import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ children, className, id, ...props }, ref) => {
        return (
            <section
                ref={ref}
                id={id}
                className={cn('relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto', className)}
                {...props}
            >
                {children}
            </section>
        );
    }
);
Section.displayName = 'Section';
