window.onload = function(){

 //initialising animations on scroll
AOS.init({
     offset: 60, 
    delay: 300, 
    duration: 1000, 
    easing: 'ease-in-out',
    once: true
});

// Getting the current year 
let currentDate = document.querySelector("#currentDate");
let currentDate2 = document.querySelector("#currentDate2");
let newDate = new Date();
currentDate.textContent = newDate.getFullYear();
currentDate2.textContent = newDate.getFullYear();


//accessing user input and select files
// let forms = document.forms['form'];
let userName = document.querySelector('#name');
let userEmail = document.querySelector('#email');
let serviceType = document.querySelector('#services');
let photoType = document.querySelector('#photo-specify');
let videoType = document.querySelector('#video-specify');
let bothType = document.querySelector('#both-specify');
let userDate = document.querySelector('#date');
let resetBtn = document.querySelector('#resetBtn');
let userMessage = document.querySelector('#message');

// Display these if an option is selected
let photoShow = document.querySelector('#please-specify-photo'); 
let packageShow = document.querySelector('#type-package');  
let videoShow = document.querySelector('#please-specify-video'); 
let bothShow = document.querySelector('#please-specify-both');

//display error messages from here
let nameGroup = document.querySelector('#name-group');
let emailGroup = document.querySelector('#email-group');
let serviceGroup = document.querySelector('#service-group');
let dateGroup = document.querySelector('#date-group');


//checking the selected service to return a value
let selectedServiceType = function (){
    if(serviceType.selectedIndex == 0){
        return 'None Selected';
    }else{
        return serviceType.options[serviceType.selectedIndex].text;
    }
}

// Adding event listener to services
// Selecting service categories
serviceType.addEventListener('change', selectService);

function selectService(){

    switch(serviceType.selectedIndex){
        case 0: serviceGroup.querySelector('p').style.display = 'block';
                serviceType.style.border = '4px solid red';
                photoShow.style.display = 'none';
                videoShow.style.display = 'none';
                bothShow.style.display = 'none';
                packageShow.style.display = 'none';
        break;
        case 1: photoShow.style.display = 'block';
                selectPhotoType();
                videoShow.style.display = 'none';
                bothShow.style.display = 'none';
                serviceGroup.querySelector('p').style.display = 'none';
                serviceType.style.border = 'none';
        break;
        case 2: videoShow.style.display = 'block';
                selectVideoType();
                photoShow.style.display = 'none';
                bothShow.style.display = 'none';
                serviceGroup.querySelector('p').style.display = 'none';
                serviceType.style.border = 'none';
                packageShow.style.display= 'none';
        break;
        case 3: bothShow.style.display = 'block';
                selectBothType();
                photoShow.style.display = 'none';
                videoShow.style.display = 'none';
                serviceGroup.querySelector('p').style.display = 'none';
                serviceType.style.border = 'none';
                packageShow.style.display= 'none';
        break;
        default: photoShow.style.display = 'none';
                videoShow.style.display = 'none';
                bothShow.style.display = 'none';
                serviceGroup.querySelector('p').style.display = 'none';
                serviceType.style.border = 'none';
                packageShow.style.display= 'none';
    }
    
}

//Select Photo, video or both category to display packages or erros
photoType.addEventListener('change', selectPhotoType);
videoType.addEventListener('change', selectVideoType);
bothType.addEventListener('change', selectBothType);

function selectPhotoType(){
    if(photoType.selectedIndex == 0){
        photoShow.querySelector('p').style.display = 'block';
        packageShow.style.display = 'none';
        return photoType.options[photoType.selectedIndex].text = 'None';
    }else if(photoType.selectedIndex == 3 || photoType.selectedIndex == 4){
        packageShow.style.display = 'block';
        photoShow.querySelector('p').style.display = 'none';
        return photoType.options[photoType.selectedIndex].text;
    }else{
        packageShow.style.display = 'none';
        photoShow.querySelector('p').style.display = 'none';
        return photoType.options[photoType.selectedIndex].text;
    }
}

function selectVideoType(){
    if(videoType.selectedIndex == 0){
        videoShow.querySelector('p').style.display = 'block';
        packageShow.style.display = 'none';
        return videoType.options[videoType.selectedIndex].text = 'None';
    }else{
        videoShow.querySelector('p').style.display = 'none';
        return videoType.options[videoType.selectedIndex].text;
    }
}

function selectBothType(){
    if(bothType.selectedIndex == 0){
        bothShow.querySelector('p').style.display = 'block';
        packageShow.style.display = 'none';
        return bothType.options[bothType.selectedIndex].text = 'None';
    }else{
        bothShow.querySelector('p').style.display = 'none';
        return bothType.options[bothType.selectedIndex].text;
    }
}

//selected Package Type
        function selectPackage(){
            if(packageShow.querySelector('input[name="package"]:checked') != null){
                return packageShow.querySelector("input[name='package']:checked").value;
            }else{
                return 'None selected';
            }
        }

    //a general function for checking validating
    function validateItem(item, itemGroup){
        if(item.value.trim() == ""){
            itemGroup.querySelector('p').style.display = 'block';
            itemGroup.querySelector('.input-group').style.border = '4px solid red';
        }else{
            itemGroup.querySelector('p').style.display = 'none';
            itemGroup.querySelector('.input-group').style.border = '4px solid green';
        }
    }

    //validating the date
    userDate.addEventListener('change', validDate);
    function validDate(){
        validateItem(userDate, dateGroup);
    }

    //validating the name
    userName.addEventListener('change', validName);
    function validName(){
        validateItem(userName, nameGroup);
    }

    //validating the email
    userEmail.addEventListener('change', validEMail);
    function validEMail(){
        validateItem(userEmail, emailGroup);
    }  


    function validateForm(){
     //check if all values are entered as required
        validName();
        validEMail();
        validDate();
        selectService()
    }

    // checking if all inputs have been added

      //sending the form
    let form = document.forms['form'];
    form.addEventListener('submit', sendForm);
    function sendForm(event){
        event.preventDefault();
        validateForm();

        if(userName.value.trim() != "" && userEmail.value.trim() != "" && userDate.value.trim() != "" && serviceType.options.selectedIndex != 0){
           Email.send({
           SecureToken: '0864ce99-04c4-41d4-bef3-b1d9695f183d',
           To : 'qlik.studios@gmail.com',
           From : "qlik.studios@gmail.com",
           Subject : "New Appointment Booking!",
           Body : `<p><span style="font-size: 14pt;">Hello Qlik Studio,</span></p>
           <p><span style="font-size: 14pt;">You have received a new appointment booking.</span></p>
           <p><span style="font-size: 14pt;">See the details below...</span></p>
           <p>&nbsp;</p>
           <p style="text-align: center;"><span style="text-decoration: underline; font-size: 14pt;">Appointment Details</span></p>
           <table style="border-collapse: collapse; width: 95%; background-color: #34495e; border-color: #f1c40f; border-style: solid; margin-left: auto; margin-right: auto;" border="2" cellspacing="5" cellpadding="5">
           <tbody>
           <tr>
           <td style="width: 49.3279%; text-align: center;"><span style="color: #ffffff; font-size: 14pt; font-family: arial, helvetica, sans-serif;">Name</span></td>
           <td style="width: 49.3279%; text-align: center;"><span style="color: #ffffff; font-size: 14pt; font-family: arial, helvetica, sans-serif;">Value</span></td>
           </tr>
           <tr>
           <td style="width: 49.3279%; text-align: left;"><span style="font-size: 14pt; color: #ffffff;">Client Name</span></td>
           <td style="width: 49.3279%; text-align: left;"><span style="color: #ffffff; font-size: 14pt; font-family: arial, helvetica, sans-serif;">${userName.value}<br /></span></td>
           </tr>
           <tr>
           <td style="width: 49.3279%; text-align: left;"><span style="color: #ffffff; font-size: 14pt; font-family: arial, helvetica, sans-serif;">Client Email</span></td>
           <td style="width: 49.3279%; text-align: left;"><span style="color: #ffffff; font-size: 14pt; font-family: arial, helvetica, sans-serif;">${userEmail.value}</span></td>
           </tr>
           <tr>
           <td style="width: 49.3279%; text-align: left;"><span style="font-size: 14pt; color: #ffffff;">General Service Type</span></td>
           <td style="width: 49.3279%; text-align: left;"><span style="color: #ffffff; font-size: 14pt; font-family: arial, helvetica, sans-serif;">${selectedServiceType()}<br /></span></td>
           </tr>
           <tr>
           <td style="width: 49.3279%; text-align: left;"><span style="color: #ffffff; font-size: 14pt;">Selected Videography<br /></span></td>
           <td style="width: 49.3279%; text-align: left;"><span style="color: #ffffff; font-size: 14pt; font-family: arial, helvetica, sans-serif;">${selectVideoType()}<br /></span></td>
           </tr>
           <tr>
           <td style="width: 49.3279%; text-align: left;"><span style="color: #ffffff; font-size: 14pt;">Selected Photography<br /></span></td>
           <td style="width: 49.3279%; text-align: left;"><span style="color: #ffffff; font-size: 14pt; font-family: arial, helvetica, sans-serif;">${selectPhotoType()}<br /></span></td>
           </tr>
           <tr>
           <td style="width: 49.3279%; text-align: left;"><span style="color: #ffffff; font-size: 14pt;">Both Service Type<br /></span></td>
           <td style="width: 49.3279%; text-align: left;"><span style="color: #ffffff; font-size: 14pt; font-family: arial, helvetica, sans-serif;">${selectBothType()}<br /></span></td>
           </tr>
           <tr>
           <td style="width: 49.3279%; text-align: left;"><span style="color: #ffffff; font-size: 14pt;">Package Type<br /></span></td>
           <td style="width: 49.3279%; text-align: left;"><span style="color: #ffffff; font-size: 14pt; font-family: arial, helvetica, sans-serif;">${selectPackage()}<br /></span></td>
           </tr>
           <tr>
           <td style="width: 49.3279%; text-align: left;"><span style="color: #ffffff; font-size: 14pt;">Preferred Date<br /></span></td>
           <td style="width: 49.3279%; text-align: left;"><span style="color: #ffffff; font-size: 14pt; font-family: arial, helvetica, sans-serif;">${userDate.value}<br /></span></td>
           </tr>
           <tr>
           <td style="width: 49.3279%; text-align: left;"><span style="font-size: 14pt; color: #ffffff;">Special Requests</span></td>
           <td style="width: 49.3279%; text-align: left;"><span style="color: #ffffff; font-size: 14pt; font-family: arial, helvetica, sans-serif;">${userMessage.value}<br /></span></td>
           </tr>
           </tbody>
           </table>
           <p><span style="font-size: 14pt;">Best wishes,</span></p>
           <p><span style="font-size: 14pt;">Qlik Studio team</span></p>`
        }).then( ()=> {
            success();
            setTimeout(() => {
                location.href = 'bookings.html';
            }, 2500);
        }
        )}else{
            failed();
            return false;
                }   
            
            }


            //alert types for error and success
    function success(){
        Swal.fire(
            'Appointment Booking Submitted Successfully!',
            'You will be contacted shortly',
            'success'
          )
    }

    function failed(){
        Swal.fire(
            'Failed to book appointment!',
            'Please check all required fields well and retry',
            'error'
          )
    }


    // Reseting form if Reset button is clicked
    resetBtn.addEventListener('click', resetForm);
    function resetForm(){
        serviceType.style.border = 'none';
        packageShow.style.display= 'none';
        photoShow.style.display = 'none';
        videoShow.style.display = 'none';
        bothShow.style.display = 'none';
        serviceGroup.querySelector('p').style.display = 'none';
        nameGroup.querySelector('p').style.display = 'none';
        nameGroup.querySelector('.input-group').style.border = 'none';
        emailGroup.querySelector('p').style.display = 'none';
        emailGroup.querySelector('.input-group').style.border = 'none';
        dateGroup.querySelector('p').style.display = 'none';
        dateGroup.querySelector('.input-group').style.border = 'none';
        packageShow.querySelector('p').style.display = 'none';
        }

    }