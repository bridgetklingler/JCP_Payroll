export default function Home(employee){
    return `
   
    <h1>Welcome Back,</br><strong>${employee.firstName} ${employee.lastName}</strong></h1>
    <clockbutton>
    <button class="clockin_submit clock multibutton">Clock In
    <button class="clockout_submit clock multibutton">Clock Out 
    </clockbutton>
    
    `
}
// <input class="clockin_id" type="hidden" value="${employee.Hours.timeIn}"> 
// </button> 
// <input class="clockout_id" type="hidden" value="${employee.Hours.timeOut}"> 
// </button> 
