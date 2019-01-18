function validate() {
    var gender = "";
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    if(document.getElementById("male").checked == true){
        gender = document.getElementById("male").value;
        }else{gender = female;}
    var age = document.getElementById("age").value;
    var skills ="";
    var paddress = document.getElementById("paddress").value;
    var laddress = document.getElementById("laddress").value;
        if(document.getElementById("c1").checked==true)
            skills=skills+document.getElementById("c1").value;
        if(document.getElementById("c2").checked==true)
            skills=skills+' '+document.getElementById("c2").value;
        if(document.getElementById("c3").checked==true)
            skills=skills+' '+document.getElementById("c3").value;
        if(document.getElementById("c4").checked==true)
            skills=skills+' '+document.getElementById("c4").value;
        if(document.getElementById("c5").checked==true)
            skills=skills+' '+document.getElementById("c5").value;
        if(document.getElementById("c6").value!="")
            skills=skills+' '+document.getElementById("c6").value;
    if(fname.value == ""){ 
        window.alert("Please enter your first name."); 
        fname.focus(); 
        return false;} 
    if(lname.value == ""){ 
        window.alert("Please enter your last name."); 
        lname.focus(); 
        return false;} 
    if(/^[A-Za-z]+$/.test(fname) == false || /^[A-Za-z ]+$/.test(lname)==false){
        alert("Enter Valid Name");
        return;}
    if(email.value == ""){ 
        window.alert("Please enter a  e-mail address."); 
        email.focus(); 
        return false; } 
    if(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email)==false){
        alert("Enter A Valid Email");
        return;}
    if(phone.value == ""){ 
        window.alert("Please enter your telephone number."); 
        phone.focus(); 
        return false;}
    if(/^\d{10}$/.test(phone)==false){
        alert("Enter Valid Phone Number");
        return;}
    if(age.value == ""){ 
        window.alert("Please enter your age."); 
        age.focus(); 
        return false;}    
    if(age<18 || age>80){
        alert("Age not acceptable");
        return;}                                        
    var table = document.getElementsByTagName("table")[0];
    var newRow = table.insertRow(1);
    var cell0 = newRow.insertCell(0);
    var cell1 = newRow.insertCell(1);
    var cell2 = newRow.insertCell(2);
    var cell3 = newRow.insertCell(3);
    var cell4 = newRow.insertCell(4);
    var cell5 = newRow.insertCell(5);
    var cell6 = newRow.insertCell(6);
    var cell7 = newRow.insertCell(7);
    var cell8 = newRow.insertCell(8);
    cell0.innerHTML = fname;
    cell1.innerHTML = lname;
    cell2.innerHTML = email;
    cell3.innerHTML = phone;
    cell4.innerHTML = gender;
    cell5.innerHTML = age;
    cell6.innerHTML = skills;
    cell7.innerHTML = paddress;
    cell8.innerHTML = laddress;}    