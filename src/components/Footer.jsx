import tiktok from '../assets/tiktok.png'
import insta from '../assets/instagram.png'

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="left">
                    <a href="https://www.instagram.com/Marigoldrestaurant/" target="_blank"><img src={insta} alt="" /></a>
                    <a href="https://www.tiktok.com/@Marigold.restaura" target="_blank"><img src={tiktok} alt="" /></a>
                </div>
                <div className="right">
                    ©️ 2024 Marigold Kitchen. All Rights Reserved.
                </div>
            </div>
        </>
    )
}
