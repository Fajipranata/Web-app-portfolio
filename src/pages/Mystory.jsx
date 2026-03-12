import "../styles/mystory.css"
import { useEffect } from "react";
import { motion } from "framer-motion";
import cloud2 from "../assets/cloudwhite.svg";

function Contact() {

  useEffect(() => {

    const items = document.querySelectorAll(".story-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      {
        threshold: 0.6
      }
    );

    items.forEach((item) => observer.observe(item));

  }, []);

  return (

      <div className="story-container">
              
              <motion.img
                src={cloud2}
                className="cloud10"
                initial={{ x: "90vw" }}
                animate={{ x: "-180vw" }}
                transition={{
                  duration: 80,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

                            <motion.img
                src={cloud2}
                className="cloud11"
                initial={{ x: "120vw" }}
                animate={{ x: "-180vw" }}
                transition={{
                  duration: 90,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

        <div className="story-title">
          <h1>My Story</h1>
          <h2>This story is updated every time I have a major update</h2>
        </div>

        <div className="story-item">
          <div className="story-image">
            <img src="./src/assets/childhood.webp" alt="childhood"/>
          </div>
          <div className="story-text">
            <p>
            My name is Fahmi Aji Pranata. I was born in Jakarta on the first of March 1997. I live in a regular family with a kind mother, father, one brother, and one sister. Both of my parents are teachers. My father is a national history teacher, and my mother is an English teacher. Just for the record, I can speak English fluently because of my hobby of playing video games, not because of my mom. However, my mom still plays a big role in my life. She is the one who encouraged me to learn and speak English. My education wasn't really special. I went to public schools for 12 years. My primary school, junior high school, and high school were all public schools. I chose public schools because of my parents’ financial situation. My primary and junior high schools were typical schools, but my high school was a vocational high school focusing on automotive engineering courses. I achieved several accomplishments during my vocational high school years. I was the head of the journalism club and won a few photography and journalism competitions. I was also always in the top three in my class and participated in several automotive competitions, winning 2nd place in East Jakarta and 3rd place in Jakarta.
            </p>
          </div>
        </div>

        <div className="story-item reverse">
          <div className="story-image">
            <img src="./src/assets/diploma2.webp" alt="diploma"/>
          </div>
          <div className="story-text">
            <p>
            In 2015, after finishing high school, I continued my education by pursuing a diploma at ASTRA Manufacturing Polytechnic, focusing on automotive manufacturing and engine maintenance. My diploma experience was fairly normal. I spent one year doing on-the-job training in Kalimantan (Borneo) in a mining area to complete my final diploma assignment. At that time, the mining maintenance leader had a project challenge to create a system that could stop excavators from over-traveling. I decided to take the challenge, so my final diploma assignment focused on developing a system to stop excavators from traveling too far. The goal was to make excavators stop automatically in order to reduce undercarriage maintenance. For this project, I used an Arduino as a microcontroller to bypass the hydraulic system and stop the excavator from moving. At that time, I had no programming skills at all, but I was quite good with computers, which encouraged me to try this challenge. I learned C++ for two months, and the whole project took six months to complete. During the process, I learned a lot through trial and error, debugging code, and solving many software and hardware problems. I was the first student to finish my final diploma assignment, and I returned to Jakarta to enjoy my graduation in 2018, earning a diploma in Automotive Manufacturing and Engine Maintenance.
            </p>
          </div>
        </div>

        <div className="story-item">
          <div className="story-image">
            <img src="./src/assets/japan1.webp" alt="japan"/>
          </div>
          <div className="story-text">
            <p>
            After finishing my diploma, I decided to go to Japan to learn Japanese and possibly work there. I chose Higashikawa Nihongo Gakkou in Hokkaido to start my journey. It was affordable, supported the local community, and was far from the city, which allowed me to focus on my studies. From 2018 to 2019, I studied Japanese by myself to improve my skills before going to Japan alone. I arrived in Japan in March 2019 and started my Japanese classes in April. Everything went very smoothly. I even became a leader for Indonesian students at the school and in the dormitory, won first place in a Japanese speech contest, and became the first Indonesian student there to obtain a driving license. I even bought a car after getting a part-time job at McDonald's. In 2019, the COVID-19 virus began spreading around the world and eventually reached Sapporo, Hokkaido. I tried my best to find a job or anything that would allow me to stay in Japan, but it was too late. New regulations in my area required me to return to Indonesia for safety, so in March 2020 I went back to Indonesia.
            </p>
          </div>
        </div>

        <div className="story-item reverse">
          <div className="story-image">
            <img src="./src/assets/covid1.webp" alt="covid"/>
          </div>
          <div className="story-text">
            <p>
            After returning to Indonesia, I struggled with depression and tried to find work using my diploma. However, because COVID-19 was spreading rapidly in 2020, finding a job was very difficult. I decided to open a small food business, and it went quite well at first, but it was eventually closed by the police because I operated it at night, which was forbidden during the COVID-19 restrictions. I was back to zero again. My mother then suggested that I continue my education through an extension program to earn a bachelor’s degree. I found STMIK PASIM in Sukabumi, West Java, and chose it mainly because they offered fully online classes during the pandemic. For my undergraduate thesis, I analyzed the UI and UX of a touring application and proposed improvements based on user feedback, using SmartPLS 3.2.9 to process the data. I completed my bachelor’s degree in about one and a half years and graduated in July 2021 with a Bachelor’s degree in Information Technology.
            </p>
          </div>
        </div>

        <div className="story-item">
          <div className="story-image">
            <img src="./src/assets/master1.webp" alt="master"/>
          </div>
          <div className="story-text">
            <p>
            After completing my bachelor’s degree, I worked at Kobelco Trading Indonesia as a sales interpreter, connecting the main office in Japan with buyers in Indonesia. In May 2022, I received a scholarship to pursue my master’s degree at University of Indonesia, one of the top universities in the country, I stop work in Kobelco and began my studies in June 2022. During my studies, I served as class leader and also started working as manager in a Japanese food store around campus to support myself financially while doing my master. My thesis focused on the growing phenomenon of online lending applications in Indonesia, analyzing how online advertising influences Generation Z (ages 18–27) to download these apps. Using quantitative methods and Structural Equation Modeling (SEM) with 306 respondents, the research found that advertising incentives and informative content significantly increase the perceived value of advertisements, encouraging users to download the apps, while trust and perceived risk also play important roles in users’ decisions. I completed the program and graduated in October 2024 with cum laude, earning a Master’s degree in Business and Management with a focus on Digital Marketing.
            </p>
          </div>
        </div>

        <div className="story-item reverse">
          <div className="story-image">
            <img src="./src/assets/kobe1.webp" alt="kobe"/>
          </div>
          <div className="story-text">
            <p>
            After graduating in 2024, I focused on making my canteen business run on autopilot so I could leave it while still earning income. At the beginning of 2025, I found a job opportunity in Kobe, Hyogo Prefecture. A restaurant called LaShomon was looking for a manager, so I applied and was invited for interviews. The owner, who is Japanese-American, interviewed me twice for about 30 minutes each. I received the job offer in May 2025 and then waited about three months for my visa. In September 2025, I finally received my visa and returned to Japan to start my journey again and pursue my old dream. Now I work at LaShomon as a manager trainee. My work schedule is long—12 hours a day, from 10 AM to 10 PM. I am grateful for this opportunity, but when I think about my future career, I realize I may not grow much if I stay in this path. Because of that, I try to learn whenever I have time—every night, every break, and every opportunity I get. Recently, I have been focusing on learning programming more deeply. Right now, the best I can do is study for about two hours every day after I return home from work.
            </p>
          </div>
        </div>

        <div className="story-item">
          <div className="story-image">
            <img src="./src/assets/fullstack1.webp" alt="fullstack"/>
          </div>
          <div className="story-text">
            <p>
            I am learning full-stack programming by building my own web application portfolio, teaching myself both backend and frontend development from scratch. I began this journey by buying an old laptop and turning it into my personal server. I installed Ubuntu to run the server and started from the very first step of learning programming. Setting up Linux itself was not a big problem, but it took me almost two hours just to connect the server laptop to Wi-Fi. It was very frustrating at the beginning, but once it finally connected, the relief and excitement were incredible. That moment reminded me how much I truly enjoy working with technology. After that, I started building the backend for my first application, a simple note-taking app. It focused entirely on the backend without a fancy frontend or React, no Node.js, and no VSCode just a plain backend system. Because I only have one or two hours each day to study after work, it took me about three days to finish. During that process, I gained valuable backend experience: running a Linux server, using Docker correctly, building backend APIs, connecting to PostgreSQL, and running a multi-container system. I managed everything from my main laptop by connecting to the server laptop through SSH. I encountered many errors along the way, but with help from Google, ChatGPT, and Stack Overflow, I slowly learned how to debug and solve problems.
            </p>
          </div>
        </div>

    </div>
  );
}

export default Contact;