import React, { useState } from 'react';
import kailasHadgeImage from "../../Assets/kailsahadage_2.jpg";
import Speech from './Speech';


const speechData = [
  {image:kailasHadgeImage, member: 'कैलास दत्तात्रय हादगे', position: 'संस्थापक अध्यक्ष', speech_type:'अध्यक्षांचे मनोगत', speech: '"अखिल बुरुड समाज सेवाभावी संस्था ही बुरुड समाजासाठी विनामूल्य काम करणारी महाराष्ट्रामधील एक अग्रगण्य नोंदणीकृत संस्था म्हणून ओळखली जाते. ह्या संस्थेअंतर्गत बुरुड समाज वधूवर सूचक समिती काम करत असून महाराष्ट्र, कर्नाटक व मध्य प्रदेश अश्या विविध राज्यांमध्ये ११ whatspp गृपच्या माध्यमातून हा प्रवास सुरु आहे. आता हा प्रवास आज ॲप आणि वेबसाईट च्या माध्यमातून सर्व बुरुड समाजातर्फे उपलब्ध करून देत असताना विशेष आनंद होत आहे. “धरूया तंत्रज्ञानाची कास करूया समाजाचा विकास” हे सूत्र ठेऊन काम करत असताना समाजासाठी काहीतरी नाविन्यपूर्ण करण्याचा आमचा मानस असतो. त्यानून समाजामध्ये एक विशेष ओळख संस्थेने निर्माण केली. विशेषतः कोरोन काळात घेतले गेलेला ऑनलाइन वधूवर सूचक मेळावा असेल, पिंपरी चिंचवड येथील वधूवर परिचय मेळावा असेल अथवा समाजोपयोगी काहीही कार्यक्रम असतील तर समाजाने केवळ सकारात्मक प्रतिसाद न देता आमचे केलेले कौतुक आणि आम्हाला प्रोत्साहन दिले ह्यामुळे समाजाचे जेवढे ऋण व्यक्त करावे तितके कमी आहे. मात्र समितीमार्फत काम करत असताना बऱ्याचश्या समस्यांना तोंड देत द्यावे लागत आहे. त्यामधे समितीच्या नावाने फसव्या लोकांकडून गोरगरीब समाजाची आर्थिक आणि मानसिक फसवणूक वा योग्य database सांभाळण्यात येणाऱ्या अडचणी असो. त्याला पर्याय म्हणून ह्या ॲपची आणि वेबसाईटची निर्मिती केली आहे. तसेच महत्वाचे म्हणजे आजच्या २१ व्या शतकांत समाजाची प्रगती साधायची असल्यास आपण अश्या माध्यमांचा वापर करून आधुनिकतेशी नक्कीच समरस होऊ, तसेच ह्या ॲपमुळे आणि वेबसाईटमुळे समाज एकमेकांच्या जवळ येण्यास मदत होईल. असे मला वाटते. काळाची गरज समाजाची प्रगती साधायची असल्यास आपल्याला समाजाच्या तळागाळातील सर्व घटकांचा विचार व्हायला हवा म्हणून हे ॲप आणि वेबसाईट अतिशय साधी व समजेल अशी बनविली आहे. समाजाने जास्तीत जास्त चांगल्या पद्धतीने ह्या प्रकल्पाचा उपयोग करून घ्यावा आणि आम्हाला भरभरून प्रतिसाद द्यावा असे विनंती वजा आवाहन मी समितीचा अध्यक्ष म्हणून सर्वांना करतो. अनेक शुभेच्छा आणि धन्यवाद. "'},
  {image:'', member: 'श्री. महेश पवार', position: 'सचिव', speech_type:'सचिवांचे मनोगत', speech: '"धरूया तंत्रज्ञानाची कास, करूया समाजाचा विकास” हे सूत्र हाती धरून अखिल बुरुड समाज सेवाभावी संस्था संचालित अखिल महाराष्ट्र बुरुड समाज वधू वर सुचक समिती ही वर्ष २०१७पासून समाजामध्ये अतिशय जोमाने कार्यरत आहे. आपल्या समाजातील काही कुटुंब हे अजूनही तुटपुंज्या रोजगारावर काम करणारा आढळून येतो. त्यांना आधुनिक जगाच्या कक्षेत आणणे हे एक आव्हान आहे. मात्र दुसऱ्या बाजूचा विचार करता आज आपल्या समाजामध्ये बरेचसे तरुण हे विज्ञान, फार्मसी, इंजिनियरिंग, मेडिकल, एमबीए, वाणिज्य, कलासारखे व्यावसायिक क्षेत्र निवडताना दिसतात. आपल्या समाजामध्ये होणारी ही शैक्षणिक क्रांती निश्चितपणे प्रशंसनीय आहे. त्यातून ते तंत्रज्ञानात प्रभावी बनतात हे वेगळे सांगायला नको. अश्या विविधांगी बाजूचा विचार करत समाजाची गरज ओळखून आणि समाजाला आजच्या तंत्रज्ञान क्रांतीसोबत प्रगतीशील करताना सदर “बुरुड बंधन” वेबसाईट आणि अप विनामूल्य स्वरुपात उपलब्ध करून देत आहोत. उपवर व उपवधू ह्यांची नोंदणी आणि माहिती घरबसल्या उपलब्ध करून देण हे या वेबसाईट आणि ॲप हा प्रमुख उद्देश असला तरीही त्यातून होणारी नोंदणी, विखुरलेला समाजाची गाव-तालुका-जिल्हा-क्षेत्रानुसार संख्या, समाजाची गरज, महत्वाचा संदेश समाजापर्यंत पोहचवणे, आपत्कालीन परीस्थितीमध्ये समाजाबंधावाना लागणारी मदत अश्या विविधांगी बाजूंनी उपयोगात आणता येईल. आपल्या समाजाला स्वयंपूर्ण होण्यासाठी निश्चितपणे ह्याचा फायदा होईल ह्याची मला आणि आमच्या संस्थेला खात्री आहे. हे वेबसाईट आणि ॲप ह्यात वेळोवेळी लागणाऱ्या गरजेनुसार बदल करणे देखील गरजेचे आहे. तेव्हा त्यासाठी आपल्या योग्य व अपेक्षित सूचना स्वागतार्ह आहे. धन्यवाद."'},
]

const MemberSpeech = () => {
  const [members, setMembers] = useState(speechData);

  return (
    <div className='w-[80%] m-auto my-[80px] flex flex-col gap-[50px]  '>
        {
          members.map((item, i) => (
            
            <div style={{
              flexDirection: (i%2==0)? 'row' : 'row-reverse'
            }} className='flex  gap-8'>
              <div className='w-[30%]'>
                <img className='h-[100%] rounded-xl' src={item.image} alt={item.member} />
              </div>
              {/* speech section */}
              <Speech member={item.member} position={item.position} speech_type={item.speech_type} speech={item.speech} />
            </div>
          ))
        }
    </div>
  )
}

export default MemberSpeech;