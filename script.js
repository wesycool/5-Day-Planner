//jQuery
$(document).ready(function(){
    const currentTime = moment(new Date()).format('k');

    for (let time=9; time<=17; time++){
        const myColor = (currentTime == time)? 'present': (currentTime < time)? 'future' : 'past';

        $('.container').append(`
        <div class='row time-block'>
            <div class='col-2 col-md-1 hour'>
                ${moment(time.toString(),"LT").format('h A')}
            </div>
            <div class='col ${myColor}' style='padding:0px' id='col${time}'></div>
        </div>`);

        $(`#col${time}`).append(`<textarea style='width:100%; height:100%;' id="textArea${time}"></textarea>`);
    }
})