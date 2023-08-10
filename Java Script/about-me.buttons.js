const btnSkills = document.getElementById("button-skills");
const btnEducation = document.getElementById("button-education");
const btnExperience = document.getElementById("button-experience");


btnSkills.addEventListener('click', ()=>{


    const aboutMeBoxList = document.querySelector(".about-me__boxlist");
    aboutMeBoxList.innerHTML = "";
    const line = document.createElement("div");
    const content = ` <div class="about-me__typelist">
    <h4 class="about-me__typelist-h4" data-h4-1>UX/UI</h4>
    <span class="about-me__typelist-span" data-span-1>Diseño de interfaces web/app</span>
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

btnExperience.addEventListener('click', ()=>{

    
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

    
    const aboutMeBoxList = document.querySelector(".about-me__boxlist");

     aboutMeBoxList.innerHTML = "";

    const line = document.createElement("div");
    const content = `<div class="about-me__typelist">
    <h4 class="about-me__typelist-h4" data-h4-1>Alura ONE Oracle Next Education</h4>
    <span class="about-me__typelist-span" data-span-1>Formación como Front End Developer a través de Alura Cursos financiado por Oracle, con sus respectivos certificados.</span>
</div>
<div class="about-me__typelist">
    <h4 class="about-me__typelist-h4" data-h4-2>Autodidactismo Profesional</h4>
    <span class="about-me__typelist-span" data-span-2>Adquisición de conocimientos y habilidades de manera independiente y autoestructurada, impulsada por la autogestión, la investigación y la dedicación a un enfoque de mejora continua en el campo del desarrollo web.</span>
</div>`

    line.classList.add("about-me__list"),
    line.innerHTML = content;

    aboutMeBoxList.appendChild(line);

})
