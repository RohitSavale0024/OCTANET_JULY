document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please enter a task.");
    } else {
        const taskName = document.querySelector('#newtask input').value;
        const priority = document.querySelector('#priority-select').value;
        const deadline = document.querySelector('#deadline-input').value;

        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${taskName}
                </span>
                <span class="priority ${priority}">
                    ${priority}
                </span>
                <span class="deadline">
                    ${deadline}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#newtask input").value = "";
        document.querySelector("#priority-select").value = "low";
        document.querySelector("#deadline-input").value = "";
    }
}
