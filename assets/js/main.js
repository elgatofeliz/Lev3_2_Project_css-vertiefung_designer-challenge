function changeForm() {
    document.getElementById("form").classList.add('invisible');
    document.getElementById("div").classList.remove('invisible');
    console.log(document.getElementById("mail").value);
}

function refreshPage() {
    window.location.reload();
}