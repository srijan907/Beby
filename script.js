function obfuscateCode() {
    let inputCode = document.getElementById("inputCode").value;
    let securityLevel = document.getElementById("securityLevel").value;

    if (inputCode.trim() === "") {
        alert("Please enter some JavaScript code!");
        return;
    }

    let obfuscatedCode = btoa(inputCode);  // Simple Base64 Encoding (For Demo)

    document.getElementById("outputCode").value = obfuscatedCode;
}

function copyCode() {
    let outputCode = document.getElementById("outputCode");
    outputCode.select();
    document.execCommand("copy");
    alert("Copied to Clipboard!");
}

function downloadCode() {
    let outputCode = document.getElementById("outputCode").value;
    let blob = new Blob([outputCode], { type: "text/javascript" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "protected.js";
    link.click();
}
