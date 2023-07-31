// Extracting Dom Elements
let filterIssueForm = document.getElementById('filter-issue-from');

let issueJson = document.getElementById('issue-data').getAttribute('data');

let issues = JSON.parse(issueJson);

let issueList = document.getElementById('issues-list');

filterIssueForm.addEventListener('submit', function(e){
    e.preventDefault();

    let filteredIssues = [];

    let labelsList = filterIssueForm.querySelectorAll('input[type=checkbox]');
    let labelsElements = [...labelsList].filter((ele)=> ele.checked);


    let authorVal = filterIssueForm.querySelector('input[type=radio][name=author]:checked').ariaValueMax;

    let [...labelsArr] = labelsElements.map((ele)=> ele.value);

    issues.map((ele)=> {
        if(ele.author == authorVal) {
            if(!filteredIssues.includes(ele)) {
                filteredIssues.push(ele);
            }
        }

        labelsArr.map((label)=> {
            if(ele.labels.includes(label)) {
                if(!filteredIssues.includes(ele)) {
                    filteredIssues.push(ele);
                }
            }
        });
    });

    issueList.innerHTML = '';
    for(let issue of filteredIssues) {
        let div = document.createElement('div');
        div.style = 'none';
        div.innerHTML = `
        <div class="card w-100" >
          <div class="card-body" >
            <h4 class="card-title">Title : ${issue.title} </h4>
            <h5 class="card-title">Author : ${issue.author}</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              Description : ${issue.description}
            </h6>
          </div>
        </div>     
        `;

        issueList.appendChild(div);
    }
})