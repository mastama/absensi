import React from 'react';

export default function Selectbox({ options, value, onChange, className = '', ...props }) {
    return (
        <select
            value={value}
            onChange={onChange}
            className={`border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full ${className}`}
            {...props}
        >
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}
