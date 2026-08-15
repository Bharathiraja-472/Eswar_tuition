'use client'

import React, { useState } from 'react'
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  Check,
  ChevronRight,
  ExternalLink,
  MapPin,
  Menu,
  MessageSquare,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
} from 'lucide-react'

const benefits = [
  {
    icon: Users,
    title: 'Individual Attention',
    text: 'Personal guidance for every student to resolve doubts and reinforce key concepts.',
  },
  {
    icon: BookOpenCheck,
    title: 'Focused Coaching',
    text: 'Complete subject support for Class 10 (All Subjects) and Class 12 (Maths & Accountancy).',
  },
  {
    icon: Award,
    title: 'Regular Assessment',
    text: 'Weekly tests and model examinations to build exam readiness and confidence.',
  },
]

const teachingSteps = [
  {
    number: '01',
    title: 'Learn',
    description: 'Understand concepts clearly through focused academic coaching.',
  },
  {
    number: '02',
    title: 'Practice',
    description: 'Reinforce learning through regular practice and weekly tests.',
  },
  {
    number: '03',
    title: 'Assess',
    description: 'Evaluate preparation and exam readiness through model examinations.',
  },
  {
    number: '04',
    title: 'Improve',
    description: 'Identify areas that need attention and provide targeted individual support.',
  },
]

const supportHighlights = [
  {
    title: 'Individual Attention',
    text: 'Teachers focus on the learning pace of each student, addressing specific subject challenges.',
  },
  {
    title: 'Weekly Tests',
    text: 'Continuous evaluation through weekly testing ensures consistent study habits.',
  },
  {
    title: 'Model Examinations',
    text: 'Simulated examination-style assessments prepare students for official board papers.',
  },
  {
    title: 'Exam-Focused Preparation',
    text: 'Structured coverage of essential topics, problem-solving methods, and paper presentation.',
  },
  {
    title: 'Expert Coaching',
    text: 'Experienced subject coaching aimed at clarifying fundamental concepts step-by-step.',
  },
  {
    title: 'Free Demo Class',
    text: 'Experience the teaching style firsthand before making an admission decision.',
  },
]

export default function Page() {
  const [selectedClass, setSelectedClass] = useState<string>('10th Standard')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  })

  const googleReviewsUrl =
    'https://www.google.com/maps/place/Eswar+Mathematics+Tuition+centre/@13.0622233,80.219334,17z/data=!4m15!1m8!3m7!1s0x3a5266923c5f7df1:0x566f67a3c9aed3e2!2s3669%2BVPW,+No+80,+Pari+St,+Anna+Nedum+Pathai,+Veerapandi+Nagar,+Choolaimedu,+Chennai,+Greater+Chennai,+Tamil+Nadu+600094!3b1!8m2!3d13.0622233!4d80.219334!16s%2Fg%2F11xv91shcg!3m5!1s0x3a52673fb8759a6b:0x5b2bc0a56b44f8b4!8m2!3d13.0622233!4d80.219334!16s%2Fg%2F11gmfyh97g?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D'
  const googleLocationUrl =
    'https://www.google.com/maps/search/?api=1&query=Eswar%20Mathematics%20Tuition%20centre&query_place_id=ChIJa5p1uD9nUjoRtPhEa6XAK1s'
  const whatsappNumber = '919941120361'
  const displayPhone = '099411 20361'

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Hello Eswar Mathematics Tuition Centre,\n\nI would like to enquire about demo class / admission.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nClass: ${selectedClass}\nMessage: ${formData.message || 'N/A'}`
    const encodedText = encodeURIComponent(text)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank')
  }

  const scrollToContactWithClass = (className: string) => {
    setSelectedClass(className)
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header Navigation */}
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Eswar Mathematics Tuition Centre home">
          <span className="brand-mark">EM</span>
          <span>
            <strong>Eswar</strong>
            <small>Mathematics Tuition Centre</small>
          </span>
        </a>
        
        {/* Desktop Nav Links */}
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#who-its-for">Who It's For</a>
          <a href="#approach">Teaching Approach</a>
          <a href="#classes">Classes</a>
          <a href="#assessment">Assessment</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Desktop Header Actions */}
        <div className="header-actions desktop-only-actions">
          <a className="header-call" href="tel:09941120361">
            <Phone size={15} /> {displayPhone}
          </a>
          <a
            className="header-wa"
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
          >
            <MessageSquare size={15} /> WhatsApp
          </a>
        </div>

        {/* Mobile Header Controls */}
        <div className="mobile-header-controls">
          <a className="mobile-quick-call" href="tel:09941120361" aria-label="Call Centre">
            <Phone size={16} />
          </a>
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-Over Aside Drawer */}
      {isMobileMenuOpen && (
        <>
          <div className="mobile-drawer-overlay" onClick={() => setIsMobileMenuOpen(false)} />
          <aside className="mobile-drawer">
            <div className="mobile-drawer-header">
              <a className="brand" href="#top" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="brand-mark">EM</span>
                <span>
                  <strong>Eswar</strong>
                  <small>Mathematics Tuition Centre</small>
                </span>
              </a>
              <button
                className="mobile-drawer-close"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="mobile-drawer-nav">
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>
                <span>About the Centre</span>
                <ChevronRight size={18} />
              </a>
              <a href="#who-its-for" onClick={() => setIsMobileMenuOpen(false)}>
                <span>Who It's For</span>
                <ChevronRight size={18} />
              </a>
              <a href="#approach" onClick={() => setIsMobileMenuOpen(false)}>
                <span>Teaching Approach</span>
                <ChevronRight size={18} />
              </a>
              <a href="#classes" onClick={() => setIsMobileMenuOpen(false)}>
                <span>Class Offerings</span>
                <ChevronRight size={18} />
              </a>
              <a href="#assessment" onClick={() => setIsMobileMenuOpen(false)}>
                <span>Assessment</span>
                <ChevronRight size={18} />
              </a>
              <a href="#demo" onClick={() => setIsMobileMenuOpen(false)}>
                <span>Free Demo Class</span>
                <ChevronRight size={18} />
              </a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                <span>Contact &amp; Admissions</span>
                <ChevronRight size={18} />
              </a>
            </nav>

            <div className="mobile-drawer-actions">
              <a className="button button-primary" href="tel:09941120361">
                <Phone size={16} /> Call {displayPhone}
              </a>
              <a
                className="button button-whatsapp"
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageSquare size={16} /> WhatsApp Us
              </a>
            </div>
          </aside>
        </>
      )}

      {/* Hero Section with Blended Nandi Backdrop */}
      <section id="top" className="hero-section">
        <div className="hero-copy">
          <div className="eyebrow">
            <Sparkles size={15} /> Admissions Open for 10th &amp; 12th Std Students
          </div>
          <h1>
            Learn smart.<br />
            <em>Score high.</em><br />
            Shine with confidence.
          </h1>
          <p className="hero-description">
            Focused tuition, personal attention, weekly tests and model exams for Class 10 and Class 12 students in Choolaimedu, Chennai.
          </p>
          <div className="hero-actions">
            <a className="button button-primary hero-primary-btn" href="#contact">
              Enquire Today <ArrowRight size={16} />
            </a>
            <div className="hero-quick-ctas">
              <a className="button button-outline" href="tel:09941120361">
                <Phone size={15} /> Call {displayPhone}
              </a>
              <a
                className="button button-whatsapp"
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageSquare size={15} /> WhatsApp
              </a>
            </div>
          </div>
          <div className="hero-demo-highlight">
            <ShieldCheck size={18} /> Free demo class available
          </div>
        </div>
      </section>

      {/* Google Trust & Reviews Bar */}
      <div className="google-trust-bar">
        <div className="google-trust-inner">
          <div className="google-rating-box">
            <div className="rating-badge">
              4.9 <Star size={20} className="fill-current text-[#e1a22f]" />
            </div>
            <div className="rating-meta">
              <strong>4.9 ★ Google Rating</strong>
              <span>Based on 182 Google Reviews</span>
            </div>
          </div>
          <a
            className="button button-outline"
            href={googleReviewsUrl}
            target="_blank"
            rel="noreferrer"
          >
            Read Our Google Reviews <ExternalLink size={15} />
          </a>
        </div>
      </div>

      {/* Section 1: About the Centre */}
      <section id="about" className="intro-section">
        <div className="section-heading">
          <p className="eyebrow" style={{ color: '#e1a22f' }}>About the Centre</p>
          <h2>
            Dedicated to academic coaching &amp;<br />
            <span>structured student support.</span>
          </h2>
        </div>
        <p className="intro-text">
          At Eswar Mathematics Tuition Centre in Choolaimedu, we focus on making academic subjects clear, structured, and manageable. Through expert coaching, regular weekly assessments, and individual attention, we help Class 10 and Class 12 students build strong subject fundamentals and prepare thoroughly for examinations.
        </p>
        <div className="benefit-grid">
          {benefits.map(({ icon: Icon, title, text }) => (
            <article className="benefit" key={title}>
              <div className="icon-box">
                <Icon size={24} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Section 2: Who the Centre is For */}
      <section id="who-its-for" className="section-container">
        <div className="section-heading">
          <p className="eyebrow">Targeted Academic Programs</p>
          <h2>
            Who the Centre is For<br />
            <span>Tailored for 10th &amp; 12th Standard</span>
          </h2>
        </div>
        <div className="audience-grid">
          <article className="audience-card">
            <div>
              <div className="audience-card-header">
                <h3>Class 10 Students</h3>
                <span className="badge-tag">Full Support</span>
              </div>
              <p className="sub-tag">All Subjects</p>
              <ul className="audience-list">
                <li><Check size={16} /> Complete academic preparation across all subjects</li>
                <li><Check size={16} /> Regular concept practice &amp; homework reviews</li>
                <li><Check size={16} /> Weekly testing to check understanding</li>
                <li><Check size={16} /> Model examinations for exam practice</li>
                <li><Check size={16} /> Individual attention for continuous support</li>
              </ul>
            </div>
            <button
              className="button button-primary"
              onClick={() => scrollToContactWithClass('10th Standard')}
            >
              Enquire for Class 10 <ChevronRight size={16} />
            </button>
          </article>

          <article className="audience-card">
            <div>
              <div className="audience-card-header">
                <h3>Class 12 Students</h3>
                <span className="badge-tag">Specialized</span>
              </div>
              <p className="sub-tag">General Mathematics &amp; Accountancy Group</p>
              <ul className="audience-list">
                <li><Check size={16} /> Subject-focused coaching for Mathematics &amp; Accountancy</li>
                <li><Check size={16} /> In-depth problem solving &amp; numerical practice</li>
                <li><Check size={16} /> Regular weekly tests to track progress</li>
                <li><Check size={16} /> Model examinations simulating actual paper patterns</li>
                <li><Check size={16} /> Individual support to resolve tricky topics</li>
              </ul>
            </div>
            <button
              className="button button-primary"
              onClick={() => scrollToContactWithClass('12th Standard')}
            >
              Enquire for Class 12 <ChevronRight size={16} />
            </button>
          </article>
        </div>
      </section>

      {/* Section 3: Teaching Approach */}
      <section id="approach" className="intro-section" style={{ background: '#23170e' }}>
        <div className="section-heading">
          <p className="eyebrow" style={{ color: '#e1a22f' }}>Structured Learning Method</p>
          <h2>
            Our Teaching Approach<br />
            <span>Four Steps to Academic Clarity</span>
          </h2>
        </div>
        <div className="approach-steps">
          {teachingSteps.map((step) => (
            <div className="step-card" key={step.number}>
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Student Support (Editorial Layout) */}
      <section id="support" className="section-container">
        <div className="section-heading">
          <p className="eyebrow">Comprehensive Student Care</p>
          <h2>
            How Students Are Supported<br />
            <span>Key Pillars of Our Tuition Program</span>
          </h2>
        </div>
        <div className="support-editorial-grid">
          {supportHighlights.map((item) => (
            <div className="editorial-item" key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Class Offerings */}
      <section id="classes" className="classes-section">
        <div className="section-heading">
          <p className="eyebrow">Academic Offerings</p>
          <h2>
            Structured Batches<br />
            <span>Designed for Clear Outcomes</span>
          </h2>
        </div>
        <div className="class-offerings-grid">
          <div className="class-box">
            <div>
              <h3>Class 10</h3>
              <div className="subjects-highlight">All Subjects</div>
              <p>
                Academic support covering all core 10th standard subjects with regular practice sessions, weekly chapter tests, model examinations, and personal teacher guidance.
              </p>
            </div>
            <button
              className="button button-primary"
              onClick={() => scrollToContactWithClass('10th Standard')}
            >
              Enquire for Class 10 <ArrowRight size={16} />
            </button>
          </div>

          <div className="class-box">
            <div>
              <h3>Class 12</h3>
              <div className="subjects-highlight">General Mathematics &amp; Accountancy Group</div>
              <p>
                Focused subject coaching tailored specifically for Higher Secondary General Mathematics and Accountancy students, featuring model exam papers and individual doubt clearing.
              </p>
            </div>
            <button
              className="button button-primary"
              onClick={() => scrollToContactWithClass('12th Standard')}
            >
              Enquire for Class 12 <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Section 6: Weekly Tests & Model Exams */}
      <section id="assessment" className="assessment-banner">
        <div className="section-heading">
          <p className="eyebrow" style={{ color: '#e1a22f' }}>Continuous Evaluation</p>
          <h2>
            Weekly Tests &amp; Model Exams<br />
            <span>Building Confidence Through Practice</span>
          </h2>
        </div>
        <div className="assessment-grid">
          <div className="assessment-card">
            <h3>Weekly Tests</h3>
            <p>
              Regular testing helps students continuously evaluate their preparation, identify weak areas early, and maintain consistent revision habits throughout the academic term.
            </p>
          </div>
          <div className="assessment-card">
            <h3>Model Examinations</h3>
            <p>
              Students get valuable opportunities to practice examination-style assessments under timed conditions, helping them build speed, accuracy, and exam confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Individual Attention */}
      <section className="attention-section">
        <div className="attention-content">
          <Quote size={32} style={{ margin: '0 auto 16px', opacity: 0.8 }} />
          <h2>Every Student Deserves Attention</h2>
          <p>
            We believe that no student should be left behind. Individual attention is a core offering at Eswar Mathematics Tuition Centre, ensuring that every learner receives personal guidance to clarify doubts and master fundamental concepts.
          </p>
          <a className="button button-primary" href="#contact">
            Speak With Us Today <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Section 8: Free Demo Class */}
      <section id="demo" className="section-container">
        <div className="demo-banner">
          <div className="demo-info">
            <p className="eyebrow">Try Before You Join</p>
            <h3>Experience the Difference Before You Decide</h3>
            <p>
              Students and parents are invited to attend a free demo class to experience our teaching approach, interaction style, and classroom environment firsthand.
            </p>
          </div>
          <div className="demo-buttons">
            <a className="button button-primary" href="#contact">
              Book a Free Demo Class <ArrowRight size={16} />
            </a>
            <a className="button button-outline" href="tel:09941120361">
              <Phone size={16} /> {displayPhone}
            </a>
            <a
              className="button button-whatsapp"
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageSquare size={16} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Section 9: Admissions & WhatsApp Enquiry Form */}
      <section id="contact" className="contact-section">
        <div>
          <p className="eyebrow">Get In Touch</p>
          <h2>
            Admissions Open for<br />
            <span>10th &amp; 12th Std Students</span>
          </h2>
          <p className="contact-copy">
            Visit us in Choolaimedu or send an enquiry below to speak with us about batch details, class timings, and free demo classes.
          </p>
          <div className="contact-details">
            <a href="tel:09941120361">
              <Phone size={18} />
              <div>
                <strong>Phone Call</strong>
                <br />
                <span>{displayPhone}</span>
              </div>
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageSquare size={18} />
              <div>
                <strong>WhatsApp Message</strong>
                <br />
                <span>+91 99411 20361</span>
              </div>
            </a>
            <a href={googleLocationUrl} target="_blank" rel="noreferrer">
              <MapPin size={18} />
              <div>
                <strong>Centre Address</strong>
                <br />
                <span>
                  No. 80, Pari St, Anna Nedum Pathai, Veerapandi Nagar, Choolaimedu, Chennai, Tamil Nadu 600094
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* WhatsApp Enquiry Form */}
        <form className="enquiry-card" onSubmit={handleEnquirySubmit}>
          <h3>Book a Free Demo / Enquiry</h3>
          <p>Submitting this form opens WhatsApp directly to send your details to the centre.</p>

          <label htmlFor="name">Your Name *</label>
          <input
            id="name"
            name="name"
            placeholder="Parent or student name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <label htmlFor="phone">Phone Number *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="099411 20361"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />

          <label htmlFor="class">Select Class *</label>
          <select
            id="class"
            name="class"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="10th Standard">Class 10 — All Subjects</option>
            <option value="12th Standard">Class 12 — General Mathematics &amp; Accountancy</option>
          </select>

          <label htmlFor="message">Additional Message (Optional)</label>
          <textarea
            id="message"
            name="message"
            placeholder="Any specific questions or subjects you wish to ask about..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />

          <button className="button button-primary" type="submit">
            Send Enquiry via WhatsApp <MessageSquare size={16} />
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-inner">
          <div className="footer-info">
            <a className="brand" href="#top">
              <span className="brand-mark">EM</span>
              <span>
                <strong>Eswar</strong>
                <small>Mathematics Tuition Centre</small>
              </span>
            </a>
            <p>
              No. 80, Pari St, Anna Nedum Pathai, Veerapandi Nagar, Choolaimedu, Chennai 600094
            </p>
          </div>
          <div className="footer-links">
            <p className="text-sm text-muted-foreground">
              Class 10 (All Subjects) &amp; Class 12 (General Mathematics &amp; Accountancy Group)
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              &copy; {new Date().getFullYear()} Eswar Mathematics Tuition Centre. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
