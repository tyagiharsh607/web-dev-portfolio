import truthful from "../../../../public/image/Truthful Note.png";
import ecom from "../../../../public/image/E-com.png";
import coin from "../../../../public/image/Coin Ranking.png";
import gym from "../../../../public/image/Gym app.png";
import photon from "../../../../public/image/Photon.png";
import wordle from "../../../../public/image/Wordle.png";
import vote from "../../../../public/image/Vote Snap.png";
import chatApp from "../../../../public/image/Chat-app.png";
import chatpdf from "../../../../public/image/chatPdf.png";

const data = {
  bestProjects: [
    {
      id: 1,
      title: "ChatPDF",
      description:
        "ChatPDF enables users to upload PDF, TXT, or CSV files and engage in conversational AI interactions with their document contents. Features include intelligent document processing, semantic search with vector embeddings, contextual chat history, and a responsive mobile-first interface for seamless document communication.",
      deployedUrl: "https://chatpdf.harshtyagi.in/",
      githubUrl: "https://github.com/tyagiharsh607/chat-with-pdf",
      imgSrc: chatpdf,
      skills: [
        { id: 1, name: "React" },
        { id: 2, name: "FastAPI" },
        { id: 3, name: "Supabase" },
        { id: 4, name: "Qdrant" },
        { id: 5, name: "Google Gemini AI" },
      ],
    },
    {
      id: 2,
      title: "E Commerce",
      description:
        "Elevate your online shopping journey with this responsive full-stack project. Featuring Home, Shop, Cart, Payment, Customized Search, and Authentication. E-com delivers a user-friendly experience.",
      deployedUrl: "https://e-com-hk31.onrender.com/",
      githubUrl: "https://github.com/tyagiharsh607/e-com-full-stack",
      imgSrc: ecom,
      skills: [
        { id: 1, name: "React JS" },
        { id: 2, name: "Node JS" },
        { id: 3, name: "Express JS" },
        { id: 4, name: "MongoDB" },
      ],
    },
    {
      id: 3,
      title: "Truthful Note",
      description:
        "Truthful Note is a Next.js application that allows users to receive anonymous messages for various purposes such as product reviews, feedback, confessions, and more. The platform offers a flexible messaging experience with customizable acceptance settings and robust user authentication.",
      deployedUrl: "https://truthful-note.vercel.app",
      githubUrl: "https://github.com/tyagiharsh607/truthful-note",
      imgSrc: truthful,
      skills: [
        { id: 1, name: "Next JS" },
        { id: 2, name: "Next-Auth" },
        { id: 4, name: "MongoDB" },
      ],
    },
    {
      id: 4,
      title: "Full Stack Realtime Chat App",
      description:
        "Full Stack Realtime Chat App is a MERN-based application enabling instant messaging with Socket.io, secure JWT authentication, and an intuitive UI built with TailwindCSS and Daisy UI. It supports online user status, Zustand for state management, and real-time scalability.",
      deployedUrl: "https://chat-app-2qst.onrender.com",
      githubUrl: "https://github.com/tyagiharsh607/chat-app",
      imgSrc: chatApp,
      skills: [
        { id: 1, name: "MongoDB" },
        { id: 2, name: "Express.js" },
        { id: 3, name: "React.js" },
        { id: 4, name: "Node.js" },
        { id: 5, name: "Socket.io" },
        { id: 6, name: "Zustand" },
      ],
    },
    {
      id: 5,
      title: "Vote Snap",
      description:
        "Vote Snap lets users vote on images in real-time, providing instant feedback on popular choices. It offers an interactive platform for image-based voting, engaging users with dynamic results.",
      deployedUrl: "https://vote-snap.vercel.app/",
      githubUrl: "https://github.com/tyagiharsh607/vote-snap",
      imgSrc: vote,
      skills: [
        { id: 1, name: "Next JS" },
        { id: 2, name: "Node JS" },
        { id: 3, name: "Express JS" },
        { id: 4, name: "PostgresSQL" },
        { id: 5, name: "Redis" },
        { id: 6, name: "Socket.io" },
      ],
    },
    {
      id: 6,
      title: "Coin Ranking",
      description:
        "A web application that empowers users to access real-time information about various cryptocurrencies. The app offers features such as comparing cryptocurrency rankings, marketplace trends, assessing profit and loss data.",
      deployedUrl: "https://coin-ranking.vercel.app/",
      githubUrl: "https://github.com/tyagiharsh607/CoinRanking",
      imgSrc: coin,
      skills: [
        { id: 1, name: "React JS" },
        { id: 2, name: "API Integration" },
      ],
    },
    {
      id: 7,
      title: "MyFitness Gym App",
      description:
        "A dynamic Gym App which utilizes cutting-edge technologies. Integrated external APIs to fetch a diverse range of exercises, enabling users to access comprehensive workout routines.",
      deployedUrl: "https://gym-app-tawny.vercel.app/",
      githubUrl: "https://github.com/tyagiharsh607/gym-app",
      imgSrc: gym,
      skills: [
        { id: 1, name: "ReactJS" },
        { id: 2, name: "Redux" },
      ],
    },
    {
      id: 8,
      title: "Photon",
      description:
        "Discover stunning images with Photon. Using the Pexels API, Photon instantly fetches and displays high-quality photos when you search by keyword. Explore and enjoy a vast library of professional-grade images with ease.",
      deployedUrl: "https://photon-flame.vercel.app/",
      githubUrl: "https://github.com/tyagiharsh607/Photon",
      imgSrc: photon,
      skills: [
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" },
        { id: 3, name: "JavaScript" },
        { id: 4, name: "API Integration" },
      ],
    },
    {
      id: 9,
      title: "Wordle",
      description:
        "Wordle challenges players to guess a hidden word within six attempts. Each guess provides feedback on correct letters and their positions, incorrect letters, or letters not in the word, offering a fun and engaging word puzzle experience.",
      deployedUrl: "https://wordle-52e0e.web.app/",
      githubUrl: "https://github.com/tyagiharsh607/Wordle",
      imgSrc: wordle,
      skills: [
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" },
        { id: 3, name: "JavaScript" },
      ],
    },
  ],
};

export default data;
