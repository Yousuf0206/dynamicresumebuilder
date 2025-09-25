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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var currentResumeData = null;
// Render the input form
function renderForm() {
    var _a, _b, _c;
    var formContainer = document.getElementById("form-container");
    if (!formContainer) {
        console.error("Form container not found.");
        return;
    }
    formContainer.innerHTML = "\n    <form id=\"resume-form\">\n      <h2>Personal Details</h2>\n      <label>Name: <input type=\"text\" id=\"name\" required></label>\n      <label>Father's Name: <input type=\"text\" id=\"fatherName\"></label>\n      <label>Age: <input type=\"number\" id=\"age\" required></label>\n      <label>Address: <input type=\"text\" id=\"address\" required></label>\n      <label>Marital Status: <input type=\"text\" id=\"maritalStatus\"></label>\n      <label>Contact Number: <input type=\"text\" id=\"contactNumber\" required></label>\n      <label>Email: <input type=\"email\" id=\"email\" required></label>\n      <label>Languages Known: <input type=\"text\" id=\"language\"></label>\n      <label>Skills (comma-separated): <input type=\"text\" id=\"skills\"></label>\n\n      <h2>Professional Objective</h2>\n      <label>Objective: <textarea id=\"objective\"></textarea></label>\n\n      <h2>Education</h2>\n      <div id=\"education-container\"></div>\n      <button type=\"button\" id=\"add-education\">Add Education</button>\n\n      <h2>Work Experience</h2>\n      <div id=\"experience-container\"></div>\n      <button type=\"button\" id=\"add-experience\">Add Experience</button>\n\n      <h2>Additional Details</h2>\n      <label>References: <textarea id=\"references\"></textarea></label>\n      <label>Preferred Font: \n        <select id=\"font\">\n          <option value=\"Arial\">Arial</option>\n          <option value=\"Helvetica\">Helvetica</option>\n          <option value=\"Times New Roman\">Times New Roman</option>\n          <option value=\"Calibri\">Calibri</option>\n        </select>\n      </label>\n      <label>Profile Picture: <input type=\"file\" id=\"picture\" accept=\"image/*\"></label>\n\n      <button type=\"submit\">Generate Resume</button>\n    </form>\n  ";
    (_a = document.getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", generateResume);
    (_b = document.getElementById("add-education")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () { return addEntry("education"); });
    (_c = document.getElementById("add-experience")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () { return addEntry("experience"); });
}
// Add or Remove entries dynamically
function addEntry(type) {
    var containerId = type === "education" ? "education-container" : "experience-container";
    var container = document.getElementById(containerId);
    if (!container) {
        console.error("".concat(type, "-container not found."));
        return;
    }
    var entryHtml = "\n    <div class=\"".concat(type, "-entry\">\n      ").concat(type === "education" ? "\n        <label>School: <input type=\"text\" class=\"".concat(type, "-school\" required></label>\n        <label>Year: <input type=\"text\" class=\"").concat(type, "-year\" required></label>\n        <label>Degree: <input type=\"text\" class=\"").concat(type, "-degree\" required></label>\n      ") : "\n        <label>Employer: <input type=\"text\" class=\"".concat(type, "-employer\" required></label>\n        <label>Start Year: <input type=\"text\" class=\"").concat(type, "-start-year\" required></label>\n        <label>End Year: <input type=\"text\" class=\"").concat(type, "-end-year\" required></label>\n        <label>Role: <input type=\"text\" class=\"").concat(type, "-role\" required></label>\n      "), "\n      <button type=\"button\" class=\"remove-entry\">Remove</button>\n    </div>");
    container.insertAdjacentHTML("beforeend", entryHtml);
    container.querySelectorAll(".remove-entry").forEach(function (button) {
        return button.addEventListener("click", function () { var _a; return (_a = button.parentElement) === null || _a === void 0 ? void 0 : _a.remove(); });
    });
}
// Generate the resume
function generateResume(event) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var pictureInput, pictureURL, file_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    event.preventDefault();
                    pictureInput = document.getElementById("picture");
                    if (!(pictureInput && ((_a = pictureInput.files) === null || _a === void 0 ? void 0 : _a.length))) return [3 /*break*/, 2];
                    file_1 = pictureInput.files[0];
                    return [4 /*yield*/, new Promise(function (resolve, reject) {
                            var reader = new FileReader();
                            reader.onload = function () { return resolve(reader.result); };
                            reader.onerror = function () { return reject("Error reading the file."); };
                            reader.readAsDataURL(file_1);
                        })];
                case 1:
                    pictureURL = _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    pictureURL = undefined;
                    _b.label = 3;
                case 3:
                    currentResumeData = {
                        name: document.getElementById("name").value,
                        fatherName: document.getElementById("fatherName").value,
                        age: document.getElementById("age").value,
                        address: document.getElementById("address").value,
                        maritalStatus: document.getElementById("maritalStatus").value,
                        contactNumber: document.getElementById("contactNumber").value,
                        email: document.getElementById("email").value,
                        language: document.getElementById("language").value,
                        skills: document.getElementById("skills").value.split(","),
                        objective: document.getElementById("objective").value,
                        education: getEducationEntries(),
                        experience: getExperienceEntries(),
                        references: document.getElementById("references").value,
                        font: document.getElementById("font").value,
                        pictureURL: pictureURL,
                    };
                    displayResume(currentResumeData);
                    return [2 /*return*/];
            }
        });
    });
}
// Helper functions
function getEducationEntries() {
    return Array.from(document.querySelectorAll(".education-entry")).map(function (entry) { return ({
        school: entry.querySelector(".education-school").value,
        year: entry.querySelector(".education-year").value,
        degree: entry.querySelector(".education-degree").value,
    }); });
}
function getExperienceEntries() {
    return Array.from(document.querySelectorAll(".experience-entry")).map(function (entry) { return ({
        employer: entry.querySelector(".experience-employer").value,
        startYear: entry.querySelector(".experience-start-year").value,
        endYear: entry.querySelector(".experience-end-year").value,
        role: entry.querySelector(".experience-role").value,
    }); });
}
function displayResume(data) {
    var formContainer = document.getElementById("form-container");
    var outputContainer = document.getElementById("output-container");
    var resumeDisplay = document.getElementById("resume-display");
    if (formContainer)
        formContainer.style.display = "none";
    if (outputContainer)
        outputContainer.classList.remove("hidden");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = "\n      <h1>".concat(data.name, "</h1>\n      <p>Father's Name: ").concat(data.fatherName, "</p>\n      <p>Age: ").concat(data.age, "</p>\n      <p>Address: ").concat(data.address, "</p>\n      <p>Marital Status: ").concat(data.maritalStatus, "</p>\n      <p>Contact Number: ").concat(data.contactNumber, "</p>\n      <p>Email: ").concat(data.email, "</p>\n      <p>Languages: ").concat(data.language, "</p>\n      <p>Skills: ").concat(data.skills.join(", "), "</p>\n      <p>Objective: ").concat(data.objective, "</p>\n      <h3>Education</h3>\n      ").concat(data.education.map(function (e) { return "<p>".concat(e.degree, " in ").concat(e.school, " (").concat(e.year, ")</p>"); }).join(""), "\n      <h3>Work Experience</h3>\n      ").concat(data.experience.map(function (e) { return "<p>".concat(e.role, " at ").concat(e.employer, " (").concat(e.startYear, " - ").concat(e.endYear, ")</p>"); }).join(""), "\n      <h3>References</h3>\n      <p>").concat(data.references, "</p>\n    ");
    }
}
// Restore form data
function editResume() {
    document.getElementById("form-container").style.display = "block";
    document.getElementById("output-container").classList.add("hidden");
}
// Initial rendering
document.addEventListener("DOMContentLoaded", renderForm);
