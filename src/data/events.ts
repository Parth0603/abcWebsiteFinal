import blockathonImg from "@/assets/images/blockathon.png";
import hashedImg from "@/assets/images/hashed.png";
import web3waveImg from "@/assets/images/web3wave.png";
import web3verseImg from "@/assets/images/web3verse.png";
import aroundtheblockImg from "@/assets/images/aroundtheblock.png";
import blockworksImg from "@/assets/images/blockworksworkshop.png";
import graphicsImg from "@/assets/images/workshipGraphicsDesigning.png";
import meetupImg from "@/assets/meetup.jpg";
import workshopImg from "@/assets/workshop.jpg";

export const eventDetails: Record<string, any> = {
  "Block-A-Thon": {
    title: "Block-A-Thon 2024",
    type: "Hackathon",
    organizedBy: "Department of Information Technology, Acropolis Institute of Technology and Research, in collaboration with Acropolis Blockchain Club and Systango.",
    date: "16-17 December 2024",
    location: "IT Department, AITR Indore",
    img: blockathonImg,
    overview: "Block-A-Thon was a blockchain-focused hackathon designed to encourage students to explore decentralized technologies through practical problem solving, collaboration, and innovation. The event brought together students interested in blockchain development, Web3 applications, and emerging technologies.",
    highlights: [
      "54 participating teams",
      "198 student participants",
      "Technical screening rounds",
      "Blockchain problem-solving sessions",
      "Industry interaction",
      "Mentorship support",
      "Technical judging rounds",
      "Community networking"
    ],
    speakers: [
      "Anshuman Sir, Head of Engagement at Systango",
      "Lokesh Maheshwari Sir, Senior Blockchain Developer",
      "Rupesh Singh Rathore Sir, Senior Blockchain Developer",
      "Alumni panel discussions and mentorship sessions"
    ],
    impact: "The event became one of the largest blockchain-focused student technical activities conducted within the institution and helped students gain exposure to real-world blockchain ecosystems and development workflows."
  },
  "Hashed! Genesis Ceremony": {
    title: "Hashed! The Genesis Ceremony",
    type: "Community Event / Speaker Session",
    organizedBy: "Acropolis Blockchain Club",
    sponsors: ["Qoneqt", "AlertCode", "ESP Softtech", "Mr Mint"],
    date: "14 November 2024",
    location: "Central Auditorium, AITR Indore",
    img: hashedImg,
    overview: "Hashed! The Genesis Ceremony was a large-scale Web3-focused community event organized to bring students, developers, founders, and industry professionals together for discussions around blockchain innovation, entrepreneurship, and ecosystem growth.",
    speakers: ["Rahul Bhadoriya", "Charchit Jain"],
    focus: ["Web3 ecosystem discussions", "Startup and founder insights", "Blockchain industry exposure", "Community networking", "Technical ecosystem awareness"],
    highlights: ["Speaker sessions", "Sponsor collaborations", "Community interaction", "Web3 networking opportunities", "Large student participation"],
    impact: "The event strengthened the club’s ecosystem presence and created stronger engagement between students and industry professionals."
  },
  "Web3 Wave": {
    title: "The Web3 Wave",
    type: "Hands-on Workshop",
    presentedBy: "Metaschool in collaboration with Acropolis Blockchain Club and Central DAO",
    date: "14 March 2024",
    location: "Lab 17, CSE Department, AITR Indore",
    img: web3waveImg,
    overview: "The Web3 Wave was a practical workshop designed to introduce students to blockchain development and Web3 technologies through interactive learning sessions and technical demonstrations.",
    topics: ["Blockchain fundamentals", "NFT smart contracts", "Web3 development concepts", "Decentralized applications", "Introduction to smart contract workflows"],
    highlights: ["Hands-on learning", "Interactive technical sessions", "Merchandise and goodies", "Beginner-friendly onboarding", "Community participation"],
    impact: "The workshop helped students gain practical exposure to blockchain development and encouraged participation in Web3 ecosystems."
  },
  "Web3 Verse": {
    title: "Web3 Verse",
    type: "Blockchain Workshop",
    organizedBy: "Acropolis Blockchain Club in collaboration with IEEE Computational Intelligence Society",
    date: "9 October 2023",
    location: "Lab 285, IT Department",
    img: web3verseImg,
    overview: "Web3 Verse was a full-day blockchain workshop focused on introducing students to blockchain architecture, decentralized applications, and practical Web3 concepts.",
    topics: ["Introduction to blockchain", "Cryptography basics", "Decentralized applications", "Smart contract concepts", "Blockchain architecture"],
    highlights: ["Full-day workshop", "Interactive technical learning", "Quiz sessions", "Practical demonstrations", "Student networking"],
    impact: "The event helped students understand blockchain technology from a practical perspective and increased community engagement within the Web3 learning ecosystem."
  },
  "Around the Block with Mr. Kartikey": {
    title: "Around the Block with Mr. Kartikey",
    type: "Webinar / Technical Session",
    organizedBy: "Acropolis Blockchain Club in collaboration with IDS Bharat Blockchain Network",
    date: "10 March 2023",
    time: "7:00 PM - 8:00 PM",
    img: aroundtheblockImg,
    overview: "A technical webinar discussing private and public blockchain use cases, ecosystem applications, and blockchain implementation concepts.",
    speaker: "Kartikey, Community Lead at Hyperledger Hyderabad",
    topics: ["Private blockchain systems", "Public blockchain systems", "Blockchain use cases", "Enterprise blockchain applications", "Decentralized technology adoption"],
    highlights: ["Online technical session", "Blockchain ecosystem exposure", "Interactive discussion", "Beginner-friendly explanations"],
    impact: "The webinar introduced students to real-world blockchain applications and enterprise blockchain concepts."
  },
  "BlockWorks Workshop": {
    title: "BlockWorks",
    type: "Blockchain Fundamentals Workshop",
    organizedBy: "Acropolis Blockchain Club",
    date: "18-19 April 2024",
    location: "Lab 121, CSE Department",
    img: blockworksImg,
    overview: "BlockWorks was a beginner-focused blockchain workshop aimed at helping students understand the fundamentals of blockchain technology and decentralized systems.",
    topics: ["Blockchain basics", "Decentralization concepts", "Smart contract introduction", "Web3 ecosystem overview", "Practical blockchain understanding"],
    highlights: ["Two-day workshop", "Beginner-friendly learning environment", "Interactive sessions", "Technical discussions", "Community engagement"],
    coordinators: ["Arpit Gupta", "Nidhi Bhagat"],
    impact: "The workshop created a strong onboarding experience for students entering the blockchain and Web3 ecosystem for the first time."
  },
  "Speaker Session: High Paying Jobs in Recession": {
    title: "Speaker Session on High Paying Jobs in Recession",
    type: "Career & Industry Session",
    organizedBy: "Department of Computer Science & Engineering in association with IEEE Computer Society and Acropolis Blockchain Club",
    date: "20 February 2024",
    time: "2:00 PM - 3:30 PM",
    location: "Lab 116, CSE Department",
    img: meetupImg,
    speakers: ["Priyanka Manjariya, HR Head at Metafic", "Swapnil Thakur, Senior Talent Acquisition Expert at Metafic"],
    overview: "This speaker session focused on career growth, industry expectations, hiring strategies, and professional development during challenging economic conditions.",
    topics: ["Career growth strategies", "Hiring trends", "Resume and interview preparation", "Industry expectations", "Professional development guidance"],
    highlights: ["Industry expert interaction", "Career guidance", "Student Q&A", "Networking opportunities"],
    impact: "The session helped students understand industry hiring expectations and career development strategies."
  },
  "Solana Ecosystem Call": {
    title: "Solana Ecosystem Call Meetup",
    type: "Community Meetup",
    organizedBy: "Acropolis Blockchain Club",
    location: "Monroe Cafe, Indore",
    img: meetupImg,
    overview: "A blockchain networking and ecosystem meetup focused on the Solana ecosystem, developer opportunities, community collaboration, and ecosystem discussions.",
    topics: ["Solana ecosystem overview", "Superteam discussions", "Real-world assets", "Ecosystem opportunities", "Getting started in Web3", "Community networking"],
    highlights: ["Offline networking", "Community interaction", "Ecosystem awareness", "Student discussions", "Collaborative learning environment"],
    impact: "The meetup helped strengthen local blockchain community connections and encouraged ecosystem participation among students."
  },
  "Graphics Designing for Web3": {
    title: "Graphics Designing for Web3",
    type: "Workshop",
    organizedBy: "Acropolis Blockchain Club",
    date: "Mar 2024",
    location: "Online / Campus",
    img: graphicsImg,
    overview: "A creative session exploring visual identity, design principles, and graphics for the decentralized web.",
    highlights: ["Creative session", "Visual identity", "Design principles"],
    impact: "Explored graphics for the decentralized web."
  },
  "Metaschool Collaboration Events": {
    title: "Metaschool Collaboration Events",
    type: "Collaboration",
    organizedBy: "Acropolis Blockchain Club in collaboration with Metaschool",
    date: "Recurring",
    img: workshopImg,
    overview: "A series of programs run in collaboration with Metaschool to introduce students to practical Web3 building.",
    highlights: ["Practical building", "Ecosystem introduction"],
    impact: "Introduced students to practical Web3 building."
  }
};
