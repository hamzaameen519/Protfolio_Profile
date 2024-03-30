import React from "react";
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from "./TimelineItem";
import SkillItem from "./SkillItem";

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem title="University of Education Lahore, Multan Campus" date="20019 — 2021" description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur." />
          <TimelineItem title="Alemdar College Multan" date="20017 — 20019" description="Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis." />
          <TimelineItem title="Emerson College Multan" date="2015 — 2017" description="Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos." />
          <TimelineItem title="Piolt School Multan" date="2013 — 2015" description="Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos." />
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
          <TimelineItem title="Senior FullStack Developer : Crafting Digital Excellence" date="2021 — Present" description="Innovating Comprehensive Solutions Across the Digital Landscape." />
          <TimelineItem title="Backend Developer" date="2020 — 2021" description=" Architecting Robust Systems for Seamless Functionality." />
          <TimelineItem title="Frontend Developer" date="2019 — 2020" description="Shaping User Interfaces with Innovation and Precision." />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="HTML" value={90} />
          <SkillItem title="CSS" value={90} />
          <SkillItem title="JavaScript" value={85} />
          <SkillItem title="React" value={80} />
          <SkillItem title="Node.js" value={80} />
          <SkillItem title="Express.js" value={75} />
          <SkillItem title="MongoDB" value={75} />
          <SkillItem title="SQL" value={70} />
          <SkillItem title="Git" value={80} />
          <SkillItem title="RESTful APIs" value={75} />
          <SkillItem title="GraphQL" value={70} />
          <SkillItem title="AWS" value={65} />
          <SkillItem title="Kibana" value={60} />
          <SkillItem title="Stripe" value={70} />
          <SkillItem title="Socket.io" value={75} />
          <SkillItem title="Nest.js" value={70} />
          <SkillItem title="Next.js" value={75} />
          <SkillItem title="Molecule.js" value={60} />
          <SkillItem title="MQTT" value={65} />
          <SkillItem title="Docker" value={70} />
          <SkillItem title="Keycloak" value={60} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
