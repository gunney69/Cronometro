var mili=0
var sec=0
var min=0
var hr=0


var interval

function twoDigits(digit){
    if(digit<10){
        return('0'+digit)
    }
    else{
            return(digit)
    }
    
}

function start(){
    watch()
    interval= setInterval(watch,17)
}

function pause(){
    clearInterval(interval)
}

function stop(){
    clearInterval(interval)
    mili=0
    sec=0
    min=0
    document.getElementById('watch').innerText='00:00:00:00'
}

function watch(){
    mili++
    if(mili==60){
        sec++
        mili=0
        if(sec==60){
            min++
            sec=0
            if(min==60){
                hr++
                min+0
            }
        }
    }
    document.getElementById('watch').innerText=twoDigits(hr)+':'+twoDigits(min)+':'+twoDigits(sec)+':'+twoDigits(mili)
}

function contador(){
    console.log('foi!!!!')
}