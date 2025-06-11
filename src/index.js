function toast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.remove("hide");
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
      toast.classList.add("hide");
    }, 3000);
}
