import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { MockedProvider } from '@apollo/react-testing';
import wait from 'waait';
import MakeOrders from '../MakeOrders'; 

describe('Test MakeOrders Page', () => {
it('should render MakeOrders without error', async () => {
  await act(async () => {
    const component = renderer.create(
      <MockedProvider addTypename={false}>
          <MakeOrders />
      </MockedProvider>,
    );
    await wait(0);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
});
