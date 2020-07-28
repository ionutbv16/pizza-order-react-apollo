import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home'; 
import { MemoryRouter } from 'react-router';
 
describe('Test Home Page', () => {
  it('should render Home without error', () => {
    const component = renderer.create(<MemoryRouter><Home /></MemoryRouter>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
