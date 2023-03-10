import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect.js';
import { Provider } from 'react-redux';
import store from 'redux/store';
import Rockets from 'components/Rocket.component';
import axios from 'axios';

jest.mock('axios', () => ({
  post: jest.fn(),
  get: jest.fn(),
}));

describe('Render the rockets lists', () => {
  it('Renders the rockets correctly', () => {
    const rocket = {
      id: 2,
      mission_name: 'one',
      description: 'a rocket',
      reserved: true,
    };
    const missions = TestRenderer.create(
      <Provider store={store}>
        <Rockets key={rocket.id} missions={rocket} />
      </Provider>,
    ).toJSON();
    expect(missions).toMatchSnapshot();
  });
});
