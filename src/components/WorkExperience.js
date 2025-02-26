import React from "react";
import styled from "styled-components";
import Container from "./Container";

const WorkExperienceSection = styled.section`
  background: ${(props) => props.theme.background};
  padding: 40px 0;
`;

const WorkExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const WorkExperienceCard = styled.div`
  background: ${(props) => props.theme.cardBackground}; // Use theme for card background
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const CompanyLogo = styled.img`
  width: 80px;
  height: auto;
  margin-bottom: 15px;
`;

const CompanyName = styled.h3`
  color: ${(props) => props.theme.text}; // Use theme for text color
  margin-bottom: 5px;
`;

const JobTitle = styled.h4`
  color: ${(props) => props.theme.text};
  margin-bottom: 10px;
`;

const Duration = styled.p`
  color: ${(props) => props.theme.text};
  margin-bottom: 10px;
`;

const Description = styled.ul`
  color: ${(props) => props.theme.text};
  list-style-type: disc;
  padding-left: 20px;
`;

const DescriptionItem = styled.li`
  margin-bottom: 5px;
`;

const WorkExperience = () => {
  const experiences = [
    {
      company: "Tech Innovations Inc.",
      logo: "/logos/company1.png", // Replace with your company logo
      title: "Senior Software Engineer",
      duration: "Jan 2020 - Present",
      description: [
        "Led the development of scalable microservices using Java and Spring Boot.",
        "Implemented CI/CD pipelines with Jenkins and Docker.",
        "Mentored junior developers and conducted code reviews.",
      ],
    },
    {
      company: "Global Solutions Ltd.",
      logo: "/logos/company2.png", // Replace with your company logo
      title: "Software Developer",
      duration: "Jun 2018 - Dec 2019",
      description: [
        "Developed and maintained web applications using React and Node.js.",
        "Collaborated with cross-functional teams to deliver high-quality software.",
        "Contributed to the improvement of development processes.",
      ],
    },
    {
      company: "Startup Ventures Co.",
      logo: "/logos/company3.png", // Replace with your company logo
      title: "Junior Developer",
      duration: "Aug 2016 - May 2018",
      description: [
        "Assisted in the development of Python-based data processing tools.",
        "Learned and applied agile development methodologies.",
        "Participated in code reviews and testing.",
      ],
    },
  ];

  return (
    <Container>
      <WorkExperienceSection id="WorkExperience">
        <h2>Work Experience</h2>
        <WorkExperienceGrid>
          {experiences.map((experience, index) => (
            <WorkExperienceCard key={index}>
              <CompanyLogo src={experience.logo} alt={experience.company} />
              <CompanyName>{experience.company}</CompanyName>
              <JobTitle>{experience.title}</JobTitle>
              <Duration>{experience.duration}</Duration>
              <Description>
                {experience.description.map((item, itemIndex) => (
                  <DescriptionItem key={itemIndex}>{item}</DescriptionItem>
                ))}
              </Description>
            </WorkExperienceCard>
          ))}
        </WorkExperienceGrid>
      </WorkExperienceSection>
    </Container>
  );
};

export default WorkExperience;