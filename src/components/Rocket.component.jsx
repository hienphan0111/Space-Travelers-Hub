import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket, cancelRocket } from 'redux/rockets/rockets';
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

  const bookRocketHandler = (e) => {
    console.log(e.target.id);
    const { id } = e.target;
    dispatch(bookRocket(id));
  };

  const cancelRocketHandler = (e) => {
    console.log(e.target.id);
    const { id } = e.target;
    dispatch(cancelRocket(id));
  };

  return (
    <div className="rocket">
      <img src={imgUrl} alt="rocket" />
      <div className="info">
        <div className="i-header">
          { reserved && (<span className="book-reserved">Reserved</span>)}
          <h3>{name}</h3>
        </div>
        <p>{description}</p>
        {
          !reserved && (
            <button
              onClick={bookRocketHandler}
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
              onClick={cancelRocketHandler}
              id={id}
              type="button"
              style={{
                border: '0.5px #000 solid',
                borderRadius: '5px',
                backgroundColor: 'rgba(165, 163, 163, 0.189)',
                color: '#000',
                padding: '10px',
              }}
            >
              Cancel Reservation
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
