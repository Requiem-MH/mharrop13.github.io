let body = d3.select('body')

//Add 1 span and 3 divions
let imageSpan = body.append('span')
    .attr('id', 'imageSpan')
    .on('mousemove', event => mousePos.text("Mouse X: " + d3.pointer(event)[0] + 
                                ", Y: " + d3.pointer(event)[1]));
let mouseIn = body.append('div')
    .attr('id', 'mouseIn')
    .text('In: ');

let mouseOut = body.append('div')
    .attr('id', 'mouseOut')
    .text('Out: ');

let mousePos = body.append('div')
    .attr('id', 'mousePos')
    .text('Mouse: ');

//Add link back to main page
// add link back to main
d3.select('body').append('p').append('a')
    .attr('href', 'index.html')
    .text('Main Page');

//Add images to Span and their actions
let twitter = imageSpan.append('img')
    .attr('src', 'images/twitter.png')
    .attr('id', 'twitterPic')
    .attr('height', 100)
    .attr('width', 100)
    .on('mouseenter', () => {
        mouseIn.text('In: Twitter');
        twitter.style('opacity', 0.5);
    })
    .on('mouseleave', () => {
        mouseOut.text('Out: Twitter');
        twitter.style('opacity', 1.0);
    })
    .on('dblclick', () => window.open('https://www.twitter.com', '_blank'))
    .on('mouseup', () => {twitter.attr('height', 100).attr('width', 100); })
    .on('mousedown', () => {twitter.attr('height', 85).attr('width', 85); })

let facebook = imageSpan.append('img')
    .attr('src', 'images/facebook.png')
    .attr('id', 'twitterPic')
    .attr('height', 100)
    .attr('width', 100)
    .on('mouseenter', () => {
        mouseIn.text('In: Twitter');
        facebook.style('opacity', 0.5);
    })
    .on('mouseleave', () => {
        mouseOut.text('Out: Twitter');
        facebook.style('opacity', 1.0);
    })
    .on('dblclick', () => window.open('https://www.facebook.com', '_blank'))
    .on('mouseup', () => {facebook.attr('height', 100).attr('width', 100); })
    .on('mousedown', () => {facebook.attr('height', 85).attr('width', 85); })

let reddit = imageSpan.append('img')
    .attr('src', 'images/reddit.png')
    .attr('id', 'twitterPic')
    .attr('height', 100)
    .attr('width', 100)
    .on('mouseenter', () => {
        mouseIn.text('In: Twitter');
        reddit.style('opacity', 0.5);
    })
    .on('mouseleave', () => {
        mouseOut.text('Out: Twitter');
        reddit.style('opacity', 1.0);
    })
    .on('dblclick', () => window.open('https://www.reddit.com', '_blank'))
    .on('mouseup', () => {reddit.attr('height', 100).attr('width', 100); })
    .on('mousedown', () => {reddit.attr('height', 85).attr('width', 85); })

let linkedin = imageSpan.append('img')
    .attr('src', 'images/linkedin.png')
    .attr('id', 'twitterPic')
    .attr('height', 100)
    .attr('width', 100)
    .on('mouseenter', () => {
        mouseIn.text('In: Twitter');
        linkedin.style('opacity', 0.5);
    })
    .on('mouseleave', () => {
        mouseOut.text('Out: Twitter');
        linkedin.style('opacity', 1.0);
    })
    .on('dblclick', () => window.open('https://www.linkedin.com', '_blank'))
    .on('mouseup', () => {linkedin.attr('height', 100).attr('width', 100); })
    .on('mousedown', () => {linkedin.attr('height', 85).attr('width', 85); })

let instagram = imageSpan.append('img')
    .attr('src', 'images/instagram.png')
    .attr('id', 'twitterPic')
    .attr('height', 100)
    .attr('width', 100)
    .on('mouseenter', () => {
        mouseIn.text('In: Twitter');
        instagram.style('opacity', 0.5);
    })
    .on('mouseleave', () => {
        mouseOut.text('Out: Twitter');
        instagram.style('opacity', 1.0);
    })
    .on('dblclick', () => window.open('https://www.instagram.com', '_blank'))
    .on('mouseup', () => {instagram.attr('height', 100).attr('width', 100); })
    .on('mousedown', () => {instagram.attr('height', 85).attr('width', 85); })