


const projects = {


project1: {
    title: "Boosting Healthcare Using Multimodal LLMs",

    overview:
        "An AI-powered healthcare application that combines medical document processing, radiology image analysis, and Retrieval-Augmented Generation (RAG) to make medical information more accessible. The system processes healthcare documents, retrieves relevant information, generates concise medical summaries, and supports context-aware question answering using multimodal AI.",

    features: [
        "Medical document parsing and information extraction",
        "Radiology image analysis",
        "AI-powered medical report summarization",
        "Semantic retrieval of relevant medical information",
        "Context-aware healthcare question answering",
        "Retrieval-Augmented Generation (RAG)",
        "Multimodal medical information processing",
        "Clinical keyword retention evaluation"
    ],

    tech: [
        "Python",
        "Multimodal LLMs",
        "RAG",
        "LlamaParse",
        "Qdrant",
        "Nomic Embeddings",
        "NLP",
        "Machine Learning",
        "Medical Imaging",
        "Gradio"
    ],

    github:
        "https://github.com/NavyaReddy-1305/Boosting-HealthCare-using-Multimodal-LLM-s"
},



project2: {
  title: "HealthSync AI",

  overview:
    "HealthSync AI extends Boosting Healthcare Using Multimodal LLMs by integrating medical reports, radiology images, and physiological sensor data to build a unified, history-aware patient context. It combines multimodal AI, deep learning, and Retrieval-Augmented Generation (RAG) to support contextual medical information retrieval, report summarization, image interpretation, and personalized healthcare assistance.",

  features: [
    "Personalized patient memory",
    "Context-aware healthcare assistance",
    "Medical report processing and summarization",
    "Radiology image interpretation using multimodal AI",
    "Physiological sensor data analysis",
    "Temporal feature extraction using 1D CNN",
    "Clinical information retrieval",
    "RAG-powered medical question answering"
  ],

  tech: [
    "Python",
    "Multimodal LLMs",
    "RAG",
    "NLP",
    "Machine Learning",
    "Deep Learning",
    "BGE Embeddings",
    "Qdrant",
    "CLIP",
    "Qwen",
    "1D CNN",
    "Groq API"
  ]



// github:"#"

},


project3: {
    title: "TripNavigator",

    overview:
        "TripNavigator is an Agentic AI travel planning platform that coordinates specialized AI agents for destination discovery, accommodation recommendations, transportation planning, itinerary generation, and budget management. It uses user preferences and LLM-powered reasoning to create personalized travel plans through a unified planning workflow.",

    features: [
        "Multi-Agent AI orchestration",
        "Personalized travel itinerary generation",
        "Destination recommendations",
        "Accommodation recommendations",
        "Transportation planning",
        "Travel budget estimation and optimization",
        "Preference-based trip planning",
        "Explainable AI-generated recommendations"
    ],

    tech: [
        "Python",
        "React",
        "FastAPI",
        "Multi-Agent AI",
        "LLMs",
        "Groq API",
        "REST APIs",
        "JavaScript"
    ],

    github:
        "https://github.com/NavyaReddy-1305/trip-planner-pro"
},
};

/*========================*/

function openProject(id){

    const p = projects[id];

    document.getElementById("panelTitle").innerHTML = p.title;

    document.getElementById("panelOverview").innerHTML = p.overview;

    const githubBtn = document.getElementById("panelGithub");

    if(p.github){

        githubBtn.href = p.github;
        githubBtn.style.display = "inline-flex";

    }else{

        githubBtn.style.display = "none";

    }

    const featureList = document.getElementById("panelFeatures");

    featureList.innerHTML = "";

    p.features.forEach(f=>{

        featureList.innerHTML += `<li>${f}</li>`;

    });

    const tech = document.getElementById("panelTech");

    tech.innerHTML = "";

    p.tech.forEach(t=>{

        tech.innerHTML += `<span>${t}</span>`;

    });

    document.getElementById("projectOverlay").classList.add("show");

    document.getElementById("projectPanel").classList.add("show");

}
/*========================*/

function closeProject(){

    document.getElementById("projectOverlay").classList.remove("show");

    document.getElementById("projectPanel").classList.remove("show");

    document.getElementById("panelGithub").style.display = "inline-flex";

}