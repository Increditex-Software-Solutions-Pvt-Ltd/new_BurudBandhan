import React, { useState } from 'react'
import QuestionAndAnswer from './QuestionAndAnswer';

const inifaq = [
    {
        que:"बुरुड बंधन ह्या वेबसाइट/ॲप द्वारे नोंदणी करण्यासाठी काही शुल्क/रक्कम आकारली जाते का?", 
        ans:"नाही. अखिल महाराष्ट्र बुरुड समाज वधू वर सूचक समिती हि पूर्णपणे विनामूल्य काम करणारी संस्था आहे. सदर संस्थासंचालित “ बुरुड बंधन” ह्या वेबसाइट/ॲप द्वारे नोंदणी करण्यासाठी कुठलीही शुल्क व रक्कम आकारली जात नाही. आणि अश्या पद्धतीने पैसे मागणाऱ्या कुठल्याही संस्थेचा अखिल महराष्ट्र बुरुड समाज वधू वर सूचक समिती सबंध नाही."
    },
    {
        que:"सदर ॲप आपल्या येथे सर्वजातीय मराठी स्थळे उपलब्ध आहेत का?", 
        ans:"नाही. सदर संस्था हि केवळ आणि केवळ बुरुड समाजाविषयी काम करत असते."
    },
    {
        que:"बुरुड बंधन ह्या वेबसाइट/ॲप चा वापर कसा करावा?", 
        ans:"बुरुड बंधन वेबसाइट वापरण्यासाठी अथवा नावनोंदणी करण्यासाठी आपण www.burudbandhan.in या संकेतस्थळावर (वेबसाइटवर) जाऊन भेट देऊ शकता. तसेच Google Play Store वर जाऊन सदर ANDROID ॲप इन्स्टॉल करू शकता."
    },
    {
        que:"सदर वेबसाइट/ॲप वर नाव-नोंदणी करण्यसाठी काय करावे?", 
        ans:"सदर वेबसाइट/ॲप वर नोंदणी करण्यसाठी दोन पध्दतीने देऊ शकतो: १.सामान्य नोंदणी (सर्व समाजबांधवांसाठी)- (FLOWCHART देणे) २.विशेष नोंदणी (केवळ वधू वरांसाठी)- (FLOWCHART देणे)"
    },
    {
        que:"समितीच्या/ऍडमिनच्या अनुमतीशिवाय किंवा केवळ नावनोंदणी केल्यावर लगेचच माझी प्रोफाइल सर्वासाठी खुली अथवा उपलब्ध होते का?", 
        ans:"नाही. प्रथमतः आपण नावनोंदणी केल्यानंतर आमचे समिती प्रतिनिधी आपल्या नावाची व भरलेली महितीची पडताळणी करुण प्रोफाईल सर्वांसाठी उपलब्ध करून देतील. समाजबांधवांच्या सुरक्षेच्या दृष्टीने हे महत्वाचे असल्याने हे करणे गरजेचे असते."
    },
    {
        que:"मोबाईल नंबर नोंदविण्याच्या दृष्टीने काही मर्यादा आहेत का?", 
        ans:"हो, एका क्रमांकावरून फक्त तुम्ही एका कुटुंबाची माहिती नोंदवू शकतात."
    },
    {
        que:"वधू-वरांसाठी नोंदणी केल्यवर लगेचच आपल्याला समोरच्या व्यक्तीचा संपर्क क्रमांक मिळेल का?", 
        ans:"नाही, आपण समोरील स्थळाविषयी आवड दाखविल्यानंतर समोरील व्यक्ती आपल्या प्रोफाईलचा अभ्यास करून आपल्याला संपर्क क्रमांक देण्यासाठी क्लिक करेल. त्यानंतर आपल्याला त्यांचा क्रमांक मिळेल."
    }
]

const FaQ = () => {
    const [faqs, setFaqs] = useState(inifaq);

  return (
    <div className='w-full  py-12'>
        <h1 className='text-4xl font-bold text-sky-950 mb-8'>FAQs</h1>
        {/* content */}
        <div className='w-4/5 m-auto mt-[50px] flex flex-col gap-[20px]'>
            {
                faqs.map((item,indx)=>(
                    <QuestionAndAnswer key={indx} data = {item} />
                ))
            }
        </div>
    </div>
    
  )
}

export default FaQ;