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
    <div className='w-screen h-screen overflow-x-hidden relative'>
      <AnimatedCanvas/>
      {/* <Cursor/> */}
      <div className="absolute h-full z-20 w-full">
        <div className='w-3/5 mt-10 h-full mx-auto relative'>
            {/* navbar */}
            <navba className='w-full flex justify-between items-center h-[3rem]'>
              <Music />
              <ul className='flex justify-end'>
                <li className='mx-3 text-black cursor-pointer hover:border-b border-black text-base duration-1000' onClick={() => scrollToSection(whatWeDoRef)}>What we do</li>
                <li className='mx-3 text-black cursor-pointer hover:border-b border-black text-base duration-1000' onClick={() => scrollToSection(ourWorkRef)}>Our work</li>
                <li className='mx-3 text-black cursor-pointer hover:border-b border-black text-base duration-1000' onClick={() => scrollToSection(ourTeamRef)}>Our team </li>
              </ul>
            </navba>


            {/* hero */}
            <section className='flex flex-row w-full' style={{height: 'calc(100vh - 5.5rem)'}}>   {/* 3rem is navbar, 2.5rem is margin */}
              <span className='w-2/5 h-full text-black flex flex-col justify-center'>
                <code className='text-2xl h-1/2'>
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
                      style = {{
                          whiteSpace: 'pre-line'
                      }}
                    />
                </code>
              </span>
              <img src="img/hero.svg" alt="ITC logo" className='wave-img0 w-3/5'/>
            </section>


            {/* what we do */}
            <section ref={whatWeDoRef} className='flex justify-between w-full my-20'>
              <h2 className='w-2/5 h-full text-4xl text-black text-center'> What we do</h2>
              <p className='w-3/5 text-center'>
                We are a team of developers who are passionate about creating beautiful and functional websites. Our main objective is to fullfill web development needs of the ITC community. We are always looking for new projects to work on and new people to collaborate with. If you have a project in mind, feel free to reach out to us!
              </p>
            </section>


            {/* Our Woek  */}
            <section ref={ourWorkRef} className='flex flex-col w-full'>
                <h2 className='w-2/5 h-full mb-10 text-center text-4xl text-black flex flex-col'> Our work</h2>
                <div className='flex flex-row w-full justify-between gap-2 mb-20'>
                  { workdata.map((website, index) => (
                    <div key={index} className='flex flex-col w-1/3'>
                      <img src={website.img} alt={website.title} className='w-full'/>
                      <p className='text-center'>{website.title}</p>
                    </div>
                  ))}

                </div>
            </section>


            {/* our team */}
            <section ref={ourTeamRef} className='flex flex-col w-full'>
                <h2 className='w-2/5 h-full mb-10 text-center text-4xl text-black flex flex-col'> Our team</h2>
                <div className='flex flex-col w-full justify-center text-xs'>  
                    {team.map((member, index) => (
                      <div key={index} className='flex justify-start mb-20'>
                        <span className='w-2/3 h-full flex flex-col relative'>
                          <img src={member.links.image} alt={member.name} className='w-2/3 drop-shadow-2xl'/>
                          <span className='w-1/3 h-full flex flex-col justify-center gap-2 absolute -left-6'>
                            {member.links.linkedin && <a href={member.links.linkedin}><Linkedin /></a>}
                            {member.links.instagram && <a href={member.links.instagram}><Instagram /></a>}
                            {member.links.github && <a href={member.links.github}><Github /></a>}
                          </span>

                        </span>
                        <pre className='w-1/3 h-full p-4 text-base flex flex-col justify-end text-gray-900'>{JSON.stringify(member.data, null, 2)}</pre>                        
                      </div>
                    ))}
                </div>  
            </section>


            {/* footer */}
            <footer className='text-center w-full'>
              Developed by ITC Web Team with ❤️
            </footer>
        </div>
      </div>
    </div>
  )
}

export default App;