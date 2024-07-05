import PropTypes from "prop-types";

const TaskSummaryCard = (props) => {
  return (
    <div className={`p-2 ${props.bgColor} w-full gap-6 rounded-lg flex flex-col`}>
      <div className='text-2xl'>
      {props.icon}
      </div>
      <p className='font-medium'>
        {props.number}
      </p>
      <p className='font-semibold text-xl text-gray-100'>
        {props.title}
      </p>
    </div>
  )
};

export default TaskSummaryCard;

TaskSummaryCard.propTypes = {
  bgColor: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
  title:PropTypes.string.isRequired
};
