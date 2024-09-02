var input = "800";
var lines = input.split('\n');

function ageDays(days) {
    days = parseInt(lines[0], 10)
    let year = 0;
    let month = 0;
    let day = 0;

    if(days >= 365) {
        year = Math.floor(days / 365);
        days %= 365;
    }
    if(days >= 30) {
        month = Math.floor(days / 30);
        days %= 30;
    }
    if(days < 30) {
        day = days;
    }
    if(month >= 12) {
        year += Math.floor(month / 12);
        month %= 12;
    }
    if(day >= 30) {
        month += Math.floor(day / 30);
        day %= 30;
    }

    console.log(`${year} ano(s)`);
    console.log(`${month} mes(es)`);
    console.log(`${day} dia(s)`);
}

ageDays();