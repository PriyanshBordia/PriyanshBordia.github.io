const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

const mouse = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
}

const colours = [
    '#2185C5',
    '#7ECEFD',
    '#FFF6E5',
    '#FF7F66'
]

const limit = 50

// Event listeners
window.addEventListener('mousemove', function (event) {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

window.addEventListener('resize', setCanvasDimensions)

window.addEventListener('click', function () {
    // explode?
})

// Utility functions
function setCanvasDimensions() {
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
}

function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColour() {
    return colours[randomIntFromRange(0, colours.length)]
}

function Particle({ x, y, velocity, radius, colour } = {}) {
    this.x = x
    this.y = y
    this.velocity = velocity || 0.05
    this.radius = radius
    this.colour = randomColour()
    this.radians = Math.random() * Math.PI * 2
    this.distanceFromCenter = randomIntFromRange(50, 120)
    this.lastMouse = { x: x, y: y }

    this.update = () => {
        const lastPoint = {
            x: this.x,
            y: this.y
        }
        // Move points over time
        this.radians += this.velocity

        // Drag effect
        this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05
        this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05

        // Circular motion
        this.x = this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter
        this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter
        this.draw(lastPoint)
    }

    this.draw = (lastPoint) => {
        c.beginPath()
        c.strokeStyle = this.colour
        c.lineWidth = this.radius
        c.moveTo(lastPoint.x, lastPoint.y)
        c.lineTo(this.x, this.y)
        c.stroke()
        c.closePath()
    }
}

// Animation loop
let particles = []

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'rgba(255, 255, 255, 0.2)'
    c.fillRect(0, 0, canvas.width, canvas.height)
    particles.forEach(particle => {
        particle.update()
    })
}

// Implementation
function init() {
    setCanvasDimensions()

    particles = []

    for (let i = 0; i < limit; i++) {
        const particle = new Particle({
            x: canvas.width / 2,
            y: canvas.height / 2,
            radius: (Math.random() * 2) + 1
        })

        particles.push(particle)
    }

    animate()
}

init()