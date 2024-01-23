const body = document.body;
let params = new URLSearchParams(document.location.search);
let formInfo = {
    'first-name': params.get("fname") || "",
    'last-name': params.get("lname") || "",
    'company': params.get("cname") || "",
    'job-title': params.get("jtitle") || "",
    'email': params.get("email") || "",
    'phone-name': params.get("pnumber") || ""
}

console.log(formInfo);
const ulList = document.createElement("ul");

for (const key in formInfo) {
    const li = document.createElement("li");
    li.innerHTML = `${key}: ${formInfo[key]}`;
    ulList.appendChild(li);
}

body.appendChild(ulList);