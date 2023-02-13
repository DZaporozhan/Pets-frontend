import { Component } from 'react';
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';

import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  render() {
    const { filter, onSubmit, onChange, titleRequest } = this.props;
    return (
      <>
        <SearchForm type="submit" onSubmit={onSubmit}>
          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search"
            value={titleRequest}
            onChange={onChange}
          />
          <SearchFormButton>
            {filter ? (
              <AiOutlineSearch size="20px" />
            ) : (
              <AiOutlineCloseCircle size="20px" />
            )}
          </SearchFormButton>
        </SearchForm>
      </>
    );
  }
}
