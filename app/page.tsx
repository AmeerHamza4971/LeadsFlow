import Link from 'next/link';
import { jobPosts } from '@/data/jobs';
import './page.css';

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container">
          <h1>LeadsFlow - Job Postings</h1>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <div className="jobs-header">
            <h2>Available Job Positions</h2>
            <p className="jobs-count">{jobPosts.length} positions available</p>
          </div>
          <div className="jobs-grid">
            {jobPosts.map((job) => (
              <Link key={job.id} href={`/jobs/${job.id}`} className="job-card">
                <div className="job-card-header">
                  <h3 className="job-title">{job.title}</h3>
                  <span className="job-type">{job.type}</span>
                </div>
                <div className="job-company">{job.company}</div>
                <div className="job-details">
                  <span className="job-location">📍 {job.location}</span>
                  <span className="job-salary">💰 {job.salary}</span>
                </div>
                <div className="job-category">
                  <span className="category-badge">{job.category}</span>
                </div>
                <div className="job-description">
                  {job.description.substring(0, 120)}...
                </div>
                <div className="job-footer">
                  <span className="job-date">Posted: {job.postedDate}</span>
                  <span className="view-details">View Details →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
