import Duties from "./Duties";

const JobInfo = ({ jobs, currentJob }) => {
  const { company, dates, duties, title } = jobs[currentJob];
  return (
    <article className="job-info">
      <h2 className="job-title">{title}</h2>
      <span className="job-company">{company}</span>
      <p className="job-dates">{dates}</p>
      {duties.map((duty, index) => (
        <Duties key={index} text={duty} />
      ))}
    </article>
  );
};
export default JobInfo;
