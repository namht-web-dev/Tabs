import { useEffect, useState } from "react";
import Loading from "./Loading";
import BtnContainer from "./BtnContainer";
import JobInfo from "./JobInfo";
const url = "https://www.course-api.com/react-tabs-project";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentJob, setCurrentJob] = useState(0);

  const fetchJobs = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setJobs(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <section className="section-center">
        <BtnContainer
          jobs={jobs}
          currentJob={currentJob}
          setCurrentJob={setCurrentJob}
        />
        <JobInfo jobs={jobs} currentJob={currentJob} />
      </section>
    </main>
  );
}

export default App;
