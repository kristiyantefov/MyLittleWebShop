const updateEmailHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const email = document.querySelector("#updateEmail").value.trim();
// update the email in the database
  const response = await fetch("/api/users/", {
    method: "PUT",
    body: JSON.stringify({ email }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    alert("Email Updated");
    document.location.replace("/");
  } else {
    alert("Failed to update");
  }
};
if(window.location.pathname == '/update-e') {
document.querySelector("#updateEmailBtn").addEventListener("submit", updateEmailHandler);
}