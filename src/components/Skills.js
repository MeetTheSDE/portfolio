import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import Container from "./Container";

const skillsData = {
    Java: { logos: { primary: { src: "/logos/java.png", bgColor: "#f89820", level: 80, name: 'Java' } } },
    FrontEnd: {
        logos: {
			primary: { src: "/logos/react.png", bgColor: "#61dafb", level: 80, name: 'React' },
            secondary: { src: "/logos/angular.png", bgColor: "#dd0031", level: 75, name: 'Angular' }
        },
    },
    Python: { logos: { primary: { src: "/logos/python.png", bgColor: "#ffd43b", level: 85, name: 'Python' } } },
	DevOps: {
        logos: {
            primary: { src: "/logos/github.png", bgColor: "#333", level: 85, name: 'GitHub' },
            secondary: { src: "/logos/jenkins.png", bgColor: "#d24939", level: 75, name: 'Jenkins' },
			tertiary: { src: "/logos/elasticsearch.png", bgColor: "#29ABE2", level: 75, name: 'ElasticSearch' }
        },
    },
    Scripts: {
		logos: {
			primary: { src: "/logos/javascript.png", bgColor: "#f7df1e", level: 75, name: 'JavaScript' },
            secondary: { src: "/logos/typescript.png", bgColor: "#007acc", level: 50, name: 'TypeScript' }
        },
    },
    AWS: { logos: { primary: { src: "/logos/aws.png", bgColor: "#ff9900", level: 60 } } },
    SQL: {
		logos: {
			primary: { src: "/logos/mysql.png", bgColor: "#f5b96c", level: 85 },
            secondary: { src: "/logos/postgresql.png", bgColor: "#336791", level: 70, name: 'PostgreSQL' }
        },
    },
	Docker: { logos: { primary: { src: "/logos/docker2.png", bgColor: "#0db7ed", level: 60, name: 'Docker' } } }
};


const SkillsSection = styled.section`
    background: ${(props) => props.theme.background};
    padding: 40px 0;
`;

const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
    margin-top: 20px;
`;

const SkillCard = styled.div`
    height: 150px;
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
        transform: scale(1.12);
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

const SkillImage = styled.img`
    width: 90px;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); // Initial position
    opacity: 0;
    z-index: 2;
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out; // Smooth transitions

    &.active {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }

    &.inactive {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.8);
    }
`;

const SkillNameTile = styled.div`
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    /* Background color now dynamic */
    background: ${(props) => props.bgColor || "rgba(0, 0, 0, 0.8)"}; // Default if no bgColor
    color: white;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 0.9em;
    opacity: 0;
    transition: bottom 0.3s ease, opacity 0.3s ease, background 0.3s ease; // Added background transition
    z-index: 3;
    white-space: nowrap; // Prevent text from wrapping

    ${SkillCard}:hover & {
        bottom: 1px;
        opacity: 1;
    }
`;

const Skills = () => {
    const [displayedImageIndices, setDisplayedImageIndices] = useState({});
    const [currentColors, setCurrentColors] = useState({});

    const allLogos = useMemo(() => {
        const logoArrays = {};
        Object.keys(skillsData).forEach(skill => {
            const { logos } = skillsData[skill];
            logoArrays[skill] = [logos.primary, ...(logos.secondary ? [logos.secondary] : []), ...(logos.tertiary ? [logos.tertiary] : [])];
        });
        return logoArrays;
    }, [skillsData]);


    useEffect(() => {
        const intervalIds = {};

        Object.keys(skillsData).forEach((skill) => {
            setDisplayedImageIndices((prevIndices) => ({ ...prevIndices, [skill]: 0 }));
            setCurrentColors((prevColors) => ({ ...prevColors, [skill]: allLogos[skill][0].bgColor }));

            if (allLogos[skill].length > 1) {
                intervalIds[skill] = setInterval(() => {
                    setDisplayedImageIndices((prevIndices) => {
                        const nextIndex = (prevIndices[skill] + 1) % allLogos[skill].length;
                        setCurrentColors((prevColors) => ({
                            ...prevColors,
                            [skill]: allLogos[skill][nextIndex].bgColor,
                        }));
                        return { ...prevIndices, [skill]: nextIndex };
                    });
                }, 4000);
            }
        });

        return () => {
            Object.values(intervalIds).forEach(clearInterval);
        };
    }, [allLogos]);

    const handleTileClick = (skill) => {
        const nextIndex = (displayedImageIndices[skill] + 1) % allLogos[skill].length;
        setDisplayedImageIndices((prevIndices) => ({ ...prevIndices, [skill]: nextIndex }));
        setCurrentColors((prevColors) => ({
            ...prevColors,
            [skill]: allLogos[skill][nextIndex].bgColor,
        }));
    };

	const getSkillName = (skill, index) => {
        const logo = allLogos[skill][index];
        return logo.name;
    };

    return (
        <Container>
            <SkillsSection id="skills">
                <h2>Skills</h2>
                <SkillsGrid>
                    {Object.keys(skillsData).map((skill) => {
                        const currentBgColor = currentColors[skill];
                        const currentIndex = displayedImageIndices[skill] || 0;
						const skillName = getSkillName(skill, currentIndex);

                        return (
                            <SkillCard
                                key={skill}
                                data-skill={skill}
                                bgColor={currentBgColor}
                                onClick={() => handleTileClick(skill)}
                            >
                                {allLogos[skill].map((logo, index) => (
                                    <SkillImage
                                        key={index}
                                        src={logo.src}
                                        alt={`${skill} Logo ${index + 1}`}
                                        className={index === currentIndex ? "active" : "inactive"}
                                    />
                                ))}
								{skillName && (
                                    <SkillNameTile bgColor={currentBgColor}>
                                        {skillName}
                                    </SkillNameTile>
                                )}
                            </SkillCard>
                        );
                    })}
                </SkillsGrid>
            </SkillsSection>
        </Container>
    );
};

export default Skills;