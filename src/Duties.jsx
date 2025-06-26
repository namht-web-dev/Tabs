import { FaAngleDoubleRight } from "react-icons/fa";

const Duties = ({ text }) => {
  return (
    <div className="duties">
      <FaAngleDoubleRight className="duties-icon" />
      <p className="duties-text">{text}</p>
    </div>
  );
};
export default Duties;
