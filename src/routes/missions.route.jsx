import Mission from 'components/Mission.component';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMissions } from 'redux/missions/missions';

function Missions() {
  const dispatch = useDispatch();
  const { missions, status } = useSelector((state) => state.missions);

  useEffect(() => {
    if (status === 'update') {
      // eslint-disable-next-line
      dispatch(getMissions());
    }
  }, [status]);

  return (
    <div className="missions-container">
      {
        missions.map((mission) => (
          <Mission key={mission.mission_id} mission={mission} />
        ))
      }
    </div>
  );
}

export default Missions;
