import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Select Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Waiterless Restaurant System",
    imgSrc: "/project-imgs/waiterless-restaurant.png",
    code: "https://www.github.com",
    projectLink: "https://example-link.com/",
    tech: ["Java", "Google Cloud Platform", "SQLite", "MongoDB"],
    description:
    "Architected a full stack application with a conversational agent using REST APIs for a virtual assistant with speech-to-text and name entity recognition abilities. Built backend infrastructure using SQLite and MongoDB for optimal performance and scalability.",
    modalContent: (
    <>
    <p>
    Architected a full stack application with a conversational agent using REST APIs for a virtual assistant with speech-to-text and name entity recognition abilities.
    </p>
    <p>
    Built backend infrastructure using SQLite and MongoDB for optimal performance and scalability.
    </p>
    </>
    ),
    },
  {  
    title: "Startup Success Prediction",
    imgSrc: "/project-imgs/startup-prediction.png",
    code: "https://www.github.com/amannagarkar",
    projectLink: "Coming Soon",
    tech: ["Python", "Keras", "MLlib", "Hadoop", "Spark"],
    description:
    "Used random forest regression to predict success of a startup based on Funding data.",
    modalContent: (
    <>
    <p>
    Acquired seed funding data for 500+ startups, engineered features using Hadoop and Spark MLlib.
    </p>
    <p>
    Preprocessed fundraising data and fine-tuned decision tree hyperparameters, achieving 87% accuracy in predicting startup success.
    </p>
    </>
    ),
    },
  {
    title: "Question Answering System with RAG Architecture",
    imgSrc: "/project-imgs/question-answering.png",
    code: "https://www.github.com",
    projectLink: "",
    tech: ["Python", "Llama2", "Langchain", "ChromaDB"],
    description:
    "A question answering system using a RAG, Llama 2.0, ChromaDB, and Langchain",
    modalContent: (
    <>
    <p>
    Engineered a question answering system with 85% accuracy using a RAG architecture composed of Llama 2.0, ChromaDB, and Langchain.
    </p>
    <p>
    Enabled accurate answers for questions about unknown information by retrieving relevant documents for context.
    </p>
    </>
    ),
    },
    {
      title: "Optimal Control with Linear Function Approximation",
      imgSrc: "/project-imgs/optimal-control.png",
      code: "https://www.github.com",
      projectLink: "https://example-link.com/",
      tech: ["Python", "PyGame", "Reinforcement Learning"],
      description:
      "Linear function approximation for CartPole, MountainCar, and LunarLander environments.",
      modalContent: (
      <>
      <p>
      Implemented and compared three optimal control strategies using linear function approximation for CartPole, MountainCar, and LunarLander environments.
      </p>
      <p>
      Utilized different methods for encoding states, including state aggregation, radial basis functions, and polynomial or Fourier basis.
      </p>
      </>
      ),
      },
      {
        title: "Bringing Old Photos Back to Life",
        imgSrc: "/project-imgs/photo-restoration.png",
        code: "https://www.github.com",
        projectLink: "https://example-link.com/",
        tech: ["Python", "CycleGAN", "Variational Auto-Encoder", "Scikit-Learn"],
        description:
        "Restoration of old images utilizing CycleGAN and VAEs for image inpainting.",
        modalContent: (
        <>
        <p>
        Executed restoration of old images utilizing CycleGAN and VAEs for image inpainting in Python.
        </p>
        <p>
        Restored 300 degraded images, achieving 92% accuracy in restoration quantified using MSE, SSIM, and PSNR metrics for aged photos.
        </p>
        </>
        ),
        },
        {
          title: "Financial Data Analysis and Prediction",
          imgSrc: "/project-imgs/financial-analysis.png",
          code: "https://www.github.com",
          projectLink: "https://example-link.com/",
          tech: ["Go", "Python", "Keras", "TensorFlow"],
          description:
          "A distributed pub-sub system for time-series forecasting of stock prices.",
          modalContent: (
          <>
          <p>
          Engineered a distributed pub-sub system to handle real-time financial data streams using Go.
          </p>
          <p>
          Built a robust LSTM model in Python for accurate time-series forecasting of stock prices, achieving an accuracy rate of 65%.
          </p>
          <p>
          Developed a user-friendly dashboard to visualize the predicted stock prices, providing insights for decision-making and strategies.
          </p>
          <p>
          Used AmazonSQS and Amazon Lambda to notify users if stock prices were predicted to go below a certain pirce.
          </p>
          </>
          ),
          }
];
