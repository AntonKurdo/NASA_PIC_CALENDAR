import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarPage({
    currentDate,
    currentImg,
    currentPicTitle ,
    currentPicExplanation,
    currentPicDate,
    isAlertOpen,
    isAlertFutureOpen,
    sendData,
    setCurrentDate,
    onSendPicToGal,
    loaderActive,
    onCloseAlert,
    onOpenAlertFuture,
    onCloseAlertFuture
}) {

    function isDisabledBtn(title) {
        let flag = true;
        let arr = [];
        let data = JSON.parse(localStorage.getItem('NASA_gallery'));
        if (data) {
            data.forEach(item => {
                arr.push(item.picTitle);
            });
            arr.includes(title)
                ? flag = false
                : flag = true;
        }
        return flag;
    }

    function sendPicToGal(currentImg, currentPicTitle, e) {
        e.preventDefault();
        onSendPicToGal(currentImg, currentPicTitle, currentPicDate);
        isDisabledBtn(currentPicTitle);
        e.target.textContent = 'Added ✓';
        e
            .target
            .setAttribute('disabled', 'true');
    }

    function onChangeDate(date) {
        if (date < new Date()) {
            sendData(date)
            setCurrentDate(date)
            loaderActive();
            onCloseAlert();
            onCloseAlertFuture();
        } else {
            // alert('Sorry, chosen date is in future');
            onOpenAlertFuture()
        }
    }

    return (
        <div className='calendar_page'>
            <div className={isAlertOpen.status ? "alert alert-danger calendar__alert _active" : "alert alert-danger calendar__alert"} role="alert">
                <span role='img' aria-label='emoji'>⚠️</span> {isAlertOpen.text}
                <a href={isAlertOpen.url} onClick={onCloseAlert} target='_blank' rel="noopener noreferrer">link</a>
                <div onClick={onCloseAlert}>X</div>
            </div>
            <div className={isAlertFutureOpen ? "alert alert-warning calendar__alert _active" : "alert alert-warning calendar__alert"} role="alert">
                 <span> Sorry, chosen date is only in future </span> 
                <div onClick={onCloseAlertFuture}>X</div>
            </div>
            <div className='calendar_cont'>
                <Calendar onChange={onChangeDate} value={currentDate}/>
            </div>
            <div className="card card_cont">
                <img src={currentImg} className="card-img-top" alt="img_from_base"/>
                <div className="card-body">
                    <h5 className="card-title">{currentPicTitle}</h5>
                    <p className="card-text">{currentPicExplanation}</p>   
                    <button
                        href="#"
                        onClick={sendPicToGal.bind(this, currentImg, currentPicTitle)}
                        className="btn btn-info"
                        disabled={isDisabledBtn(currentPicTitle)
                        ? false
                        : true}>{isDisabledBtn(currentPicTitle)
                            ? 'Add to Gallery'
                            : 'Added ✓'}</button>
                </div>
                
            </div>
        </div>
    )
}