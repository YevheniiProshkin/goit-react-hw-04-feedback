import PropTypes from 'prop-types';
import { Button } from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(item => (
        <Button onClick={() => onLeaveFeedback(item)} key={item}>
          {item}
        </Button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
