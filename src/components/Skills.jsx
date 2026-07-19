import "./Skills.css"
function Skills({ heading, skillsList = [] }) {
  return (
    <section>
      <p className="skill-head">{heading}</p>

      <ul className="skills-list">
        {skillsList.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;