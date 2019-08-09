export default function Home(employee){

    var d = new Date()
    var date = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDay()   
    var time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
    document.getElementById('main').innerHTML += date + '<br>' + time + '<br>'

    return `
    <h1>Welcome Back,</br><strong>${employee.firstName} ${employee.lastName}</strong></h1>
    <span id="current_time">${date} ${time}<span><br>
    <clockbutton>
    <button class="clockin_submit clock multibutton">Clock In
    <button class="clockout_submit clock multibutton">Clock Out 
    </clockbutton>
  
    `
 }
