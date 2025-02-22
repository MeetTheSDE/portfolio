import React from "react";
import styled from "styled-components";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

// Styled Components
const Section = styled.section`
  padding: 60px 10%;
  background: ${(props) => props.theme.background};
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: ${(props) => props.theme.cardBackground};
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Item = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
`;

const Icon = styled.div`
  font-size: 20px;
  color: ${(props) => props.theme.primaryColor};
`;

const Details = styled.div`
  h3 {
    font-size: 1.2rem;
    font-weight: bold;
  }
  
  p {
    font-size: 0.9rem;
    color: gray;
  }
`;

const ExperienceEducation = () => {
  return (
    <Section>
      <Title>Experiences & Educations</Title>
      <Container>
        {/* Experience Section */}
        <Card>
          <Item>
            <Icon>
              <FaBriefcase />
            </Icon>
            <Details>
              <p>Nov 2017 - May 2018</p>
              <h3>Web Developer</h3>
              <p>Silicon Infovision Inc.</p>
              <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec.</p>
            </Details>
          </Item>

          <Item>
            <Icon>
              <FaBriefcase />
            </Icon>
            <Details>
              <p>Jan 2019 - Dec 2021</p>
              <h3>Fullstack Developer</h3>
              <p>Amazon Inc.</p>
              <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec.</p>
            </Details>
          </Item>

          <Item>
            <Icon>
              <FaBriefcase />
            </Icon>
            <Details>
              <p>Jan 2022 - Present</p>
              <h3>Senior Fullstack Developer</h3>
              <p>Facebook Inc.</p>
              <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec.</p>
            </Details>
          </Item>
        </Card>

        {/* Education Section */}
        <Card>
          <Item>
            <Icon>
              <FaGraduationCap/>
            </Icon>
            <Details>
              <p>Aug 2015 - July 2019</p>
              <h3>Bachelor of Engineering</h3>
              <p>Gujrat Technological Univeristy</p>
              <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec.</p>
            </Details>
          </Item>

          <Item>
            <Icon>
              <FaGraduationCap />
            </Icon>
            <Details>
              <p>Jan 2019 - May 2021</p>
              <h3>Master of Science</h3>
              <p>University of Texas, Arlington</p>
              <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec.</p>
            </Details>
          </Item>
        </Card>
      </Container>
    </Section>
  );
};

export default ExperienceEducation;