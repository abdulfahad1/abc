// function seterror(id, error) {
//     element = document.getElementById(id);
//     element.getElementsByClassName("formerror")[0].innerHTML = error;
// }



// function validateform() {
//     var returnval = true;
//     var name = document.forms['myForm']["fname"].value;
//     if (name.length < 5) {
//         seterror("name", "length is to short");
//         returnval = false;
//     }

//     if (name.length == 0) {
//         seterror("name", "length is not be 0");
//         returnval = false;
//     }

//     var email = document.forms['myForm']['femail'].value;
//     if (email.length > 15) {
//         seterror("email", "email lenght is to long");
//         returnval = false;
//     }
//     var phone = document.forms['myForm']['fphone'].value;
//     if (phone.length != 11) {
//         seterror("phone", "number is not equal to 11 number")
//         returnval = false;
//     }

//     return returnval;



// }

function seterror(id, error){
element = document.getElementById(id)
element.getElementsByClassName("formerror")[0].innerHTML=error;
}

function validateform(){
    var returnval=true;
    var name = document.forms['myForm']["fname"].value;
       
    if (name.length < 5) {
        seterror("name","length is to short" )
        returnval = false;
    }
    var returnval=true;
    var email = document.forms['myForm']["femail"].value;
       
    if (email.length >15 ) {
        seterror("email","length is to short" )
        returnval = false;
    }



    return returnval
    }
