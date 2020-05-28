//jQuery
$(document).ready(function(){
    const currentDay = moment(new Date());

    $('#currentDay').append(`${currentDay.format('dddd, LL')}`)

    for (let time=9; time<=17; time++){
        const myColor = (currentDay.format('k') == time)? 'present': (currentDay.format('k') < time)? 'future' : 'past';

        $('.container').append(`
        <div class='row time-block'>
            <div class='col-2 col-md-1 hour'>
                ${moment(time.toString(),"LT").format('h A')}
            </div>
            <div class='col ${myColor}' style='padding:0px' id='timeCol${time}'></div>
            <div class='col-2 col-md-1' style='padding:0px' id='buttonCol${time}'></div>
        </div>`);

        $(`#timeCol${time}`).append(`<textarea style='width:100%; height:100%;' id="textArea${time}"></textarea>`);
        $(`#buttonCol${time}`).append(`<button class="saveBtn" style='width:100%; height:100%;' if="saveBtn${time}"><i>Save</i></button>`);
    }
})