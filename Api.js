var btn = document.getElementById("GenratorBtn")
var q = document.getElementById("q")
var a = document.getElementById("a")

btn.addEventListener("click",async ()=>{
    const url = 'https://manatee-jokes.p.rapidapi.com/manatees/random';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2fda7ac381mshd085eb92480dad8p1c5030jsn9421027ef2ef',
            'X-RapidAPI-Host': 'manatee-jokes.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const array = await response.text();
        const getmeme = array.split("\"")
        var qustion = getmeme[5]
        var answer = getmeme[9]
        console.log(qustion)
        // ==============================
        q.innerHTML = qustion
        setTimeout(()=>{
            a.innerHTML = answer
            console.log(answer)
            setTimeout(()=>{
                location.reload()
            },5000)
        },2000)
        

    } catch (error) {
        console.error(error);
    }
})