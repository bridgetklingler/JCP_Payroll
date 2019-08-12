export default function  EmployeeTimeClock(employee){
    var d = new Date()
    console.log(d)
    var date = d.toDateString();
    console.log(date) 
    var time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
    console.log(time)
    

    return `
    <h1>Welcome Back,</br><strong>${employee.firstName} ${employee.lastName}</strong></h1>
    <span id="current_date">${date}<span><br>
    <span id="clock">&nbsp;</span>
    <clockbutton>
    <button class="clockin_submit clock multibutton">Clock In
    <button class="clockout_submit clock multibutton">Clock Out 
    </clockbutton>
    `
}
