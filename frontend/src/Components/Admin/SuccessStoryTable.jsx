import React, { useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import EditStoryModal from './EditStoryModal';

const storiesData = [
    {id:1, wedding_photo:"", bride_name:"Minal", groom_name: "Dhiraj", city:"Pune", description:"बुरुड समाज वधूवर सूचक समिती हि २०१७ पासून social media च्या माध्यमातून कार्य समाजामध्ये काम करत असते. मुख्यतः whatapp च्या माध्यमातून तर हा प्रवास चालूच आहे. जेणेकरून सर्व समाजबांधवाना सोपे व्हावे. नवीन तंत्रज्ञानाचा फायदा घेत “धरूया तंत्रज्ञानाची कस करूया समाजाच्या विकास” ह्या ब्रीदवाक्यानुसार आपली संस्था काम करत आहे. आता सध्या संस्थेच्या समितीमध्ये ११ पदाधिकारी महाराष्ट्र आणि कर्नाटका ह्या राज्यांमध्ये कार्यरत आहे. आजतागायत ह्या संस्थेच्या माध्यमातून दरवर्षी १००-१५० पेक्षा जास्त लग्न जोडले जातात. तसेच उमेदवाराच्या माहितीची योग्य शहनिशा करून मगच ती माहिती इतरांपर्यंत पोहचवत असतो. समितीने सर्व माहिती संकलित केली असून तो एकाच व्यासपीठावर उपलब्ध करून देण्याच काम ह्या संस्थेमार्फत केले आहे. whatsapp ग्रुप, facebook, youtube channel च्या माध्यमातून सुरु झालेला हा प्रवास matrimony website आणि app पर्यंत येऊन पोहचला आहे. समाजातील लोकांना घर बसल्या योग्य सुविधा देऊन समाजातील कुटुंबसंस्था विकसित कशी होईल ह्याकडे संस्थेचा मानस असतो. दिवसांपूर्वी कोरोनाच्या काळामध्ये ONLINE वधू-वर सूचक मेळावा घेतला होता."},
    {id:2, wedding_photo:"", bride_name:"Komal", groom_name: "Mohan", city:"Mumbai", description:"बुरुड समाज वधूवर सूचक समिती हि २०१७ पासून social media च्या माध्यमातून कार्य समाजामध्ये काम करत असते. मुख्यतः whatapp च्या माध्यमातून तर हा प्रवास चालूच आहे. जेणेकरून सर्व समाजबांधवाना सोपे व्हावे. नवीन तंत्रज्ञानाचा फायदा घेत “धरूया तंत्रज्ञानाची कस करूया समाजाच्या विकास” ह्या ब्रीदवाक्यानुसार आपली संस्था काम करत आहे. आता सध्या संस्थेच्या समितीमध्ये ११ पदाधिकारी महाराष्ट्र आणि कर्नाटका ह्या राज्यांमध्ये कार्यरत आहे. आजतागायत ह्या संस्थेच्या माध्यमातून दरवर्षी १००-१५० पेक्षा जास्त लग्न जोडले जातात. तसेच उमेदवाराच्या माहितीची योग्य शहनिशा करून मगच ती माहिती इतरांपर्यंत पोहचवत असतो. समितीने सर्व माहिती संकलित केली असून तो एकाच व्यासपीठावर उपलब्ध करून देण्याच काम ह्या संस्थेमार्फत केले आहे. whatsapp ग्रुप, facebook, youtube channel च्या माध्यमातून सुरु झालेला हा प्रवास matrimony website आणि app पर्यंत येऊन पोहचला आहे. समाजातील लोकांना घर बसल्या योग्य सुविधा देऊन समाजातील कुटुंबसंस्था विकसित कशी होईल ह्याकडे संस्थेचा मानस असतो. दिवसांपूर्वी कोरोनाच्या काळामध्ये ONLINE वधू-वर सूचक मेळावा घेतला होता."},
    {id:3, wedding_photo:"", bride_name:"Savita", groom_name: "Krantiveer", city:"Jalna", description:"बुरुड समाज वधूवर सूचक समिती हि २०१७ पासून social media च्या माध्यमातून कार्य समाजामध्ये काम करत असते. मुख्यतः whatapp च्या माध्यमातून तर हा प्रवास चालूच आहे. जेणेकरून सर्व समाजबांधवाना सोपे व्हावे. नवीन तंत्रज्ञानाचा फायदा घेत “धरूया तंत्रज्ञानाची कस करूया समाजाच्या विकास” ह्या ब्रीदवाक्यानुसार आपली संस्था काम करत आहे. आता सध्या संस्थेच्या समितीमध्ये ११ पदाधिकारी महाराष्ट्र आणि कर्नाटका ह्या राज्यांमध्ये कार्यरत आहे. आजतागायत ह्या संस्थेच्या माध्यमातून दरवर्षी १००-१५० पेक्षा जास्त लग्न जोडले जातात. तसेच उमेदवाराच्या माहितीची योग्य शहनिशा करून मगच ती माहिती इतरांपर्यंत पोहचवत असतो. समितीने सर्व माहिती संकलित केली असून तो एकाच व्यासपीठावर उपलब्ध करून देण्याच काम ह्या संस्थेमार्फत केले आहे. whatsapp ग्रुप, facebook, youtube channel च्या माध्यमातून सुरु झालेला हा प्रवास matrimony website आणि app पर्यंत येऊन पोहचला आहे. समाजातील लोकांना घर बसल्या योग्य सुविधा देऊन समाजातील कुटुंबसंस्था विकसित कशी होईल ह्याकडे संस्थेचा मानस असतो. दिवसांपूर्वी कोरोनाच्या काळामध्ये ONLINE वधू-वर सूचक मेळावा घेतला होता."},
    {id:4, wedding_photo:"", bride_name:"Mrunmai", groom_name: "Sambhaji", city:"Sangali", description:"बुरुड समाज वधूवर सूचक समिती हि २०१७ पासून social media च्या माध्यमातून कार्य समाजामध्ये काम करत असते. मुख्यतः whatapp च्या माध्यमातून तर हा प्रवास चालूच आहे. जेणेकरून सर्व समाजबांधवाना सोपे व्हावे. नवीन तंत्रज्ञानाचा फायदा घेत “धरूया तंत्रज्ञानाची कस करूया समाजाच्या विकास” ह्या ब्रीदवाक्यानुसार आपली संस्था काम करत आहे. आता सध्या संस्थेच्या समितीमध्ये ११ पदाधिकारी महाराष्ट्र आणि कर्नाटका ह्या राज्यांमध्ये कार्यरत आहे. आजतागायत ह्या संस्थेच्या माध्यमातून दरवर्षी १००-१५० पेक्षा जास्त लग्न जोडले जातात. तसेच उमेदवाराच्या माहितीची योग्य शहनिशा करून मगच ती माहिती इतरांपर्यंत पोहचवत असतो. समितीने सर्व माहिती संकलित केली असून तो एकाच व्यासपीठावर उपलब्ध करून देण्याच काम ह्या संस्थेमार्फत केले आहे. whatsapp ग्रुप, facebook, youtube channel च्या माध्यमातून सुरु झालेला हा प्रवास matrimony website आणि app पर्यंत येऊन पोहचला आहे. समाजातील लोकांना घर बसल्या योग्य सुविधा देऊन समाजातील कुटुंबसंस्था विकसित कशी होईल ह्याकडे संस्थेचा मानस असतो. दिवसांपूर्वी कोरोनाच्या काळामध्ये ONLINE वधू-वर सूचक मेळावा घेतला होता."},
    {id:5, wedding_photo:"", bride_name:"Shital", groom_name: "Sarthak", city:"Satara", description:"बुरुड समाज वधूवर सूचक समिती हि २०१७ पासून social media च्या माध्यमातून कार्य समाजामध्ये काम करत असते. मुख्यतः whatapp च्या माध्यमातून तर हा प्रवास चालूच आहे. जेणेकरून सर्व समाजबांधवाना सोपे व्हावे. नवीन तंत्रज्ञानाचा फायदा घेत “धरूया तंत्रज्ञानाची कस करूया समाजाच्या विकास” ह्या ब्रीदवाक्यानुसार आपली संस्था काम करत आहे. आता सध्या संस्थेच्या समितीमध्ये ११ पदाधिकारी महाराष्ट्र आणि कर्नाटका ह्या राज्यांमध्ये कार्यरत आहे. आजतागायत ह्या संस्थेच्या माध्यमातून दरवर्षी १००-१५० पेक्षा जास्त लग्न जोडले जातात. तसेच उमेदवाराच्या माहितीची योग्य शहनिशा करून मगच ती माहिती इतरांपर्यंत पोहचवत असतो. समितीने सर्व माहिती संकलित केली असून तो एकाच व्यासपीठावर उपलब्ध करून देण्याच काम ह्या संस्थेमार्फत केले आहे. whatsapp ग्रुप, facebook, youtube channel च्या माध्यमातून सुरु झालेला हा प्रवास matrimony website आणि app पर्यंत येऊन पोहचला आहे. समाजातील लोकांना घर बसल्या योग्य सुविधा देऊन समाजातील कुटुंबसंस्था विकसित कशी होईल ह्याकडे संस्थेचा मानस असतो. दिवसांपूर्वी कोरोनाच्या काळामध्ये ONLINE वधू-वर सूचक मेळावा घेतला होता."},
]

const SuccessStoryTable = () => {
    const [stories, setStories] = useState(storiesData);
    const [isVisible, setIsVisible] = useState (false);
    const [selectedStory, setSelectedStory] = useState(null);

    const onOpen = (story)=>{
        setSelectedStory(story);
        setIsVisible(true);
    }
    const onClose = ()=>{
        setIsVisible(false);
        setSelectedStory(null);

    }

    const handleUpdate = ()=>{
        // add update logic here
    }

    const handleDelete = (id)=>{
        // add delete logic here
    }

  return (
    <div className='m-6'>
        <table className='border text-left text-lg w-[100%]'>
            <thead>
                <tr className='border-b text-sky-950 bg-gray-100'>
                    <th className='p-4'>Action</th>
                    <th className='p-4'>Wedding Photo</th>
                    <th className='p-4 border '>Bride Name</th>
                    <th className='p-4'>Groom Name</th>
                    <th className='p-4'>City</th>
                    <th className='p-4 w-[40%]'>Wedding Information</th>
                </tr>
            </thead>
            <tbody>
                {/* all members will see here */}
                {
                    stories.map((story, index)=>(
                        <tr className='border-b' key={index}>
                            {/* action */}
                            <td className='p-4 flex items-center gap-4 relative'>
                                <div
                                onClick={()=>onOpen(story)}
                                className='w-fit flex items-center gap-2
                                 text-white bg-sky-400 hover:bg-sky-500 p-2 rounded-md
                                    cursor-pointer' >
                                    <FaRegEdit />
                                    <p>Edit</p>
                                </div>
                                <div
                                onClick={()=>handleDelete(story.id)}
                                className=' w-fit flex items-center gap-2
                                text-white bg-red-400 hover:bg-red-500 p-2 rounded-md
                                cursor-pointer'
                                >
                                    <MdDeleteOutline />
                                    <p>Delete</p>
                                </div>

                                {/* edit modal */}
                                {   selectedStory && (
                                    <EditStoryModal
                                    story = {story}  
                                    selectedStory={selectedStory} 
                                    isVisible={isVisible} 
                                    onClose={onClose} 
                                    handleUpdate={handleUpdate} 
                                    />)
                                }

                            </td>
                            {/* wedding photo */}
                            <td className='p-4'>
                                <img className='w-[150px] h-[150px] object-cover border' src={story.wedding_photo} alt="Wedding photo" />
                            </td>
                            {/* bride name */}
                            <td className='p-4'>{story.bride_name}</td>
                            {/* grrom name */}
                            <td className='p-4'>{story.groom_name}</td>
                            {/* city */}
                            <td className='p-4'>{story.city}</td>
                            {/* wedding information */}
                            <td className='p-4'>{story.description}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default SuccessStoryTable;