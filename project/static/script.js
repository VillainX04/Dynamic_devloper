document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    // Call your backend API for login here
    console.log(`Login with ${email} and ${password}`);
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    // Call your backend API for signup here
    console.log(`Sign up with ${email} and ${password}`);
});

document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('resourceTitle').value;
    const file = document.getElementById('resourceFile').files[0];
    const tags = document.getElementById('resourceTags').value.split(',');
    // Call your backend API for file upload here
    console.log(`Uploading ${title} with tags: ${tags}`);
});

// Example: Function to display resources
function displayResources(resources) {
    const resourceList = document.getElementById('resourceList');
    resourceList.innerHTML = '';
    resources.forEach(resource => {
        const resourceItem = document.createElement('div');
        resourceItem.innerHTML = `<h3>${resource.title}</h3><p>Tags: ${resource.tags.join(', ')}</p>`;
        resourceList.appendChild(resourceItem);
    });
}

// Example resources to display (replace with your API call)
const exampleResources = [
    { title: 'Intro to Python', tags: ['Python', 'Programming'] },
    { title: 'Data Science Basics', tags: ['Data Science', 'Statistics'] },
];
displayResources(exampleResources);
