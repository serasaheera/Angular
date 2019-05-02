function validate_fun()
{
    var fname = document.getElementById("i_firstname");//input name(id):i_firstname
    var exp =/^[a-zA-Z\s]+$/;
    if(fname.value.trim() =="")
    {
        alert('please Enter Your First Name');
        document.abcd.i_firstname.focus();
        return true;
    }
    if(!fname.value.match(exp))
    {
        alert('Invalid, please Enter a valid Name');
        document.abcd.i_firstname.focus();
        return true;
    }

    var lname = document.getElementById("i_lastname");
    var beta =/^[a-zA-Z\s]+$/;
    if(lname.value.trim() =="")
    {
        alert('Please Enter Your LastName');
        document.abcd.i_lastname.focus();
        return true;
    }
    if(!lname.value.match(beta))
    {
        alert('Invalid, please Enter a valid Name');
        document.abcd.i_lastname.focus();
        return true;
    }

    var adrs = document.getElementById("i_address");
    var alpha = /^[a-zA-Z0-9\.,:-\s]+$/
    if(adrs.value.trim() =="")
    {
        alert('Please Enter Your Address');
        document.abcd.i_address.focus();
        return true;
    }
    if(!adrs.value.match(alpha))
    {
        alert('Invalid, please Enter a valid Address');
        document.abcd.i_address.focus();
        return true;
    }
    
    var qlfn = document.getElementById("qualification");
    if(qlfn.value.trim() =="")
    {
        alert('Please Enter Your Qualification');
        document.abcd.qualification.focus();
        return true;
    }

    var fname12 = document.getElementById("i_sel");//input name(id):i_firstname
    if(fname12.value == 1)
    {
        alert('please Select District');
        //document.abcd.i_firstname.focus();
        return true;
    }

    var plc = document.getElementById("place");
    if(plc.value.trim() =="")
    {
        alert('Please Enter Your Place');
        document.abcd.place.focus();
        return true;
    }
    if(!plc.value.match(exp))
    {
        alert('Invalid, Please Enter Your Place');
        document.abcd.i_firstname.focus();
        return true;
    }

    var uname = document.getElementById("username");
    var pha =/^[a-zA-Z0-9\.,:@-\s]+$/
    if(uname.value.trim() =="")
    {
        alert('Please Enter Your Username');
        document.abcd.username.focus();
        return true;
    }
    if(!uname.value.match(pha))
    {
        alert('Invalid, please Enter a valid Username');
        document.abcd.username.focus();
        return true;
    }

      var emailid = document.getElementById("email");
    var b =/^([a-zA-Z0-9\.-]+)@([a-zA-Z]+).([a-z]+)$/;
    if(emailid.value.trim() =="")
    {
        alert('Please Enter Your Email');
        document.abcd.email.focus();
        return true;
    }
    if(!emailid.value.match(b))
    {
        alert('Invalid, 11please Enter a valid Email');
        document.abcd.email.focus();
        return true;
    }

    var passwrd = document.getElementById("password");
    var c = /^([a-zA-Z0-9!@#$%^&*\.-]{8,20})$/;
    if(passwrd.value.trim() =="")
    { 
        alert('Please Enter Your Password');
        document.abcd.password.focus();
        return true;
    }
    if(!passwrd.value.match(c))
    {
        alert('Invalid, Please Enter a Valid Password');
        document.abcd.password.focus();
        return true;
    }
    
    var confmpass = document.getElementById("confirmpassword");
    var d = /^([a-zA-Z0-9!@#$%^&*\.-]{8,20})$/;
    if(confmpass.value.trim() =="")
    {
        alert('Please Re-Enter Your Password');
        document.abcd.confirmpassword.focus();
        return true;
    }
    if(!confmpass.value.match(d))
    {
        alert('Invalid, Please Enter a Valid Password');
        document.abcd.confirmpassword.focus();
        return true;
    }
   
    var mblno = document.getElementById("mobile");
    var e = /^([6-9][0-9]{9})$/;
    if(mblno.value.trim() =="")
    {
        alert('Please Enter Your MobileNo');
        document.abcd.mobile.focus();
        return true;
    }
    if(!mblno.value.match(e))
    {
        alert('Invalid, Please Enter a Valid No');
        document.abcd.mobile.focus();
        return true;
    }
}