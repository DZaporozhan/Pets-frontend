import { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  render() {
    return (
      <>
        <SearchForm>
          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search"
          />
          <SearchFormButton type="submit">
            <AiOutlineSearch size="20px" />
          </SearchFormButton>
        </SearchForm>
      </>
    );
  }
}
