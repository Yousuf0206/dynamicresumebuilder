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

// // Create and display the form
// function createForm() {
//   const formContainer = document.createElement("div");
//   formContainer.classList.add("container");

//   const title = document.createElement("h1");
//   title.innerText = "Professional Resume Builder";

//   const form = document.createElement("form");

//   const fields = [
//     { label: "Full Name", id: "name", type: "text", placeholder: "Enter your full name" },
//     { label: "Email", id: "email", type: "email", placeholder: "Enter your email" },
//     { label: "Phone Number", id: "phone", type: "tel", placeholder: "Enter your phone number" },
//     { label: "Address", id: "address", type: "text", placeholder: "Enter your address" },
//     { label: "Objective", id: "objective", type: "text", placeholder: "State your career objective" },
//     { label: "Education", id: "education", type: "text", placeholder: "Mention your education details" },
//     { label: "Skills", id: "skills", type: "text", placeholder: "Enter your skills (comma separated)" },
//     { label: "Experience", id: "experience", type: "text", placeholder: "Describe your experience" },
//     { label: "References", id: "references", type: "text", placeholder: "Provide references" },
//   ];

//   fields.forEach((field) => {
//     const label = document.createElement("label");
//     label.setAttribute("for", field.id);
//     label.innerText = field.label;

//     const input = document.createElement("input");
//     input.id = field.id;
//     input.type = field.type;
//     input.placeholder = field.placeholder;

//     form.appendChild(label);
//     form.appendChild(input);
//   });

//   const pictureLabel = document.createElement("label");
//   pictureLabel.innerText = "Upload Picture";
//   form.appendChild(pictureLabel);

//   const pictureInput = document.createElement("input");
//   pictureInput.id = "picture";
//   pictureInput.type = "file";
//   pictureInput.accept = "image/*";
//   form.appendChild(pictureInput);

//   const generateButton = document.createElement("button");
//   generateButton.type = "button";
//   generateButton.innerText = "Generate Resume";
//   generateButton.addEventListener("click", handleFormSubmit);

//   form.appendChild(generateButton);
//   formContainer.appendChild(title);
//   formContainer.appendChild(form);

//   const appContainer = document.getElementById("app");
//   if (appContainer) {
//     appContainer.appendChild(formContainer);
//   } else {
//     console.error("Container element with id 'app' not found.");
//   }
// }

// // Handle form submission
// function handleFormSubmit() {
//   const formData: ResumeData = {
//     name: (document.getElementById("name") as HTMLInputElement).value,
//     email: (document.getElementById("email") as HTMLInputElement).value,
//     phone: (document.getElementById("phone") as HTMLInputElement).value,
//     address: (document.getElementById("address") as HTMLInputElement).value,
//     objective: (document.getElementById("objective") as HTMLInputElement).value,
//     education: (document.getElementById("education") as HTMLInputElement).value,
//     skills: (document.getElementById("skills") as HTMLInputElement).value,
//     experience: (document.getElementById("experience") as HTMLInputElement).value,
//     references: (document.getElementById("references") as HTMLInputElement).value,
//     picture: (document.getElementById("picture") as HTMLInputElement).files?.[0] || null
//   };

//   generateResumePreview(formData);
// }

// // Generate and preview resume
// function generateResumePreview(data: ResumeData) {
//   const newWindow = window.open("", "_blank");

//   if (!newWindow) {
//     alert("Failed to open new window. Please allow popups for this site.");
//     return;
//   }

//   const resumeContent = `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Resume Preview</title>
//         <style>
//             body {
//                 font-family: Arial, sans-serif;
//                 margin: 0;
//                 padding: 20px;
//             }
//             .resume-header {
//                 display: flex;
//                 justify-content: space-between;
//                 align-items: center;
//                 border-bottom: 2px solid #007bff;
//                 padding-bottom: 10px;
//                 margin-bottom: 20px;
//             }
//             .resume-header h2 {
//                 margin: 0;
//                 font-size: 30px;
//                 font-weight: bold;
//             }
//             .resume-header img {
//                 width: 120px;
//                 height: 120px;
//                 object-fit: cover;
//                 border-radius: 50%;
//                 border: 2px solid #007bff;
//             }
//             .contact-info {
//                 margin-top: 10px;
//             }
//             .contact-info p {
//                 margin: 0;
//                 font-size: 14px;
//             }
//             .contact-info a {
//                 text-decoration: none;
//                 color: #007bff;
//             }
//             .contact-info a:hover {
//                 text-decoration: underline;
//             }
//             .resume-section {
//                 margin-top: 20px;
//             }
//             .resume-section h3 {
//                 margin-bottom: 10px;
//                 font-size: 20px;
//                 font-weight: bold;
//                 color: #007bff;
//                 border-bottom: 2px solid #007bff;
//             }
//             .resume-section p {
//                 margin: 5px 0;
//                 font-size: 16px;
//                 line-height: 1.6;
//             }
//             .print-btn, .share-btn, .edit-btn {
//                 background-color: #28a745;
//                 color: white;
//                 padding: 10px 20px;
//                 border: none;
//                 border-radius: 4px;
//                 cursor: pointer;
//                 margin-top: 20px;
//                 font-size: 16px;
//                 text-align: center;
//                 display: block;
//                 width: 200px;
//                 margin: 10px auto;
//             }
//             .print-btn:hover, .share-btn:hover, .edit-btn:hover {
//                 background-color: #218838;
//             }
//         </style>
//     </head>
//     <body>
//         <div class="resume-header">
//             <h2>${data.name}</h2>
//             ${data.picture ? `<img src="${URL.createObjectURL(data.picture)}" alt="Profile Picture">` : ""}
//         </div>
//         <div class="contact-info">
//             <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
//             <p><strong>Phone:</strong> ${data.phone}</p>
//             <p><strong>Address:</strong> ${data.address}</p>
//         </div>
//         <div class="resume-section">
//             <h3>Objective</h3>
//             <p>${data.objective}</p>
//         </div>
//         <div class="resume-section">
//             <h3>Education</h3>
//             <p>${data.education}</p>
//         </div>
//         <div class="resume-section">
//             <h3>Skills</h3>
//             <p>${data.skills}</p>
//         </div>
//         <div class="resume-section">
//             <h3>Experience</h3>
//             <p>${data.experience}</p>
//         </div>
//         <div class="resume-section">
//             <h3>References</h3>
//             <p>${data.references}</p>
//         </div>
//         <button class="print-btn" onclick="window.print()">Print Resume</button>
//         <button class="share-btn" onclick="shareResume()">Share Resume</button>
//         <button class="edit-btn" onclick="window.close()">Edit Resume</button>
//     </body>
//     <script>
//       function shareResume() {
//         const subject = encodeURIComponent("Check out my resume!");
//         const body = encodeURIComponent(\`Hello,

// I wanted to share my resume with you. Please check it out:

// ${window.location.href}

// Best regards,\`);

//         window.location.href = \`mailto:?subject=${null}&body=${null}\`;
//       }
//     </script>
//     </html>
//   `;

//   newWindow.document.open();
//   newWindow.document.write(resumeContent);
//   newWindow.document.close();
// }

// // Initialize the form on page load
// document.addEventListener("DOMContentLoaded", createForm);

// Define the ResumeData interface
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

// // Create and display the form
// function createForm() {
//   const formContainer = document.createElement("div");
//   formContainer.classList.add("container");

//   const title = document.createElement("h1");
//   title.innerText = "Professional Resume Builder";

//   const form = document.createElement("form");

//   const fields = [
//     { label: "Full Name", id: "name", type: "text", placeholder: "Enter your full name" },
//     { label: "Email", id: "email", type: "email", placeholder: "Enter your email" },
//     { label: "Phone Number", id: "phone", type: "tel", placeholder: "Enter your phone number" },
//     { label: "Address", id: "address", type: "text", placeholder: "Enter your address" },
//     { label: "Objective", id: "objective", type: "text", placeholder: "State your career objective" },
//     { label: "Education", id: "education", type: "text", placeholder: "Mention your education details" },
//     { label: "Skills", id: "skills", type: "text", placeholder: "Enter your skills (comma separated)" },
//     { label: "Experience", id: "experience", type: "text", placeholder: "Describe your experience" },
//     { label: "References", id: "references", type: "text", placeholder: "Provide references" },
//   ];

//   fields.forEach((field) => {
//     const label = document.createElement("label");
//     label.setAttribute("for", field.id);
//     label.innerText = field.label;

//     const input = document.createElement("input");
//     input.id = field.id;
//     input.type = field.type;
//     input.placeholder = field.placeholder;

//     form.appendChild(label);
//     form.appendChild(input);
//   });

//   const pictureLabel = document.createElement("label");
//   pictureLabel.innerText = "Upload Picture";
//   form.appendChild(pictureLabel);

//   const pictureInput = document.createElement("input");
//   pictureInput.id = "picture";
//   pictureInput.type = "file";
//   pictureInput.accept = "image/*";
//   form.appendChild(pictureInput);

//   const generateButton = document.createElement("button");
//   generateButton.type = "button";
//   generateButton.innerText = "Generate Resume";
//   generateButton.addEventListener("click", handleFormSubmit);

//   form.appendChild(generateButton);
//   formContainer.appendChild(title);
//   formContainer.appendChild(form);

//   const appContainer = document.getElementById("app");
//   if (appContainer) {
//     appContainer.appendChild(formContainer);
//   } else {
//     console.error("Container element with id 'app' not found.");
//   }
// }

// // Handle form submission
// function handleFormSubmit() {
//   const formData: ResumeData = {
//     name: (document.getElementById("name") as HTMLInputElement).value,
//     email: (document.getElementById("email") as HTMLInputElement).value,
//     phone: (document.getElementById("phone") as HTMLInputElement).value,
//     address: (document.getElementById("address") as HTMLInputElement).value,
//     objective: (document.getElementById("objective") as HTMLInputElement).value,
//     education: (document.getElementById("education") as HTMLInputElement).value,
//     skills: (document.getElementById("skills") as HTMLInputElement).value,
//     experience: (document.getElementById("experience") as HTMLInputElement).value,
//     references: (document.getElementById("references") as HTMLInputElement).value,
//     picture: (document.getElementById("picture") as HTMLInputElement).files?.[0] || null
//   };

//   generateResumePreview(formData);
// }

// // Generate and preview resume
// function generateResumePreview(data: ResumeData) {
//   const newWindow = window.open("", "_blank");

//   if (!newWindow) {
//     alert("Failed to open new window. Please allow popups for this site.");
//     return;
//   }

//   // Create a unique URL based on the user's name
//   const encodedName = encodeURIComponent(data.name.toLowerCase().replace(/\s+/g, '-'));
//   const uniqueUrl = `${window.location.origin}/resume/${encodedName}`;

//   const resumeContent = `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Resume Preview</title>
//         <style>
//             body {
//                 font-family: 'Helvetica Neue', Arial, sans-serif;
//                 color: #333;
//                 margin: 0;
//                 padding: 20px;
//                 background-color: #f4f4f4;
//             }
//             .resume-container {
//                 max-width: 800px;
//                 margin: 0 auto;
//                 background-color: #fff;
//                 padding: 20px;
//                 box-shadow: 0 0 15px rgba(0,0,0,0.1);
//             }
//             .resume-header {
//                 display: flex;
//                 justify-content: space-between;
//                 align-items: center;
//                 border-bottom: 3px solid #007bff;
//                 padding-bottom: 20px;
//                 margin-bottom: 20px;
//             }
//             .resume-header h2 {
//                 margin: 0;
//                 font-size: 30px;
//                 font-weight: bold;
//             }
//             .resume-header img {
//                 width: 120px;
//                 height: 120px;
//                 object-fit: cover;
//                 border-radius: 50%;
//                 border: 2px solid #007bff;
//             }
//             .contact-info {
//                 margin-top: 10px;
//                 font-size: 14px;
//                 line-height: 1.6;
//                 color: #555;
//             }
//             .contact-info p {
//                 margin: 0;
//             }
//             .contact-info a {
//                 text-decoration: none;
//                 color: #007bff;
//             }
//             .resume-section {
//                 margin-top: 30px;
//             }
//             .resume-section h3 {
//                 font-size: 22px;
//                 color: #007bff;
//                 border-bottom: 2px solid #007bff;
//                 padding-bottom: 5px;
//                 margin-bottom: 10px;
//             }
//             .resume-section ul {
//                 list-style: none;
//                 padding: 0;
//                 margin: 0;
//             }
//             .resume-section ul li {
//                 font-size: 16px;
//                 line-height: 1.5;
//                 padding-left: 20px;
//                 position: relative;
//             }
//             .resume-section ul li:before {
//                 content: "•";
//                 position: absolute;
//                 left: 0;
//                 color: #007bff;
//             }
//             .resume-section p {
//                 margin: 0 0 10px 0;
//                 font-size: 16px;
//                 line-height: 1.6;
//             }
//             .print-btn, .share-btn, .edit-btn {
//                 background-color: #28a745;
//                 color: white;
//                 padding: 10px 20px;
//                 border: none;
//                 border-radius: 4px;
//                 cursor: pointer;
//                 margin-top: 20px;
//                 font-size: 16px;
//                 text-align: center;
//                 display: block;
//                 width: 200px;
//                 margin: 10px auto;
//             }
//             .print-btn:hover, .share-btn:hover, .edit-btn:hover {
//                 background-color: #218838;
//             }
//         </style>
//     </head>
//     <body>
//         <div class="resume-container">
//             <div class="resume-header">
//                 <h2>${data.name}</h2>
//                 ${data.picture ? `<img src="${URL.createObjectURL(data.picture)}" alt="Profile Picture">` : ""}
//             </div>
//             <div class="contact-info">
//                 <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
//                 <p><strong>Phone:</strong> ${data.phone}</p>
//                 <p><strong>Address:</strong> ${data.address}</p>
//             </div>
//             <div class="resume-section">
//                 <h3>Objective</h3>
//                 <p>${data.objective}</p>
//             </div>
//             <div class="resume-section">
//                 <h3>Education</h3>
//                 <p>${data.education}</p>
//             </div>
//             <div class="resume-section">
//                 <h3>Skills</h3>
//                 <ul>
//                   ${data.skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}
//                 </ul>
//             </div>
//             <div class="resume-section">
//                 <h3>Experience</h3>
//                 <p>${data.experience}</p>
//             </div>
//             <div class="resume-section">
//                 <h3>References</h3>
//                 <p>${data.references}</p>
//             </div>
//             <div class="resume-section">
//                 <h3>Resume Link</h3>
//                 <p>Share your resume using this link: <a href="${uniqueUrl}" target="_blank">${uniqueUrl}</a></p>
//             </div>
//             <button class="print-btn" onclick="window.print()">Print Resume</button>
//             <button class="share-btn" onclick="shareResume()">Share Resume</button>
//             <button class="edit-btn" onclick="window.close()">Edit Resume</button>
//         </div>
//     </body>
//     <script>
//       function shareResume() {
//         const subject = encodeURIComponent("Check out my resume!");
//         const body = encodeURIComponent(\`Hello,\n\nI wanted to share my resume with you. Please check it out here:\n\n${uniqueUrl}\n\nBest regards,\`);

//         window.location.href = \`mailto:?subject=\${subject}&body=\${body}\`;
//       }
//     </script>
//     </html>
//   `;

//   newWindow.document.open();
//   newWindow.document.write(resumeContent);
//   newWindow.document.close();
// }

// // Initialize the form on page load
// document.addEventListener("DOMContentLoaded", createForm);

// interface ResumeData {
//   name: string;
//   fatherName: string;
//   age: string;
//   address: string;
//   maritalStatus: string;
//   phone: string;
//   email: string;
//   languages: string;
//   skills: string;
//   objective: string;
//   education: string;
//   experience: string;
//   references: string;
//   fontFamily: string;
//   picture: File | null;
// }

// function createForm() {
//   const appContainer = document.getElementById("app");
//   if (!appContainer) return;

//   const container = document.createElement("div");
//   container.classList.add("container");

//   const title = document.createElement("h1");
//   title.innerText = "Dynamic Resume Builder";
//   container.appendChild(title);

//   const fontSelectLabel = document.createElement("label");
//   fontSelectLabel.innerText = "Select Font Family:";
//   container.appendChild(fontSelectLabel);

//   const fontSelect = document.createElement("select");
//   fontSelect.id = "fontSelect";
//   const fontOptions = [
//     "Arial", "Georgia", "Times New Roman", "Verdana", "Helvetica", "Tahoma", "Calibri", "Garamond", "Open Sans", "Roboto"
//   ];

//   fontOptions.forEach(font => {
//     const option = document.createElement("option");
//     option.value = font;
//     option.innerText = font;
//     fontSelect.appendChild(option);
//   });

//   container.appendChild(fontSelect);

//   const fields: { label: string; id: string; type: string }[] = [
//     { label: "Full Name", id: "name", type: "text" },
//     { label: "Father's Name", id: "fatherName", type: "text" },
//     { label: "Age", id: "age", type: "number" },
//     { label: "Address", id: "address", type: "text" },
//     { label: "Marital Status", id: "maritalStatus", type: "text" },
//     { label: "Phone Number", id: "phone", type: "tel" },
//     { label: "Email", id: "email", type: "email" },
//     { label: "Languages (comma-separated)", id: "languages", type: "text" },
//     { label: "Skills (comma-separated)", id: "skills", type: "text" },
//     { label: "Objective", id: "objective", type: "text" },
//     { label: "Education", id: "education", type: "text" },
//     { label: "Experience", id: "experience", type: "text" },
//     { label: "References", id: "references", type: "text" },
//   ];

//   fields.forEach(({ label, id, type }) => {
//     const field = document.createElement("div");
//     field.classList.add("form-group");

//     const fieldLabel = document.createElement("label");
//     fieldLabel.innerText = label;
//     field.appendChild(fieldLabel);

//     const input = document.createElement("input");
//     input.id = id;
//     input.type = type;
//     field.appendChild(input);

//     container.appendChild(field);
//   });

//   const pictureUploadLabel = document.createElement("label");
//   pictureUploadLabel.innerText = "Upload Profile Picture:";
//   container.appendChild(pictureUploadLabel);

//   const pictureUpload = document.createElement("input");
//   pictureUpload.type = "file";
//   pictureUpload.accept = "image/*";
//   pictureUpload.id = "picture";
//   container.appendChild(pictureUpload);

//   const generateButton = document.createElement("button");
//   generateButton.innerText = "Generate Resume";
//   generateButton.onclick = handleFormSubmit;
//   container.appendChild(generateButton);

//   // Adding action buttons
//   const downloadButton = document.createElement("button");
//   downloadButton.innerText = "Download Resume";
//   downloadButton.onclick = downloadResume;
//   container.appendChild(downloadButton);

//   const emailButton = document.createElement("button");
//   emailButton.innerText = "Email Resume";
//   emailButton.onclick = emailResume;
//   container.appendChild(emailButton);

//   const linkButton = document.createElement("button");
//   linkButton.innerText = "Create Link";
//   linkButton.onclick = createLink;
//   container.appendChild(linkButton);

//   appContainer.appendChild(container);
// }

// function handleFormSubmit() {
//   const formData: ResumeData = {
//     name: (document.getElementById("name") as HTMLInputElement)?.value || "",
//     fatherName: (document.getElementById("fatherName") as HTMLInputElement)?.value || "",
//     age: (document.getElementById("age") as HTMLInputElement)?.value || "",
//     address: (document.getElementById("address") as HTMLInputElement)?.value || "",
//     maritalStatus: (document.getElementById("maritalStatus") as HTMLInputElement)?.value || "",
//     phone: (document.getElementById("phone") as HTMLInputElement)?.value || "",
//     email: (document.getElementById("email") as HTMLInputElement)?.value || "",
//     languages: (document.getElementById("languages") as HTMLInputElement)?.value || "",
//     skills: (document.getElementById("skills") as HTMLInputElement)?.value || "",
//     objective: (document.getElementById("objective") as HTMLInputElement)?.value || "",
//     education: (document.getElementById("education") as HTMLInputElement)?.value || "",
//     experience: (document.getElementById("experience") as HTMLInputElement)?.value || "",
//     references: (document.getElementById("references") as HTMLInputElement)?.value || "",
//     fontFamily: (document.getElementById("fontSelect") as HTMLSelectElement)?.value || "Arial",
//     picture: (document.getElementById("picture") as HTMLInputElement)?.files?.[0] || null,
//   };

//   generateResume(formData);
// }

// function generateResume(data: ResumeData) {
//   const previewWindow = window.open("", "_blank");
//   if (!previewWindow) return;

//   const reader = new FileReader();
//   reader.onload = function (e) {
//     const pictureSrc = e.target?.result as string;

//     const resumeContent = `
//       <html>
//       <head>
//         <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=${data.fontFamily.replace(
//           " ",
//           "+"
//         )}:wght@400;700&display=swap" />
//         <style>
//           body { font-family: ${data.fontFamily}, Arial, sans-serif; padding: 20px; }
//           .resume-container { display: flex; max-width: 800px; margin: 0 auto; }
//           .left-column { width: 30%; text-align: center; background: #f0f0f0; padding: 15px; border-radius: 10px 0 0 10px; }
//           .right-column { width: 70%; padding: 15px; }
//           img { width: 120px; height: 120px; border-radius: 50%; border: 3px solid #007bff; }
//           h2, h3 { color: #007bff; }
//         </style>
//       </head>
//       <body>
//         <div class="resume-container">
//           <div class="left-column">
//             <img src="${pictureSrc}" alt="Profile Picture">
//             <h2>${data.name}</h2>
//             <p>Father's Name: ${data.fatherName}</p>
//             <p>Age: ${data.age}</p>
//             <p>Marital Status: ${data.maritalStatus}</p>
//             <p>Phone: ${data.phone}</p>
//             <p>Email: ${data.email}</p>
//             <h3>Skills</h3>
//             <p>${data.skills}</p>
//             <h3>Languages</h3>
//             <p>${data.languages}</p>
//           </div>
//           <div class="right-column">
//             <h3>Objective</h3>
//             <p>${data.objective}</p>
//             <h3>Education</h3>
//             <p>${data.education}</p>
//             <h3>Experience</h3>
//             <p>${data.experience}</p>
//             <h3>References</h3>
//             <p>${data.references}</p>
//           </div>
//         </div>
//       </body>
//       </html>
//     `;

//     previewWindow.document.open();
//     previewWindow.document.write(resumeContent);
//     previewWindow.document.close();
//   };

//   if (data.picture) {
//     reader.readAsDataURL(data.picture);
//   } else {
//     alert("Please upload a profile picture.");
//   }
// }

// // Function for downloading the resume as a PDF or document
// function downloadResume() {
//   alert("Resume download functionality will be added.");
// }

// // Function for emailing the resume
// function emailResume() {
//   alert("Email resume functionality will be added.");
// }

// // Function for creating a sharable link for the resume
// function createLink() {
//   alert("Create link functionality will be added.");
// }

// document.addEventListener("DOMContentLoaded", createForm);
// interface ResumeData {
//   name: string;
//   fatherName: string;
//   age: string;
//   address: string;
//   maritalStatus: string;
//   contactNumber: string;
//   email: string;
//   language: string;
//   skills: string;
//   objective: string;
//   education: string;
//   experience: string;
//   references: string;
//   font: string;
//   picture?: File;
// }

// function createForm() {
//   const appContainer = document.getElementById("app");

//   if (appContainer) {
//     appContainer.innerHTML = `
//       <div class="container">
//         <h1>Professional Resume Builder</h1>
//         <div class="form-group">
//           <label for="name">Full Name</label>
//           <input type="text" id="name">
//         </div>
//         <div class="form-group">
//           <label for="fatherName">Father's Name</label>
//           <input type="text" id="fatherName">
//         </div>
//         <div class="form-group">
//           <label for="age">Age</label>
//           <input type="text" id="age">
//         </div>
//         <div class="form-group">
//           <label for="address">Address</label>
//           <input type="text" id="address">
//         </div>
//         <div class="form-group">
//           <label for="maritalStatus">Marital Status</label>
//           <input type="text" id="maritalStatus">
//         </div>
//         <div class="form-group">
//           <label for="contactNumber">Contact Number</label>
//           <input type="text" id="contactNumber">
//         </div>
//         <div class="form-group">
//           <label for="email">Email Address</label>
//           <input type="email" id="email">
//         </div>
//         <div class="form-group">
//           <label for="language">Languages Spoken</label>
//           <input type="text" id="language">
//         </div>
//         <div class="form-group">
//           <label for="skills">Skills</label>
//           <input type="text" id="skills">
//         </div>
//         <div class="form-group">
//           <label for="objective">Objective</label>
//           <textarea id="objective"></textarea>
//         </div>
//         <div class="form-group">
//           <label for="education">Education</label>
//           <textarea id="education"></textarea>
//         </div>
//         <div class="form-group">
//           <label for="experience">Experience</label>
//           <textarea id="experience"></textarea>
//         </div>
//         <div class="form-group">
//           <label for="references">References</label>
//           <textarea id="references"></textarea>
//         </div>
//         <div class="form-group">
//           <label for="picture">Profile Picture (optional)</label>
//           <input type="file" id="picture" accept="image/*">
//         </div>
//         <div class="form-group">
//           <label for="font">Select Font</label>
//           <select id="font">
//             <option value="Arial">Arial</option>
//             <option value="Times New Roman">Times New Roman</option>
//             <option value="Georgia">Georgia</option>
//             <option value="Verdana">Verdana</option>
//             <option value="Roboto">Roboto</option>
//           </select>
//         </div>
//         <div class="buttons-container">
//           <button class="primary" id="generateButton">Generate Resume</button>
//         </div>
//       </div>
//     `;

//     const generateButton = document.getElementById("generateButton") as HTMLButtonElement;
//     generateButton.onclick = handleFormSubmit;
//   }
// }

// function handleFormSubmit() {
//   const resumeData: ResumeData = {
//     name: (document.getElementById("name") as HTMLInputElement).value,
//     fatherName: (document.getElementById("fatherName") as HTMLInputElement).value,
//     age: (document.getElementById("age") as HTMLInputElement).value,
//     address: (document.getElementById("address") as HTMLInputElement).value,
//     maritalStatus: (document.getElementById("maritalStatus") as HTMLInputElement).value,
//     contactNumber: (document.getElementById("contactNumber") as HTMLInputElement).value,
//     email: (document.getElementById("email") as HTMLInputElement).value,
//     language: (document.getElementById("language") as HTMLInputElement).value,
//     skills: (document.getElementById("skills") as HTMLInputElement).value,
//     objective: (document.getElementById("objective") as HTMLTextAreaElement).value,
//     education: (document.getElementById("education") as HTMLTextAreaElement).value,
//     experience: (document.getElementById("experience") as HTMLTextAreaElement).value,
//     references: (document.getElementById("references") as HTMLTextAreaElement).value,
//     font: (document.getElementById("font") as HTMLSelectElement).value,
//     picture: (document.getElementById("picture") as HTMLInputElement).files?.[0]
//   };

//   // Validate all fields before proceeding
//   if (Object.values(resumeData).includes('')) {
//     alert("Please fill out all fields.");
//   } else {
//     displayResumeOutput(resumeData);
//   }
// }

// function displayResumeOutput(data: ResumeData) {
//   const outputWindow = window.open("", "_blank");
//   const fontStyle = data.font;
  
//   outputWindow!.document.body.innerHTML = `
//     <style>
//       body { font-family: ${fontStyle}, sans-serif; }
//       /* Additional CSS to style the output page */
//     </style>
//     <div class="output-container">
//       <div class="left-column">
//         ${data.picture ? `<img src="${URL.createObjectURL(data.picture)}">` : ""}
//         <div>${data.name}</div>
//         <div>${data.fatherName}</div>
//         <div>${data.age}</div>
//         <div>${data.address}</div>
//         <div>${data.maritalStatus}</div>
//         <div>${data.contactNumber}</div>
//         <div>${data.email}</div>
//         <div>${data.language}</div>
//         <div>${data.skills}</div>
//       </div>
//       <div class="right-column">
//         <div class="output-header">Objective</div>
//         <div class="output-section">${data.objective}</div>
//         <div class="output-header">Education</div>
//         <div class="output-section">${data.education}</div>
//         <div class="output-header">Experience</div>
//         <div class="output-section">${data.experience}</div>
//         <div class="output-header">References</div>
//         <div class="output-section">${data.references}</div>
//         <div class="buttons-container">
//           <button onclick="window.print()">Download Resume</button>
//           <button onclick="window.location.href='mailto:${data.email}'">Email Resume</button>
//         </div>
//       </div>
//     </div>
//   `;
// }

// document.addEventListener("DOMContentLoaded", createForm);
// TypeScript Code Starts Here

// Interfaces
// interface Education {
//   school: string;
//   year: string;
//   degree: string;
// }

// interface Experience {
//   employer: string;
//   startYear: string;
//   endYear: string;
//   role: string;
// }

// interface ResumeData {
//   name: string;
//   fatherName: string;
//   age: string;
//   address: string;
//   maritalStatus: string;
//   contactNumber: string;
//   email: string;
//   language: string;
//   skills: string[];
//   objective: string;
//   education: Education[];
//   experience: Experience[];
//   references: string;
//   font: string;
//   pictureURL?: string;
// }

// let currentResumeData: ResumeData | null = null;

// // Render the form
// function renderForm() {
//   const formContainer = document.getElementById("form-container");
//   if (!formContainer) {
//     console.error("Form container not found.");
//     return;
//   }

//   formContainer.innerHTML = `
//     <form id="resume-form">
//       <h2>Personal Details</h2>
//       <label>Name: <input type="text" id="name" required></label>
//       <label>Father's Name: <input type="text" id="fatherName"></label>
//       <label>Age: <input type="number" id="age" required></label>
//       <label>Address: <input type="text" id="address" required></label>
//       <label>Marital Status: <input type="text" id="maritalStatus"></label>
//       <label>Contact Number: <input type="text" id="contactNumber" required></label>
//       <label>Email: <input type="email" id="email" required></label>
//       <label>Languages Known: <input type="text" id="language"></label>
//       <label>Skills (comma-separated): <input type="text" id="skills"></label>

//       <h2>Professional Objective</h2>
//       <label>Objective: <textarea id="objective"></textarea></label>

//       <h2>Education</h2>
//       <div id="education-container"></div>
//       <button type="button" id="add-education">Add Education</button>

//       <h2>Work Experience</h2>
//       <div id="experience-container"></div>
//       <button type="button" id="add-experience">Add Experience</button>

//       <h2>Additional Details</h2>
//       <label>References: <textarea id="references"></textarea></label>
//       <label>Preferred Font: 
//         <select id="font">
//           <option value="Arial">Arial</option>
//           <option value="Helvetica">Helvetica</option>
//           <option value="Times New Roman">Times New Roman</option>
//           <option value="Calibri">Calibri</option>
//         </select>
//       </label>
//       <label>Profile Picture: <input type="file" id="picture" accept="image/*"></label>

//       <button type="submit">Generate Resume</button>
//     </form>
//   `;

//   document.getElementById("resume-form")?.addEventListener("submit", generateResume);
//   document.getElementById("add-education")?.addEventListener("click", () => addEntry("education"));
//   document.getElementById("add-experience")?.addEventListener("click", () => addEntry("experience"));
// }

// // Add Education or Experience dynamically
// function addEntry(type: "education" | "experience") {
//   const containerId = type === "education" ? "education-container" : "experience-container";
//   const container = document.getElementById(containerId);
//   if (!container) return;

//   const entryHtml = `
//     <div class="${type}-entry">
//       ${type === "education" ? `
//         <label>School: <input type="text" class="${type}-school" required></label>
//         <label>Year: <input type="text" class="${type}-year" required></label>
//         <label>Degree: <input type="text" class="${type}-degree" required></label>
//       ` : `
//         <label>Employer: <input type="text" class="${type}-employer" required></label>
//         <label>Start Year: <input type="text" class="${type}-start-year" required></label>
//         <label>End Year: <input type="text" class="${type}-end-year" required></label>
//         <label>Role: <input type="text" class="${type}-role" required></label>
//       `}
//       <button type="button" class="remove-entry">Remove</button>
//     </div>`;
//   container.insertAdjacentHTML("beforeend", entryHtml);

//   container.querySelectorAll(".remove-entry").forEach((button) =>
//     button.addEventListener("click", () => button.parentElement?.remove())
//   );
// }

// // Generate Resume
// async function generateResume(event: Event) {
//   event.preventDefault();

//   const pictureInput = document.getElementById("picture") as HTMLInputElement;

//   let pictureURL: string | undefined;
//   if (pictureInput && pictureInput.files?.length) {
//     const file = pictureInput.files[0];
//     pictureURL = await new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onload = () => resolve(reader.result as string);
//       reader.onerror = () => reject("Error reading the file.");
//       reader.readAsDataURL(file);
//     });
//   }

//   currentResumeData = {
//     name: (document.getElementById("name") as HTMLInputElement).value,
//     fatherName: (document.getElementById("fatherName") as HTMLInputElement).value,
//     age: (document.getElementById("age") as HTMLInputElement).value,
//     address: (document.getElementById("address") as HTMLInputElement).value,
//     maritalStatus: (document.getElementById("maritalStatus") as HTMLInputElement).value,
//     contactNumber: (document.getElementById("contactNumber") as HTMLInputElement).value,
//     email: (document.getElementById("email") as HTMLInputElement).value,
//     language: (document.getElementById("language") as HTMLInputElement).value,
//     skills: (document.getElementById("skills") as HTMLInputElement).value.split(","),
//     objective: (document.getElementById("objective") as HTMLInputElement).value,
//     education: getEducationEntries(),
//     experience: getExperienceEntries(),
//     references: (document.getElementById("references") as HTMLInputElement).value,
//     font: (document.getElementById("font") as HTMLSelectElement).value,
//     pictureURL,
//   };

//   displayResume(currentResumeData);
// }

// // Helper Functions
// function getEducationEntries(): Education[] {
//   return Array.from(document.querySelectorAll(".education-entry")).map((entry) => ({
//     school: (entry.querySelector(".education-school") as HTMLInputElement).value,
//     year: (entry.querySelector(".education-year") as HTMLInputElement).value,
//     degree: (entry.querySelector(".education-degree") as HTMLInputElement).value,
//   }));
// }

// function getExperienceEntries(): Experience[] {
//   return Array.from(document.querySelectorAll(".experience-entry")).map((entry) => ({
//     employer: (entry.querySelector(".experience-employer") as HTMLInputElement).value,
//     startYear: (entry.querySelector(".experience-start-year") as HTMLInputElement).value,
//     endYear: (entry.querySelector(".experience-end-year") as HTMLInputElement).value,
//     role: (entry.querySelector(".experience-role") as HTMLInputElement).value,
//   }));
// }

// function displayResume(data: ResumeData) {
//   const formContainer = document.getElementById("form-container");
//   const outputContainer = document.getElementById("output-container");
//   const resumeDisplay = document.getElementById("resume-display");
//   if (formContainer) formContainer.style.display = "none";
//   if (outputContainer) outputContainer.classList.remove("hidden");
//   if (resumeDisplay) {
//     resumeDisplay.innerHTML = `
//       <h1>${data.name}</h1>
//       <p>Father's Name: ${data.fatherName}</p>
//       <p>Age: ${data.age}</p>
//       <p>Address: ${data.address}</p>
//       <p>Marital Status: ${data.maritalStatus}</p>
//       <p>Contact Number: ${data.contactNumber}</p>
//       <p>Email: ${data.email}</p>
//       <p>Languages: ${data.language}</p>
//       <p>Skills: ${data.skills.join(", ")}</p>
//       <p>Objective: ${data.objective}</p>
//       <h3>Education</h3>
//       <ul>${data.education.map((edu) => `<li>${edu.school}, ${edu.year}, ${edu.degree}</li>`).join("")}</ul>
//       <h3>Experience</h3>
//       <ul>${data.experience.map((exp) => `<li>${exp.role} at ${exp.employer} (${exp.startYear} - ${exp.endYear})</li>`).join("")}</ul>
//       <h3>References</h3>
//       <p>${data.references}</p>
//       ${data.pictureURL ? `<img src="${data.pictureURL}" alt="Profile Picture" style="max-width: 150px;">` : ""}
//     `;
//   }
// }

// // Edit Resume
// function editResume() {
//   const formContainer = document.getElementById("form-container");
//   const outputContainer = document.getElementById("output-container");
//   if (formContainer) formContainer.style.display = "block";
//   if (outputContainer) outputContainer.classList.add("hidden");
// }

// // Initialize
// document.addEventListener("DOMContentLoaded", renderForm);

// Supporting Functions
// function saveAsPDF() {
//   alert("Save as PDF functionality will be implemented here.");
// }
// function emailResume() {
//   const email = (document.getElementById("email") as HTMLInputElement).value;
//   window.location.href = "mailto:" + email + "?subject=Your%20Resume";
// }
// function createLink() {
//   alert("Create Link functionality will be implemented here.");
// }
 
interface Education {
  school: string;
  year: string;
  degree: string;
}

interface Experience {
  employer: string;
  startYear: string;
  endYear: string;
  role: string;
}

interface ResumeData {
  name: string;
  fatherName: string;
  age: string;
  address: string;
  maritalStatus: string;
  contactNumber: string;
  email: string;
  language: string;
  skills: string[];
  objective: string;
  education: Education[];
  experience: Experience[];
  references: string;
  font: string;
  pictureURL?: string;
}

let currentResumeData: ResumeData | null = null;

// Render the input form
function renderForm() {
  const formContainer = document.getElementById("form-container");
  if (!formContainer) {
    console.error("Form container not found.");
    return;
  }

  formContainer.innerHTML = `
    <form id="resume-form">
      <h2>Personal Details</h2>
      <label>Name: <input type="text" id="name" required></label>
      <label>Father's Name: <input type="text" id="fatherName"></label>
      <label>Age: <input type="number" id="age" required></label>
      <label>Address: <input type="text" id="address" required></label>
      <label>Marital Status: <input type="text" id="maritalStatus"></label>
      <label>Contact Number: <input type="text" id="contactNumber" required></label>
      <label>Email: <input type="email" id="email" required></label>
      <label>Languages Known: <input type="text" id="language"></label>
      <label>Skills (comma-separated): <input type="text" id="skills"></label>

      <h2>Professional Objective</h2>
      <label>Objective: <textarea id="objective"></textarea></label>

      <h2>Education</h2>
      <div id="education-container"></div>
      <button type="button" id="add-education">Add Education</button>

      <h2>Work Experience</h2>
      <div id="experience-container"></div>
      <button type="button" id="add-experience">Add Experience</button>

      <h2>Additional Details</h2>
      <label>References: <textarea id="references"></textarea></label>
      <label>Preferred Font: 
        <select id="font">
          <option value="Arial">Arial</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Calibri">Calibri</option>
        </select>
      </label>
      <label>Profile Picture: <input type="file" id="picture" accept="image/*"></label>

      <button type="submit">Generate Resume</button>
    </form>
  `;

  document.getElementById("resume-form")?.addEventListener("submit", generateResume);
  document.getElementById("add-education")?.addEventListener("click", () => addEntry("education"));
  document.getElementById("add-experience")?.addEventListener("click", () => addEntry("experience"));
}

// Add or Remove entries dynamically
function addEntry(type: "education" | "experience") {
  const containerId = type === "education" ? "education-container" : "experience-container";
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`${type}-container not found.`);
    return;
  }

  const entryHtml = `
    <div class="${type}-entry">
      ${type === "education" ? `
        <label>School: <input type="text" class="${type}-school" required></label>
        <label>Year: <input type="text" class="${type}-year" required></label>
        <label>Degree: <input type="text" class="${type}-degree" required></label>
      ` : `
        <label>Employer: <input type="text" class="${type}-employer" required></label>
        <label>Start Year: <input type="text" class="${type}-start-year" required></label>
        <label>End Year: <input type="text" class="${type}-end-year" required></label>
        <label>Role: <input type="text" class="${type}-role" required></label>
      `}
      <button type="button" class="remove-entry">Remove</button>
    </div>`;
  container.insertAdjacentHTML("beforeend", entryHtml);

  container.querySelectorAll(".remove-entry").forEach((button) =>
    button.addEventListener("click", () => button.parentElement?.remove())
  );
}

// Generate the resume
async function generateResume(event: Event) {
  event.preventDefault();

  const pictureInput = document.getElementById("picture") as HTMLInputElement;

  let pictureURL: string | undefined;
  if (pictureInput && pictureInput.files?.length) {
    const file = pictureInput.files[0];
    pictureURL = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject("Error reading the file.");
      reader.readAsDataURL(file);
    });
  } else {
    pictureURL = undefined;
  }

  currentResumeData = {
    name: (document.getElementById("name") as HTMLInputElement).value,
    fatherName: (document.getElementById("fatherName") as HTMLInputElement).value,
    age: (document.getElementById("age") as HTMLInputElement).value,
    address: (document.getElementById("address") as HTMLInputElement).value,
    maritalStatus: (document.getElementById("maritalStatus") as HTMLInputElement).value,
    contactNumber: (document.getElementById("contactNumber") as HTMLInputElement).value,
    email: (document.getElementById("email") as HTMLInputElement).value,
    language: (document.getElementById("language") as HTMLInputElement).value,
    skills: (document.getElementById("skills") as HTMLInputElement).value.split(","),
    objective: (document.getElementById("objective") as HTMLInputElement).value,
    education: getEducationEntries(),
    experience: getExperienceEntries(),
    references: (document.getElementById("references") as HTMLInputElement).value,
    font: (document.getElementById("font") as HTMLSelectElement).value,
    pictureURL,
  };

  displayResume(currentResumeData);
}

// Helper functions
function getEducationEntries(): Education[] {
  return Array.from(document.querySelectorAll(".education-entry")).map((entry) => ({
    school: (entry.querySelector(".education-school") as HTMLInputElement).value,
    year: (entry.querySelector(".education-year") as HTMLInputElement).value,
    degree: (entry.querySelector(".education-degree") as HTMLInputElement).value,
  }));
}

function getExperienceEntries(): Experience[] {
  return Array.from(document.querySelectorAll(".experience-entry")).map((entry) => ({
    employer: (entry.querySelector(".experience-employer") as HTMLInputElement).value,
    startYear: (entry.querySelector(".experience-start-year") as HTMLInputElement).value,
    endYear: (entry.querySelector(".experience-end-year") as HTMLInputElement).value,
    role: (entry.querySelector(".experience-role") as HTMLInputElement).value,
  }));
}

function displayResume(data: ResumeData) {
  const formContainer = document.getElementById("form-container");
  const outputContainer = document.getElementById("output-container");
  const resumeDisplay = document.getElementById("resume-display");
  if (formContainer) formContainer.style.display = "none";
  if (outputContainer) outputContainer.classList.remove("hidden");
  if (resumeDisplay) {
    resumeDisplay.innerHTML = `
      <h1>${data.name}</h1>
      <p>Father's Name: ${data.fatherName}</p>
      <p>Age: ${data.age}</p>
      <p>Address: ${data.address}</p>
      <p>Marital Status: ${data.maritalStatus}</p>
      <p>Contact Number: ${data.contactNumber}</p>
      <p>Email: ${data.email}</p>
      <p>Languages: ${data.language}</p>
      <p>Skills: ${data.skills.join(", ")}</p>
      <p>Objective: ${data.objective}</p>
      <h3>Education</h3>
      ${data.education.map((e) => `<p>${e.degree} in ${e.school} (${e.year})</p>`).join("")}
      <h3>Work Experience</h3>
      ${data.experience.map((e) => `<p>${e.role} at ${e.employer} (${e.startYear} - ${e.endYear})</p>`).join("")}
      <h3>References</h3>
      <p>${data.references}</p>
    `;
  }
}
 // Restore form data
function editResume() {
  document.getElementById("form-container")!.style.display = "block";
  document.getElementById("output-container")!.classList.add("hidden");
}
// Initial rendering
document.addEventListener("DOMContentLoaded", renderForm);
