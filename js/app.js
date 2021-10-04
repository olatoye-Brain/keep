class UserCheck{
  succesFeedback(element,  msg){
    element.innerText = msg;
    let card = document.querySelector('.card-content');
    card.insertAdjacentElement("afterbegin", element);

    setTimeout(()=>{
      card.removeChild(element);
    }, 3000)
  }

  errorFeedBack(element, msg){
    element.innerText = msg;
    let card = document.querySelector('.card-content');
    card.insertAdjacentElement("afterbegin", element);

    setTimeout(()=>{
      card.removeChild(element);
    }, 2000);
  }
}

class TimeOut{

  loginSetTimeOut(){
    setTimeout(()=>{
      const card_action = document.querySelector('.card-action');
      card_action.addEventListener('click', loginPage);
      const loginForm = document.querySelector('#login');
      loginForm.addEventListener('submit', loginFunction);
    },100)
  }

  signSetTimeOut(){
    setTimeout(()=>{
      const card_action = document.querySelector('.card-action');
      card_action.addEventListener('click', signupPage);
      const signupForm = document.querySelector('#create_Account');
      signupForm.addEventListener('submit', signupFunction);
    },100)
  }

}

class UI{
  loginTemp(element){
  element.innerHTML = `
  <div class="row">
  <div class="col m6 offset-m3 s12 mt-50">
      
      <div class="card pt-20">
          <div class="card-title">
              <h4 class="center">Login</h4>
          </div>
          <div class="card-content">
              <form id="login">
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" id="username" class="validate">
                        <label for="username" class="">Username</label>
                        <span class="helper-text" data-error="wrong" data-success="right">Enter your username (lowercase)</span>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="password" type="password" class="validate">
                        <label for="password">Password</label>
                        <span class="helper-text" data-error="wrong" data-success="right">Provide your password</span>
                    </div>
                </div>
                <div class="row center">
                        <input type="submit" class="btn blue darken-4" value="login">
                </div>
            </form>
          </div>
          <div class="card-action">
            <p>I need Account <a href="#" id="loginPage" class="blue-grey-text right signupTemp lower-case blue-text darken-4">Sign up</a> </p>
          </div>
      </div>
  </div>
</div>
  `;
  }

  signupTemp(element){
    element.innerHTML = `
    <div class="row">
    <div class="col m6 offset-m3 s12 mt-50">
        <div class="card pt-20">
          <div class="card-title">
              <h4 class="center">Sign up</h4>
          </div>
       <div class="card-content">
          <form id="create_Account">
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" id="username" class="validate">
                    <label for="username" class="">Username</label>
                    <span class="helper-text" data-error="wrong" data-success="right">Enter your username</span>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="password" type="password" class="validate">
                    <label for="password">Password</label>
                    <span class="helper-text" data-error="wrong" data-success="right">Provide your password</span>
                </div>
            </div>
            <div class="row center">
                    <input type="submit" class="btn blue-grey darken-4" value="Sign up">
            </div>
        </form>
        </div>
        
        <div class="card-action">
            <p>I need Account <a href="#" id="signupPage" class="blue-grey-text right loginTemp lower-case blue-text darken-4">Login</a> </p>
          </div>
    </div>
</div>
    `
  }

  profileTemp(element, name, img, keepCount = 0, profileCard){
    let nav = document.createElement('nav');
    nav.innerHTML = `
      <nav class="fixed blue  darken-4 ">
        <div class="container">
            <div class="nav-wrapper deep-purple darken-4">
                <a href="#" class="brand-logo left" id="keepNote">Keep Note</a>
                <ul id="nav-mobile" class="right">
                <li><a id="sign-out" href="#">Sign-out</a></li>
                </ul>
            </div>
        </div>
      </nav>
    `;
    element.innerHTML = `
      <div class="row"></div>
      <div class="row mt-50">
      <div class="col s12 m4">
          <div class="card ${profileCard} fixed-card">
          <div class="card-content2">
              <p class="center">
                  <img src="${img}" alt="" class="hoverable circle z-depth-5" style='width:120px' id="img" >
                  <span class="card-title white-text lower-case">${name}</span>
              </p>
              <div class="collection z-depth-3 listInfo">
              <p class="collection-item black-text" id="keepLink">Keeps<span class="badge flow-text" id="keepCounter" >${keepCount}</span></p>
              </div>
          </div>
          </div>
          <div class="div">
              <div class="row box-card">
                  <a href="#" class="col s1 box blue darken-4"></a>
                  <a href="#" class="col s1 box red darken-4"></a>
                  <a href="#" class="col s1 box blue-grey darken-4"></a>
                  <a href="#" class="col s1 box pink darken-4 darken-4"></a>
                  <a href="#" class="col s1 box brown darken-4"></a>
                  <a href="#" class="col s1 box deep-purple darken-4"></a>
                  <a href="#" class="col s1 box purple darken-4"></a>
                  <a href="#" class="col s1 box black"></a>
                  <a href="#" class="col s1 box cyan darken-4"></a>
                  <a href="#" class="col s1 box teal darken-4"></a>
                  <a href="#" class="col s1 box indigo darken-4"></a>
              </div>
          </div>
          <form class="collection-item black-text" id="file-upload">
            <input id="file"  type="file"/>
            <input type="submit" class="btn btn-small blue mt-10" value="Upload">
            <div>
            <small class="helper-text grey-text light-2" data-error="wrong" data-success="right">
            Ensure to upload from: <span>&nbsp;keep/img/110&nbsp;</span><br> Data is stored locally, copy your image to folder :)  <a href='#' class='blue-text lighten-2-text' id='delete_account'>Delete Account</a>
            </small>
            </div>
          </form>
      </div>
      <div class="col s12 m8">
          <div class="card keepForm">
              <div class="card-content">
                  <form action="" id="postForm">
                    <div class="input-field">
                        <textarea name="" id="post-title" class="materialize-textarea" data-length="120"></textarea>
                        <label for="post-title">Enter a keep</label>
                    </div>
                    <div class="input-field">
                        <input  id="post-content" type="text" class="validate">
                        <label for="post-content">Note Content</label>
                    </div>
                      <input type="submit" class="btn blue darken-4 btn-small" value="Add Note">
                  </form>
              </div>
          </div>
          
          <div class="keepCard">
            
          </div>
      </div>
      </div>
    `;

    body.insertAdjacentElement("afterbegin", nav);
  }
}

class Keep{
  
  constructor(time){
    this.time =  new Date(time);
  }

  displayKeepCreated(id, title, content, timePost, day) {
    let card = document.createElement('div');
		card.className = this.cardColor();
		card.classList.add('card');

		card.innerHTML = `
      <div class="card-content">
          <div class="md-text white-text darken-4-text flow-text">
          <span class='rightwhite-text title'>${title.toUpperCase()}</span>
          <span class='right vsm-text  white-text darken-2-text'>${timePost}</span>
          </div>
          <div class="white-text content-post">${content}</div>
      </div>
      <div class="card-action small" id='footerID'>
        <a href="#" class="mr-10 blue-text darken-4-text sm-text lower-case white-text edit" data-id=${id}>Edit</a> 
        <a href="#" class="blue-text darken-4-text sm-text lower-case white-text delete" data-id=${id}>Delete</a>  
        <span class="right vsm-text white-text"><strong>${day}</strong></span>
      </div>
    `;

    return card
  }

  createKeep(id, title, content, element, timePost, day){
    let card = document.createElement('div');
    card.className = this.cardColor();
    card.classList.add('card');
    
    card.innerHTML = `
      <div class="card-content">
          <div class="md-text white-text darken-4-text flow-text">
          <span class='rightwhite-text title'>${title.value.toUpperCase()}</span>
          <span class='right vsm-text  white-text darken-2-text'>${timePost}</span>
          </div>
          <div class="white-text content-post">${content.value}</div>
      </div>
      <div class="card-action small" id='footerID'>
        <a href="#" class="mr-10 blue-text darken-4-text sm-text lower-case white-text edit" data-id=${id}>Edit</a> 
        <a href="#" class="blue-text darken-4-text sm-text lower-case white-text delete" data-id=${id}>Delete</a>  
        <span class="right vsm-text white-text"><strong>${day}</strong></span>
      </div>
    `;

    // element.appendChild(card);
    element.insertAdjacentElement("afterbegin", card);
  }

  displayKeep(id, title, content, time, timePosted, element){
    let card = document.createElement('div');
    card.className = this.cardColor();
    card.classList.add('card');
    
    card.innerHTML = `
      <div class="card-content">
          <div class="md-text white-text darken-4-text flow-text ">
          <span class='rightwhite-text title'>${title}</span>
          <span class='right vsm-text  white-text darken-2-text'>${timePosted}</span></div>
          <div class="white-text">${content}</div>
      </div>
      <div class="card-action small">
        <a href="#" class="mr-10 blue-text darken-4-text sm-text lower-case white-text edit" data-id=${id}>Edit</a> 
        <a href="#" class="blue-text darken-4-text sm-text lower-case white-text delete" data-id=${id}>Delete</a>  
        <span class="right vsm-text white-text"><strong>${time}</strong></span>
      </div>
    `;

    // element.appendChild(card);
    element.insertAdjacentElement("afterbegin", card);
  }

  noKeeps(content, element){
    let card = document.createElement('div');
    card.className = this.cardColor();
    card.classList.add('card', 'nokeeps');
    
    card.innerHTML = `
      <div class="card-content">
          <div class="flow-text white-text center">${content}</div>
      </div>
    `;

    // element.appendChild(card);
    element.insertAdjacentElement("afterbegin", card);
  }

  timeKeep(){
      const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
      // return `${this.time.getDate()} ${this.time.getMonth()  + 1} ${this.time.getFullYear()}`; 
      return `${this.time.getDate()} ${month[this.time.getMonth()]}, (${days[this.time.getDay()]}).`; 

  }

  cardColor(){
    let randomRage =  (min, max) =>{
      return Math.floor(Math.random() * (max - min)) + min;
    }
    let bgcolor = ['blue darken-4','deep-purple darken-4','orange darken-4','blue-grey darken-4', 'red darken-4', 'pink darken-4', 'purple darken-4', 'indigo darken-4', 'red darken-4','cyan darken-4', 'teal darken-4', 'yellow darken-4', 'amber darken-4', 'deep-orange darken-4','brown darken-4', 'grey darken-4', 'black'];
    let res =  bgcolor[randomRage(bgcolor.length , 0)];

    return res;
  }

  genID(){
      let put = [];
      let alp = ['a','b','c','d','e','f','g','h','l','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
      for(let i = 0 ; i<5; i++){
          let randomAlp = Math.floor(Math.random() * alp.length);
          // let randomNum = 
          put.push(`${alp[randomAlp]}${Math.floor(Math.random() * 10)}`);
      }
      return put.join('');
  }
}

const container = document.querySelector('.container');
const body = document.querySelector('#body');


function loginFunction(e){
  e.preventDefault();
  console.log('submit');
  e.preventDefault();
  console.log(e.target);
  let user = new UserCheck();
  let action = document.createElement('div');

  if(username.value === '' ||  password.value === ''){
    action.className = 'card-action red center white-text';
    user.errorFeedBack(action, 'All fields is required');
  }else{
    userLogin(username, password);
  }
}


function signupFunction(e){
  e.preventDefault();
  console.log('submit');
  e.preventDefault();
  console.log(e.target);
  let user = new UserCheck();
  let action = document.createElement('div');

  if(username.value === '' ||  password.value === '' ){
    action.className = 'card-action red center white-text';
    user.errorFeedBack(action, 'All fields is required');
  }else{
      addUser(username, password);
    console.log(`${username.value}`)
    username.value = '';
    password.value = '';
   

  }
}

function addUser(username,  password){
      let feed = new UserCheck();
      let action = document.createElement('div');
      let user =  {
        username: username.value.toLowerCase(),
        password: password.value
      }
      console.log(user);
      let users;
      let userKeep;

      users = localStorage.getItem('users')? JSON.parse(localStorage.getItem('users')) : [];
      localStorage.setItem('users', JSON.stringify(users));

      userKeep = localStorage.getItem('userKeep')? JSON.parse(localStorage.getItem('userKeep')) : [];
      localStorage.setItem('userKeep', JSON.stringify(userKeep));

      if(users){
          let data = JSON.parse(localStorage.getItem('users'));

          let update =  data.some(item=>{
              return (item.username === user.username)
          });

          if(update){
              action.className = 'card-action red center white-text';
              feed.succesFeedback(action, `${username.value} already exist`);
              console.log(true);

          }else{
              users.push(user);
              localStorage.setItem('users', JSON.stringify(users));
              data = JSON.parse(localStorage.getItem('users'));

              action.className = 'card-action green darken-1 center white-text';
              feed.succesFeedback(action, `${username.value} added successfully`);
              console.log(false);
          }
    } 
}   

function userLogin(username, password){
    let ui = new UI();
    let feed = new UserCheck();
    let action = document.createElement('div');
    let img;
    let profileCard;

    users = localStorage.getItem('users');

    if(users){
          let data = JSON.parse(localStorage.getItem('users'));

          let update =  data.some(item=>{
              return (item.username === username.value && item.password === password.value)
          });
          
          console.log(data)
          console.log(update);
          console.log(`${username.value} : ${password.value}`)
          if(update){
            let keepCount;
              let dataKeep = JSON.parse(localStorage.getItem('userKeep'));
              let userKeepFind = dataKeep.some(userkeep => userkeep.username === username.value);
              if(dataKeep){
                img = "./img/110/blank.png";
                profileCard = "blue darken-4";
              }
              
              if(userKeepFind){
                console.log('I found it yea! i found it!');
                dataKeep.filter(user=>{
                  if(user.username === username.value){
                    if(user.img){
                      img = user.img;
                    }
                    if(user.profileCard){
                      profileCard = user.profileCard;
                    }
                  }
                  console.log(img)
                })
                
                dataKeep.filter(item=>{
                  if(item.username === username.value){
                    if(item.keeps){
                      keepCount = item.keeps.length
                    }else{
                      keepCount;
                    }
                  }
              });
              // console.log(found);
              }
              console.log(dataKeep);
              console.log(img)
              console.log(true);
              console.log('logged In');

              container.innerHTML = '';
              body.classList.remove('blue');
              body.classList.add('white');
              
              ui.profileTemp(container, username.value.toLowerCase(), img, keepCount, profileCard);
              let imgId = document.querySelector('#img');
              let listInfo = document.querySelector('.listInfo');

              let fileUpload = document.querySelector('#file-upload');
              let file = document.querySelector('#file');
              let boxCard = document.querySelector('.box-card');
              let colorProfile = document.querySelector('.fixed-card');
              let colorBox = ['teal','blue-grey','blue','cyan','deep-purple','red','purple','brown','pink','black','indigo'];


              boxCard.addEventListener('click', (e)=>{
                if(e.target.classList.contains('red')){
                  colorBox.forEach(element => {
                    if(colorProfile.classList.contains(element)){
                        colorProfile.classList.remove(element)
                      }
                  });
                  colorProfile.classList.add('red', 'darken-4');
                  profileCard = 'red darken-4';
                }
                if(e.target.classList.contains('teal')){
                  colorBox.forEach(element => {
                    if(colorProfile.classList.contains(element)){
                        colorProfile.classList.remove(element)
                      }
                  });
                  colorProfile.classList.add('teal', 'darken-4');
                  profileCard = 'teal darken-4';
                }
                if(e.target.classList.contains('blue-grey')){
                  colorBox.forEach(element => {
                    if(colorProfile.classList.contains(element)){
                        colorProfile.classList.remove(element)
                      }
                  });
                  colorProfile.classList.add('blue-grey', 'darken-4');
                  profileCard = 'blue-grey darken-4';
                }
                if(e.target.classList.contains('blue')){
                  colorBox.forEach(element => {
                    if(colorProfile.classList.contains(element)){
                        colorProfile.classList.remove(element)
                      }
                  });
                  profileCard = 'blue darken-4';
                  colorProfile.classList.add('blue', 'darken-4');
                }
                if(e.target.classList.contains('brown')){
                  colorBox.forEach(element => {
                    if(colorProfile.classList.contains(element)){
                        colorProfile.classList.remove(element)
                      }
                  });
                  profileCard = 'brown darken-4';
                  colorProfile.classList.add('brown', 'darken-4');
                }
                if(e.target.classList.contains('deep-purple')){
                  colorBox.forEach(element => {
                    if(colorProfile.classList.contains(element)){
                        colorProfile.classList.remove(element)
                      }
                  });
                  profileCard = 'deep-purple darken-4';
                  colorProfile.classList.add('deep-purple', 'darken-4');
                }
                if(e.target.classList.contains('purple')){
                  colorBox.forEach(element => {
                    if(colorProfile.classList.contains(element)){
                        colorProfile.classList.remove(element)
                      }
                  });
                  colorProfile.classList.add('purple', 'darken-4');
                  profileCard = 'purple darken-4';
                }
                if(e.target.classList.contains('pink')){
                  colorBox.forEach(element => {
                    if(colorProfile.classList.contains(element)){
                        colorProfile.classList.remove(element)
                      }
                  });
                  profileCard = 'pink darken-4';
                  colorProfile.classList.add('pink', 'darken-4');
                }
                if(e.target.classList.contains('black')){
                  colorBox.forEach(element => {
                    if(colorProfile.classList.contains(element)){
                        colorProfile.classList.remove(element)
                      }
                  });
                  profileCard = 'black';
                  colorProfile.classList.add('black');
                }
                if(e.target.classList.contains('cyan')){
                  colorBox.forEach(element => {
                    if(colorProfile.classList.contains(element)){
                        colorProfile.classList.remove(element)
                      }
                  });
                  profileCard = 'cyan darken-4';
                  colorProfile.classList.add('cyan', 'darken-4');
                }
                if(e.target.classList.contains('indigo')){
                  colorBox.forEach(element => {
                    if(colorProfile.classList.contains(element)){
                        colorProfile.classList.remove(element)
                      }
                  });
                  colorProfile.classList.add('indigo', 'darken-4');
                  profileCard = 'indigo darken-4';
                }
                userKeep.filter(item=>{
               
                  if(item.username === username.value){
                    item.profileCard = profileCard;
                  }
                });
                localStorage.setItem('userKeep', JSON.stringify(userKeep));
              })
              
              
              fileUpload.addEventListener('submit', (e)=>{
                e.preventDefault();
                  if(file.value ===''){
                    let aList = document.createElement('a');
                    // <a href='#!' class="collection-item black-text hide" id='uploadFeedback'></a>
                    aList.setAttribute('href', '#!');
                    aList.className = 'collection-item yellow darken-4 black-text center';
                    aList.innerText = 'Upload an Image';
                    listInfo.insertAdjacentElement("beforeend", aList);

                    setTimeout(()=>{
                      listInfo.removeChild(aList);
                    }, 3000)
                    console.log(aList);
                    console.log(e.target);
                  }else{
                    console.log(file.value.length);
                    let uploadImg = file.value.slice(12, file.value.length);
                    file.value = '',
                    console.log(uploadImg);
                    console.log(data);
                    // console.log(user.username)
                    userKeep.filter(item=>{
                      if(item.username === username.value){
                        item.img = `./img/110/${uploadImg}`;
                        console.log(item);
                        imgId.src =  "./img/110/post_loader.gif";
                        setTimeout(()=>{
                          imgId.src = item.img;

                        },6500)
                      }
                    })
                    console.log(uploadImg);
                    localStorage.setItem('userKeep', JSON.stringify(userKeep));
                    }
              })
            
              let userKeep = localStorage.getItem('userKeep')? JSON.parse(localStorage.getItem('userKeep')) : [];
              localStorage.setItem('userKeep', JSON.stringify(userKeep)); 


              let userData =  {
                username: username.value, 
                img,
                profileCard
              }


              let userFind = userKeep.some(user=> user.username === userData.username);
              
                if(!userFind){
                  userKeep =  [...userKeep, userData];
                  localStorage.setItem('userKeep', JSON.stringify(userKeep));
                }
           
              setTimeout(()=>{
                profileFunction(username.value);

                if (userKeep) {
                    let keepCard = document.querySelector(
                      '.keepCard'
                  );
                  let keep = new Keep();
										userKeep.filter(user => {
											if (user.username === username.value) {
												if (user.keeps === undefined || user.keeps.length === 0) {
                          console.log(`${username.value} has no keeps or deleted all keeps`);
                              keep.noKeeps('No keeps to display, add Keeps', keepCard);
                        } else {
													console.log(
														user.keeps
                          );

                           user.keeps.map(item => {
                            console.log(item)
                          
                             const {
																id,
																title,
																content,
																time,
																day
                            } = item
                            let data =  keep.displayKeepCreated(
															id,
															title,
															content,
															time,
															day
                            )
                            keepCard.insertAdjacentElement("afterbegin", data)
                          })
                         
												}
											}
										});
									}
              },100);

          }else{
              action.className = 'card-action red darken-1 center white-text';
              feed.succesFeedback(action, 'Wrong username or password');
              console.log(false);
              console.log('User does not exist');
              username.value = '';
              password.value = '';
          }
    }else{
      action.className = 'card-action red darken-1 center white-text';
      feed.succesFeedback(action, 'Wrong username or password');
      console.log(false);
      console.log('User does not exist');
      username.value = '';
      password.value = '';
  }

}

function profileFunction(name){
  let user = new UserCheck();
  let ui = new UI();
  let timeOut = new TimeOut();
  let postForm = document.querySelector('#postForm');
  let postTitle = document.querySelector('#post-title');
  let postContent = document.querySelector('#post-content');
  let keepCard = document.querySelector('.keepCard');
  let keepHolder = document.querySelector('#keepCounter');
  let keepCounter;
  let body = document.querySelector('#body');

  postForm.addEventListener('submit', (e)=>{
    let action = document.createElement('div');
    let timePost = new Date();
    let date = Date.now();
    let keep = new Keep(date);
    let id = keep.genID();
  
    let timeRecored = (time) => {
      let hr = time.getHours();
      
      if (hr > 12) {
        return `${hr % 12}:${
					time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()
				} pm`;
      } else if (hr === 0) {
                return `12:${
									time.getMinutes() < 10
										? `0${time.getMinutes()}`
										: time.getMinutes()
								} am`;

      } else {
        return `${time.getHours()}:${
					time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()
				} am`;
      }
    }

    e.preventDefault();
    if(postTitle.value === '' ||  postContent.value === ''){
      action.className = 'card-action red center white-text';
      user.errorFeedBack(action, 'All fields is required');
    } else {
							let nokeeps = document.querySelector('.nokeeps')
							if (keepCard.firstChild.classList.contains('nokeeps')) {
                console.log(`true it contains` );
                console.log(keepCard)
                keepCard.removeChild(nokeeps);
                console.log(keepCard);

							} else {
								console.log(`false it doesnt`);
							}
						
							keep.createKeep(
								id,
								postTitle,
								postContent,
								keepCard,
								timeRecored(timePost),
								keep.timeKeep()
							);
							action.className = 'card-action green center white-text';
							user.succesFeedback(action, 'Keep was posted successfully');
							console.log(keep.timeKeep());
							keepCounter = keepHolder.innerHTML;
							console.log(keepHolder.innerHTML);
							console.log(typeof parseInt(keepCounter.innerText));
							keepHolder.innerHTML =
								'<img src="./img/110/loader.gif" width="20px">';
							console.log(keepCounter);
							console.log(keepHolder.innerHTML);

							setTimeout(() => {
								keepHolder.innerHTML = '';
								// loaderGet.innerHTML = '';
								keepHolder.innerHTML = parseInt(keepCounter) + 1;
								console.log(keepCounter);
							}, 1000);

							console.log(name);

							let userKeep = JSON.parse(localStorage.getItem('userKeep'));

							let post = {
								id,
								title: postTitle.value.toUpperCase(),
								content: postContent.value,
								time: timeRecored(timePost),
								day: keep.timeKeep()
							};
							postTitle.value = '';
							postContent.value = '';
							console.log(post);

							if (userKeep) {
								userKeep.filter(user => {
									if (user.username === name) {
										if (user.keeps === undefined) {
											user.keeps = [];
											user.keeps.push(post);
											console.log(user.keeps);
											localStorage.setItem(
												'userKeep',
												JSON.stringify(userKeep)
											);
											console.log(user);
										} else {
											user.keeps.push(post);
											console.log(user.keeps);
											localStorage.setItem(
												'userKeep',
												JSON.stringify(userKeep)
											);
										}
									}
								});
							}
						}

  })

  keepCard.addEventListener('click', (e) => {
    let keep = new Keep();
    e.preventDefault();
    if(e.target.dataset.id && e.target.classList.contains('edit')){
      let title = e.target.parentElement.previousElementSibling.firstElementChild.firstElementChild.innerText;
      let content = e.target.parentElement.previousElementSibling.lastElementChild.innerText;
      console.log(title);
      console.log(content);
      console.log(e.target.parentElement.parentElement);
      keepCard.removeChild(e.target.parentElement.parentElement);
      // postTitle.style.backgroundColor = 'red';
      // postTitle.style.color = 'yellow';
      postTitle.value = title;
      postContent.value = content;
      let userKeep =  JSON.parse(localStorage.getItem('userKeep'));
      
      userKeep.filter(item =>{
        if(item.username === name){
          console.log(item.keeps);
          console.log(e.target.dataset.id);
          let res =  item.keeps.filter(keep =>{
            console.log(e.target.dataset.id);
            return keep.id !== e.target.dataset.id
          })
          keepCounter = keepHolder.innerHTML
          keepHolder.innerHTML =  '<img src="./img/110/loader.gif" width="20px">';
          setTimeout(()=>{
            keepHolder.innerHTML = '';
            keepHolder.innerHTML =  parseInt(keepCounter) - 1;
          }, 1000)

          console.log(res)
          item.keeps = res;
        }
        localStorage.setItem('userKeep', JSON.stringify(userKeep))
      })
			userKeep.filter(user => {
				if (user.username === name) {
					if (user.keeps === undefined || user.keeps.length === 0) {
						console.log(`${name} has no keeps or deleted all keeps`);
						keep.noKeeps('No keeps to display, add Keeps', keepCard);
					} else {
						console.log(user.keeps);
					}
				}
			});
    }

    if(e.target.dataset.id && e.target.classList.contains('delete')){
        let title = e.target.parentElement.previousElementSibling.firstElementChild.firstElementChild.innerText;
        let content = e.target.parentElement.previousElementSibling.lastElementChild.innerText;
        console.log(title);
        console.log(content);
        console.log(e.target.parentElement.parentElement);
        keepCard.removeChild(e.target.parentElement.parentElement);
        let userKeep =  JSON.parse(localStorage.getItem('userKeep'));
        
        userKeep.filter(item =>{
          if(item.username === name){
            console.log(item.keeps);
            console.log(e.target.dataset.id);
            let res =  item.keeps.filter(keep =>{
              console.log(e.target.dataset.id);
              return keep.id !== e.target.dataset.id
            })
            keepCounter = keepHolder.innerHTML
            keepHolder.innerHTML =  '<img src="./img/110/loader.gif" width="20px">';
            setTimeout(()=>{
              keepHolder.innerHTML = '';
              keepHolder.innerHTML =  parseInt(keepCounter) - 1;
            }, 1000)

            console.log(res)
            item.keeps = res;
          }
          localStorage.setItem('userKeep', JSON.stringify(userKeep))
        })
        userKeep.filter(user => {
          if (user.username === name) {
            if (user.keeps === undefined || user.keeps.length === 0) {
              console.log(`${name} has no keeps or deleted all keeps`);
              keep.noKeeps('No keeps to display, add Keeps', keepCard);
            } else {
              console.log(
                user.keeps
              );
            }
          }
        })
    }
    
  })


  // Entire Dom
  let containerPage = document.querySelector('#containerPage');
  let keepNote = document.querySelector('#keepNote')
  let deleteAccount = document.querySelector("#delete_account");

  keepNote.addEventListener('click', (e)=>{
    containerPage.classList.add('hide');
    console.log('prepare to hide')
    setTimeout(()=>{

      containerPage.classList.remove('hide')
      console.log('hidden')

    },100)
  });

  let signOut = document.querySelector('#sign-out');
  signOut.addEventListener('click', (e)=>{
    
    containerPage.classList.remove('hide')
    containerPage.innerHTML = '';
    body.removeChild(body.firstChild);
    body.classList.remove('white');
    body.classList.add('blue');
    ui.loginTemp(containerPage);
    timeOut.loginSetTimeOut();
  })
  
  deleteAccount.addEventListener('click', ()=>{
    if (confirm(`${name.toUpperCase()}, are sure you want to delete your Keep Account!`)){
      //delete user keep object
      let userKeep =  JSON.parse(localStorage.getItem('userKeep'));
      let filterKeeps = userKeep.filter(keeps=>{
        return keeps.username !== name;
      })
      userKeep = filterKeeps;
      localStorage.setItem('userKeep', JSON.stringify(userKeep));

      //delete user
      let users =  JSON.parse(localStorage.getItem('users'));
      let thisUser = users.filter(user=>{
        return user.username !== name;
      })
      users = thisUser;
      localStorage.setItem('users', JSON.stringify(users));

      setTimeout(()=>{
        document.location.reload();
      }, 100)
    }
  })

}


    

function loginPage(e){
  console.log(e.target);
  let ui = new UI();
  let timeOut = new TimeOut();
  if(e.target.classList.contains('signupTemp')){
    container.innerHTML = '';
    body.classList.remove('blue');
    body.classList.add('blue-grey');
    ui.signupTemp(container);
    timeOut.signSetTimeOut();
  }
}

function signupPage(e){
  let ui = new UI();
  let timeOut = new TimeOut();
  console.log(e.target);
  if(e.target.classList.contains('loginTemp')){
    container.innerHTML = '';
    body.classList.remove('blue-grey');
    body.classList.add('blue');
    ui.loginTemp(container);
    timeOut.loginSetTimeOut();
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  let ui = new UI();
  ui.loginTemp(container);
  let timeout = new TimeOut();

  timeout.loginSetTimeOut();
  
});








