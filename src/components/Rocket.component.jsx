import PropTypes from 'prop-types';
import './styles.components/Rocket.styles.scss';

function Rockets({ rocket }) {
  const { name, description, imgUrl } = rocket;
  return (
    <div className="rocket">
      <img src={imgUrl} alt="rocket" />
      <div className="info">
        <h3>{name}</h3>
        <p>{description}</p>
        <button type="button">Reserve Rocket </button>
      </div>
    </div>
  );
}
Rocket.defaultProps = {
  rocket: {
    name: '',
    description: '',
    id: '',
    imgUrl: '',
  },
};
Rocket.propTypes = {
  rocket: PropTypes.shape(
    {
      id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      imgUrl: PropTypes.string,
    },
  ),
};

export default Rockets;
