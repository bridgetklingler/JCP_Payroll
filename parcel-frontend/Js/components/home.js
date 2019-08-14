export default function Home(employee){


    
    var d = new Date()
    console.log(d)
    var date = d.toDateString();
    console.log(date) 
    var time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
    console.log(time)
    

    return `
    <div id="welcome">
        <h1>Welcome Back,</br><strong><name id="namecard">${employee.firstName} ${employee.lastName}</name></strong></h1>
        <div><h2><span id="current_date">${date}</span></h2></br>
        <h1><span id="clock">&nbsp;</span></h1></div>
    <clockbutton>
        <button class="clockin_submit clock multibutton">Clock In</button></br>
        <button class="clockout_submit clock multibutton">Clock Out</button>
    </clockbutton>
    </div>

    `
 }
