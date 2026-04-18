// Dark Mode
const toggleBtn = document.getElementById("themeToggle");

if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark-mode");
}

toggleBtn.addEventListener("click",()=>{
document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
localStorage.setItem("theme","dark");
}else{
localStorage.setItem("theme","light");
}
});

// Contact Form
const form=document.getElementById("contactForm");
const msg=document.getElementById("formMessage");

form.addEventListener("submit",(e)=>{
e.preventDefault();

const name=form.querySelector('input[type="text"]');
const email=form.querySelector('input[type="email"]');
const text=form.querySelector("textarea");

if(name.value.trim()==="" || email.value.trim()==="" || text.value.trim()===""){
msg.textContent="Please fill all fields.";
msg.style.color="red";
return;
}

if(!email.value.includes("@") || !email.value.includes(".")){
msg.textContent="Please enter valid email.";
msg.style.color="red";
return;
}

msg.textContent="Message sent successfully!";
msg.style.color="green";
});

// Filter Projects
function filterProjects(category){
const cards=document.querySelectorAll(".project-card[data-category]");
const noResults=document.getElementById("noResults");

let count=0;

cards.forEach(card=>{
if(category==="all" || card.dataset.category===category){
card.style.display="block";
count++;
}else{
card.style.display="none";
}
});

noResults.textContent = count===0 ? "No projects found." : "";
}

// Fade Animation
const elements=document.querySelectorAll(".fade-in");

window.addEventListener("scroll",()=>{
elements.forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight-100){
el.classList.add("show");
}
});
});

// GitHub API
let reposData=[];

fetch("https://api.github.com/users/anwar37x/repos")
.then(res=>res.json())
.then(data=>{
reposData=data;
displayRepos(reposData);
})
.catch(()=>{
document.getElementById("repoList").innerHTML=
"<p>Unable to load repositories.</p>";
});

function displayRepos(repos){
const repoList=document.getElementById("repoList");

repoList.innerHTML="";

repos.slice(0,6).forEach(repo=>{
repoList.innerHTML += `
<div class="project-card">
<h3>${repo.name}</h3>
<p>Updated: ${repo.updated_at.slice(0,10)}</p>
<a href="${repo.html_url}" target="_blank">View Repository</a>
</div>
`;
});
}

function sortReposAZ(){
reposData.sort((a,b)=>a.name.localeCompare(b.name));
displayRepos(reposData);
}

function sortReposZA(){
reposData.sort((a,b)=>b.name.localeCompare(a.name));
displayRepos(reposData);
}