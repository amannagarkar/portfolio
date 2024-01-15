import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Machine Learning Engineer",
    position: "Frugal Innovation Hub - SCU",
    time: "Jun 2023 – Present",
    location: "Santa Clara, CA",
    description:
      "Developed multilingual chatbot with translation capabilities targeting Nigerian market to improve customer experience.\
       Leveraged Google Cloud Translation AI to build contextual translations between English and Yoruba driving 15% higher engagement.",
    tech: [
      "Python",
      "React Native",
      "GitHub",
      "PyTorch",
      "SQL",
    ],
  },
  {
    title: "Machine Learning Engineer Intern",
    position: "KLA",
    time: "Jun 2022 – Sep 2022",
    location: "Milpitas, CA",
    description:
      "Architected a ML system consisting of a question answering bot and a content-based case recommendation system.\
       Built ETL pipelines organizing and storing vector embeddings from input queries, to optimizing real-time data \
       processing workflows.",
    tech: [
      "Python",
      "PyTorch",
      "Airflow",
      "Snowflake",
      "GitHub",
      "Docker",
      "Kubernetes",
      "Pytorch, Gensim, NLTK",
      "BERTopic and LDA"
    ],
  },
  {
    title: "Full stack Data Scientist",
    position: "Vint Media",
    time: "Feb 2019 – Jul 2021",
    location: "Pune, India",
    description:
      "Leveraged customer transaction data to engineer a collaborative product recommendation system. \
      Presented lean proof of concepts using data-driven insights for business stakeholders. \
      Trained a churn prediction model for identifying high-risk customers. Managed customer data pipeline to enable low latency data delivery \
      for real-time recommendations.",
    tech: [
      "React",
      "Node.js",
      "Python",
      "SQL",
      "AWS",
      "Spark",
      "Postman",
      "GitHub",
      "Docker",
      "Kubernetes",
      "PyTorch",
    ],
  },
  {
    title: "Software Engineering Intern",
    position: "Accurate Risk Managers",
    time: "Jun 2018 – Sep 2018",
    location: "Pune, India",
    description:
      "Developed a logistic regression model in a cross for risk analysis of insurance claims using Keras, with an F1 score of 0.82. Evaluated and \
      fine-tuned model parameters, improving accuracy from 0.53 to 0.81 resulting in refined risk mitigation and a 30% increase in fraud detection rate.",
    tech: [
      "Python",
      "numpy, pandas, seaborn, scikit-learn",
      "Data processing",
      "Feature Recognition",
    ],
  },
];
