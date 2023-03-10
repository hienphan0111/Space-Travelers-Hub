import { useSelector } from 'react-redux';
import './styles.routes/myProfile.styles.scss';

function MyProfile() {
  const { missions } = useSelector((state) => state.missions);
  const { rockets } = useSelector((state) => state.rockets);

  const missionsJoined = missions.filter((mission) => mission.reserved);
  const rocketsBooked = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="profile-container">
      <div className="mission-joined">
        <h4>My Missions</h4>
        <div className="mis-list">
          {
            missionsJoined.map((mission) => (
              <span key={mission.missionId} className="m-item">{mission.missionName}</span>
            ))
          }
        </div>
      </div>
      <div className="rockets-booked">
        <h4>My Rockets</h4>
        <div className="rockets-container">
          {
            rocketsBooked.map((rocket) => (
              <span key={rocket.id} className="r-item">{rocket.name}</span>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
