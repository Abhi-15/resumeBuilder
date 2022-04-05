const viewFactory = {

    colClasses: {
        "Education": ["col-md-20", "col-md-50", "col-md-20", "col-md-10"],
        "Skills": ["col-md-40", "col-md-60"],
        "Intern": ["col-md-20", "col-md-60", "col-md-20"],
        "Projects": ["col-md-20", "col-md-60", "col-md-20"],
        "Responsibility": ["col-md-50"],
        "Hobbies": ["col-md-50"]
    },
    
    formLableNames: {
        'Personal': {columns: [{rows: ['']}, {rows: ['Institute: ']}, {rows: ['Email: ']}, {rows: ['DOB: ']}, {rows: ['Address: ']}]},
        'Education': {columns: [{rows: ['Degree: ']}, {rows: ['University: ']}, {rows: ['Year: ']}, {rows: ['Cpi: ']}]},
        'Skills': {columns: [{rows: ['Expertise: ']}, {rows: ['YourExpertise: ']}]},
        'Intern': {columns: [{rows: ['Intern: ']}, {rows: ['InternInfo: ']}, {rows: ['InternDuration: ', 'Team: ']}]},
        'Projects': {columns: [{rows: ['Project: ', 'Guide: ']}, {rows: ['ProjectInfo: ']}, {rows: ['ProjectDuration: ', 'Team: ']}]},
        'Responsibility': {columns: [{rows: ['Pos: ']}]},
        'Hobbies': {columns: [{rows: ['Hobby: ']}]},
    },

    formInputClass: {
        'Personal': {columns: [{rows: ['Name']}, {rows: ['Institute']}, {rows: ['Email']}, {rows: ['DOB']}, {rows: ['Address']}]},
        'Education': {columns: [{rows: ['Degree']}, {rows: ['University']}, {rows: ['Year']}, {rows: ['Cpi']}]},
        'Skills': {columns: [{rows: ['Expertise']}, {rows: ['YourExpertise']}]},
        'Intern': {columns: [{rows: ['Intern']}, {rows: ['InternInfo']}, {rows: ['InternDuration', 'Team']}]},
        'Projects': {columns: [{rows: ['Project', 'Guide']}, {rows: ['ProjectInfo']}, {rows: ['ProjectDuration', 'Team']}]},
        'Responsibility': {columns: [{rows: ['Pos']}]},
        'Hobbies': {columns: [{rows: ['Hobby']}]},
    },

    headings: {
        'Education': ['Degree', 'University/Institute', 'Year', 'Cpi'], 
    },

    tags: {
        'Personal': ['h1', 'h3', 'h3', 'h3', 'h3'],
    },

    isStatic: {
        'Personal': true,
        'Education': false,
        'Skills': false,
        'Intern': false,
        'Projects': false,
        'Responsibility': false,
        'Hobbies': false,
    },

    doesHaveABorder: {
        'Personal': true,
        'Education': true,
        'Skills': true,
        'Intern': true,
        'Projects': true,
        'Responsibility': false,
        'Hobbies': false,
    },
}
class Model {
    constructor()
    {
        this.lists = {
            "Personal": [[["Solanki Abhishek Priyakant"], ["Dhirubhai Ambani Institute of Information and Communication Technology"], ["201801088@daiict.ac.in"], ["May 1,2000"], ["48-B,Maruti Park Society,80 feet road,Surendranagar"]]],
            "Education": [[["B.Tech | ICT"], ["Dhirubhai Ambani Institute of Information and Communication Technology"], ["2018-2022"], ["7.25"]], [["Higher Secondary | Class XII"], ["Shree Sardar Patel Vidhyalaya"], ["2016-2017"], ["90%"]],
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
        this.onChange = callback;
    }

    addContent(sectionName, newContentToBeAdded){
        this.lists[sectionName].push(newContentToBeAdded);

        this.onChange(this.lists);
    }

    deleteContent(sectionName, indexOfContentToBeDeleted){
        this.lists[sectionName].splice(indexOfContentToBeDeleted, 1);

        this.onChange(this.lists);
    }

    updateContent(sectionName, updatedRow, indexOfContentToBeUpdated){
        this.lists[sectionName] = this.lists[sectionName].map((element, mapIndex) => mapIndex === indexOfContentToBeUpdated ? this.lists[sectionName][mapIndex] = updatedRow : element);

        this.onChange   (this.lists);
    }
}

class View {
    constructor() {

        this.form = this.getElement(".forms");
        this.container = this.getElement(".containerCustom");

        this.posAndHobbySection = this.createElement("div", ["posAndHobbySection", "padding", "mainFlexBox"]);

        this.sectionsAndDivs = {
            "Personal": this.createElement("div", ["personalSection", "padding", "newFlexBox"]),
            "Education": this.createElement("div", ["educationSection", "padding"]),
            "Skills": this.createElement("div", ["skillSection", "padding"]),
            "Intern": this.createElement("div", ["internSection", "padding"]),
            "Projects": this.createElement("div", ["projectSection", "padding"]),
            "Responsibility": this.posAndHobbySection,
            "Hobbies": this.posAndHobbySection
        }

        this.sectionsAndForms = {
            "Personal": this.getElement(".personalForms"),
            "Education": this.getElement(".educationForms"),
            "Skills": this.getElement(".skillsForms"),
            "Intern": this.getElement(".internForms"),
            "Projects": this.getElement(".projectsForms"),
            "Responsibility": this.getElement(".responsibilityForms"),
            "Hobbies": this.getElement(".hobbiesForms"),
        }

        const dummy = viewFactory;

        this.sectionMapping = {
            ...dummy,
            type: {
                'Personal': this.createPersonalSection,
                'Education': this.createTable,
                'Skills': this.createTable,
                'Intern': this.createTable,
                'Projects': this.createTable,
                'Responsibility': this.createUnorderedLists,
                'Hobbies': this.createUnorderedLists,
            },
        }

        this.sections = ["Personal", "Education", "Skills", "Intern", "Projects", "Responsibility", "Hobbies"];

        this.handleSelectDropDownMenu();
    }


    createElement(tagName, classNames){

        const htmlTag = document.createElement(tagName);

        if(classNames){

            classNames.forEach(function(className){
                htmlTag.classList.add(className);
            });
        }

        return htmlTag;
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

    createTable = (lists, sectionName, sectionHeading) => {
        const table = this.createElement("table");
        const thead = this.createElement('thead');
        const tbody = this.createElement("tbody");

        if(typeof this.sectionMapping.headings[sectionName] !== 'undefined'){
            const tr = this.createElement('tr');

            thead.appendChild(tr);

            this.sectionMapping.headings[sectionName].forEach((heading, index) => {
                const th = this.createElement("th", [this.sectionMapping.colClasses[sectionName][index]]);
                th.appendChild(this.createText(heading));
                tr.appendChild(th);
            })
        }

        lists[sectionName].forEach(entries => {
            const tr = this.createElement("tr");

            entries.forEach((cols, colsIndex) => {
                const td = this.createElement("td", [this.sectionMapping.colClasses[sectionName][colsIndex]]);
                
                cols.forEach((col, colIndex) => {
                    const div = this.createElement("div");
                    div.appendChild(this.createText(col));
                    td.appendChild(div);
                })

                tr.appendChild(td);
            });
            
            tbody.appendChild(tr);
        })

        table.appendChild(thead);
        table.appendChild(tbody);

        this.sectionsAndDivs[sectionName].appendChild(sectionHeading);
        this.sectionsAndDivs[sectionName].appendChild(table);
    }

    createUnorderedLists = (lists, sectionName, sectionHeading) => {

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

        div.appendChild(sectionHeading);
        div.appendChild(ul);

        this.sectionsAndDivs[sectionName].appendChild(div);
    }

    createPersonalSection = (lists, sectionName, sectionHeading) => {

        const img = this.createElement("img");
        img.src = "https://daiict-placement-cell.github.io/ResumeMaker/img/daiictlogo.jpg";
        this.sectionsAndDivs[sectionName].appendChild(img);

        const div = this.createElement("div", ["flexItem"]);

        lists[sectionName].forEach((entries) => {

            entries.forEach((cols, colsIndex) => {
                cols.forEach((row, rowIndex) => {
                    
                    const h = this.createElement(this.sectionMapping.tags[sectionName][colsIndex]);
                    h.appendChild(this.createText(this.sectionMapping.formLableNames[sectionName].columns[colsIndex].rows[rowIndex].toUpperCase()));
                    h.appendChild(this.createText(row));

                    div.appendChild(h);
                })
            })
        })

        this.sectionsAndDivs[sectionName].appendChild(div);
    }

    createForm(lists){

        const select = this.getElement("#DropdownSelect");
        const sectionName = select.value;

        this.sections.forEach((sectionName, sectionIndex) => {

            const buttonDiv = this.createElement("div", ["newFlex2"]);
            const addButton = this.createElement("button", ["buttonClass", sectionName + "AddButton"]);
            addButton.appendChild(this.createText("Add"));
            buttonDiv.appendChild(addButton);
            
            lists[sectionName].forEach((entries, entryIndex) => {
                
                const form = this.createElement("div", [sectionName + "Form", "Padding", "formClass"]);

                entries.forEach((cols, colsIndex) => {
                    
                    cols.forEach((row, rowIndex) => {
                        const label = this.createElement("label");
                        label.appendChild(this.createText(this.sectionMapping.formLableNames[sectionName].columns[colsIndex].rows[rowIndex]));
                        
                        const input = this.createElement("input", [this.sectionMapping.formInputClass[sectionName].columns[colsIndex].rows[rowIndex]]);
                        input.value = row;
                        
                        form.appendChild(label);
                        form.appendChild(input);
                    })
                    
                })

                const viewContext = this;
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

                    lists[sectionName][indexOfButton].forEach((cols, colsIndex) => {
                        cols.forEach((row, rowIndex) => {
                            const inputs = viewContext.getElements("." + viewContext.sectionMapping.formInputClass[sectionName].columns[colsIndex].rows[rowIndex]);
                            const input = inputs[indexOfButton];
                            
                            input.value = row;
                        })
                    })
                })
                
                this.sectionMapping.isStatic[sectionName] ? '' : buttonDiv.appendChild(removeButton);
                form.appendChild(buttonDiv);
                this.sectionsAndForms[sectionName].append(form);
            })

            this.sectionMapping.isStatic[sectionName] ? '' : this.sectionsAndForms[sectionName].append(buttonDiv);
        })
    }

    createResume(lists){
        this.sections.forEach(sectionName => {

            const heading = this.createElement("h2");
            heading.appendChild(this.createText(sectionName.toUpperCase()));

            this.sectionMapping.type[sectionName](lists, sectionName, heading);
            this.container.append(this.sectionsAndDivs[sectionName]);

            (this.sectionMapping.doesHaveABorder[sectionName]) ? this.container.append(this.createElement("div", ["borderBottom"])) : ''; 
        })
    }

    deleteUntillEmptyParent(parent){

        while(parent.firstChild){
            parent.removeChild(parent.firstChild);
        }
    }

    displayResume(lists){
        this.sections.forEach(sectionName => {
            this.deleteUntillEmptyParent(this.sectionsAndForms[sectionName]);
            this.deleteUntillEmptyParent(this.sectionsAndDivs[sectionName]);
        })

        this.deleteUntillEmptyParent(this.container);

        // for forms
        this.createForm(lists);        
        
        // for resume
        this.createResume(lists);        
    }

    handleSelectDropDownMenu = () => {

        this.sections.forEach(id => {
            const form = this.getElement("." + id.toLowerCase() + "Forms");
            form.style.display = "none";
        })

        const select = this.getElement("#DropdownSelect");
        const viewContext = this;
        let previousSection = select.value;

        select.addEventListener("change", function(){
            const currentSection = this.value;
            const form = viewContext.getElement("." + currentSection.toLowerCase() + "Forms");

            if(previousSection !== "Select") {
                viewContext.getElement("." + previousSection.toLowerCase() + "Forms").style.display = "none";
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
                const viewContext = this;
                
                button.addEventListener("click", function(){
                    const updatedRowContent = [];

                    viewContext.sectionMapping.formInputClass[sectionName].columns.forEach(cols => {

                        const colContent = [];

                        cols.rows.forEach((inputClass, index) => {
                            const inputs = viewContext.getElements("." + inputClass);
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

            const addButton = this.getElement("." + sectionName + "AddButton");
            const viewContext = this;

            addButton.addEventListener("click", function(){
                const form = viewContext.createElement("div", [sectionName + "Form", "Padding", "formClass"]);
                this.style.display = "none";

                viewContext.sectionMapping.formInputClass[sectionName].columns.forEach(cols => {

                    cols.rows.forEach((row) => {
                        const label = viewContext.createElement("label");
                        label.appendChild(viewContext.createText(row));

                        const input = viewContext.createElement("input", [row]);
                        input.value = "";

                        form.appendChild(label);
                        form.appendChild(input);
                    })
                })

                const buttonDiv = viewContext.createElement("div", ["newFlex2"]);
                const submitButton = viewContext.createElement("button");
                submitButton.appendChild(viewContext.createText("submit"));
                buttonDiv.appendChild(submitButton);
                form.appendChild(buttonDiv);

                viewContext.sectionsAndForms[sectionName].append(form);
                const newContent = [];
                let counter = 0;

                submitButton.addEventListener("click", function(){
                    
                    viewContext.sectionMapping.formInputClass[sectionName].columns.forEach((cols) => {
                        const colContent = [];

                        cols.rows.forEach((inputClass) => {
                            const columns = viewContext.getElements("." + inputClass);
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