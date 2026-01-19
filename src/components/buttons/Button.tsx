import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline';
    children: React.ReactNode;
    className?: string; // Allow overriding/adding classes if needed
}

export default function Button({ 
    variant = 'primary', 
    children, 
    className = '', 
    ...props 
}: Readonly<ButtonProps>) {
    
    const baseStyles = "px-8 py-3 rounded-full font-bold transition-all";
    
    const variants = {
        primary: "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
        outline: "text-primary border-2 border-primary hover:bg-blue-50"
    };

    return (
        <button 
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
