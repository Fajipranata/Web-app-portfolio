import "../styles/about.css"
import profile from "../assets/fahmi.png";
import cloud2 from "../assets/cloudwhite.svg";
import { motion } from "framer-motion";
import { useState } from "react";

function About() {

  const [shortVersion, setShortVersion] = useState(false);

  return (
    <div className="about-page">
       <motion.img
        src={cloud2}
        className="cloud8"
        initial={{ x: "100vw" }}
        animate={{ x: "-180vw" }}
        transition={{
          duration: 70,
          repeat: Infinity,
          ease: "linear"
        }}
      />
       <motion.img
        src={cloud2}
        className="cloud9"
        initial={{ x: "110vw" }}
        animate={{ x: "-180vw" }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <div className="about-layout">


        <div className="about-content fade-in-delay-about">

          <h1>About Me</h1>

          <h1>Fahmi Aji Pranata</h1>
          <h3>Software Developer</h3>

          <p>
            Self-taught Full-Stack Developer currently based in Kobe, Japan. Experienced in building and deploying personal web applications from scratch using Linux servers, Docker, backend APIs, and PostgreSQL, with remote server management via SSH. Strong self-learner with hands-on experience debugging and developing systems independently.
          </p>

        <p className="location">
           📍 Tarumi-ku, Kobe, Hyogo, Japan 🇯🇵
        </p>

        <h2>Skills</h2>

        <div className="skills">

          <span>JavaScript</span>
          <span>Python</span>
          <span>C++</span>
          <span>FastAPI</span>
          <span>React</span>
          <span>Linux</span>
          <span>CRUD</span>
          <span>SaaS</span>
          <span>Docker</span>
          <span>Machine Learning</span>
          <span>AI Systems</span> 
          <span>Arduino</span>
        </div>

      <div className="timeline-toggle">
        <button onClick={() => setShortVersion(!shortVersion)}>
          {shortVersion ? "Show Full Story" : "Summary"}
        </button>
      </div>

    <div className="timeline">
    {!shortVersion ? (            
          <>
            <div className="timeline-item">
              <div className="timeline-dot"></div>  
              <div className="timeline-content">
                <h3>1997, March 1st, Born in Jakarta, Indonesia.</h3>
                <p>2003–2009, Attended public primary school.</p>
                <p>2009–2012, Continued education in a public junior high school.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2012, Vocational School</h3>
                <p>2012–2015, Attended a vocational high school focusing on automotive engineering</p> 
                <p>Achievements:</p>
                <p>• Consistently ranked Top 3 in class.</p>
                <p>• Automotive competitions, winning: 2nd place in East Jakarta 3rd place in Jakarta.</p>
                <p>• Head of the Journalism Club. Won several photography and journalism competitions.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2015, Astra Polytechnic</h3>
                <p>2015, Enrolled in ASTRA Manufacturing Polytechnic, studying Automotive Manufacturing and Engine Maintenance.</p>
                <p>2017, Final year – Spent 1 year of on-the-job training in Kalimantan (Borneo) in a mining area to complete the final diploma assignment.</p>
                <p>2018, Graduated in Jakarta with a Diploma in Automotive Manufacturing and Engine Maintenance.</p>
                <p>Diploma Thesis:</p>
                <p>Developed an excavator over-travel prevention system using Arduino, learning C++ from scratch in two months to bypass the hydraulic system and reduce undercarriage maintenance.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2018, Study in Japan</h3>
                <p>2018, Decided to go to Japan to study Japanese and potentially work there. Began self-studying Japanese for about a year to achieved JLPT N5.</p>
                <p>2019, Moved to Japan and enrolled at Higashikawa Nihongo Gakkou in Hokkaido.</p>
                <p>Achievements:</p>
                <p>• Won 1st place in a Japanese speech contest.</p>
                <p>• Leader for Indonesian students at the school and dormitory.</p>
                <p>• First Indonesian student at the school to obtain a Japanese driving license</p>
                <p>2020 March, Graduated from Higashikawa Nihongo Gakkou</p>
                <p>2020 April, Due to pandemic regulations, returned to Indonesia.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2020, Bachelor Degree</h3>
                <p>2020, Decided to continue education through an extension program and enrolled at STMIK PASIM in Sukabumi, West Java, mainly because it offered fully online classes during the pandemic.</p>
                <p>2021, Graduated with a Bachelor’s degree in Information Technology.</p>
                <p>Bachelor’s Thesis:</p>
                <p>Conducted UI/UX analysis of a touring application, collecting user feedback and processing data using SmartPLS to improve features with low user impact.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2021, Master Degree</h3>
                <p>2021, Started working at Kobelco Trading Indonesia as a sales interpreter, connecting the main office in Japan with buyers in Indonesia.</p>
                <p>2022 May, Received a scholarship opportunity to pursue a master’s degree at University of Indonesia.</p>
                <p>2022 June, Began Master’s studies in Business and Management, focusing on Digital Marketing, and served as class leader.</p>
                <p>2022–2024, Started work in Japanese food as manager, focus on development and human resource.</p>
                <p>2024, Graduated CUM LAUDE from University of Indonesia with a Master’s degree in Business and Management (Digital Marketing).</p>
                <p>Master Thesis:</p>
                <p>Researched how online advertising influences Generation Z (ages 18–27) in Indonesia to download online loan applications, analyzing factors such as informativeness, entertainment, irritation, incentives, trust, and perceived risk using Structural Equation Modeling (SEM).</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2025, Present</h3>
                <p>2025 Mei, Found a job opportunity in Kobe, Hyogo Prefecture at LaShomon and applied for a manager position.</p>
                <p>2025 September,Obtained a visa and returned to Japan to start the job.</p>
                <p>2025-present, Working at LaShomon as a manager trainee, with a 12-hour daily schedule.</p>
               </div>
            </div>
          </>
        ):(             
          <>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>1997</h3>
                <p>Born in Jakarta, Indonesia.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2015</h3>
                <p>Studied Automotive Engineering at Astra Polytechnic.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2019</h3>
                <p>Moved to Japan to study Japanese in Hokkaido.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2021</h3>
                <p>Graduated Bachelor Degree – University of STMIK Pasim.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2024</h3>
                <p>Graduated Master’s Degree – University of Indonesia.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2025–Present</h3>
                <p>Manager trainee in Kobe while building software projects.</p>
              </div>
            </div>
          </>
        )}
</div>
    </div>
        <div className="about-photo">
          <img
            src={profile}
            alt="Fahmi Aji Pranata"
          />
        </div>    

      </div>
    </div>
  );
}

export default About;