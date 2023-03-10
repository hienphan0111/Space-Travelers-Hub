import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect.js';
import { Provider } from 'react-redux';
import store from 'redux/store';
import Missions from 'routes/missions.route';
import axios from 'axios';

jest.mock('axios', () => ({
  post: jest.fn(),
  get: jest.fn()
}))

describe('Render the missions lists', () => {
  it('Renders the missions correctly', () => {
    const mission = {
      id: 2,
      mission_name: 'one',
      description: 'a mission',
      joined: true,
    };
    const missions = TestRenderer.create(
      <Provider store={store}>
        <Missions key={mission.id} missions={mission}/>
      </Provider>,
    ).toJSON();
    expect(missions).toMatchSnapshot();
  });
});