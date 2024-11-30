const userData = [
    { username: "amk1", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 10 },
    { username: "amk2", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 20 },
    { username: "amk3", wallet: "xxx3", balance: 30 },
    { username: "amk4", wallet: "xxx4", balance: 40 },
    { username: "amk5", wallet: "xxx5", balance: 50 },
    { username: "amk6", wallet: "xxx6", balance: 60 },
    { username: "amk7", wallet: "xxx7", balance: 70 },
    { username: "amk8", wallet: "xxx8", balance: 80 },
    { username: "amk9", wallet: "xxx9", balance: 90 },
    { username: "amk10", wallet: "xxx10", balance: 100 }
];

const validUsername = "@muhammadshuayb";
const validPassword = "kmk";

document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const messageDiv = document.getElementById("custom-message");

    if (!username || !password) {
        messageDiv.textContent = "Both fields are required!";
        messageDiv.style.color = "red";
    } else if (username !== validUsername || password !== validPassword) {
        messageDiv.textContent = "Invalid username or password! Please try again.";
        messageDiv.style.color = "red";
    } else {
        messageDiv.textContent = "";
        document.getElementById("login-section").style.display = "none";
        document.getElementById("search-section").style.display = "block";
    }
});

function searchUser() {
    const query = document.getElementById("search-bar").value.trim().toLowerCase();
    const userDetailsDiv = document.getElementById("user-details");
    userDetailsDiv.innerHTML = "";

    const filteredUser = userData.find(user => user.username.toLowerCase() === query);

    if (filteredUser) {
        const walletFormatted = filteredUser.wallet.length > 24
            ? `${filteredUser.wallet.slice(0, 24)}<br>${filteredUser.wallet.slice(24)}`
            : filteredUser.wallet;

        userDetailsDiv.innerHTML = `
            <p><strong>Serial Number:</strong> ${userData.indexOf(filteredUser) + 1}</p>
            <p><strong>Username:</strong> ${filteredUser.username}</p>
            <p><strong>Wallet Address:</strong> ${walletFormatted}</p>
            <p><strong>Balance:</strong> ${filteredUser.balance}</p>
        `;
    } else {
        userDetailsDiv.innerHTML = `<p style="color: red;">No user found with the provided username.</p>`;
    }
}