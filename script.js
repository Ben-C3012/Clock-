
// Main Clock UI 
const hourHeader = document.querySelector('.hours')
const minHeader = document.querySelector('.min')
const secHeader = document.querySelector('.sec')

// Second Header 
const dayOfWeek = document.querySelector('.day')
const dayOfMonth = document.querySelector('.number')
const monthString = document.querySelector('.month')

setInterval(() => {

    // Today 
    const now = new Date()

    // Get Time 
    const hour = now.getHours()
    const min = now.getMinutes()
    const sec = now.getSeconds()


    // Display Time
    hourHeader.textContent = String(hour).padStart(2, 0)
    minHeader.textContent = String(min).padStart(2, 0)
    secHeader.textContent = String(sec).padStart(2, 0)

    // Get And Display Date of Month  
    const dayNumber = now.getDate()
    dayOfMonth.textContent = String(dayNumber).padStart(2, 0)


    //  Get And Display Month and day of week  
    const dateArr = now.toDateString().split(' ')
    dayOfWeek.textContent = dateArr[0] 
    monthString.textContent = dateArr[1]

}, 1000);

const now = new Date()
const dateArr = now.toDateString().split(' ')
