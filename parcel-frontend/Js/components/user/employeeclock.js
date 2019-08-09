export default function BuildClockMenu(){

    var d = new Date()
    var date = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDay()   
    var time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
    document.getElementById('main').innerHTML += date + '<br>' + time + '<br>'

    return `
       <div id="clock_box">
         <span id="current_time">${date} ${time}<span><br>
         <button class="clock_in">Clock In</button>
         <button class="clock_out">Clock Out</button>
       </div>
    `

}
