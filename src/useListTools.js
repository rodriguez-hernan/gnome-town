import { useState, useEffect } from 'react'; 

export default function useListTools(characterList, filters) {
    const [list, setList] = useState([]);

    useEffect(() => {
        let result = [...characterList];
        if (filters.length) {
            result = result.filter(char => {
                return char.professions.some(prof => filters.includes(prof));
            })    
        }
        console.log('filtered number', result.length)
        setList(result);

    }, [characterList, filters]);

    return { filteredList: list };
}