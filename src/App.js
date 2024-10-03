import AnimatedCanvas from './components/AnimatedCanvas';
import { TypeAnimation } from 'react-type-animation';
import Music from './components/Music';
import team, {workdata} from './components/data.js';
import { Linkedin, Instagram, Github } from 'lucide-react';
import { useRef } from 'react';

function App() {

  const whatWeDoRef = useRef(null);
  const ourWorkRef = useRef(null);
  const ourTeamRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='w-screen h-screen overflow-x-hidden relative font-sans bg-gray-50'>
      <AnimatedCanvas/>
      <div className="absolute h-full z-20 w-full">
        <div className='w-4/5 mt-10 h-full mx-auto relative'>
          
          {/* Navbar */}
          <nav className='w-full flex justify-between items-center h-[3rem]'>
            <Music />
            <ul className='flex justify-end space-x-6 text-lg md:text-base'>
              <li className='text-gray-800 font-medium cursor-pointer hover:border-b-2 border-gray-800 duration-500' onClick={() => scrollToSection(whatWeDoRef)}>What we do</li>
              <li className='text-gray-800 font-medium cursor-pointer hover:border-b-2 border-gray-800 duration-500' onClick={() => scrollToSection(ourWorkRef)}>Our work</li>
              <li className='text-gray-800 font-medium cursor-pointer hover:border-b-2 border-gray-800 duration-500' onClick={() => scrollToSection(ourTeamRef)}>Our team</li>
            </ul>
          </nav>

          {/* Hero Section */}
          <section className='flex flex-col md:flex-row w-full' style={{ height: 'calc(100vh - 5.5rem)' }}>
            <span className='w-full md:w-2/5 h-full text-black flex flex-col justify-center px-4 md:px-0'>
              <code className='text-3xl md:text-2xl lg:text-4xl font-mono text-gray-900 leading-relaxed'>
                <TypeAnimation
                  sequence={[
                    1000,
                    'mkdir itc \n cd itc \n',
                    1000,
                    'mkdir itc \n cd itc \n npm install webteam',
                    3000,
                    ' ',
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  style={{ whiteSpace: 'pre-line' }}
                />
              </code>
            </span>
            <img src="img/hero.svg" alt="ITC logo" className='w-full md:w-3/5 mt-10 md:mt-0' />
          </section>

          {/* What We Do Section */}
          <section ref={whatWeDoRef} className='w-2/3 min-w-96 mx-auto flex flex-col justify-between mb-20'>
            <h2 className='text-center text-4xl lg:text-5xl font-bold text-gray-900 leading-snug mb-4'>What We Do</h2>
            <p className='text-center text-lg lg:text-xl text-gray-800'>
              We are a team of developers passionate about creating beautiful and functional websites. Our main objective is to fulfill web development needs of the ITC community. We are always looking for new projects to work on and new people to collaborate with. If you have a project in mind, feel free to reach out to us!
            </p>
          </section>

          {/* Our Work Section */}
          <section ref={ourWorkRef} className='flex flex-col w-full'>
            <h2 className='w-full mb-10 text-center text-4xl lg:text-5xl font-bold text-gray-900 leading-snug'>Our Work</h2>
            <div className='flex flex-row flex-wrap justify-center w-full gap-6 mb-20'>
              {workdata.map((website, index) => (
                <div key={index} className='flex flex-col w-full md:w-1/3 min-w-[150px] bg-black shadow-md p-4 rounded-lg hover:shadow-lg transition-shadow duration-300'>
                  <img src={website.img} alt={website.title} className='w-full rounded-t-md' />
                  <p className='text-center text-white mt-2 font-medium'>{website.title}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Our Team Section */}
          <section ref={ourTeamRef} className='flex flex-col w-full'>
            <h2 className='w-full mb-10 text-center text-4xl lg:text-5xl font-bold text-gray-900 leading-snug'>Our Team</h2>
            <div className='flex flex-col w-full justify-center text-sm md:text-base text-gray-600'>
              {team.map((member, index) => (
                <div key={index} className='flex flex-col md:flex-row justify-start flex-wrap mb-16'>
                  <span className='w-full md:w-1/3 h-full flex flex-col relative'>
                    <img src={member.links.image} alt={member.name} className='w-full drop-shadow-2xl rounded-md' />
                    <span className='flex justify-center md:justify-start gap-3 absolute -top-6 -left-6'>
                      {member.links.linkedin && <a href={member.links.linkedin}><Linkedin className='text-gray-700' /></a>}
                      {member.links.instagram && <a href={member.links.instagram}><Instagram className='text-gray-700' /></a>}
                      {member.links.github && <a href={member.links.github}><Github className='text-gray-700' /></a>}
                    </span>
                  </span>
                  <pre className='w-full md:w-2/3 h-full p-4 text-base flex flex-col justify-end bg-black text-gray-100 shadow-md shadow-black rounded-lg'>{JSON.stringify(member.data, null, 2)}</pre>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className='text-center w-full py-6 text-gray-600'>
            Developed by ITC Web Team with ❤️
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
