import PropTypes from "prop-types";

const TaskSummaryCard = (props) => {
  return (
    <div
      className={`p-4 ${props.bgColor} w-full gap-4 rounded-2xl flex flex-row`}
    >
      <div className='w-full flex flex-col gap-3'>
        <p className="font-light text-4xl text-black">{props.number}</p>
        <p className="font-semibold text-base text-gray-600">{props.title}</p>
      </div>
      <div className="text-2xl text-white">{props.icon}</div>

    </div>
  );
};

export default TaskSummaryCard;

TaskSummaryCard.propTypes = {
  bgColor: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
