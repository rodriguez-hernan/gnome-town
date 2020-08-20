import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

import { Container } from 'react-bootstrap';
import CharacterGrid from './components/characters/CharacterGrid';
import TagForm from './components/ui/TagForm';
import useListTools from './useListTools'

const BASE_URL = `https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json`;

function App() {

  const [ characterList, setCharacterList ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ professions, setProfessions ] = useState([]);
  
  const [ filters, setFilters ] = useState([]);

  const { filteredList } = useListTools(characterList, filters);

  const professionsReducer = (accumulator, item) => {
    const professionList = [...accumulator, ...item.professions];
    return [...new Set(professionList)];
  };

  function getProfessionsList(characters) {
    return characters.reduce(professionsReducer, []);
  }

  function handleFilterChange(e){
    const value = e.target.value;

    setFilters(prevFilters => {
      let newTags = [];
      if (prevFilters.includes(value)) {
        const index = prevFilters.indexOf(value);
        newTags = [...prevFilters];
        newTags.splice(index, 1);
      } else {
        newTags = [...prevFilters, value];
      }
      return newTags;
    });
  }

  useEffect(() => {
    axios(BASE_URL)
      .then(res => {
        setCharacterList(res.data['Brastlewark']);
        const professionList = getProfessionsList(res.data['Brastlewark']);
        setProfessions(professionList);
        setIsLoading(false);
    });
    
  }, []);

  return (
    <div className="App">
      <Container>
        <h1>Gnome Town: Brastlewark</h1>
        <TagForm onParamChange={handleFilterChange} tags={professions} />
        <CharacterGrid isLoading={isLoading} items={filteredList} />
      </Container>
    </div>
  );
}

export default App;
