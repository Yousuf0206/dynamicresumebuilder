"use strict";
// Create and display the form
function createForm() {
    const formContainer = document.createElement("div");
    formContainer.classList.add("container");
    const title = document.createElement("h1");
    title.innerText = "Professional Resume Builder";
    const form = document.createElement("form");
    const fields = [
        { label: "Full Name", id: "name", type: "text", placeholder: "Enter your full name" },
        { label: "Email", id: "email", type: "email", placeholder: "Enter your email" },
        { label: "Phone Number", id: "phone", type: "tel", placeholder: "Enter your phone number" },
        { label: "Address", id: "address", type: "text", placeholder: "Enter your address" },
        { label: "Objective", id: "objective", type: "text", placeholder: "State your career objective" },
        { label: "Education", id: "education", type: "text", placeholder: "Mention your education details" },
        { label: "Skills", id: "skills", type: "text", placeholder: "Enter your skills (comma separated)" },
        { label: "Experience", id: "experience", type: "text", placeholder: "Describe your experience" },
        { label: "References", id: "references", type: "text", placeholder: "Provide references" },
    ];
    fields.forEach((field) => {
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
    const generateButton = document.createElement("button");
    generateButton.type = "button";
    generateButton.innerText = "Generate Resume";
    generateButton.addEventListener("click", handleFormSubmit);
    form.appendChild(generateButton);
    formContainer.appendChild(title);
    formContainer.appendChild(form);
    const appContainer = document.getElementById("app");
    if (appContainer) {
        appContainer.appendChild(formContainer);
    }
    else {
        console.error("Container element with id 'app' not found.");
    }
}
// Handle form submission
function handleFormSubmit() {
    var _a;
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        objective: document.getElementById("objective").value,
        education: document.getElementById("education").value,
        skills: document.getElementById("skills").value,
        experience: document.getElementById("experience").value,
        references: document.getElementById("references").value,
        picture: ((_a = document.getElementById("picture").files) === null || _a === void 0 ? void 0 : _a[0]) || null
    };
    generateResumePreview(formData);
}
// Generate and preview resume
function generateResumePreview(data) {
    const newWindow = window.open("", "_blank");
    if (!newWindow) {
        alert("Failed to open new window. Please allow popups for this site.");
        return;
    }
    const resumeContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Resume Preview</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 20px;
            }
            .resume-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 2px solid #007bff;
                padding-bottom: 10px;
                margin-bottom: 20px;
            }
            .resume-header h2 {
                margin: 0;
                font-size: 30px;
                font-weight: bold;
            }
            .resume-header img {
                width: 120px;
                height: 120px;
                object-fit: cover;
                border-radius: 50%;
                border: 2px solid #007bff;
            }
            .contact-info {
                margin-top: 10px;
            }
            .contact-info p {
                margin: 0;
                font-size: 14px;
            }
            .contact-info a {
                text-decoration: none;
                color: #007bff;
            }
            .contact-info a:hover {
                text-decoration: underline;
            }
            .resume-section {
                margin-top: 20px;
            }
            .resume-section h3 {
                margin-bottom: 10px;
                font-size: 20px;
                font-weight: bold;
                color: #007bff;
                border-bottom: 2px solid #007bff;
            }
            .resume-section p {
                margin: 5px 0;
                font-size: 16px;
                line-height: 1.6;
            }
            .print-btn, .share-btn, .edit-btn {
                background-color: #28a745;
                color: white;
                padding: 10px 20px;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                margin-top: 20px;
                font-size: 16px;
                text-align: center;
                display: block;
                width: 200px;
                margin: 10px auto;
            }
            .print-btn:hover, .share-btn:hover, .edit-btn:hover {
                background-color: #218838;
            }
        </style>
    </head>
    <body>
        <div class="resume-header">
            <h2>${data.name}</h2>
            ${data.picture ? `<img src="${URL.createObjectURL(data.picture)}" alt="Profile Picture">` : ""}
        </div>
        <div class="contact-info">
            <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Address:</strong> ${data.address}</p>
        </div>
        <div class="resume-section">
            <h3>Objective</h3>
            <p>${data.objective}</p>
        </div>
        <div class="resume-section">
            <h3>Education</h3>
            <p>${data.education}</p>
        </div>
        <div class="resume-section">
            <h3>Skills</h3>
            <p>${data.skills}</p>
        </div>
        <div class="resume-section">
            <h3>Experience</h3>
            <p>${data.experience}</p>
        </div>
        <div class="resume-section">
            <h3>References</h3>
            <p>${data.references}</p>
        </div>
        <button class="print-btn" onclick="window.print()">Print Resume</button>
        <button class="share-btn" onclick="shareResume()">Share Resume</button>
        <button class="edit-btn" onclick="window.close()">Edit Resume</button>
    </body>
    <script>
      function shareResume() {
        const subject = encodeURIComponent("Check out my resume!");
        const body = encodeURIComponent(\`Hello,

I wanted to share my resume with you. Please check it out:

${window.location.href}

Best regards,\`);

        window.location.href = \`mailto:?subject=${null}&body=${null}\`;
      }
    </script>
    </html>
  `;
    newWindow.document.open();
    newWindow.document.write(resumeContent);
    newWindow.document.close();
}
// Initialize the form on page load
document.addEventListener("DOMContentLoaded", createForm);
