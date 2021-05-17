import React from 'react';
import {Container} from 'react-bootstrap';
import Card from './Card';

const experiences = [
    {
        role: "Fullstack Developer",
        company: "Fourth Year Project, GradAdmissions",
        dateRange: "February 2021 - April 2021",
        points: [
            "Built GraphQL data fetchers in Java connected to DynamoDB to expose an API for managing professor and applicant " + 
            "fields",
            "Created a React web application in charge of authenticating with AWS Cognito, calling our GraphQL API, and uploading " +
            "applicant documents to S3",
            "Integrated high performing lottie animations into design for a more engaging user experience"
        ],
        links: ["https://main.d3qg8qn14f45no.amplifyapp.com/"],
        technologies: ["React", "GraphQL", "lottie", "Java", "AWS S3", "AWS Cognito", "AWS Lambda", "Amazon API Gateway", "AWS Amplify" ],
    },
    {
        role: "Fullstack Developer",
        company: "Fourth Year Project, SoAccessible",
        dateRange: "May 2020 - April 2021",
        points: [
            "Completed transfer learning on a baseline instance segmentation model trained on the COCO Dataset " + 
            "to recognize inaccessible curbs, accessible curbs, accessible pedestrian signals (APS), ramps and stairs",
            "Created Google Streetview parser to scrape 6000 images to create a " + 
            "dataset to train our computer vision model",
            "Trained deep learning model using Detectron2 and deployed containerized model to AWS Lambda with Amazon API Gateway",
            "Designed and implemented UI and frontend code for interacting with Google API's and displaying our " +
            "inferences on street view images along a route"
        ],
        links: ["https://www.soaccessible.com/"],
        technologies: ["Google Colab pro", "Python", "Detectron2", "Weights&biases", "AWS Lambda", "API Gateway", "Docker", "AWS Amplify" ],
    },
    {
        role: "Web Developer",
        company: "Runn8",
        dateRange: "April 2019 - Present",
        points: [
            "Designed and developed a website using Wix and Wix Code Javascript " + 
            "API’s for more advanced logic Wix does not provide out of the box",
            "Developed components and workflows for displaying/managing user registration, " +
            "bookings, products, page routing permissions",
            
        ],
        technologies: ["Javascript", "Wix Corvid"]
    },
    {
        role: "Software Engineer",
        company: "Phreesia",
        dateRange: "January 2019 - Present",
        points: [
            "Part of virtual visits ad hoc team that oversaw creating virtual patient " +
            "appointments for our 25 million patients when Covid-19 hit in a timeline of 1 month",
            "Containerized .NET Framework app in windows containers and .NET Core app (with MongoDB service) " +
            "in Linux containers to talk to existing services",
            "Created a patient check-in prototype using AWS Lambda and Alexa toolkit which would allow for " +
            " patients to check in using VUI and receive visual and audio information about their appointment",
            "Developed a prototype HL7 back end service to integrate with a new clinical partner system which " +
            "oversaw pulling demographics, insurance, billing information into the Phreesia system"
        ],
        technologies: ["C#", ".NET", "Typescript", "Angular","Docker", "React", "AWS Lambda", 
        "Alexa", "MongoDB"],
    },
    {
        role: "Sofware Developer",
        company: "Titus",
        dateRange: "May 2018 - August 2018",
        points: [
            "Took on the responsibility to create an installer and build definitions " + 
            "for a new product for pipeline management of continuous integration/deployment",
            "Built Rest API’s for integrating existing product cloud storage with a new cloud " + 
            "provider which lead to positive feedback from customers eager to continue using the product",
            "Built composing email functionality for the classification suite to be able to mark "+ 
            "the sensitivity of an email based on a recommended classification or manual classification",
        ],
        technologies: ["C#", ".NET", "Typescript", "Angular"],
    },
    {
        role: "Classroom Technology Support/Teaching Assistant",
        company: "Carleton University",
        dateRange: "September 2018 - December 2018",
        points: [
            "Troubleshooted classroom equipment to guarantee the professor could continue " + 
            "the lecture as soon as possible",
            "Confirmed students understood the classroom material by presenting the material " + 
            "in a digestible, practical manner to complement the theory",
            "Prepared important summary notes and topics of discussion to provide the best learning experience"
        ],
        technologies: [""],
    },
    {
        role: "Mobile Developer",
        company: "UOttawaHackathon, PackageHub",
        dateRange: "February 2020",
        points: [
            "Mobile app that facilitated people volunteering their homes to act as smaller " + 
            "post stations and receive payment per package held by mail carrier",
            "Wrote data access layer for MongoDB queries",
            "Designed clean, modular react native components and pages along with the page routing"
        ],
        technologies: ["React Native", "GCP", "MongoDB", "2nd Place"],
    }
];

const CardList = () => {
    return (
        <Container
            id="cardlist" 
            className="center-container"
        >
            <h1>
                Experience
            </h1>
            <section  className="card-list">
                {experiences.map(exp => <Card exp={exp}/>)} 
            </section>
        </Container>
    )
}

export default CardList;