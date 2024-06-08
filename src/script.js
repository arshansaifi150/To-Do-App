
let form =document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    let newTask = document.querySelector('#task').value
    if (newTask == '') {
        alert('Enter a task')
    }
    else{
    document.querySelector('.card').innerHTML+=
    `<div class="js_input_task">
                <input type="checkbox" name="" id="checkbox">
                <div class="task-info">${newTask}</div>
                <button class="delete"><img src="https://img.icons8.com/?size=20&id=KPhFC2OwpbWV&format=png&color=000000" alt="" srcset=""></button>
            </div>`
        let checkbox = document.querySelectorAll('input[type=checkbox]')
        
         
        let task_info = document.querySelectorAll('.task-info')
        
        for(let i = 0; i<checkbox.length;i++){

            

            checkbox[i].addEventListener('change',()=>{
                if (checkbox[i].checked === true) {


                    let task_stroke = task_info[i]
                    task_stroke.innerHTML = `<s>${task_stroke.textContent}<s/>`
                    
                                
                    
                    
                        
                }
                else{
                    
                    let task_stroke = task_info[i]
                    task_stroke.innerHTML = `${task_stroke.textContent}`
                }
        
            })
    
        }
                
        
        
        

        let delBtn = document.querySelectorAll('.delete');
        for(let i = 0 ; i<delBtn.length ;i++){
        delBtn[i].addEventListener('click',()=>{
            delBtn[i].parentElement.remove();
        })
        }

        

        }

        form.reset()
        
        
        


})


