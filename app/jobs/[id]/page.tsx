import Link from 'next/link';
import { jobPosts } from '@/data/jobs';
import { notFound } from 'next/navigation';
import '../[id]/page.css';

interface JobDetailPageProps {
  params: {
    id: string;
  };
}

export default function JobDetailPage({ params }: JobDetailPageProps) {
  const job = jobPosts.find((j) => j.id === params.id);

  if (!job) {
    notFound();
  }

  return (
    <>
      <header className="header">
        <div className="container">
          <Link href="/" className="back-link">
            ← Back to Job Listings
          </Link>
          <h1>LeadsFlow - Job Details</h1>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <div className="job-detail-container">
            <div className="job-detail-header">
              <div>
                <h1 className="job-detail-title">{job.title}</h1>
                <p className="job-detail-company">{job.company}</p>
              </div>
              <span className="job-detail-type">{job.type}</span>
            </div>

            <div className="job-detail-info">
              <div className="info-item">
                <span className="info-label">📍 Location:</span>
                <span className="info-value">{job.location}</span>
              </div>
              <div className="info-item">
                <span className="info-label">💰 Salary:</span>
                <span className="info-value">{job.salary}</span>
              </div>
              <div className="info-item">
                <span className="info-label">📅 Posted:</span>
                <span className="info-value">{job.postedDate}</span>
              </div>
              <div className="info-item">
                <span className="info-label">🏷️ Category:</span>
                <span className="info-value">{job.category}</span>
              </div>
            </div>

            <div className="job-detail-section">
              <h2 className="section-title">Job Description</h2>
              <p className="section-content">{job.description}</p>
            </div>

            <div className="job-detail-section">
              <h2 className="section-title">Requirements</h2>
              <ul className="requirements-list">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="requirement-item">
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>

            <div className="job-detail-actions">
              <button className="btn btn-primary">Apply Now</button>
              <Link href="/" className="btn btn-secondary">
                Back to Listings
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
