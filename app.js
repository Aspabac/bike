let c = document.createElement('canvas');
let ctx = c.getContext('2d');
c.width = 500;
c.height =350;

document.body.appendChild(c);

let perm = []

let noise = x => {
    return;
}

function loop() {
    ctx.fillStyle = '#19f';
    ctx.fillRect(0,0,c.width,c.height);
    requestAnimationFrame(loop);
}

loop();