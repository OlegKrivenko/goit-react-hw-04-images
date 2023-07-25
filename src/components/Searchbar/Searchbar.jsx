import React, { useState } from 'react';
import css from './Searchbar.module.css';
import { GrSearch } from 'react-icons/gr';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Searchbar = props => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase().trim());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery === '') {
      Notify.warning('Please enter your search query!');
      return;
    }
    props.onSubmit(searchQuery);
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit" className={css.button}>
          <GrSearch size="24px" />
          <span className={css.button__label}>Search</span>
        </button>

        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// class Searchbar extends Component {
//   state = {
//     searchQuery: '',
//   };

//   handleChange = event => {
//     this.setState({
//       searchQuery: event.currentTarget.value.toLowerCase().trim(),
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     const searchQuery = this.state.searchQuery;

//     if (searchQuery === '') {
//       Notify.warning('Please enter your search query!');
//       return;
//     }
//     this.props.onSubmit(searchQuery);
//   };

//   render() {
//     return (
//       <header className={css.searchbar}>
//         <form className={css.form} onSubmit={this.handleSubmit}>
//           <button type="submit" className={css.button}>
//             <GrSearch size="24px" />
//             <span className={css.button__label}>Search</span>
//           </button>

//           <input
//             className={css.input}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             onChange={this.handleChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }
