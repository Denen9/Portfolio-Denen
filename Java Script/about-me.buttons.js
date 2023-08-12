const btnSkills = document.getElementById("button-skills");
const btnSoftSkills = document.getElementById("button-soft-skills");
const btnEducation = document.getElementById("button-education");
const btnExperience = document.getElementById("button-experience");



const toggleActiveClass = (clickedButton)=>{

    [btnSkills, btnSoftSkills, btnEducation, btnExperience].forEach(button => {
        if (button === clickedButton){
            button.classList.add("activeButton");
        } else {
            button.classList.remove("activeButton");      
        }
    });
}



 btnSkills.addEventListener('click', ()=>{  

    toggleActiveClass(btnSkills);
    const aboutMeBoxList = document.querySelector(".about-me__boxlist");
    aboutMeBoxList.innerHTML = "";
    const line = document.createElement("div");
    const content = ` <div class="about-me__typelist">
    <h4 class="about-me__typelist-h4" data-h4-1>UX/UI</h4>
    <span class="about-me__typelist-span" data-span-1>Diseño de interfaces web/app.</span>
</div>
<div class="about-me__typelist">
    <h4 class="about-me__typelist-h4" data-h4-2>HTML y CSS</h4>
    <span class="about-me__typelist-span" data-span-2>Desarrollo de páginas web con HTML semántico y estilización con CSS.

    </span>
</div>
<div class="about-me__typelist">
    <h4 class="about-me__typelist-h4" data-h4-3>JavaScript</h4>
    <span class="about-me__typelist-span" data-span-3>Implementación de interacciones y dinamismo en interfaces con JavaScript.
    </span>
</div>
<div class="about-me__typelist">
    <h4 class="about-me__typelist-h4" data-h4-3>React</h4>
    <span class="about-me__typelist-span" data-span-3>Construcción de componentes reutilizables y gestión de estados en React.
    </span>
</div>
<div class="about-me__typelist">
    <h4 class="about-me__typelist-h4" data-h4-3>MySQL</h4>
    <span class="about-me__typelist-span" data-span-3>Gestión de bases de datos MySQL mediante consultas para obtener información específica.


    </span>
</div>
<div class="about-me__typelist">
    <h4 class="about-me__typelist-h4" data-h4-3>Python</h4>
    <span class="about-me__typelist-span" data-span-3>Utilización de Python para acceder a datos y presentarlos en interfaces web de manera dinámica, incluyendo la integración con MySQL.
    </span>
</div>`

    line.classList.add("about-me__list"),
    line.innerHTML = content;

    aboutMeBoxList.appendChild(line);

})

btnSoftSkills.addEventListener('click', ()=>{  

    toggleActiveClass(btnSoftSkills);
    const aboutMeBoxList = document.querySelector(".about-me__boxlist");
    aboutMeBoxList.innerHTML = "";
    const line = document.createElement("div");
    const content = ` <div class="about-me__typelist">
    <h4 class="about-me__typelist-h4" data-h4-1>Trabajo en Equipo</h4>
    <span class="about-me__typelist-span" data-span-1>Colaboro efectivamente con otros para alcanzar metas comunes y aprovechar las fortalezas individuales en un entorno colaborativo.</span>
</div>
<div class="about-me__typelist">
    <h4 class="about-me__typelist-h4" data-h4-2>Resolución de Problemas</h4>
    <span class="about-me__typelist-span" data-span-2>Expreso ideas de manera efectiva, tanto verbalmente como por escrito, para asegurarme de que la información se comparta y comprenda correctamente.
    </span>
</div>
<div class="about-me__typelist">
    <h4 class="about-me__typelist-h4" data-h4-3>Empatía</h4>
    <span class="about-me__typelist-span" data-span-3>Comprendo las perspectivas y emociones de los demás, lo que me permite relacionarme y colaborar de manera más efectiva en diversas situaciones.
    </span>
</div>
<div class="about-me__typelist">
    <h4 class="about-me__typelist-h4" data-h4-3>Gestión del Tiempo</h4>
    <span class="about-me__typelist-span" data-span-3>Organizo y priorizo tareas de manera eficiente para optimizar la productividad y cumplir con los plazos de manera efectiva.
    </span>
</div>
<div class="about-me__typelist">
    <h4 class="about-me__typelist-h4" data-h4-3>Adaptabilidad</h4>
    <span class="about-me__typelist-span" data-span-3>Me ajusto de manera flexible a los cambios y desafíos, aprendiendo y creciendo en nuevos entornos y situaciones.
    </span>
</div>
<div class="about-me__typelist">
    <h4 class="about-me__typelist-h4" data-h4-3>Comunicación Clara</h4>
    <span class="about-me__typelist-span" data-span-3>Expreso ideas de manera efectiva, tanto verbalmente como por escrito, para asegurarme de que la información se comparta y comprenda correctamente.
    </span>
</div>
<div class="about-me__typelist">
    <h4 class="about-me__typelist-h4" data-h4-3>Habilidad Interpersonal</h4>
    <span class="about-me__typelist-span" data-span-3>Cultivo relaciones positivas y construyo conexiones sólidas con colegas y equipos, fomentando un ambiente de trabajo armonioso.
    </span>
</div>
`

    line.classList.add("about-me__list"),
    line.innerHTML = content;

    aboutMeBoxList.appendChild(line);

})

btnExperience.addEventListener('click', ()=>{

    toggleActiveClass(btnExperience);

    const aboutMeBoxList = document.querySelector(".about-me__boxlist");

     aboutMeBoxList.innerHTML = "";

    const line = document.createElement("div");
    const content = `<div class="about-me__typelist">
    <h4 class="about-me__typelist-h4" data-h4-1>Freelance</h4>
    <span class="about-me__typelist-span" data-span-1>Proyectos personales desarrollados como freelance.</span>
</div>
<div class="about-me__typelist">
    <h4 class="about-me__typelist-h4" data-h4-2>Alura Cursos</h4>
    <span class="about-me__typelist-span" data-span-2>Proyectos desarrollados a través de cursos y formaciones.</span>
</div>`

    line.classList.add("about-me__list"),
    line.innerHTML = content;

    aboutMeBoxList.appendChild(line);

})

btnEducation.addEventListener('click', ()=>{

    toggleActiveClass(btnEducation);

    const aboutMeBoxList = document.querySelector(".about-me__boxlist");

     aboutMeBoxList.innerHTML = "";

    const line = document.createElement("div");
    const content = `<div class="about-me__typelist">
    <h4 class="about-me__typelist-h4" data-h4-1>Alura ONE Oracle Next Education</h4>
    <span class="about-me__typelist-span" data-span-1>Formación como Front End Developer a través de Alura Cursos financiado por Oracle, con sus respectivos certificados.</span>
</div>
<div class="about-me__typelist">
    <h4 class="about-me__typelist-h4" data-h4-2>Emprendimiento / Oracle + Alura</h4>
    <span class="about-me__typelist-span" data-span-2></span>Formacion en la que he aprendido a convertir ideas en negocios sólidos a través del método Lean Startup, como tambien crear planes de negocios efectivos, dominar el arte de las presentaciones impactantes y explorar el poderoso Business Model Canvas para impulsar un emprendimiento.
</div>
<div class="about-me__typelist">
    <h4 class="about-me__typelist-h4" data-h4-2>Business Agility / Oracle + Alura</h4>
    <span class="about-me__typelist-span" data-span-2></span>He obtenido un profundo entendimiento de la agilidad empresarial, desde los fundamentos hasta la adaptación en entornos corporativos, incluyendo el Manifiesto Ágil, flujos de trabajo y casos de éxito. He liderado transformaciones, promovido la autonomía y estoy listo para impulsar la agilidad en diversas áreas corporativas, dominando la organización de equipos y el papel crucial del Agile Coach en la adopción ágil.
</div>
<div class="about-me__typelist">
    <h4 class="about-me__typelist-h4" data-h4-2>Autodidactismo Profesional</h4>
    <span class="about-me__typelist-span" data-span-2>Adquisición de conocimientos y habilidades de manera independiente y autoestructurada, impulsada por la autogestión, la investigación y la dedicación a un enfoque de mejora continua en el campo del desarrollo web.</span>
</div>`

    line.classList.add("about-me__list"),
    line.innerHTML = content;

    aboutMeBoxList.appendChild(line);

})
