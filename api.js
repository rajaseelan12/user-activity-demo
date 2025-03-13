const API_URL = "https://your-deployed-backend-url/upload";

async function uploadMedia() {
    const formData = new FormData();
    formData.append("media_type", document.getElementById("mediaType").value);
    formData.append("userid", document.getElementById("userid").value);
    formData.append("password", document.getElementById("password").value);
    formData.append("media_file", document.getElementById("mediaFile").files[0]);

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            body: formData
        });
        const result = await response.json();
        document.getElementById("response").textContent = JSON.stringify(result, null, 2);
    } catch (error) {
        document.getElementById("response").textContent = "Error: " + error.message;
    }
}
