import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket } from 'redux/rockets/rockets';
import './styles.components/Rocket.styles.scss';

function Rockets({ rocket }) {
  const {
    id,
    name,
    description,
    imgUrl,
    reserved,
  } = rocket;
  const dispatch = useDispatch();

  const bookRocketHandle = (e) => {
    const { id } = e.target;
    dispatch(bookRocket(id));
  };

  return (
    <div className="rocket">
      <img src={imgUrl} alt="rocket" />
      <div className="info">
        <h3>{name}</h3>
        <p>{description}</p>
        {
          !reserved && (
            <button
              onClick={bookRocketHandle}
              id={id}
              type="button"
              style={{
                border: 'none',
                borderRadius: '5px',
                backgroundColor: 'blue',
                color: 'white',
                padding: '10px',
              }}
            >
              Reserve Rocket
            </button>
          )
        }
        {
          reserved && (
            <button
              onClick={bookRocketHandle}
              id={id}
              type="button"
              style={{
                border: 'none',
                borderRadius: '5px',
                backgroundColor: 'gray',
                color: '#000',
                padding: '10px',
              }}
            >
              Cancel Rocket
            </button>
          )
        }
      </div>
    </div>
  );
}
Rockets.defaultProps = {
  rocket: {
    name: '',
    description: '',
    id: '',
    imgUrl: '',
    reserved: false,
  },
};
Rockets.propTypes = {
  rocket: PropTypes.shape(
    {
      id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      imgUrl: PropTypes.string,
      reserved: PropTypes.bool,
    },
  ),
};

export default Rockets;