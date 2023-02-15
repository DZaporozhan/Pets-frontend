import { SearchForm, SearchFormInput, SearchFormButton } from './NewsSearch.styled';
import { AiOutlineSearch } from 'react-icons/ai';
// import { useState } from 'react';

export const NewsSearch =({setQuery, handleSubmit, query})=>{
// const [query, setQuery] = useState('');

    return (
      <>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            name="newsSearch"
          />
          <SearchFormButton type="submit">
            <AiOutlineSearch size="20px" style={{textRendering: "optimizeLegibility", fill: "inherit"}}/>
          </SearchFormButton>
        </SearchForm>
      </>
    );
}