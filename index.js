//Why IIFE
(function(){
    
    const userList = (function(){
        const DOM = {}
        const users = [
          {name: 'digamber', phone:'1234'}
        ]
        const handleAddNewUserClick = (e) => {
            users.push({name:'bidhi',phone:'3425'})
            DOM.userListWrapperEl.innerHTML = '';
            renderUsers()
        }
        
        const eventListeners = ()=> {
          //bail early  
          if(DOM.container === null) return
  
          DOM.addNewUserButtonEl.addEventListener('click', handleAddNewUserClick)
        }
      
        const cacheDOM = () => {
            DOM.container = document.querySelector( '.user-list' )
            //Add New Button
            DOM.addNewUserButtonEl = DOM.container.querySelector('.user-list__add-new-user')
            //List of users wrapper
            DOM.userListWrapperEl = DOM.container.querySelector('.user-list__list-of-users')
        }
  
        const renderUsers = () => {
            users.map((user, index) => {
                DOM.userListWrapperEl.innerHTML += `<li class="user-list__add-new-user">${user.name}</li>`
            })
        }
      
        const init = () => {
            cacheDOM()
            eventListeners()
            renderUsers()
        }
      
        return { init: init }
  
       })()
  
    
    
  
    document.addEventListener('DOMContentLoaded', userList.init)
    
  
    document.addEventListener('DOMContentLoaded', function() {
      const submitButton = document.getElementById('submitButton');
      const clearButton = document.querySelector('.clearButton'); 
    
      function nameDisplay(e) {
          e.preventDefault();
          const input = document.querySelector('.name');
          const inputValue = input.value;
          const todo = document.createElement("li");
          const list = document.querySelector('.list');
    
          const closebtn = document.createElement('button');
          closebtn.textContent = 'x';
          closebtn.addEventListener('click', function() {
              list.removeChild(todo);
          });
    
          if (inputValue !== ''){
            todo.textContent = inputValue;
            todo.appendChild(closebtn);
            list.appendChild(todo);
          }
    
          input.value = ''; 
      }
    
      submitButton.addEventListener('click', nameDisplay);
    
      
      clearButton.addEventListener('click', function(e) {
          e.preventDefault();
          const list = document.querySelector('.list');
          list.innerHTML = ''; 
      });
    });
  
  
  })()
  
  
  