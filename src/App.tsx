import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <svg className="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="logo-text">MeetNote</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#pricing">Pricing</a>
            <button className="btn-secondary">Sign In</button>
            <button className="btn-primary">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="badge">
            <span className="badge-icon">✨</span>
            <span>Streamline Your Meetings</span>
          </div>
          <h1 className="hero-title">
            Capture and Organize
            <br />
            <span className="gradient-text">Meeting Inputs Effortlessly</span>
          </h1>
          <p className="hero-description">
            Transform your meeting preparation with MeetNote. Efficiently capture attendee inputs, 
            organize discussion points, and ensure everyone is prepared before the meeting starts.
          </p>
          <div className="hero-actions">
            <button className="btn-primary btn-large">
              Start Free Trial
              <svg className="btn-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="btn-secondary btn-large">
              <svg className="btn-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Watch Demo
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">10k+</div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-number">50k+</div>
              <div className="stat-label">Meetings Organized</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-number">95%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-card card-float-1">
            <div className="card-header">
              <div className="avatar-group">
                <div className="avatar" style={{backgroundColor: '#6366f1'}}>JD</div>
                <div className="avatar" style={{backgroundColor: '#ec4899'}}>SM</div>
                <div className="avatar" style={{backgroundColor: '#8b5cf6'}}>RK</div>
              </div>
              <span className="card-badge">Live</span>
            </div>
            <h3 className="card-title">Q4 Strategy Meeting</h3>
            <div className="card-items">
              <div className="card-item">
                <span className="item-icon">✓</span>
                <span>Budget allocation review</span>
              </div>
              <div className="card-item">
                <span className="item-icon">✓</span>
                <span>Market expansion plans</span>
              </div>
              <div className="card-item">
                <span className="item-icon">○</span>
                <span>Team restructuring</span>
              </div>
            </div>
          </div>
          <div className="visual-card card-float-2">
            <div className="insight-header">
              <span className="insight-icon">📊</span>
              <span className="insight-label">Meeting Insights</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '75%'}}></div>
            </div>
            <p className="insight-text">75% agenda items completed</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="section-header">
          <span className="section-badge">Features</span>
          <h2 className="section-title">Everything You Need for Better Meetings</h2>
          <p className="section-description">
            Powerful features designed to make your meeting preparation seamless and effective
          </p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="feature-title">Smart Agenda Builder</h3>
            <p className="feature-description">
              Create structured agendas with ease. Organize topics, assign time slots, and collect input from attendees before the meeting.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="feature-title">Collaborative Input</h3>
            <p className="feature-description">
              Enable all attendees to contribute their thoughts, questions, and materials in advance for more productive discussions.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'}}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="feature-title">Action Item Tracking</h3>
            <p className="feature-description">
              Automatically track action items, assignments, and follow-ups to ensure nothing falls through the cracks.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" style={{background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'}}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="feature-title">Smart Reminders</h3>
            <p className="feature-description">
              Automated reminders ensure everyone reviews materials and submits their input before the meeting starts.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" style={{background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'}}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="feature-title">Analytics & Insights</h3>
            <p className="feature-description">
              Get valuable insights into meeting effectiveness, participation rates, and areas for improvement.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" style={{background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'}}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="feature-title">Seamless Integrations</h3>
            <p className="feature-description">
              Connect with your favorite tools like Slack, Teams, Google Calendar, and Zoom for a unified workflow.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="section-header">
          <span className="section-badge">How It Works</span>
          <h2 className="section-title">Get Started in Three Simple Steps</h2>
        </div>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3 className="step-title">Create Your Meeting</h3>
              <p className="step-description">
                Set up your meeting with a title, date, and initial agenda. Invite attendees with a simple link or email.
              </p>
            </div>
          </div>
          <div className="step-connector"></div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3 className="step-title">Collect Input</h3>
              <p className="step-description">
                Attendees contribute their ideas, questions, and materials. Everything is organized automatically in one place.
              </p>
            </div>
          </div>
          <div className="step-connector"></div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3 className="step-title">Run Better Meetings</h3>
              <p className="step-description">
                Walk into your meeting fully prepared with all inputs organized, reviewed, and ready for productive discussion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your Meetings?</h2>
          <p className="cta-description">
            Join thousands of teams who have streamlined their meeting preparation with MeetNote
          </p>
          <div className="cta-actions">
            <button className="btn-primary btn-large">Start Free Trial</button>
            <button className="btn-secondary btn-large">Schedule a Demo</button>
          </div>
          <p className="cta-note">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <svg className="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="logo-text">MeetNote</span>
            </div>
            <p className="footer-description">
              Streamline your meeting preparation by efficiently capturing and organizing attendee inputs.
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Product</h4>
            <ul className="footer-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#integrations">Integrations</a></li>
              <li><a href="#changelog">Changelog</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li><a href="#docs">Documentation</a></li>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#community">Community</a></li>
              <li><a href="#status">Status</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 FuzeBox. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
