import React from 'react';

export default function Gallery({ galleryPics, onRemovePic }) {
    
    function removePic(title, e) {
        e.preventDefault();
        onRemovePic(title);
    }
  
    return (
        <div className='gallery_cont'>         
            {galleryPics.length === 0? <div className='gallery__empty'>Gallery is empty now. You can full it with 'Astronomy Pictures of the Day' <p>📷</p></div> : galleryPics.map((pic, index) => {
                return (
                    <div key={index} className="card card_cont_gal">
                        <a href={pic.picUrl} target="_blank" title='click to look full photo' rel="noopener noreferrer"><img  src={pic.picUrl} className="card-img-top" alt="img_from_base"/></a>
                        <div className="card-body gallery_card-body">
                            <h5 className="card-title gallery_card_title">{pic.picTitle}</h5>   
                            <h6>{pic.picDate}</h6>
                            <button onClick={removePic.bind(this, pic.picTitle)} className="btn btn-danger">Remove</button>
                        </div>
                    </div>
                )
            })
            }
        </div>

    )
}