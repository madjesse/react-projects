import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] =useState(true);
  const [jobs, setJobs] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }
  const {company, dates, duties, title} = jobs[index];
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
      <ul className="btn-container">
        {jobs.map((job, i) => (
          <li><button className={`job-btn ${i === index && 'active-btn'}`} key={job.id} onClick={() => setIndex(i)}>{job.company}</button></li>
        ))}
      </ul>
        <article className="job-info">
          <h3 >{title}</h3>
          <h4>{company}</h4>
          <p className>{dates}</p>
          {duties.map((duty, i) => (
            <div key={i} className="job-desc">
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
              <p>{duty}</p>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}

export default App
