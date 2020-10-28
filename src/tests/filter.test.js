import { changeFilter } from '../actions/index';

describe('actions', () => {
  it('should create an action to change filter', () => {
    const filterType = 'b';
    const expectedAction = {
      type: 'CHANGE_FILTER',
      filter: filterType,
    };
    expect(changeFilter(filterType)).toEqual(expectedAction);
  });
});
