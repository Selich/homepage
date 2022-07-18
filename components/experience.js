import { Box, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

const Experience = () => {
  return data.map((item, index) => (
    <Box my={6} key={index}>
      <NextLink href={item.url} passHref>
        <Text cursor={"pointer"} fontWidth="bold" fontSize='3xl'>{item.organization}</Text>
      </NextLink>
      <Text fontSize='2xl'>Job Title: {item.jobTitle}</Text>
      <Text fontSize='2xl'>Location: {item.location}</Text>
      <br/>
      {item.description.map((desc, index) => (
        <Text key={index} fontSize='1xl' fontWeight={600}>{desc}</Text>
      ))}
    </Box>
  ))
}

export default Experience

const data = [
    {
        "url": "https://test.twinu.com/home",
        "jobTitle": "Sofware Developer",
        "organization": "Twinu",
        "location": "Munich, Germany",
        "date": "Mar. 2022 - Ongoing",
        "description": [
            "Twinu is a startup that provides a platform for the exchange of digital assets.",
            "Responsible for marketplace smart contracts required for minting and buying non-fungible tokens.",
            "Worked on web3 on-boarding integration on the React front-end application.",
            "Write server side code in Typescript using Nest.js."
        ]
    },
    // {
    //     "url": "https://www.kitro.ch/",
    //     "jobTitle": "Sofware Developer",
    //     "organization": "KITRO",
    //     "location": "Zurich, Switzerland",
    //     "date": "Jan. 2021 - Sep. 2021",
    //     "description": [
    //         "Full-stack developer in a smart waste management startup.",
    //         "Involved in creation of an ETL pipeline for the training of a computer vision model.",
    //         "Developed an app that creates an WiFi access point and connects smart weighing devices to the users mobile devices.",
    //         "Created microservices that were deployed on AWS."
    //     ]
    // },
    {
        "url": "https://www.lambdaworks.io/",
        "jobTitle": "Haskell Developer Intern",
        "organization": "LambdaWorks",
        "location": "Novi Sad, Serbia",
        "date": "Feb. 2020 - May. 2020",
        "description": [
            "Involved in development of a chat-bot agent, Lambert using Haskell.",
            "Developed a library to integrate Lambert into a third party software, Slack.",
            "Handled the process of deploying on AWS Cloud Computing services.",
            "Configured AWS X-Ray tool for tracing and analyzing Serverless applications."
        ]
    },
    {
        "url": "https://www.typhoon-hil.com/",
        "jobTitle": "Machine Learning Intern",
        "organization": "Typhoon HIL, Inc.",
        "location": "Novi Sad, Serbia",
        "date": "Apr. 2019 - Dec. 2019",
        "description": [
            "Implemented mathematical models for the purpose of simulating energy consumption in a given household.",
            "Included in development of Reinforcement Learning based model for generating an optimal energy consumption strategy in a smart home system.",
            "Built a machine learning web-hosted framework for a data science Kaggle-style hackathon.",
            "Deployed and maintained a containerized real time machine learning model on a cloud system."
        ]
    }
]
