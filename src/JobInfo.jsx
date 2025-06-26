import Duties from "./Duties";

const JobInfo = ({ jobs, currentJob }) => {
  const { company, dates, duties, title } = jobs[currentJob];
  return (
    <article className="iob-info">
      <h2 className="title">{title}</h2>
      <p className="company">{company}</p>
      <p className="dates">{dates}</p>
      {duties.map((duty, index) => (
        <Duties key={index} text={duty} />
      ))}
    </article>
  );
};
export default JobInfo;
