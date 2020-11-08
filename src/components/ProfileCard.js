import React from 'react'
import './ProfileCard.css'
import prsn from '../assets/person1.jpg'

const ProfileCard = () => {
    return (
        <div className="card-container">
            <div className="img-box">
                <div className="image">
                    <img src={prsn} alt="user"height="100px" width="100px" style={{borderRadius:'50%'}}></img>
                </div>
                <div>
                    PRICE: <span style={{color:'#29c7ac'}}>FREE</span>
                </div>
                <div>
                    ⭐ 4.9 (120)
                </div>

            </div>
            <div className="detail-box">
                <div className="title">
                    <div>
                        <h3>David Melvik</h3>
                        <p>Founder @ The Millennials & CEO @ABC</p>
                    </div>
                    <div className="button-holder">
                        <button className="heart"><i class="fa fa-heart-o" aria-hidden="true"></i></button>
                        <button className="veiw">Veiw Profile</button>
                    </div>
                </div>
                <div className="sub-title">
                    <div className="sub">
                    <i class="fa fa-clock-o" aria-hidden="true"></i> 02 Free Sessions Available
                    </div>
                    <div  className="sub">
                    <i class="fa fa-map-marker" aria-hidden="true"></i> Tampa,FL,USA
                    </div>
                    <div  className="sub">
                    <i class="fa fa-language" aria-hidden="true"></i> Greek,English,French
                    </div>
                </div>
                <div className="descr">
                    <div>
                <p>In ac iaculis purus, et aliquet odio. Proin lacinia, tellus ut efficitur feugiat, est orci ultrices urna, vitae congue tellus nibh sit amet ligula.</p>
                </div>
                </div>
                <div className="category">
                    <div className="cat-box">Marketing</div>
                    <div className="cat-box" >SEO</div>
                    <div className="cat-box">Content Marketing</div>
                    <div className="cat-box">Marketing Automation</div>
                </div>

            </div>
            
        </div>
    )
}

export default ProfileCard
