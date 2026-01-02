const lastModified = new Date(document.lastModified);
const options = { year: 'numeric', month: 'long' };
document.getElementById('last-update').textContent = lastModified.toLocaleDateString('en-US', options);