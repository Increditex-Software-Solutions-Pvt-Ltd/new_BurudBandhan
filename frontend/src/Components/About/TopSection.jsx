import React from 'react';
import ringCeremony from "../../Assets/ring_ceremony.jpg";
import burudBandhan_logo from "../../Assets/burudBandhan_logo.jpeg";
import wedding_coupleImage from "../../Assets/wedding_couple.jpg";



const TopSection = () => {

  return (
    <div>
        <div 
        className='w-[80%] m-auto my-[50px] flex justify-center gap-4 items-center h-[500px]'
        >
            {/* <img className='w-full' src={marriageHandImage} alt='image_1' /> */}

            <div className='w-1/2 '>
                {/* logo image */}
                <img className='w-[120px] h-[120px] lg:w-[200px] lg:h-[200px] m-auto mb-6' src={burudBandhan_logo} alt='logo' />
                 
                <div className='flex flex-col gap-2'>
                  <p className=' lg:text-xl text-orange-500'>अखिल बुरुड समाज सेवा भावी संस्था</p>
                  <p className='lg:text-xl font-bold text-sky-950'>आयोजक</p>
                  <h1 className='text-xl lg:text-2xl font-semibold text-orange-500'>अखिल महाराष्ट्र बुरूड समाज वधु-वर सुचक समिती</h1>
                </div>
            </div>

            <div className='w-1/2 h-[100%]'>
              <img className='w-[100%] h-[100%] object-cover' src={wedding_coupleImage} alt="wedding couple images" />
            </div>
        </div>
       
        <div className='w-[80%] m-auto my-[40px] text-justify'>
          <p>अखिल बुरुड समाज वधूवर सूचक समिती हि २०१७ पासून social media च्या माध्यमातून कार्य समाजामध्ये काम करत असते. मुख्यतः whatapp च्या माध्यमातून तर हा प्रवास चालूच आहे. जेणेकरून सर्व समाजबांधवाना सोपे व्हावे. नवीन तंत्रज्ञानाचा फायदा घेत “धरूया तंत्रज्ञानाची कस करूया समाजाच्या विकास” ह्या ब्रीदवाक्यानुसार आपली संस्था काम करत आहे. आता सध्या संस्थेच्या समितीमध्ये ११ पदाधिकारी महाराष्ट्र आणि कर्नाटका ह्या राज्यांमध्ये कार्यरत आहे. आजतागायत ह्या संस्थेच्या माध्यमातून दरवर्षी १००-१५० पेक्षा जास्त लग्न जोडले जातात. तसेच उमेदवाराच्या माहितीची योग्य शहनिशा करून मगच ती माहिती इतरांपर्यंत पोहचवत असतो. समितीने सर्व माहिती संकलित केली असून तो एकाच व्यासपीठावर उपलब्ध करून देण्याच काम ह्या संस्थेमार्फत केले आहे. whatsapp ग्रुप, facebook, youtube channel च्या माध्यमातून सुरु झालेला हा प्रवास matrimony website आणि app पर्यंत येऊन पोहचला आहे. समाजातील लोकांना घर बसल्या योग्य सुविधा देऊन समाजातील कुटुंबसंस्था विकसित कशी होईल ह्याकडे संस्थेचा मानस असतो. दिवसांपूर्वी कोरोनाच्या काळामध्ये ONLINE वधू-वर सूचक मेळावा घेतला होता. त्याला भरगोस प्रतिसाद मिळाला होता आणि तो कार्यक्रम यशस्वी झाला आहे. सदर संस्थेला समाजातून सकारात्मक नजरेने पहिले जाते. समाजासाठी होणार्या कुठल्याही महत्वाच्या कार्याला संस्थेकडून प्रोत्साहन दिले जाते. समाजाचा मानस आणि आजची ओळख लक्षात घेऊन पिंपरी चिंचवड बुरुड समाज समिती जो मेळावा आयोजित केला आहे त्यासाठीदेखील अखिल महाराष्ट्र बुरुड समाज वधूवर सूचक समितीने सहकार्याची भूमिका बजावली आहे.</p>
        </div>
    </div>
  )
}

export default TopSection;