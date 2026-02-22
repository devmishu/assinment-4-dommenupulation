
// global variable

// totaljob Element
let jobListElement = document.getElementById('job-list');
let totalJobElement = document.getElementById('total-job');
let availableJobsElement = document.getElementById('available-jobs');

// toggle button Element
let allJobElement = document.getElementById('all-job-btn');
let interviewElement = document.getElementById('interview-btn');
let rejectedElement = document.getElementById('rejected-btn');

let nojobsElement = document.getElementById('nojobs');



// total job count function
function countTotalJob() {
    let countTotalJob = 0;
    for (const element of jobListElement.children) {
        countTotalJob++;
    }
    totalJobElement.innerText = countTotalJob;
    availableJobsElement.innerText = `${countTotalJob} Jobs`;


}
countTotalJob();


function toggleStyle(id) {
    allJobElement.classList.add('text-white', 'text-gray-500' );
    allJobElement.classList.remove('bg-blue-600', 'text-white');
    interviewElement.classList.remove('bg-blue-600', 'text-white');
    rejectedElement.classList.remove('bg-blue-600', 'text-white');

    const selectedElement = document.getElementById(id);
    selectedElement.classList.add('bg-blue-600', 'text-white');


    if (id === 'interview-btn') {
        jobListElement.classList.add('hidden');
        nojobsElement.classList.remove('hidden');
        
    }

    if (id === 'rejected-btn') {
        jobListElement.classList.add('hidden');
        nojobsElement.classList.remove('hidden');
        
    }

    if (id === 'all-job-btn') {
        jobListElement.classList.remove('hidden');
    }

}