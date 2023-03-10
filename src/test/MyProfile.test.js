import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect.js';
import { Provider } from 'react-redux';
import store from 'redux/store';
import MyProfile from 'routes/myProfile.route';
import axios from 'axios';

jest.mock('axios', () => ({
  post: jest.fn(),
  get: jest.fn()
}))

describe('Render the missions list in profile page', () => {
  it('Renders the missions list in profile page correctly', () => {
    const missionsList = TestRenderer.create(
        <Provider store={store}>
          <MyProfile />
        </Provider>,
    ).toJSON();
    expect(missionsList).toMatchSnapshot();
  });
});