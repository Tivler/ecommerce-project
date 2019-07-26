function submitAction() {
    const form = document.querySelector('.form');
    const firstName = document.querySelector('#inputFirstName');
    const lastName = document.querySelector('#inputLastName');
    const email = document.querySelector('#inputEmail');
    const message = document.querySelector('#inputMessage');
    let empty = "";

    form.addEventListener("submit", function (e) {
        alert(`Thanks For Joining Slotify ${firstName.value}!`);
        e.preventDefault();
        firstName.value = empty;
        lastName.value = empty;
        email.value = empty;
        message.value = empty;
    });
}

submitAction();