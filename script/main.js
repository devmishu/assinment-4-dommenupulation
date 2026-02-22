
// global variable

// interview and reject
let interviewList = [];
let rejectedList = [];

// totaljob, interview Element
let jobListElement = document.getElementById('job-list');
let totalJobElement = document.getElementById('total-job');
let availableJobsElement = document.getElementById('available-jobs');

let totalInterviewElement = document.getElementById('interview');

let totalRejectedElement = document.getElementById('rejected');




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
            // countTotalJobFunc();
            claculateCount();
        }

    });
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
                console.log(interviewList);

            }

            rejectedList = rejectedList.filter(function (item) {
                return item.companyName != jobInfo.companyName
            });
            
            claculateCount();

        } else if (event.target.classList.contains('rejected-toggle-btn')) {
            const jobElement = event.target.parentNode.parentNode;

            const companyName = jobElement.querySelector('.company-name').innerText;
            const position = jobElement.querySelector('.position').innerText;
            const location = jobElement.querySelector('.location').innerText;
            const salary = jobElement.querySelector('.salary').innerText;
            const type = jobElement.querySelector('.type');
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
                type.classList.remove('hidden');
            }

            interviewList = interviewList.filter(function (item) {
                return item.companyName !== jobInfo.companyName
            });

            claculateCount();
        }

    });


}






claculateCount();
deleteJobElement();
interviewAndRejecetCount();




// // step 2 finish
//             // removing the plant from struggling list
//             companyNameExit = interviewList.filter(function (item) {
//                 return item.companyName != jobInfo.companyName;
//             });

//             // after remove rerender the html
//             if (currentStatus == 'struggling-filter-btn') {
//                 renderStruggling()
//             }

//             calculateCount()















// const interview = jobElement.querySelector('.interview-toggle-btn');
// const rejected = jobElement.querySelector('.rejected-toggle-btn');
// console.log(rejected);