import {baseStepData} from'../data/bowlsData.js'
import {proteinStepData} from'../data/bowlsData.js'
import {mixInsStepData} from'../data/bowlsData.js'
import {flavorStepData} from'../data/bowlsData.js'

import BowlStepSection from './BowlStepSection.jsx'
export default function OwnBowlSection() {
  return (
    <div className='own-bowl-section' style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }}>
        <h1 style={{
            fontSize: '52px',
            padding: "40px"
        }}>Build your own bowl</h1>
        <BowlStepSection 
            stepNumber={baseStepData.stepNumber}
            stepTitle={baseStepData.stepTitle}
            title={baseStepData.title}
            items={baseStepData.items}
        />

        <BowlStepSection 
            stepNumber={proteinStepData.stepNumber}
            stepTitle={proteinStepData.stepTitle}
            title={proteinStepData.title}
            items={proteinStepData.items}
        />

        <BowlStepSection 
            stepNumber={mixInsStepData.stepNumber}
            stepTitle={mixInsStepData.stepTitle}
            title={mixInsStepData.title}
            items={mixInsStepData.items}
        />

        <BowlStepSection
            stepNumber={flavorStepData.stepNumber}
            stepTitle={flavorStepData.stepTitle}
            title={flavorStepData.title}
            items={flavorStepData.items}
        />
        <button style={{
            margin: "20px",
            padding: "20px 60px",
            fontSize: "18px",
            color: "#ffffff",
            background:"#F96540FF",
            border: 'none',
            borderRadius: '36px',
        }}>Order Now</button>
    </div>
  )
}