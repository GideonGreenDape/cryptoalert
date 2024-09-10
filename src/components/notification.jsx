import Notification from "../assets/Notification.png"
import Email from "../assets/Email.png"
import SMS from "../assets/SMS.png"
import Phone from "../assets/Phone.png"
function Notifications() {
    return(
        <div className="flex gap-[30px] px-[95px] ">
            <div className="flex items-center gap-[5px] ">
            <img className="w-[18px] h-[20px] " src={Notification} alt="Notification Icon" />
            <p className="font-inter text-[13px] font-semibold text-primary2">Get Notified!</p>
            </div>
            <img className="w-[24px] h-[24px] " src={SMS} alt="Notification Icon" />
            <img className="w-[24px] h-[24px] " src={Phone} alt="Notification Icon" />
            <img className="w-[24px] h-[24px] " src={Email} alt="Notification Icon" />
            
        </div>
    )
}

export default Notifications;