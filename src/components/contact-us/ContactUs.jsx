import "./ContactUs.css";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";

const ContactUs = () => {
  // const text = {
  //   contactUs: ["Contact Us", "اتصل بنا"],
  //   phone: ["Phone : 19087", "رقم الهاتف : 19087"],
  //   email: ["Email : info@imageegy.com", "الإيميل : info@imageegy.com"],
  //   adress: [
  //     "Adress : 1 city star towers - AlMehwar Almarkazy - 6 October",
  //     "العنوان : 1 أبراج سيتي ستار - المحور المركزي - 6 أكتوبر",
  //   ],
  // };
  // const { isEnglish } = useSelector((state) => state.language);

  // useEffect(() => {
  //   isEnglish
  //     ? document.body.style.setProperty("--text-direction", "ltr")
  //     : document.body.style.setProperty("--text-direction", "rtl");
  // }, [isEnglish]);

  return (
    <div id="contactus" className="contactus">
      {/* <div className="section-title">
        <p>{isEnglish ? text.contactUs[0] : text.contactUs[1]}</p>
      </div>
      <div className="contents">
        <a href="tel:19087">
          <p>{isEnglish ? text.phone[0] : text.phone[1]}</p>
        </a>
        <a href="mailto:info@imageegy.com">
          <p>{isEnglish ? text.email[0] : text.email[1]}</p>
        </a>
        <a href="https://maps.app.goo.gl/nA3g4cSpErEjqDx79" target="_blank">
          <p>{isEnglish ? text.adress[0] : text.adress[1]}</p>
        </a>
      </div> */}
    </div>
  );
};

export default ContactUs;
