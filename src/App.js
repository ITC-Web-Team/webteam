import { TypeAnimation } from 'react-type-animation';
import Music from './components/Music';
import team, { workdata } from './components/data.js';
import { Linkedin, Instagram, Github, GitFork, Star, Eye } from 'lucide-react';
import { useRef } from 'react';

function App() {
  const whatWeDoRef = useRef(null);
  const ourWorkRef = useRef(null);
  const ourTeamRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='min-h-screen overflow-x-hidden font-handwritten bg-paper text-ink relative'>
      {/* Remove AnimatedCanvas and add texture overlay */}
      <div className="absolute inset-0 bg-paper-texture opacity-10 pointer-events-none z-10"></div>

      <div className="relative z-20 w-full">
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Navbar */}
          <nav className='py-6 border-b-2 border-ink border-dashed'>
            <div className='flex justify-between items-center'>
              <div className='flex items-center space-x-4'>
                <img src="/img/itc.svg" alt="ITC Web Team" className='h-16 w-auto' />
              </div>
              <ul className='flex space-x-8 text-lg'>
                {['What we do', 'Our work', 'Our team'].map((item, index) => (
                  <li key={index}
                    className='relative cursor-pointer group'
                    onClick={() => scrollToSection([whatWeDoRef, ourWorkRef, ourTeamRef][index])}>
                    <span className='text-ink hover:text-primary transition-colors'>{item}</span>
                    <span className='absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left'></span>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Hero Section */}
          <section className='py-20 flex flex-col md:flex-row items-center gap-12'>
            <div className='w-full md:w-1/2 space-y-6'>
              <h1 className='text-5xl md:text-7xl font-bold text-ink leading-tight'>
                We love to solve problems with code
                <span className='text-primary'>.</span>
              </h1>
              <div className='p-4 bg-code rounded-lg border-2 border-ink border-dashed'>
                <TypeAnimation
                  sequence={[
                    'npm install @itc/awesome-websites',
                    1000,
                    'npm install @itc/creative-solutions',
                    1000,
                    'npm install @itc/web-magic',
                    1000,
                  ]}
                  wrapper="code"
                  cursor={true}
                  repeat={Infinity}
                  className='text-lg md:text-xl font-mono text-ink'
                />
              </div>
            </div>
            <div className='w-full md:w-1/2'>
              <img src="/img/hero.svg" alt="Hand drawn development illustration"
                className='w-full h-auto max-w-sm transform hover:scale-105 transition-transform' />
            </div>
          </section>

          {/* What We Do Section */}
          <section ref={whatWeDoRef} className='py-20'>
            <h2 className='text-4xl md:text-5xl font-bold text-ink mb-12 text-center'>
              Our Superpowers
              <span className='text-primary'>✨</span>
            </h2>
            <div className='grid md:grid-cols-3 gap-8'>
              {[
                {
                  title: 'Web Solutions',
                  icon: '🚀',
                  description: 'We create custom web applications and portals tailored for ITC and institute needs. From event platforms to management systems, we build it all.',
                  features: ['React.js', 'Node.js', 'MongoDB']
                },
                {
                  title: 'Design & Development',
                  icon: '🎨',
                  description: 'Our team combines creative design with robust development to deliver seamless digital experiences that look great and work perfectly.',
                  features: ['UI/UX Design', 'Responsive', 'Performance']
                },
                {
                  title: 'Technical Support',
                  icon: '🛠️',
                  description: 'We provide ongoing support and maintenance for all ITC digital platforms, ensuring everything runs smoothly and stays up-to-date.',
                  features: ['24/7 Support', 'Quick Fixes', 'Updates']
                }
              ].map((service, index) => (
                <div key={index}
                  className='p-6 bg-paper-alt rounded-lg border-2 border-ink border-dashed hover:transform hover:scale-105 transition-all group'>
                  <div className='flex flex-col h-full'>
                    <span className='text-4xl mb-4 block transform group-hover:scale-110 transition-transform'>
                      {service.icon}
                    </span>
                    <h3 className='text-2xl font-bold mb-3 group-hover:text-primary transition-colors'>
                      {service.title}
                    </h3>
                    <p className='text-ink-light mb-4 flex-grow'>
                      {service.description}
                    </p>
                    <div className='flex flex-wrap gap-2 mt-auto'>
                      {service.features.map((feature, idx) => (
                        <span key={idx}
                          className='px-3 py-1 bg-paper rounded-full text-sm border-2 border-ink border-dashed text-ink-light'>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Our Work Section */}
          <section ref={ourWorkRef} className='py-20'>
            <h2 className='text-4xl md:text-5xl font-bold text-ink mb-12 text-center'>
              Our Projects
              <span className='text-primary'>.</span>
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              {[
                {
                  name: 'GC Portal',
                  description: 'The official platform for the General Championship (GC) at IIT Bombay. Facilitates management and tracking of GC events and results.',
                  repo: 'ITC-Web-Team/GC_Portal',
                  language: 'JavaScript'
                },
                {
                  name: 'ITC SSO',
                  description: 'A Django-based Single Sign-On (SSO) application that uses roll numbers as usernames. Features user registration, email verification, and password reset.',
                  repo: 'ITC-Web-Team/itc_sso',
                  language: 'JavaScript'
                },
                {
                  name: 'ITC Main',
                  description: 'The official website of the Institute Technical Council (ITC) built and maintained by the ITC Web Team.',
                  repo: 'ITC-Web-Team/ITC_Main',
                  language: 'CSS'
                },
                {
                  name: 'Projects Portal',
                  description: 'A platform to showcase and manage technical projects from various clubs and teams.',
                  repo: 'ITC-Web-Team/ProjectsPortal',
                  language: 'Python'
                },
                {
                  name: 'Web Team Portfolio',
                  description: 'The official portfolio website showcasing our team and projects. Built with React and modern web technologies.',
                  repo: 'ITC-Web-Team/webteam',
                  language: 'JavaScript'
                },
                {
                  name: 'Energy Club Website',
                  description: 'Official website for the Energy Club at IIT Bombay.',
                  repo: 'ITC-Web-Team/EnergyClub-Website',
                  language: 'HTML'
                }
              ].map((repo, index) => (
                <a
                  href={`https://github.com/${repo.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className='p-6 bg-paper-alt rounded-lg border-2 border-ink border-dashed hover:transform hover:scale-102 transition-all group'
                >
                  <div className='flex items-start justify-between'>
                    <div>
                      <div className='flex items-center gap-2 mb-2'>
                        <Github className='w-5 h-5' />
                        <h3 className='text-xl font-bold group-hover:text-primary transition-colors'>{repo.name}</h3>
                      </div>
                      <p className='text-ink-light mb-4'>{repo.description}</p>
                    </div>
                  </div>

                  <div className='flex items-center gap-6 text-sm'>
                    <span className='flex items-center gap-1'>
                      <div className={`w-3 h-3 rounded-full ${{
                          'JavaScript': 'bg-[#f1e05a]',
                          'Python': 'bg-[#3572A5]',
                          'CSS': 'bg-[#563d7c]',
                          'HTML': 'bg-[#e34c26]',
                          'TypeScript': 'bg-[#3178c6]'
                        }[repo.language]
                        }`} />
                      {repo.language}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className='mt-12 text-center'>
              <a
                href="https://github.com/ITC-Web-Team"
                target="_blank"
                rel="noopener noreferrer"
                className='inline-flex items-center gap-2 text-ink hover:text-primary transition-colors'
              >
                <span>View more on GitHub</span>
                <Github className='w-5 h-5' />
              </a>
            </div>
          </section>

          {/* Our Team Section */}
          <section ref={ourTeamRef} className='py-20'>
            <h2 className='text-4xl md:text-5xl font-bold text-ink mb-12 text-center'>
              The Crew
              <span className='text-primary'>.</span>
            </h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {team.map((member, index) => (
                <div key={index}
                  className='group bg-paper-alt p-6 rounded-lg border-2 border-ink border-dashed hover:transform hover:scale-102 transition-all'>
                  <div className='relative mb-4'>
                    <img
                      src={member.links.image}
                      alt={member.name}
                    />
                    <div className='absolute -top-3 -right-3 flex gap-2 bg-paper p-2 rounded-lg border-2 border-ink border-dashed'>
                      {member.links.linkedin && (
                        <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer"
                          className='text-ink hover:text-primary transition-colors'>
                          <Linkedin className='w-5 h-5' />
                        </a>
                      )}
                      {member.links.github && (
                        <a href={member.links.github} target="_blank" rel="noopener noreferrer"
                          className='text-ink hover:text-primary transition-colors'>
                          <Github className='w-5 h-5' />
                        </a>
                      )}
                      {member.links.instagram && (
                        <a href={member.links.instagram} target="_blank" rel="noopener noreferrer"
                          className='text-ink hover:text-primary transition-colors'>
                          <Instagram className='w-5 h-5' />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <h4 className='text-xl font-bold text-ink group-hover:text-primary transition-colors'>
                      {member.data.name}
                    </h4>
                    <p className='text-ink-light'>{member.data.post}</p>
                    <div className='pt-2 space-y-1'>
                      {member.data.interests.map((interest, idx) => (
                        <span key={idx}
                          className='inline-block mr-2 mb-2 px-3 py-1 bg-paper rounded-full text-sm border-2 border-ink border-dashed'>
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className='py-12 text-center border-t-2 border-ink border-dashed'>
            <p className='text-lg'>
              Crafted with ❤️ by the ITC Web Team
              <span className='text-primary'>.</span>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
