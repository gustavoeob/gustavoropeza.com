import Skill from "./skill";
import "./skills.scss";

const Skills = (technology) => {
  const technologies = [
    {
      id: 1,
      name: "HTML",
      img: "https://firebasestorage.googleapis.com/v0/b/portfolio-ff6da.appspot.com/o/skills-logos%2Ficons8-html-5-96.png?alt=media&token=2d8866cc-7922-47cb-afa5-ed602edd1ce1",
      alt: "html "
    },
    {
      id: 2,
      name: "CSS",
      img: "https://firebasestorage.googleapis.com/v0/b/portfolio-ff6da.appspot.com/o/skills-logos%2Ficons8-css3-96.png?alt=media&token=3eaff2cb-6569-4919-b20b-52913ec8385f",
    },
    {
      id: 3,
      name: "JAVASCRIPT",
      img: "https://firebasestorage.googleapis.com/v0/b/portfolio-ff6da.appspot.com/o/skills-logos%2Ficons8-javascript-96.png?alt=media&token=b9eacb22-f5ec-488e-b350-0f0eecdc0e88",
    },
    {
      id: 4,
      name: "REACT",
      img: "https://firebasestorage.googleapis.com/v0/b/portfolio-ff6da.appspot.com/o/skills-logos%2Ficons8-react-native-96.png?alt=media&token=493a24ee-502a-4e24-bcea-42965c97c17b",
    },
    {
      id: 5,
      name: "REDUX",
      img: "https://firebasestorage.googleapis.com/v0/b/portfolio-ff6da.appspot.com/o/skills-logos%2Ficons8-redux-96.png?alt=media&token=bc465862-344e-4cd1-bc68-a74713a5dacb",
    },
    {
      id: 6,
      name: "REST API",
      img: "https://firebasestorage.googleapis.com/v0/b/portfolio-ff6da.appspot.com/o/skills-logos%2Ficons8-rest-api-96.png?alt=media&token=e5f75507-f416-49fd-ba13-65f234570c91",
    },
    {
      id: 7,
      name: "GIT",
      img: "https://firebasestorage.googleapis.com/v0/b/portfolio-ff6da.appspot.com/o/skills-logos%2Ficons8-git-96.png?alt=media&token=13a599a9-af35-4731-b394-aab8f286a990",
    },
    {
      id: 8,
      name: "FIGMA",
      img: "https://firebasestorage.googleapis.com/v0/b/portfolio-ff6da.appspot.com/o/skills-logos%2Ficons8-figma-96.png?alt=media&token=db1dc8ad-0f40-4195-9ce1-b5dcdb77f283",
    },
  ];

  return (
    <section>
      <div className="main-container skills-container">
        <h2 className="section-title">skills</h2>
        <div className="all-skills">
          {technologies.map((item, index) => (
            <Skill key={index} name={item.name} img={item.img} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
