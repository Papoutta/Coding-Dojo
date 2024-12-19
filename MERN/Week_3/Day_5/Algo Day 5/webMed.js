const webMD = (ailments, meds) => {
    let medicationList = [];
    
    for (let i = 0; i < meds.length; i++) {   
        let val = true;  // Reset val to true for each medication
        
        for (let j = 0; j < ailments.length; j++) {
            // Check if any symptom in meds[i].treatableSymptoms matches an ailment
            if (meds[i].treatableSymptoms.some(symptom => ailments[j].toLowerCase().includes(symptom.toLowerCase()))) {
                val = false;
                break;
            }
        }
        
        if (val) {
            medicationList.push(meds[i].name);
        }
    }

    return medicationList;
}

const medications = [
    {
        name: "Sulforaphane",
        treatableSymptoms: [
            "dementia",
            "alzheimer's",
            "inflammation",
            "neuropathy",
        ],
    },
    {
        name: "Longvida Curcumin",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "depression",
            "arthritis",
            "anxiety",
        ],
    },
    {
        name: "Hericium erinaceus",
        treatableSymptoms: [
            "anxiety",
            "cognitive decline",
            "depression"],
    },
    {
        name: "Nicotinamide mononucleotide",
        treatableSymptoms: [
            "ageing",
            "low NAD",
            "obesity",
            "mitochondrial myopathy",
            "diabetes",
        ],
    },
    {
        name: "PainAssassinator",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "cramps",
            "headache",
            "toothache",
            "back pain",
            "fever",
        ],
    },
];

console.log(webMD(["pain", "inflammation"], medications));
