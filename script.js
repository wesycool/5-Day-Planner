//jQuery
$(document).ready(function(){
    const currentDay = moment(new Date());
    $('#currentDay').append(`${currentDay.format('dddd, LL')}`);
    
    // Get LocalStorage Data
    let getLocalStorage = eval(`localStorage.date${moment($('#currentDay').text(),'dddd, LL').format('YYYYMMDD')}`);
    let dataStorage = (getLocalStorage)? JSON.parse(getLocalStorage) : [];

    for (let time=9; time<=17; time++){
        const myColor = (currentDay.format('k') == time)? 'present': (currentDay.format('k') < time)? 'future' : 'past';
        
        //Create Time-Block
        $('.container').append(`
        <div class='row time-block'>
            <div class='col-2 col-md-1 hour' style='padding:0px' id='timeCol${time}'></div>
            <div class='col ${myColor}' style='padding:0px' id='descCol${time}'></div>
            <div class='col-2 col-md-1' style='padding:0px' id='buttonCol${time}'></div>
        </div>`);


        //Create Time-Block Content
        $(`#timeCol${time}`).append(`${moment(time.toString(),"LT").format('h A')}`);
        $(`#descCol${time}`).append(`<textarea style='width:100%; height:100%;' id="textArea${time}"></textarea>`);
        $(`#buttonCol${time}`).append(`<button class="saveBtn" style='width:100%; height:100%;' id="saveBtn${time}"><i>Save</i></button>`);


        //Input LocalStorage Data into Time-Block Content
        const index = time - 9;
        if (dataStorage[index] != null) $(`#textArea${time}`).append(dataStorage[index].desc);


        //Save Data to LocalStorage at onClick
        $(`#buttonCol${time}`).on('click', function(){
            dataStorage[index] = $(`#textArea${time}`).val() == ''? null : {'time' :$(`#timeCol${time}`).text(), 'desc' :$(`#textArea${time}`).val()};
            eval(`localStorage.date${moment($('#currentDay').text(),'dddd, LL').format('YYYYMMDD')} = JSON.stringify(dataStorage);`)
        })
    }

})

