/** @format */

import { FilterField, InputFilter } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterState } from 'redux/filter/selectors';
import { changeFilter } from 'redux/filter/filterSlice';

function Filter() {
	const dispatch = useDispatch();
	const filterValue = useSelector(filterState);

	return (
		<FilterField>
			Find contacts by name
			<InputFilter
				value={filterValue}
				type='text'
				name='filter'
				autoComplete='off'
				onChange={({ target }) => dispatch(changeFilter(target.value))}
			/>
		</FilterField>
	);
}

export default Filter;
