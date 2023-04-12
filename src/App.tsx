import React, { useState } from 'react';
import { Base } from './template/base'
import { Header } from './Components/Header';
import { SearchBar } from './Components/SearchBar';
import { AlbumList } from './Components/AlbumList';


function App() {

  const [searchTerm, setSearchTerm] = useState<string>()

  const handleSetTerm = (value: string) => {
    console.log(value)
    setSearchTerm(value)
  }

  return (
    <Base>
      <Header />
      <SearchBar
        searchTerm={searchTerm}
        handleSetTerm={handleSetTerm}
      />
      <AlbumList
        title={searchTerm ? `Resultados encontrados para "${searchTerm}"` : 'Álbuns buscados recentemente'} />
      {!searchTerm && <AlbumList title='Álbuns buscados recentemente' />}

    </Base>

  );
}

export default App;
