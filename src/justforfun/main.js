"use strict";
// // Define the ResumeData interface
// interface ResumeData {
//   name: string;
//   email: string;
//   phone: string;
//   address: string;
//   objective: string;
//   education: string;
//   skills: string;
//   experience: string;
//   references: string;
//   picture: File | null;
// }
function createForm() {
    const formContainer = document.createElement("div");
    formContainer.classList.add("container");
    const form = document.createElement("form");
    const fields = [
        { label: "Full Name", id: "name", type: "text", placeholder: "Enter your full name" },
        { label: "Email", id: "email", type: "email", placeholder: "Enter your email" },
        { label: "Phone", id: "phone", type: "tel", placeholder: "Enter your phone number" },
        { label: "Address", id: "address", type: "text", placeholder: "Enter your address" },
        { label: "Objective", id: "objective", type: "text", placeholder: "State your career objective" },
        { label: "Education", id: "education", type: "text", placeholder: "Mention your education details" },
        { label: "Experience", id: "experience", type: "text", placeholder: "Describe your experience" },
        { label: "References", id: "references", type: "text", placeholder: "Provide references" },
    ];
    fields.forEach(field => {
        const label = document.createElement("label");
        label.setAttribute("for", field.id);
        label.innerText = field.label;
        const input = document.createElement("input");
        input.id = field.id;
        input.type = field.type;
        input.placeholder = field.placeholder;
        form.appendChild(label);
        form.appendChild(input);
    });
    const pictureLabel = document.createElement("label");
    pictureLabel.innerText = "Upload Picture";
    form.appendChild(pictureLabel);
    const pictureInput = document.createElement("input");
    pictureInput.id = "picture";
    pictureInput.type = "file";
    pictureInput.accept = "image/*";
    form.appendChild(pictureInput);
    const skillsLabel = document.createElement("label");
    skillsLabel.innerText = "Skills (comma-separated)";
    form.appendChild(skillsLabel);
    const skillsInput = document.createElement("input");
    skillsInput.id = "skills";
    skillsInput.type = "text";
    skillsInput.placeholder = "e.g., Communication, JavaScript, Leadership";
    form.appendChild(skillsInput);
    const languagesLabel = document.createElement("label");
    languagesLabel.innerText = "Languages (comma-separated)";
    form.appendChild(languagesLabel);
    const languagesInput = document.createElement("input");
    languagesInput.id = "languages";
    languagesInput.type = "text";
    languagesInput.placeholder = "e.g., English, Spanish, French";
    form.appendChild(languagesInput);
    const generateButton = document.createElement("button");
    generateButton.type = "button";
    generateButton.innerText = "Generate Resume";
    generateButton.addEventListener("click", handleFormSubmit);
    form.appendChild(generateButton);
    formContainer.appendChild(form);
    const appContainer = document.getElementById("app");
    if (appContainer) {
        appContainer.appendChild(formContainer);
    }
    else {
        console.error("Container element with id 'app' not found.");
    }
}
function handleFormSubmit() {
    var _a;
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        objective: document.getElementById("objective").value,
        education: document.getElementById("education").value,
        skills: document.getElementById("skills").value.split(",").map(skill => skill.trim()),
        experience: document.getElementById("experience").value,
        references: document.getElementById("references").value,
        picture: ((_a = document.getElementById("picture").files) === null || _a === void 0 ? void 0 : _a[0]) || null,
        languages: document.getElementById("languages").value.split(",").map(language => language.trim())
    };
    generateResumePreview(formData);
}
function generateResumePreview(data) {
    const newWindow = window.open("", "_blank");
    if (!newWindow) {
        alert("Failed to open new window. Please allow popups for this site.");
        return;
    }
    // Create main container for the resume
    const container = document.createElement("div");
    container.className = "container";
    // Left column for profile, contact, skills, and languages
    const leftColumn = document.createElement("div");
    leftColumn.className = "left-column";
    if (data.picture) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(data.picture);
        img.alt = "Profile Picture";
        leftColumn.appendChild(img);
    }
    const contactInfo = document.createElement("div");
    contactInfo.className = "contact-info";
    const nameEl = document.createElement("h2");
    nameEl.innerText = data.name;
    contactInfo.appendChild(nameEl);
    contactInfo.appendChild(createParagraph(`Email: ${data.email}`));
    contactInfo.appendChild(createParagraph(`Phone: ${data.phone}`));
    contactInfo.appendChild(createParagraph(`Address: ${data.address}`));
    leftColumn.appendChild(contactInfo);
    const skillsSection = createListSection("Skills", data.skills);
    leftColumn.appendChild(skillsSection);
    const languagesSection = createListSection("Languages", data.languages);
    leftColumn.appendChild(languagesSection);
    // Right column for objective, education, experience, and references
    const rightColumn = document.createElement("div");
    rightColumn.className = "right-column";
    rightColumn.appendChild(createSection("Objective", data.objective));
    rightColumn.appendChild(createSection("Education", data.education));
    rightColumn.appendChild(createSection("Experience", data.experience));
    rightColumn.appendChild(createSection("References", data.references));
    container.appendChild(leftColumn);
    container.appendChild(rightColumn);
    newWindow.document.body.appendChild(container);
}
function createSection(title, content) {
    const section = document.createElement("div");
    section.className = "resume-section";
    const heading = document.createElement("h3");
    heading.innerText = title;
    section.appendChild(heading);
    const paragraph = document.createElement("p");
    paragraph.innerText = content;
    section.appendChild(paragraph);
    return section;
}
function createListSection(title, items) {
    const section = document.createElement("div");
    section.className = "resume-section";
    const heading = document.createElement("h3");
    heading.innerText = title;
    section.appendChild(heading);
    const list = document.createElement("ul");
    items.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerText = item;
        list.appendChild(listItem);
    });
    section.appendChild(list);
    return section;
}
function createParagraph(content) {
    const paragraph = document.createElement("p");
    paragraph.innerText = content;
    return paragraph;
}
document.addEventListener("DOMContentLoaded", createForm);
