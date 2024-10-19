import React from 'react'

const ProfessionalDetails = ({handleChange}) => {
  return (
    <div>
        <h1>व्यावसायिक माहिती</h1>
        <div>
            <div>
                <input 
                name="qualification" 
                type="text"
                placeholder='शिक्षण' 
                />
            </div>

            {/* presently working */}
            {/* check if yes or no */}
            <div>
                <h1>सध्या कार्यरत आहे का? (Presently Working?)</h1>
                <div>
                    <input 
                    className='cursor-pointer'
                    name="status" 
                    type="radio"
                    value='Yes'
                    id='status'
                    />
                    <label htmlFor='status'>Yes</label>
                </div>
                <div>
                    <input 
                    className='cursor-pointer'
                    name="status" 
                    type="radio"
                    value='No'
                    id='status'
                    />
                    <label htmlFor='status'>No</label>
                </div>
            </div>
            
            <div>
                <select>
                    <option value="">कृपया योग्य पर्याय निवडा</option>
                    <option value='Government'>सरकारी नोकरी</option>
                    <option value='Private'>खाजगी नोकरी</option>
                    <option value='Business'>व्यवसाय</option>
                </select>
            </div>
                 
            <div>
                <input 
                name="annualIncome" 
                type="number"
                placeholder='वार्षिक उत्पन्न' 
                />
                <p>Rs.</p>
            </div>
            <div>
                <input 
                name="expectation" 
                type="text"
                placeholder='तुमच्या जोडीदाराकडून अपेक्षा' 
                />
            </div>
            <div>
                <input 
                name="hobbies" 
                type="text"
                placeholder='छंद' 
                />
            </div>
            
        </div>     
    </div>
  )
}

export default ProfessionalDetails
