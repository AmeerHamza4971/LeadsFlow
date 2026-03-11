import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <header className="header">
        <div className="container">
          <h1>LeadsFlow - Job Postings</h1>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <div style={{ 
            textAlign: 'center', 
            padding: '4rem 2rem',
            background: 'white',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1f2937' }}>
              Job Not Found
            </h2>
            <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
              The job posting you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/" className="btn btn-primary">
              Back to Job Listings
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
