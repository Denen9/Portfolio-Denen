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
    <h4 class="about-me__typelist-h4" data-h4-1>Hola</h4>
    <span class="about-me__typelist-span" data-span-1>Diseño de interfaces web/app </span>
</div>
<div class="about-me__typelist">
    <h4 class="about-me__typelist-h4" data-h4-2>UX/UI</h4>
    <span class="about-me__typelist-span" data-span-2>Diseño de interfaces web/app </span>
</div>
<div class="about-me__typelist">
    <h4 class="about-me__typelist-h4" data-h4-3>UX/UI</h4>
    <span class="about-me__typelist-span" data-span-3>Diseño de interfaces web/app </span>
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
    <h4 class="about-me__typelist-h4" data-h4-1>Como</h4>
    <span class="about-me__typelist-span" data-span-1>Diseño de interfaces web/app </span>
</div>
<div class="about-me__typelist">
    <h4 class="about-me__typelist-h4" data-h4-2>UX/UI</h4>
    <span class="about-me__typelist-span" data-span-2>Diseño de interfaces web/app </span>
</div>
<div class="about-me__typelist">
    <h4 class="about-me__typelist-h4" data-h4-3>UX/UI</h4>
    <span class="about-me__typelist-span" data-span-3>Diseño de interfaces web/app </span>
</div>`

    line.classList.add("about-me__list"),
    line.innerHTML = content;

    aboutMeBoxList.appendChild(line);

})
