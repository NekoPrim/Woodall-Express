// this code is running on  Andre's computer

$(document).ready(onReady);



function onReady() {
    console.log('so damn ready');
    $('button').on('click', onClick);

    // TODO
    // write some code to get data from the
    // GET /comments endpoint
    // and then render that data to the DOM

    // make a network request
    // make a HTTP request
    // make an AJAX request
    // AJAX === "Asynchronous Javascript and XML"
    let ajaxOptions = {
        method: 'GET',
        url: '/comments'
    }

    // console.log will run after .ajax function in run
    $.ajax(ajaxOptions)
    // the first argurment you make will be your res.send
        .then((response) => {
            console.log('AJAX request complete!', response);
            render(response);
        });

    console.log(`
        Made a network request, but who has time  to wait for that...
    `)

        $('#commentForm').on('submit', onAddComment);

        $('#refresh').on('click', refresh);
}

// my state is an array of comments
function render(comments) {
    $('#comments').empty()
    // do some jQuery to render comments (state) to the DOM
    // res.send is an array of objects, so you will need to loop through
    for(let words of comments) {
        $('.comments').append(`
        <li>
                ${comment.message}
                <div>
                    - by ${comment.author}
                </div>
            </li>
        `);
    }
}

function onClick() {
    $(this).css({"background-color": "green"});
}



function onAddComment(evt) {
    // dont reload page
    evt.preventDefault();

    //prepare our message object
    // to post to the server
    let comment = {
        author: $('#authorInput').val(),
        message: $('#messageInput').val()
    }
    console.log('comment', comment);

    //send data to server
    $.ajax({
        method: 'POST',
        url: '/comments',
        // send the omment to the server
        // in the request "body"

        data: comment
    })
        .then((response) => {
            console.log('POST response', response);

            //refresh...
            // GET /comments from the server again
            // and render to the DOM
            refresh();
        })
    
}

function refresh() {
    // make a network request
    //make a http request
    //make an AJAX request
    // AJAX === "Asynchronous Javascript"
    let ajaxOptions = {
        method: 'GET',
        url: '/comments'
    };

    $.ajax(ajaxOptions)
        .then((response) => {
            console.log('AJAX request complete!', response);
            render(response);
        });
}