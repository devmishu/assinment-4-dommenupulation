
// global variable

// interview and reject
const interviewList = [];
const rejectList = [];

// totaljob Element
let jobListElement = document.getElementById('job-list');
let totalJobElement = document.getElementById('total-job');
let availableJobsElement = document.getElementById('available-jobs');
let countTotalJob = 0;

// toggle button Element
let allJobElement = document.getElementById('all-job-btn');
let interviewElement = document.getElementById('interview-btn');
let rejectedElement = document.getElementById('rejected-btn');

let noJobsElement = document.getElementById('nojobs');

const mainContainer = document.querySelector('main');
console.log(mainContainer);



// total job count function
function countTotalJobFunc() {
    countTotalJob = jobListElement.children.length;
    totalJobElement.innerText = countTotalJob;
    availableJobsElement.innerText = `${countTotalJob} Jobs`;
}


// toggle navigat function
function toggleStyle(id) {
    allJobElement.classList.add('text-gray-500');
    allJobElement.classList.remove('bg-blue-600', 'text-white');
    interviewElement.classList.remove('bg-blue-600', 'text-white');
    rejectedElement.classList.remove('bg-blue-600', 'text-white');

    const selectedElement = document.getElementById(id);
    selectedElement.classList.add('bg-blue-600', 'text-white');


    if (id === 'interview-btn') {
        jobListElement.classList.add('hidden');
        noJobsElement.classList.remove('hidden');

    }

    if (id === 'rejected-btn') {
        jobListElement.classList.add('hidden');
        noJobsElement.classList.remove('hidden');

    }

    if (id === 'all-job-btn') {
        jobListElement.classList.remove('hidden');
    }

}

// element Delete function
function deleteJobElement() {
    mainContainer.addEventListener('click', function (event) {
        const jobElement = event.target.parentNode.parentNode;
        if (event.target.classList.contains('delete-btn')) {
            jobElement.remove();
            countTotalJobFunc();
        }
    });
}

deleteJobElement();
countTotalJobFunc();