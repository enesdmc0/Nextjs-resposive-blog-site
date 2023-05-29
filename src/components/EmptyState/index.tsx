"use client"
import React from 'react';

interface EmptyProps {
    title: string;
    subtitle: string;
    showReset?: boolean
}

const EmptyState: React.FC<EmptyProps> = ({title, showReset, subtitle}) => {
    return (
            <div className="flex flex-col items-center justify-center h-[60vh]">
                <div>{title}</div>
                <div>{subtitle}</div>
            </div>
    );
};

export default EmptyState;
