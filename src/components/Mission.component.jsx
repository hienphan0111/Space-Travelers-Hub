import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from 'redux/missions/missions';
import './styles.components/Mission.style.scss';

function Mission({ mission }) {
  const {
    description,
    missionName,
    reserved,
    missionId,
  } = mission;

  const dispatch = useDispatch();

  const joinHandler = (e) => {
    const { id } = e.target;
    console.log(id);
    dispatch(joinMission(id));
  };

  const leaveHandler = (e) => {
    const { id } = e.target;
    dispatch(leaveMission(id));
  };
  return (
    <div className="mission table-template">
      <h3 className="t-cell">{missionName}</h3>
      <span className="t-cell">{description}</span>
      <span className="t-cell center">
        <span
          style={
            reserved ? {
              backgroundColor: 'lightBlue',
              color: '#000',
              fontSize: '10px',
            } : {
              backgroundColor: 'gray',
              color: 'white',
              fontSize: '10px',
            }
          }
        >
          {reserved ? 'Active Member' : 'NOT A MEMBER'}
        </span>
      </span>
      <span className="t-cell center">
        <button
          type="button"
          onClick={reserved ? leaveHandler : joinHandler}
          id={missionId}
          style={
            reserved ? {
              color: 'red',
              border: '1px solid red',
            } : {
              color: '#000',
              border: '1px solid #000',
            }
          }
        >
          {reserved ? 'Leave Mission' : 'Join Mission'}
        </button>
      </span>
    </div>
  );
}

Mission.defaultProps = {
  mission: {
    missionName: '',
    description: '',
    reserved: false,
    missionId: '',
  },
};

Mission.propTypes = {
  mission: PropTypes.shape(
    {
      missionName: PropTypes.string,
      description: PropTypes.string,
      reserved: PropTypes.bool,
      missionId: PropTypes.string,
      // flickr_images: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
    },
  ),
};

export default Mission;
