import Mission from 'components/Mission.component';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMissions } from 'redux/missions/missions';
import './styles.routes/missions.styles.scss';

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
      <div className="header table-template">
        <span>Mission</span>
        <span>Description</span>
        <span>Status</span>
        <span />
      </div>
      {
        missions.map((mission) => (
          <Mission key={mission.missionId} mission={mission} />
        ))
      }
    </div>
  );
}

export default Missions;
