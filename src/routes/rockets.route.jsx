import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRockets } from 'redux/rockets/rockets';
import Rocket from 'components/Rocket.component';

function Rocket() {
  const { rockets, status } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'update') {
      dispatch(getRockets());
    }
  }, [status]);
​
  return (
    <div className="rockets-container">
      {
        rockets.map((rocket) => (
          <Rocket key={rocket.id} rocket={rocket} />
        ))
      }
    </div>
  );
}
​
export default Rocket;