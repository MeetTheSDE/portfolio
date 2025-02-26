import React from "react";
import styled from "styled-components";
import Container from "./Container";

// Reusing Skills styled components for Certificates
const CertificationsSection = styled.section`
  background: ${(props) => props.theme.background};
//   padding: 20px 0;
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // Adjust as needed
  gap: 20px;
  margin-top: 20px;
`;

const CertificationCard = styled.div`
  height: 300px;
  width: 300px;
  background: #fff;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.09);
  }

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${(props) => props.bgColor || "#ddd"};
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    z-index: 0;
  }

  &:hover:before {
    opacity: 0.2;
  }
`;

const CertificationLogo = styled.img`
  width: 200px;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1; // Always visible
  z-index: 2;
`;

const ViewCredentialsTab = styled.div`
  position: absolute;
  bottom: -30px; // Initially hidden below the card
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.9em;
  opacity: 0;
  transition: bottom 0.3s ease, opacity 0.3s ease;
  z-index: 3;
  white-space: nowrap; // Prevent text from wrapping
  cursor: pointer;
  
  ${CertificationCard}:hover & {
    bottom: 5px; // Move up when hovered
    opacity: 1;
  }
`;

const Certifications = () => {
	const certificationsData = [
		{
			src: "/logos/awscp.png",
			alt: "AWS Certified Practitioner",
			bgColor: "#232F3E", // AWS color
			credentialLink: "YOUR_CREDENTIAL_LINK",
		},
		// Add more certifications here
	];

	return (
		<Container>
			<CertificationsSection id="certifications">
				<h2>Certifications</h2>
				<CertificationsGrid>
					{certificationsData.map((cert, index) => (
						<CertificationCard
							key={index}
							bgColor={cert.bgColor}
						>
							<CertificationLogo src={cert.src} alt={cert.alt} />
							<ViewCredentialsTab onClick={() => window.open(cert.credentialLink, "_blank", "noopener noreferrer")}>
							View Credentials</ViewCredentialsTab>

						</CertificationCard>
					))}
				</CertificationsGrid>
			</CertificationsSection>
		</Container>
	);
};

export default Certifications;