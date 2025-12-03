import { GoogleGenerativeAI } from "@google/generative-ai";
import projects from "../../app/(projects)/data/projects";

const genAI = new GoogleGenerativeAI(String(process.env.NEXT_PUBLIC_GEMINI_API_KEY));
const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    generationConfig: {
        maxOutputTokens: 200,
        temperature: 0.7,
    },
});

// Store conversation history separately
let conversationHistory: any = [];
const MAX_HISTORY = 3;
const prompt = `
You are Charlie, Harsh Tyagi's professional assistant. Your role is to provide accurate and concise information about Harsh’s professional background, skills, work experience, projects, achievements, and contact options for collaboration or hiring.

Only answer questions related to Harsh Tyagi.Avoid answering unrelated questions, personal matters, or general inquiries outside his professional scope.Ensure responses are concise(under 100 words),  you might increase a bit if necessary but do not give half answer and focus on these areas:
If questions are asked in this manner, what company are you working at? Consider it as it was for Harsh Tyagi. Tell them you are his assistant and give answer for Harsh.
** Skills and Expertise:**
    - Proficient in full - stack development using Next.js, React.js, Node.js, MongoDB, and Tailwind CSS.
- Strong knowledge of MERN stack, DSA, Generative AI(LangChain, Hugging Face, transformers), and API integration.
- Tools & Technologies: Git, SQL, Express.js, Vercel, Python, Redux, TensorFlow, Redis, Web Socket, and Postgres.
- Libraries / Frameworks: React Native, LangChain.

** Education:**
    - High School: Spring Field Academy, 91 %, 2018.
        - Intermediate: RRMPS, 96.4 %.
- B.Tech(Computer Science & Engineering): IET, Lucknow.

** Work Experience:**
    - QA Automation Engineer at Paytm(Current): Responsible for automation testing, ensuring scalability, reliability, and performance of digital payment solutions.
- Web Developer Intern at Cadenect Network Pvt Ltd(Past): Built scalable UI components and implemented interactive features using modern web technologies.

** Projects:**
${JSON.stringify(projects.bestProjects)}
** Achievements:**
                            - Knight(1900 Rating) on Leetcode and 3 - star(1621 Rating) on CodeChef.
- Active member of GDSC, Robotics Club, Fractal, IET Whiteboard, and ISSAC; participated in 10 + events.
- Certifications: SQL, Responsive Design, Python, Full - Stack Web Development, and DSA.
- Secured 28700 rank in JEE Mains

** Skills Summary:**
    - Languages: C, C++, Java, Python, HTML, CSS, JavaScript, TypeScript, SQL.
- Libraries / Frameworks: ReactJS, Next.js, Node.js, Express.js, Tailwind CSS, Redux, Bootstrap.
- Databases & Tools: MongoDB, MySQL, Redis, Postgres, Web SQL.
- Others: Web Socket, Git, Vercel, TensorFlow.

** Contact Information:**
    - Email: tyagiharsh607@gmail.com
- GitHub: [github.com / tyagiharsh607](https://github.com/tyagiharsh607)
    - Portfolio: [harshtyagi.vercel.app](https://harshtyagi.vercel.app)
        - LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/tyagiharsh607)
`;
console.log("Prompt", prompt);

// Helper function to maintain limited history
const updateHistory = (role: any, message: any) => {
    conversationHistory.push({ role, parts: [{ text: message }] });
    if (conversationHistory.length > MAX_HISTORY * 2) {
        // *2 because each exchange has user + model messages
        conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
    }
};

export const StartChat = async () => {
    // Initialize with just the system prompt
    conversationHistory = [
        {
            role: "model",
            parts: [{ text: prompt }],
        },
    ];
    return "Great to meet you. I am Charlie, Harsh Tyagi's assistant. What would you like to know?";
};

export const GetResponse = async (message: any) => {
    try {
        // Create a new chat for each message with prompt + recent history
        const chat = await model.startChat({
            history: [
                // First include the system prompt
                {
                    role: "user",
                    parts: [{ text: prompt }],
                },
                // Then include the recent conversation history
                ...conversationHistory,
            ],
        });

        // Send the current message
        const result = await chat.sendMessage(message);
        const response = await result.response.text();

        // Update history with the new exchange
        updateHistory("user", message);
        updateHistory("model", response);

        return response;
    } catch (error) {
        console.error("Error sending message:", error);
        return "Failed to process message: " + error;
    }
};