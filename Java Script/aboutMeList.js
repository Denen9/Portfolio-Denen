const btnSkills = document.getElementById("button-skills");
const btnSoftSkills = document.getElementById("button-soft-skills");
const btnEducation = document.getElementById("button-education");
const btnExperience = document.getElementById("button-experience");
const aboutMeBoxList = document.querySelector(".about-me__boxlist");

//Funcion para determinar la lista activa
const toggleActiveClass = (clickedButton)=>{

    [btnSkills, btnSoftSkills, btnEducation, btnExperience].forEach(button => {
        if (button === clickedButton){
            button.classList.add("activeButton");
        } else {
            button.classList.remove("activeButton");      
        }
    });
}

const arraySkills = [
    { title: "UX-UI", text: "Diseño de interfaces web/app." },
    { title: "HTML y CSS", text: "Desarrollo de páginas web con HTML semántico y estilización con CSS." },
    { title: "JavaScript", text: "Implementación de interacciones y dinamismo en interfaces con JavaScript." },
    { title: "React", text: "Construcción de componentes reutilizables y gestión de estados en React." }
];

const arraySoftSkills = [
    { title: "Trabajo en Equipo", text: "Colaboro efectivamente con otros para alcanzar metas comunes y aprovechar las fortalezas individuales en un entorno colaborativo." },
    { title: "Resolución de Problemas", text: "Expreso ideas de manera efectiva, tanto verbalmente como por escrito, para asegurarme de que la información se comparta y comprenda correctamente." },
    { title: "Empatía", text: "Comprendo las perspectivas y emociones de los demás, lo que me permite relacionarme y colaborar de manera más efectiva en diversas situaciones." },
    { title: "Gestión del Tiempo", text: "Organizo y priorizo tareas de manera eficiente para optimizar la productividad y cumplir con los plazos de manera efectiva." },
    { title: "Adaptabilidad", text: "Me ajusto de manera flexible a los cambios y desafíos, aprendiendo y creciendo en nuevos entornos y situaciones." },
    { title: "Comunicación Clara", text: "Expreso ideas de manera efectiva, tanto verbalmente como por escrito, para asegurarme de que la información se comparta y comprenda correctamente." },
    { title: "Habilidad Interpersonal", text: "Cultivo relaciones positivas y construyo conexiones sólidas con colegas y equipos, fomentando un ambiente de trabajo armonioso." }
];

const arrayExperience = [
    { title: "Freelance", text: "Proyectos personales desarrollados como freelance." },
    { title: "Alura Cursos", text: "Proyectos desarrollados a través de cursos y formaciones." }
];

const arrayEducation = [
    { title: "Alura ONE Oracle Next Education", text: "Formación como Front End Developer a través de Alura Cursos financiado por Oracle, con sus respectivos certificados." },
    { title: "Emprendimiento / Oracle + Alura", text: "Formación en la que he aprendido a convertir ideas en negocios sólidos a través del método Lean Startup, como también crear planes de negocios efectivos, dominar el arte de las presentaciones impactantes y explorar el poderoso Business Model Canvas para impulsar un emprendimiento." },
    { title: "Business Agility / Oracle + Alura", text: "He obtenido un profundo entendimiento de la agilidad empresarial, desde los fundamentos hasta la adaptación en entornos corporativos, incluyendo el Manifiesto Ágil, flujos de trabajo y casos de éxito. He liderado transformaciones, promovido la autonomía y estoy listo para impulsar la agilidad en diversas áreas corporativas, dominando la organización de equipos y el papel crucial del Agile Coach en la adopción ágil." },
    { title: "Autodidactismo Profesional", text: "Adquisición de conocimientos y habilidades de manera independiente y autoestructurada, impulsada por la autogestión, la investigación y la dedicación a un enfoque de mejora continua en el campo del desarrollo web." }
];

//Funcion para crear la lista
const createList = (array)=>{

    const line = document.createElement("div");
    array.forEach(item => {
        const divElement = document.createElement("div")
        const h4Element = document.createElement("h4")
        const spanElement = document.createElement("span")


        divElement.classList.add("about-me__typelist")
        h4Element.classList.add("about-me__typelist-h4")
        spanElement.classList.add("about-me__typelist-span")

        h4Element.textContent = item.title;
        spanElement.textContent = item.text;
        
        divElement.appendChild(h4Element);
        divElement.appendChild(spanElement); 

        line.appendChild(divElement);
        aboutMeBoxList.appendChild(line)
    });
}

 btnSkills.addEventListener('click', ()=>{  

    toggleActiveClass(btnSkills);
    aboutMeBoxList.innerHTML = "";
    createList(arraySkills)

})

btnSoftSkills.addEventListener('click', ()=>{ 
     
    toggleActiveClass(btnSoftSkills);
    aboutMeBoxList.innerHTML = "";
    createList(arraySoftSkills);
})

btnExperience.addEventListener('click', ()=>{
    toggleActiveClass(btnExperience);
    aboutMeBoxList.innerHTML = "";
    createList(arrayExperience);

})

btnEducation.addEventListener('click', ()=>{
    toggleActiveClass(btnEducation);
    aboutMeBoxList.innerHTML = "";
    createList(arrayEducation);
  
})
