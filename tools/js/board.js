document.addEventListener('DOMContentLoaded', () => {

    init();

    let drawing = false;

    let points = [];
    let lines = [];
    let svg = null;

    if (!localStorage.getItem('points'))
        localStorage.setItem('points', JSON.stringify(points));
    else
        points = JSON.parse(localStorage.getItem('points'));

    if (!localStorage.getItem('lines'))
        localStorage.setItem('lines', JSON.stringify(lines));
    else
        lines = JSON.parse(localStorage.getItem('lines'));

    function render() {
        svg = d3.select('#draw')
                .attr('height', window.innerHeight)
                .attr('width', window.innerWidth);

        svg.on('mousedown', function () {
            drawing = true;
            const coords = d3.mouse(this);
            draw_point(coords[0], coords[1], false);
        });

        svg.on('mouseup', function () {
            drawing = false;
        });

        svg.on('mousemove', function() {
            if(!drawing)
                return;

            const coords = d3.mouse(this);
            draw_point(coords[0], coords[1], true);
        });

        document.querySelector('#erase').onclick = () => {

                for (let i = 0; i < points.length; i++)
                    points[i].remove();

                for (let j = 0; j < lines.length; j++)
                    lines[j].remove();

                points = [];
                lines = [];
        };
    };

    function draw_point( x, y, connect) {

        const color = document.querySelector('#color-picker').value;
        const thickness = document.querySelector('#thickness-picker').value;

        var brand = document.getElementById('brand');
        brand.style.color = color;

        if (connect) {
            const last_point = points[points.length - 1]
            const line = svg.append('line')
                            .attr('x1', last_point.attr('cx'))
                            .attr('y1', last_point.attr('cy'))
                            .attr('x2', x)
                            .attr('y2', y)
                            .attr('stroke-width', 2 * thickness)
                            .style('stroke', color);
            lines.push(line);
        }

        const point = svg.append('circle')
                         .attr('cx', x)
                         .attr('cy', y)
                         .attr('r', thickness)
                         .style('fill', color);
        points.push(point);
    }

    render();

    function init() {
        var select = document.getElementById('thickness-picker');
        for (var i = 1; i <= 10; i++) {
            var option = document.createElement('option');
            option.text = i;
            option.value = i;
            select.append(option);
        }
    }
});
