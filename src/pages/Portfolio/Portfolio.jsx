import React from "react";
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from "./TimelineItem";
import SkillItem from "./SkillItem";

const Portfolio = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Full Portfolio</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Maulana Azad National Institute of Technology, ( NIT Bhopal )"
            date="2018 — 2021"
            description="Master's of Computer Applications (M.C.A)"
          />
          <TimelineItem
            title="Devi Ahilya Vishwavidyalaya (DAVV), Indore"
            date="2015 — 2018"
            description="Bachelor's of Computer Applications (B.C.A)"
          />
          <TimelineItem
            title="Golden international school, cat road rau, Indore"
            date="2013 — 2014"
            description="Senior Secondary School"
          />
          <TimelineItem
            title="M.P police public higher secondary school, Indore"
            date="2011 — 2012"
            description="High school"
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Systango Technologies - Software Engineer"
            date="Nov 2023 — Present"
            description={
              <ul>
                <li>
                  • Designed RESTful APIs for seamless communication between
                  application modules and external services.
                </li>
                <li>
                  • Optimized database queries of an existing application,
                  leading to a 25% increase in application speed in data storage
                  and retrieval.
                </li>
                <li>
                  • Collaborated closely with front-end developers, ensuring
                  seamless integration of user interface and back-end
                  functionalities.
                </li>
                <li>
                  • Ensured unit and integration tests surpassed 88% coverage
                  during application development.
                </li>
              </ul>
            }
          />
          <TimelineItem
            title="ClickLabs PVT. LTD. - Associate Software Engineer"
            date="Mar 2021 — Oct 2022"
            description={
              <ul>
                <li>
                  • Developed a robust user authentication system, ensuring data
                  security and secure platform access.
                </li>
                <li>
                  • Engineered a dynamic personalized learning path feature,
                  adapting to individual user progress and preferences while
                  providing valuable insights.
                </li>
                <li>
                  • Incorporated a comprehensive feedback and rating system.
                </li>
                <li>
                  • Implemented cron jobs to send email notifications at
                  selected intervals, increasing the number of returning
                  visitors by 15%.
                </li>
              </ul>
            }
          />
          {/* <TimelineItem
            title="Web designer"
            date="2010 — 2013"
            description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
          /> */}
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="NodeJs (ExpressJs)" value={80} />
          <SkillItem title="Javascript" value={70} />
          <SkillItem title="Typescript" value={70} />
          <SkillItem title="MySQL" value={90} />
          <SkillItem title="MongoDB" value={70} />
          <SkillItem title="PostgreSQL" value={80} />
          <SkillItem title="RESTful API" value={80} />
          <SkillItem title="Problem Solving" value={80} />
          <SkillItem title="Linux/Unix" value={70} />
          <SkillItem title="GitLab" value={70} />
          <SkillItem title="Git" value={70} />
          <SkillItem title="GitHub" value={70} />
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
