const BtnContainer = ({ jobs, currentJob, setCurrentJob }) => {
  const { company, dates, duties, title } = jobs[currentJob];
  return (
    <section className="btn-container">
      {jobs.map((job, index) => (
        <button
          key={job.id}
          type="button"
          className="btn"
          onClick={() => setCurrentJob(index)}
        >
          {job.company}
        </button>
      ))}
    </section>
  );
};
export default BtnContainer;
