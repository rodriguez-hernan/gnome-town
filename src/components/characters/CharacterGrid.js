import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterGrid = ({ isLoading, items }) => {
    return isLoading ? (<h1>Loading...</h1>) : (
        <section className="cards">
            {items.map(item => (
                <CharacterCard key={item.id} item={item} />             
            ))}
        </section>
    );
}


export default CharacterGrid