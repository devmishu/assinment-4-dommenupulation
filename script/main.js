
// global variable

// interview and reject
let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';

// totaljob, interview Element
let jobListElement = document.getElementById('job-list');
let totalJobElement = document.getElementById('total-job');
let availableJobsElement = document.getElementById('available-jobs');


let totalInterviewElement = document.getElementById('interview');
let availableInterviewJobsElement = document.getElementById('available-interview-jobs');


let totalRejectedElement = document.getElementById('rejected');
let availableRejectedJobsElement = document.getElementById('available-rejected-jobs');

const interviewBtn = document.getElementById('interview-btn');
const rejectedBtn = document.getElementById('rejected-btn');

const filterSection = document.getElementById('filter-section');



// toggle button Element
let allJobElement = document.getElementById('all-job-btn');
let interviewElement = document.getElementById('interview-btn');
let rejectedElement = document.getElementById('rejected-btn');

let noJobsElement = document.getElementById('nojobs');

const mainContainer = document.querySelector('main');


function claculateCount() {
    totalJobElement.innerText = jobListElement.children.length;
    totalInterviewElement.innerText = interviewList.length;
    totalRejectedElement.innerText = rejectedList.length;
    availableJobsElement.innerText = `${jobListElement.children.length} Jobs`;
}


// toggle navigat function
function toggleStyle(id) {
    allJobElement.classList.add('text-gray-500');
    allJobElement.classList.remove('bg-blue-600', 'text-white');
    interviewElement.classList.remove('bg-blue-600', 'text-white');
    rejectedElement.classList.remove('bg-blue-600', 'text-white');

    const selectedElement = document.getElementById(id);
    selectedElement.classList.add('bg-blue-600', 'text-white');

    currentStatus = id;
    console.log(currentStatus);
    if (id === 'interview-btn') {
        jobListElement.classList.add('hidden');
        availableInterviewJobsElement.innerText = `${interviewList.length} of `;
        availableRejectedJobsElement.innerText = '';

        filterSection.classList.remove('hidden');
        renderInterview();
    }

    if (id === 'rejected-btn') {
        jobListElement.classList.add('hidden');
        availableRejectedJobsElement.innerText = `${rejectedList.length} of `;
        availableInterviewJobsElement.innerText = '';

        filterSection.classList.remove('hidden');
        renderRejected();
    }

    if (id === 'all-job-btn') {

        jobListElement.classList.remove('hidden');
        noJobsElement.classList.add('hidden');

        availableInterviewJobsElement.innerText = '';
        availableRejectedJobsElement.innerText = '';

    }
}

// element Delete function
function deleteJobElement() {
    mainContainer.addEventListener('click', function (event) {
        const jobElement = event.target.parentNode.parentNode;
        if (event.target.classList.contains('delete-btn')) {
            jobElement.remove();

            // Card type check
            const type = jobElement.querySelector('.type').innerText;

            if (type === 'interview') {
                interviewList = interviewList.filter(function (item) {
                    return item.companyName !== jobElement.querySelector('.company-name').innerText;
                });
            } else if (type === 'rejected') {
                rejectedList = rejectedList.filter(function (item) {
                    return item.companyName !== jobElement.querySelector('.company-name').innerText;
                });
            }
            claculateCount();

            if (currentStatus === 'interview-btn') {
                renderInterview();
            }

            if (currentStatus === 'rejected-btn') {
                renderRejected();
            }

            if (currentStatus === 'interview-btn') {
                availableInterviewJobsElement.innerText = `${interviewList.length} of `;
            }

            if (currentStatus === 'rejected-btn') {
                availableRejectedJobsElement.innerText = `${rejectedList.length} of `;
            }

        }
    });
}


function deleteInterviewElement() {
    for (const element of interviewList) {
        if (element === "interview") {
            deleteJobElement();

        }
    }
}


function interviewAndRejecetCount() {
    mainContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('interview-toggle-btn')) {
            const jobElement = event.target.parentNode.parentNode;

            const companyName = jobElement.querySelector('.company-name').innerText;
            const position = jobElement.querySelector('.position').innerText;
            const location = jobElement.querySelector('.location').innerText;
            const salary = jobElement.querySelector('.salary').innerText;
            const type = jobElement.querySelector('.type').innerText;
            const description = jobElement.querySelector('.description').innerText;

            jobElement.querySelector('.type').innerText = 'interview';


            const jobInfo = {
                companyName: companyName,
                position: position,
                location: location,
                salary: salary,
                type: 'interview',
                description: description,
            }

            const companyNameExit = interviewList.find(function (item) {
                return item.companyName == jobInfo.companyName;
            });



            if (!companyNameExit) {
                interviewList.push(jobInfo);
                jobElement.querySelector('.type').classList.remove('hidden');
                jobElement.querySelector('.type').classList.add('text-green-600', 'border-2', 'border-green-600');

            }

            rejectedList = rejectedList.filter(function (item) {
                return item.companyName != jobInfo.companyName
            });

            if (currentStatus == 'interview-btn') {
                renderInterview();
            }
            if (currentStatus == 'rejected-btn') {
                renderRejected();
            }

            claculateCount();


        } else if (event.target.classList.contains('rejected-toggle-btn')) {
            const jobElement = event.target.parentNode.parentNode;

            const companyName = jobElement.querySelector('.company-name').innerText;
            const position = jobElement.querySelector('.position').innerText;
            const location = jobElement.querySelector('.location').innerText;
            const salary = jobElement.querySelector('.salary').innerText;
            const type = jobElement.querySelector('.type').innerText;
            const description = jobElement.querySelector('.description').innerText;

            jobElement.querySelector('.type').innerText = 'rejected';


            const jobInfo = {
                companyName: companyName,
                position: position,
                location: location,
                salary: salary,
                type: 'rejected',
                description: description,
            }

            const companyNameExit = rejectedList.find(function (item) {
                return item.companyName == jobInfo.companyName;
            });



            if (!companyNameExit) {
                rejectedList.push(jobInfo);
                console.log(rejectedList);
                jobElement.querySelector('.type').classList.remove('hidden');
                jobElement.querySelector('.type').classList.add('text-red-600', 'border-2', 'border-red-600');

            }

            interviewList = interviewList.filter(function (item) {
                return item.companyName !== jobInfo.companyName
            });

            if (currentStatus == 'rejected-btn') {
                renderRejected();
            }
            if (currentStatus === 'interview-btn') {
                renderInterview();
            }
            claculateCount();

        }
        // deleteJobElement();
    });
}


function renderInterview() {
    filterSection.innerHTML = '';
    if (interviewList.length === 0) {
        noJobsElement.classList.remove('hidden');
    } else {
        noJobsElement.classList.add('hidden');
    }

    if (currentStatus === 'interview-btn') {
        availableInterviewJobsElement.innerText = `${interviewList.length} of `;
    }

    if (currentStatus === 'rejected-btn') {
        availableRejectedJobsElement.innerText = `${rejectedList.length} of `;
    }
    for (const interview of interviewList) {
        let div = document.createElement('div');
        div.classList.add('shadow', 'rounded-md', 'p-6', 'flex', 'items-start', 'justify-between');
        div.innerHTML = `
        <!-- left side -->
                    <div class="space-y-1">
                        <h2 class="company-name text-xl font-semibold">${interview.companyName}</h2>
                        <p class="position text-gray-500">${interview.position}</p>
                        <p class="location text-gray-500 mt-4">${interview.location}<span class="salary">${interview.salary}</span></p>

                        <button
                            class="type mt-3 px-3 py-2 rounded-md font-medium bg-[#EEF4FF] text-[12px] text-green-600 border-2 border-green-600 uppercase  cursor-pointer">${interview.type}</button>


                        <p class="description mt-1">${interview.description}</p>

                        <div class="space-x-2">
                            <button
                                class="interview-toggle-btn mt-3 px-3 py-2 rounded-md font-semibold border-2 border-green-600 text-gray-600 text-[12px] uppercase cursor-pointer ">interview</button>
                            <button
                                class="rejected-toggle-btn mt-3 px-3 py-2 rounded-md font-semibold border-2 border-red-600 text-red-600 text-[12px] uppercase cursor-pointer  ">Rejected</button>
                        </div>
                    </div>

                    <!-- right side -->
                    <div>
                        <img class="delete-btn w-20 cursor-pointer " src="./images/delete.png" alt="delete img">
                    </div>
        `
        filterSection.appendChild(div);
    }
}

function renderRejected() {
    filterSection.innerHTML = '';

    if (rejectedList.length === 0) {
        noJobsElement.classList.remove('hidden');
    } else {
        noJobsElement.classList.add('hidden');
    }

    if (currentStatus === 'interview-btn') {
        availableInterviewJobsElement.innerText = `${interviewList.length} of `;
    }

    if (currentStatus === 'rejected-btn') {
        availableRejectedJobsElement.innerText = `${rejectedList.length} of `;
    }

    for (const rejected of rejectedList) {
        let div = document.createElement('div');
        div.classList.add('shadow', 'rounded-md', 'p-6', 'flex', 'items-start', 'justify-between');
        div.innerHTML = `
        <!-- left side -->
                    <div class="space-y-1">
                        <h2 class="company-name text-xl font-semibold">${rejected.companyName}</h2>
                        <p class="position text-gray-500">${rejected.position}</p>
                        <p class="location text-gray-500 mt-4">${rejected.location}<span class="salary">${rejected.salary}</span></p>

                        <button
                            class="type mt-3 px-3 py-2 rounded-md font-medium bg-[#EEF4FF] text-[12px] text-red-600 border-2 border-red-600  uppercase  cursor-pointer   ">${rejected.type}</button>


                        <p class="description mt-1">${rejected.description}</p>

                        <div class="space-x-2">
                            <button
                                class="interview-toggle-btn mt-3 px-3 py-2 rounded-md font-semibold border-2 border-green-600 text-gray-600 text-[12px] uppercase cursor-pointer ">interview</button>
                            <button
                                class="rejected-toggle-btn mt-3 px-3 py-2 rounded-md font-semibold border-2 border-red-600 text-red-600 text-[12px] uppercase cursor-pointer  ">Rejected</button>
                        </div>
                    </div>

                    <!-- right side -->
                    <div>
                        <img class="delete-btn w-20 cursor-pointer " src="./images/delete.png" alt="delete img">
                    </div>
        `
        filterSection.appendChild(div);
    }
}






claculateCount();
deleteJobElement();
interviewAndRejecetCount();