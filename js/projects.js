


const projects = {

project1:{

title:"Boosting Healthcare Using Multimodal LLMs",

overview:"AI-powered healthcare platform that integrates medical reports, radiology images, clinical notes, patient symptoms, and physiological sensor data using Multimodal LLMs and Retrieval-Augmented Generation (RAG) to provide intelligent clinical decision support.",

features:[

"Multimodal medical report analysis",

"Radiology image understanding",

"AI-generated report summarization",

"Disease detection",

"Root cause analysis",

"Personalized health recommendations",

"Predictive health risk assessment",

"Retrieval-Augmented Generation (RAG)"

],

tech:[

"Python",
"Multimodal LLMs",
"RAG",
"Machine Learning",
"NLP",
"Medical Imaging",
"AI"

],

github:"https://github.com/NavyaReddy-1305/Boosting-HealthCare-using-Multimodal-LLM-s"

},

project2:{

title:"HealthSync AI",

overview:"HealthSync AI extends the healthcare platform with personalized patient memory, enabling context-aware healthcare assistance through intelligent analysis of medical reports, radiology images, symptoms, and patient history.",

features:[

"Personalized patient memory",

"Context-aware healthcare assistance",

"Medical report summarization",

"Radiology image interpretation",

"Disease detection",

"Health risk prediction",

"Clinical note understanding",

"RAG-powered medical responses"

],

tech:[

"Python",
"LLMs",
"RAG",
"NLP",
"Machine Learning",
"Medical Imaging"

],

// github:"#"

},

project3:{

title:"TripNavigator",

overview:"Multi-Agent AI travel planning platform that coordinates intelligent agents for destination selection, accommodation, transportation, itinerary generation, and budget optimization to deliver personalized travel experiences.",

features:[

"Multi-Agent AI",

"Personalized itinerary generation",

"Budget optimization",

"Destination recommendations",

"Hotel recommendations",

"Transportation planning",

"Explainable AI",

"Interactive travel planner"

],

tech:[

"Python",
"FastAPI",
"React",
"Groq API",
"LLMs",
"Streamlit",
"JavaScript"

],

github:"https://github.com/NavyaReddy-1305/trip-planner-pro"

}

};

/*========================*/

function openProject(id){

const p = projects[id];

document.getElementById("panelTitle").innerHTML = p.title;

document.getElementById("panelOverview").innerHTML = p.overview;

document.getElementById("panelGithub").href = p.github;

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

}