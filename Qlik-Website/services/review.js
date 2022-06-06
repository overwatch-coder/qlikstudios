// window.onload = function(){
// //displaying the review section on user click
// let reviewBtn = document.querySelector('#reviewBtn');
// let reviewShow = document.querySelector('#reviewShow');
// let entireReview = document.querySelector('#entire-review');

// function openReviewSection(item, btn){
//     if(item.classList.contains('hide-review')){
//         item.classList.remove('hide-review');
//         item.classList.add('show-review');
//         item.style.transition = 'all 2s ease-in-out';
//         btn.innerHTML = 'Close';
//     }else{
//         item.classList.remove('show-review');
//         item.classList.add('hide-review');
//         item.style.transition = 'all 2s ease-in-out';
//         btn.innerHTML = 'Open';
//     }
// }

// function openReviews(item, btn){
//     if(item.classList.contains('hide-review')){
//         item.classList.remove('hide-review');
//         item.classList.add('show-review');
//         item.style.transition = 'all 2s ease-in-out';
//         btn.innerHTML = 'Close reviews';
//     }else{
//         item.classList.remove('show-review');
//         item.classList.add('hide-review');
//         item.style.transition = 'all 2s ease-in-out';
//         btn.innerHTML = 'Open reviews';
//     }
// }

//     reviewBtn.addEventListener('click', showReview);
//     function showReview(){
//         openReviewSection(entireReview, reviewBtn);
//     }

//     reviewShow.addEventListener('click', showReviews);
//     function showReviews(){
//         openReviews(reviewContainer, reviewShow);
//     }

// //array of classlists
//     holdContainer = ['container', 'py-5', 'mb-5', 'pb-1'];
//     rowContainerCLass = ['row','justify-content-center'];
//     columnOneClass= ['col-md-2', 'col-12', 'd-flex', 'justify-content-center', 'align-items-center', 'text-center', 'flex-column', 'mt-5'];
//     divColumnOne = ['rounded-circle', 'border', 'border-1', 'border-dark'];
//     columnTwoDiv = ['border', 'border-dark', 'pb-5', 'pt-2', 'px-3', 'm-3'];
//     brandDateClass = ['border-top', 'border-dark', 'pt-3', 'mt-3', 'mb-3'];

//     //accessing the various elements needed
//     // let submit = document.querySelector('#submit');
//     let userName = document.querySelector('#user-name');
//     let userTitle = document.querySelector('#user-title');
//     let userMessage = document.querySelector('#user-message');
//     let reviewContainer = document.querySelector('#review-container');
//     let reviewForm = document.forms['review-form'];
//     let openConfirm = document.querySelector('#openConfirm');

//     reviewForm.addEventListener('submit', submitReview);

//     function submitReview(event){
//     event.preventDefault();
//          //creating the elements needed
//     let parentContainer = document.createElement('div');
//     parentContainer.classList.add(...holdContainer);
//     parentContainer.style.maxWidth = '75%';
//     parentContainer.style.background = '#A48111';
//     parentContainer.style.borderRadius = '5%';
    

//     //creating and appending row to the main container
//     let rowContainer = document.createElement('div');
//     rowContainer.classList.add(...rowContainerCLass);
    

//     //creating column 1 of the row
//     let column1 = document.createElement('div');
//     column1.classList.add(...columnOneClass);
    
//     //apending div 1 to the column
//     let col1div1 = document.createElement('div');
//     col1div1.classList.add(...divColumnOne);
//     col1div1.style.overflow = 'hidden';
//     col1div1.style.maxWidth = '60%';


//     //appending img to col1div1
//     let img = document.createElement('img');
//     img.src = '/assets/person.png';
//     img.alt = 'image';
//     img.classList.add('img-fluid');
//     col1div1.appendChild(img);

//     //appending div1 to column 1
//     column1.appendChild(col1div1);

//     //appending div 2 to the column 1
//     let col1div2 = document.createElement('div');
//     col1div2.classList.add('w-auto');

//     //appending a p-tag to col1div2
//     let profileName = document.createElement('p');
//     profileName.classList.add('text-dark', 'fw-normal', 'mt-1', 'h6');
//     profileName.innerHTML = userName.value;
//     col1div2.appendChild(profileName);

//     // Appending div 2 to column1
//     column1.appendChild(col1div2);

//     //appending column 1 to row
//     rowContainer.appendChild(column1);

//     //creating column 2 of the row
//     let column2 = document.createElement('div');
//     column2.classList.add('col-md-9', 'col-12', 'text-dark');

//     //div inside column 2
//     let col2div = document.createElement('div');
//     col2div.classList.add(...columnTwoDiv);

//     //appending two p-tags to col2div
//     let titleP = document.createElement('p');
//     titleP.classList.add('fs-5', 'fw-bold');
//     titleP.innerHTML = userTitle.value;

//     let messageP = document.createElement('p');
//     messageP.classList.add('mb-5', 'text-break');
//     messageP.innerHTML = userMessage.value;

//     col2div.appendChild(titleP);
//     col2div.appendChild(messageP);

//     // appending div to column 2
//     column2.appendChild(col2div);

//     //appending column 2 to row
//     rowContainer.appendChild(column2);

//     //creating the footer side of the review with date and ratings and appending it to the row
//     let brandDate = document.createElement('div');
//     brandDate.classList.add(...brandDateClass);
   
//     //creating span section of brandDate
//     let span = document.createElement('span');
//     span.classList.add('float-start');
//     let brandName = document.createElement('p');
//     brandName.classList.add('h5', 'fw-bold', 'text-dark');
//     brandName.innerHTML = 'Qlik Studios';
//     span.appendChild(brandName);
//     brandDate.appendChild(span);

//     //create current date section
//     let dateTag = document.createElement('p');
//     dateTag.classList.add('float-end', 'text-dark');
//     let currentDate = new Date();
//     let localDate = currentDate.toLocaleDateString();
//     dateTag.innerHTML = localDate;
//     brandDate.appendChild(dateTag);

//     // Appending rating & date footer to row
//     rowContainer.appendChild(brandDate);

//     //appending them
//     parentContainer.appendChild(rowContainer); //row to it's parent
//     reviewContainer.appendChild(parentContainer); //container to review section

//     //adding the review section to local storage
//     localStorage.setItem('reviews', reviewContainer.innerHTML);
//     reviewForm.reset();
//         openConfirm.className = 'd-block';
//         entireReview.classList.remove('show-review');
//         entireReview.classList.add('hide-review');
//         entireReview.style.transition = 'all 2s ease-in-out';
//         reviewBtn.innerHTML = 'Open';
//         setTimeout(()=>{
//             openConfirm.className = 'd-none';
//         }, 4500);
//     }
    
//         let retrieved = localStorage.getItem('reviews');
//         if(retrieved){
//             reviewContainer.innerHTML = retrieved;
//         }
    
//     }