const sharedBottons = document.querySelectorAll(".tile-share");
async function copyText(event) {
  event.preventDefault();
  const link = this.getAttribute("link");
  try {
    await navigator.clipboard.writeText(link);
    alert("Copied the text: " + link);
  } catch (error) {
    console.log(error);
  }
}
sharedBottons.forEach((sharebutton) =>
  sharebutton.addEventListener("click", copyText)
);
