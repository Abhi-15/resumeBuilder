class Model {
    constructor()
    {
        this.lists = {
            "Personal": [[["Solanki Abhishek Priyakant"], ["Dhirubhai Ambani Institute of Information and Communication Technology"], ["201801088@daiict.ac.in"], ["May 1,2000"], ["48-B,Maruti Park Society,80 feet road,Surendranagar"]]],
            "Education": [[["Degree"], ["University/Institute"], ["Year"], ["Cpi/Aggregate"]], [["B.Tech | ICT"], ["Dhirubhai Ambani Institute of Information and Communication Technology"], ["2018-2022"], ["7.25"]], [["Higher Secondary | Class XII"], ["Shree Sardar Patel Vidhyalaya"], ["2016-2017"], ["90%"]],
                [["Secondary | Class X"], ["Shree Sardar Patel Vidhyalaya"], ["2014-2015"], ["91.5%"]]],
            "Skills": [[["Expertise Area/Area(s) of Interest"], ["Data Structures and Algorithms"]], [["Programming Language(s)"], ["C, C++, Javascript"]], [["Tools and Technologies"], ["Ltspice"]]],
            "Intern": [[["Rural Internship"], ["Vanvasi Kalyan Ashram, Rajasthan. We went to kotda and visited nearby villages and taught 8th std. children and also gave guidance to children. We visited local areas and observed their lifestyle. Guide: Vanvasi Kalyan Ashram Staff"], ["5 Dec 2019- 27 Dec 2019.", "Team Size - 12"]]],
            "Projects": [[["E-commerce price comparator site", "Guide: Prof"], ["We made an E-commerce site which shows price from different websites(like Amazon, Flipkart, E-bay). So users do not have check every platforms. We also provide hyper link so that user re-direct to that particular websites from which he/she want to buy product. In this project I have worked in front end developing."], ["January - May 2021", "Team Size - 11"]],
                [["Simulation and analysis of product code.", "Guide: Prof. Yash vasavda"], ["We had done our work in C++ language. We made encoder which encodes message signal passing through a bsc or bec channel where noise is added to it and decoding the original signal using tanner graph at the receiver end. In this project I have made decoder using tanner graph(using adjacency matrix)."], ["January-May 2019", "Team Size - 11"]],
                [["Color Game", "Guide: Self"], ["I made an Simple game. In which user have to guess rgb(x,y,z) color. So if user guess it correctly he/she wins. There are also difficulty level button. So If it is easy then user will have 3 option to choose in hard there are 6 options. And I have used html, css, bootstrap, javascrpit in this."], ["January - May 2021", "Individual"]],
                [["Military Equipment Database", "Guide: Minal Bhise"], ["We made SRS. We made a database which can store a variety of data related to the different equipment used by the military. We made ER model and then we normalized it. In the end we loaded database into Postgress, made some queries and run it on our database."], ["August - November 2020", "Team Size - 3"]]],
            "Responsibility": [[["Even Coordinator of DJ WARS in Synapse 2018"]], [["Volunteer in I'Fest 2018"]], [["Volunteer in Synapse 2018"]], [["Volunteer in Concurs 2018"]]],
            "Hobbies": [[["Playing Cricket, Football"]], [["Listening music"]]]
        };
    }

    bindChanged(callback){
        this.changed = callback;
    }

    addContent(sectionName, newContentToBeAdded){
        this.lists[sectionName].push(newContentToBeAdded);

        this.changed(this.lists);
    }

    deleteContent(sectionName, indexOfContentToBeDeleted){
        this.lists[sectionName].splice(indexOfContentToBeDeleted, 1);

        this.changed(this.lists);
    }

    updateContent(sectionName, updatedRow, indexOfContentToBeUpdated){
        // if(sectionName === "Education") indexOfContentToBeUpdated += 1;
        // this.lists[sectionName][indexOfContentToBeUpdated] = updatedRow;

        this.lists[sectionName] = this.lists[sectionName].map((element, mapIndex) => mapIndex === indexOfContentToBeUpdated ? this.lists[sectionName][mapIndex] = updatedRow : element);

        this.changed(this.lists);
    }
}

class View {
    constructor() {

        this.form = this.getElement(".forms");
        this.container = this.getElement(".containerCustom");

        this.personalForms = this.getElement(".personalForms");
        this.educationForms = this.getElement(".educationForms");
        this.skillForms = this.getElement(".skillsForms");
        this.internForms = this.getElement(".internForms");
        this.projectForms = this.getElement(".projectsForms");
        this.posForms = this.getElement(".responsibilityForms");
        this.hobbyForms = this.getElement(".hobbiesForms");

        this.personalSection = this.createElement("div", ["personalSection", "padding", "newFlexBox"]);
        this.educationSection = this.createElement("div", ["educationSection", "padding"]);
        this.skillSection = this.createElement("div", ["skillSection", "padding"]);
        this.internSection = this.createElement("div", ["internSection", "padding"]);
        this.projectSection = this.createElement("div", ["projectSection", "padding"]);
        this.posAndHobbySection = this.createElement("div", ["posAndHobbySection", "padding", "mainFlexBox"]);

        this.sectionsAndDivs = {
            "Personal": this.personalSection,
            "Education": this.educationSection,
            "Skills": this.skillSection,
            "Intern": this.internSection,
            "Projects": this.projectSection,
            "Responsibility": this.posAndHobbySection,
            "Hobbies": this.posAndHobbySection
        }

        this.sectionsAndForms = {
            "Personal": this.personalForms,
            "Education": this.educationForms,
            "Skills": this.skillForms,
            "Intern": this.internForms,
            "Projects": this.projectForms,
            "Responsibility": this.posForms,
            "Hobbies": this.hobbyForms
        }

        this.factory = {

            colClasses: {
                "Education": ["col-md-20", "col-md-50", "col-md-20", "col-md-10"],
                "Skills": ["col-md-40", "col-md-60"],
                "Intern": ["col-md-20", "col-md-60", "col-md-20"],
                "Projects": ["col-md-20", "col-md-60", "col-md-20"],
                "Responsibility": ["col-md-50"],
                "Hobbies": ["col-md-50"]
            },

            formLableNames: {
                "Personal": [['Name: '], ['Institute: '], ['Email: '], ['DOB: '], ['Address: ']],
                "Education": [['Degree: '], ['University: '], ['Year: '], ['Cpi: ']],
                "Skills": [['Expertise: '], ['Your Expertise: ']],
                "Intern": [['Intern: '], ['InternInfo: '], ['InternDuration: ', 'Team: ']],
                "Projects": [['Project: ', 'Guide: '], ['ProjectInfo: '], ['ProjectDuration: ', 'Team: ']],
                "Responsibility": [['Pos: ']],
                "Hobbies": [['Hobby: ']]
            },

            formInputClass: {
                "Personal": [['Name'], ['Institute'], ['Email'], ['DOB'], ['Address']],
                "Education": [['Degree'], ['University'], ['Year'], ['Cpi']],
                "Skills": [['Expertise'], ['YourExpertise']],
                "Intern": [['Intern'], ['InternInfo'], ['InternDuration', 'Team']],
                "Projects": [['Project', 'Guide'], ['ProjectInfo'], ['ProjectDuration', 'Team']],
                "Responsibility": [['Pos']],
                "Hobbies": [['Hobby']]
            }
        }

        this.sections = ["Personal", "Education", "Skills", "Intern", "Projects", "Responsibility", "Hobbies"];

        this.handleSelect();
    }

    createElement(tagName, classNames){
        const TAG = document.createElement(tagName);

        if(classNames){

            classNames.forEach(function(className){
                TAG.classList.add(className);
            });
        }

        return TAG;
    }

    createText(text){
        return document.createTextNode(text);
    }

    getElement(selector){
        return document.querySelector(selector);
    }

    getElements(selector){
        return document.querySelectorAll(selector);
    }

    displayResume(lists){
        this.sections.forEach((sectionName, index) => {

            while(this.sectionsAndForms[sectionName].firstChild){
                this.sectionsAndForms[sectionName].removeChild(this.sectionsAndForms[sectionName].firstChild);
            }
            while(this.sectionsAndDivs[sectionName].firstChild){
                this.sectionsAndDivs[sectionName].removeChild(this.sectionsAndDivs[sectionName].firstChild);
            }
        })

        while(this.container.firstChild){
            this.container.removeChild(this.container.firstChild);
        }

        // for forms
        this.sections.forEach((sectionName, sectionIndex) => {
            const buttonDiv = this.createElement("div", ["newFlex2"]);
            const addButton = this.createElement("button", ["buttonClass", sectionName + "AddButton"]);
            addButton.appendChild(this.createText("Add"));
            buttonDiv.appendChild(addButton);
            
            lists[sectionName].forEach((entries, entryIndex) => {
                
                const form = this.createElement("div", [sectionName + "Form", "Padding", "formClass"]);

                entries.forEach((cols, outIndex) => {
                    
                    cols.forEach((col, colIndex) => {
                        const label = this.createElement("label");
                        label.appendChild(this.createText(this.factory.formLableNames[sectionName][outIndex][colIndex]));
                        
                        const input = this.createElement("input", [this.factory.formInputClass[sectionName][outIndex][colIndex]]);
                        input.value = col;
                        
                        form.appendChild(label);
                        form.appendChild(input);
                    })
                    
                    if(sectionName === "Education" && entryIndex === 0){
                        form.style.display = "none";
                    }
                })

                const this1 = this;
                const buttonDiv = this.createElement("div", ["newFlex"]);
                const resetButton = this.createElement("button", ["buttonClass", sectionName + "ResetButton"]);
                const updateButton = this.createElement("button", ["buttonClass", sectionName + "UpdateButton"]);
                const removeButton = this.createElement("button", ["buttonClass", sectionName + "RemoveButton"]);
                
                resetButton.appendChild(this.createText("reset"));
                updateButton.appendChild(this.createText("update"));
                removeButton.appendChild(this.createText("remove"));

                buttonDiv.appendChild(resetButton);
                buttonDiv.appendChild(updateButton);

                resetButton.addEventListener("click", function(){

                    let indexOfButton = entryIndex;

                    lists[sectionName][indexOfButton].forEach((cols, index) => {
                        cols.forEach((col, colIndex) => {
                            const inputs = this1.getElements("." + this1.factory.formInputClass[sectionName][index][colIndex]);
                            const input = inputs[indexOfButton];
                            
                            input.value = col;
                        })
                    })
                })
                
                if(sectionName !== "Personal") {
                    buttonDiv.appendChild(removeButton);
                }
                
                form.appendChild(buttonDiv);
                
                this.sectionsAndForms[sectionName].append(form);
            })
            
            if(sectionName !== "Personal") this.sectionsAndForms[sectionName].append(buttonDiv);
        })
        
        // for resume
        this.sections.forEach((sectionName, sectionIndex) => {
            const heading = this.createElement("h2");
            heading.appendChild(this.createText(sectionName.toUpperCase()));

            if(sectionName === "Personal"){
                const img = this.createElement("img");
                img.src = "https://daiict-placement-cell.github.io/ResumeMaker/img/daiictlogo.jpg";
                this.sectionsAndDivs[sectionName].appendChild(img);

                const div = this.createElement("div", ["flexItem"]);

                lists[sectionName].forEach((entries) => {

                    entries.forEach((cols, colsIndex) => {
                        cols.forEach((col, colIndex) => {
                            if(colsIndex === 0){
                                const h1 = this.createElement("h1");
                                h1.appendChild(this.createText(col));
                                div.appendChild(h1);
                            }
                            else{
                                const h3 = this.createElement("h3");

                                if(colsIndex > 1){
                                    h3.appendChild(this.createText(this.factory.formLableNames[sectionName][colsIndex][colIndex].toUpperCase()));
                                }

                                h3.appendChild(this.createText(col));
                                div.appendChild(h3);
                            }    
                        })
                    })
                })

                this.sectionsAndDivs[sectionName].appendChild(div);
            }
            else if(sectionName === "Responsibility" || sectionName === "Hobbies"){
                const ul = this.createElement("ul");

                lists[sectionName].forEach(entries => {

                    entries.forEach(cols => {
                        
                        cols.forEach((text) => {
                            const li = this.createElement("li");
                            li.appendChild(this.createText(text));

                            ul.appendChild(li);                            
                        })

                    })
                })

                const div = this.createElement("div");

                div.appendChild(heading);
                div.appendChild(ul);

                this.sectionsAndDivs[sectionName].appendChild(div);
            }
            else{
                const table = this.createElement("table");
                const tbody = this.createElement("tbody");

                lists[sectionName].forEach(entries => {
                    const tr = this.createElement("tr");

                    entries.forEach((cols, colsIndex) => {
                        const td = this.createElement("td", [this.factory.colClasses[sectionName][colsIndex]]);
                        
                        cols.forEach((col, colIndex) => {
                            const div = this.createElement("div");
                            div.appendChild(this.createText(col));
                            td.appendChild(div);
                        })

                        tr.appendChild(td);
                    });
                    
                    tbody.appendChild(tr);
                })

                table.appendChild(tbody);

                this.sectionsAndDivs[sectionName].appendChild(heading);
                this.sectionsAndDivs[sectionName].appendChild(table);
            }

            this.container.append(this.sectionsAndDivs[sectionName]);

            if(sectionIndex < 5){
                this.container.append(this.createElement("div", ["borderBottom"]));
            }
        })
    }

    handleSelect = () => {

        this.sections.forEach(id => {
            const form = this.getElement("." + id.toLowerCase() + "Forms");
            form.style.display = "none";
        })

        const select = this.getElement("#DropdownSelect");
        const this1 = this;
        let previousSection = select.value;

        select.addEventListener("change", function(){
            const currentSection = this.value;
            const form = this1.getElement("." + currentSection.toLowerCase() + "Forms");

            // console.log(previousSection, section);

            if(previousSection !== "Select") {
                this1.getElement("." + previousSection.toLowerCase() + "Forms").style.display = "none";
            }
            form.style.display = "block";

            previousSection = currentSection;
        });
    }
    
    bindUpdate(handler){
        
        this.sections.forEach(sectionName => {
            const updateButtons = this.getElements("." + sectionName + "UpdateButton");
            const forms = this.getElements("." + sectionName + "Form");
            
            updateButtons.forEach((button, indexOfContentToBeUpdated) => {
                const this1 = this;
                
                button.addEventListener("click", function(){
                    const updatedRowContent = [];

                    this1.factory.formInputClass[sectionName].forEach((cols) => {
                        const colContent = [];

                        cols.forEach((col) => {
                            const inputs = this1.getElements("." + col);
                            colContent.push(inputs[indexOfContentToBeUpdated].value);
                        })

                        updatedRowContent.push(colContent);
                    })
                    
                    handler(sectionName, updatedRowContent, indexOfContentToBeUpdated);
                })
            })
        })
    }
    
    bindRemove(handler){
        this.sections.forEach(sectionName => {
            const removeButtons = this.getElements("." + sectionName + "RemoveButton");
            const forms = this.getElements("." + sectionName + "Form");

            removeButtons.forEach((button, indexOfContentToBeUpdated) => {
                const inputs = forms[indexOfContentToBeUpdated].getElementsByTagName("input");
                const this1 = this;

                button.addEventListener("click", function(){
                    handler(sectionName, indexOfContentToBeUpdated);
                })
            })
        })
    }
    
    bindAdd(handler){
        this.sections.forEach(sectionName => {
            if(sectionName === "Personal") {
                return ;
            }
            
            // console.log(sectionName);

            const addButton = this.getElement("." + sectionName + "AddButton");
            const this1 = this;

            addButton.addEventListener("click", function(){
                const form = this1.createElement("div", [sectionName + "Form", "Padding", "formClass"]);
                this.style.display = "none";

                this1.factory.formInputClass[sectionName].forEach((cols) => {

                    cols.forEach((col) => {
                        const label = this1.createElement("label");
                        label.appendChild(this1.createText(col));

                        const input = this1.createElement("input", [col]);
                        input.value = "";

                        form.appendChild(label);
                        form.appendChild(input);
                    })
                })

                const buttonDiv = this1.createElement("div", ["newFlex2"]);
                const submitButton = this1.createElement("button");
                submitButton.appendChild(this1.createText("submit"));
                buttonDiv.appendChild(submitButton);
                form.appendChild(buttonDiv);

                this1.sectionsAndForms[sectionName].append(form);
                const newContent = [];
                let counter = 0;

                submitButton.addEventListener("click", function(){
                    // console.log();
                    this1.factory.formInputClass[sectionName].forEach((cols) => {
                        const colContent = [];

                        cols.forEach((col) => {
                            const columns = this1.getElements("." + col);
                            colContent.push(columns[columns.length - 1].value);
                        })

                        newContent.push(colContent);
                    })

                    handler(sectionName, newContent);
                })
            })
            
        })
    }
}

class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view

        this.model.bindChanged(this.onChange);
        this.onChange(this.model.lists);
    }

    onChange = (lists) => {
        this.view.displayResume(lists);
        this.view.bindUpdate(this.handleUpdateContent);
        this.view.bindRemove(this.handleRemoveContent);
        this.view.bindAdd(this.handleAddContent);
    };

    handleUpdateContent = (sectionName, updatedRowContent, indexOfContentToBeUpdated) => {
        this.model.updateContent(sectionName, updatedRowContent, indexOfContentToBeUpdated);
    };

    handleRemoveContent = (sectionName, indexOfContentToBeDeleted) => {
        this.model.deleteContent(sectionName, indexOfContentToBeDeleted);
    };

    handleAddContent = (sectionName, newContentToBeAdded) => {
        this.model.addContent(sectionName, newContentToBeAdded);
    };
}

const app = new Controller(new Model(), new View());