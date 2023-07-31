// Extracting DOM Elements
let searchIssueForm = document.getElementById('search-issue-form');

let searchJson = document.getElementById('issue-data').getAttribute('data');

let searchIssues = JSON.parse(searchJson);

let searchList = document.getElementById('issues-list');

searchIssueForm.addEventListener('submit', function(e){
    e.preventDefault();

    let searchedIssues = [];

    let titleValue = searchIssueForm.querySelector('input[name="tie"]').value;

    let descriptionValue = searchIssueForm.querySelector('input[name="des"').value;

    searchIssues.map((ele)=>{
        if(ele.title == titleValue || ele.description == descriptionValue) {
            if(!searchedIssues.includes(ele)){
                searchedIssues.push(ele);
            }
        }
    });

    searchList.innerHTML = '';
    for(let issue of searchedIssues) {
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
        searchList.appendChild(div);
    }
})