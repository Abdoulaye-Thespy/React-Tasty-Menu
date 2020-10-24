import filter from '../reducers/filter'

describe('this reducer', () => {
 it('should return the initial state', () => {
  expect(filter(undefined, {})).toEqual('ALL');
 });

 it('should handle CHANGE_FILTER', () => {
  const  filterType = 'b';
  expect(
   filter([], {
    type: 'CHANGE_FILTER',
    filter: filterType,
   }),
  ).toEqual('b');
 });
});