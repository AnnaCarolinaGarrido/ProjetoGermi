import { useState } from 'react';

export function useFilter(data) {
    const [searchTerm, setSearchTerm] = useState('');

    const setFilter = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = data.filter(el => {
        if (el.title.toLowerCase().includes(searchTerm.toLowerCase()) || el.subtitle.toLowerCase().includes(searchTerm.toLowerCase())) {
            return el
        }
    });

    return { filteredData, setFilter };
}