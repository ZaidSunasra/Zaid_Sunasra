let banner = document.getElementById("heroSection");
let canvas = document.getElementById("playground");
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
let ctx = canvas.getContext('2d');
let dots = [];
let color = ["#FF5733", "#C70039", "#900C3F", "#FFC300", "#DAF7A6", "#581845", "#3498DB", "#1ABC9C", "#F39C12", "#E74C3C"];

for(let i=0; i<50; i++){
    dots.push({
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        size: Math.random() * 3 + 5,
        color: color[Math.floor(Math.random() * color.length)]
    })
}

const drawDots = () => {
    dots.forEach(dot => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
        ctx.fill()
    })
}
drawDots();

banner.addEventListener('mousemove', (e)=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDots();
    let mouse = {
        x: e.pageX - banner.getBoundingClientRect().left,
        y: e.pageY - banner.getBoundingClientRect().top
    }
    dots.forEach(dot => {
        let distance = Math.sqrt((dot.x - mouse.x) ** 2 + (dot.y - mouse.y) ** 2);
        if(distance < 300){
            ctx.strokeStyle = dot.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
    })
})

banner.addEventListener('mouseout', ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDots(); 
})