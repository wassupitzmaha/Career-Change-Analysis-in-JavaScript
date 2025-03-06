const fs = require('fs');
const csv = require('csv-parser');
const prompt = require('prompt-sync')();
const filePath = 'data/career_change_prediction_dataset.csv';
const { exec } = require('child_process'); //open the pie chart in the browser

//load the file
async function loadCSV(filePath) {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(filePath)) {
            console.error(`Error: File not found at ${filePath}`);
            process.exit(1);
        }

        const data = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => data.push(row))
            .on('end', () => resolve(data))
            .on('error', (error) => reject(error));
    });
}

//the menu that takes in user input

async function menu() {
    const data = await loadCSV(filePath);
    
    while (true) {
        console.log("\nInteractive Data Analysis of Career Changes");
        console.log("1. Mechanical Engineering");
        console.log("2. Data Visualization for Mechanical Engineering");
        console.log("3. Medicine");
        console.log("4. Business");
        console.log("5. Biology");
        console.log("6. Education");
        console.log("7. Exit");

        let choice = prompt("Enter your choice: ");

        if (choice === "1") mechanicalEngineering(data);
        else if (choice === "2") visualizeME();
        else if (choice === "3") medicine(data);
        else if (choice === "4") business(data);
        else if (choice === "5") biology(data);
        else if (choice === "6") education(data);
        else if (choice === "7") {
            console.log("Exiting program.");
            break;
        } else {
            console.log("Invalid choice. Please try again.");
        }
    }
}

//function that filters the data according to the analysis I want to do 

function mechanicalEngineering(data) {
    const totalME = data.filter(row => row['Field of Study'].includes("Mechanical Engineering"));
    const actualME = totalME.filter(row => row['Current Occupation'] === "Mechanical Engineer");
    console.log("____________________________________________________")
    console.log(`Total Mechanical Engineering Majors: ${totalME.length}`);
    console.log(`Actual Mechanical Engineers: ${actualME.length}`);
    console.log(`Out of ${totalME.length}, only ${actualME.length} end up becoming mechanical engineers`)
    console.log("____________________________________________________")

}
//the pie chart for ME!!
function visualizeME() {
    console.log("Opening visualization for Mechanical Engineering...");
    
    // Adjust based on the OS
    const filePath = "me_pie_chart.html";
    const openCommand = process.platform === "win32" ? `start ${filePath}` : process.platform === "darwin" ? `open ${filePath}` : `xdg-open ${filePath}`;
    
    exec(openCommand, (error) => {
        if (error) {
            console.error("Error opening the visualization:", error);
        }
    });
}


function medicine(data) {
    const totalMedicine = data.filter(row => row['Field of Study'].includes("Medicine"));
    const actualMedicine = data.filter(row => row['Current Occupation'] == "Doctor");
    console.log(`Total Medicine Majors: ${totalMedicine.length}`);
    console.log(`Actual Doctors: ${actualMedicine.length}`);
    console.log(`Out of ${totalMedicine.length}, only ${actualMedicine.length} end up becoming Doctors`)
}


function business(data) {
    const totalBusiness = data.filter(row => row['Field of Study'].includes("Business"));
    const actualBusiness = data.filter(row => row['Current Occupation'] == "Business Analyst");
    console.log(`Total Business Majors: ${totalBusiness.length}`);
    console.log(`Actual Business Analyst: ${actualBusiness.length}`);
    console.log(`Out of ${totalBusiness.length}, only ${actualBusiness.length} end up becoming Doctors`)
}

function biology(data) {
    const totalBiology = data.filter(row => row['Field of Study'].includes("Biology"));
    const actualBiology = data.filter(row => row['Current Occupation'] == "Biologist");
    console.log(`Total Biology Majors: ${totalBiology.length}`);
    console.log(`Actual Biologist: ${actualBiology.length}`);
    console.log(`Out of ${totalBiology.length}, only ${actualBiology.length} end up becoming Biologists`)
}

function education(data) {
    const totalEducation = data.filter(row => row['Field of Study'].includes("Education"));
    const actualEducation = data.filter(row => row['Current Occupation'] == "Teacher");
    console.log(`Total Education Majors: ${totalEducation.length}`);
    console.log(`Actual Teacher: ${actualEducation.length}`);
    console.log(`Out of ${totalEducation.length}, only ${actualEducation.length} end up becoming teachers`)
}

//calls the menu
menu();
