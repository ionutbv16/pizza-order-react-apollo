import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { MockedProvider } from '@apollo/react-testing';
import wait from 'waait';
import { mocks} from '../../mocks/mocks'; 
import Orders from '../Orders'; 

describe('Test Orders Page', () => {
it('should render Orders without error', async () => {
  await act(async () => {
    const component = renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
          <Orders />
      </MockedProvider>,
    );
    await wait(0);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
});
