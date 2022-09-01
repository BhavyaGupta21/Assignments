class Courses {

    constructor(courseName, price, validity, trainerName, phoneNumber) {
        this.courseName = courseName;
        this.price = price;
        this.validity = validity;
        this.trainerName = trainerName;
        this.phoneNumber = phoneNumber;
    }

    showDetails() {
        console.log(`Thank you for showing interest in ${this.courseName} - Current Price is ${this.price} and validity of course is till ${this.validity}. If you have any query then reach out to ${this.trainerName} mobile - ${this.phoneNumber}.`);
    }
}

let c1 = new Courses("Learn JS", "4000", "2 years", "Rahul", "90909090");

let c2 = new Courses("Learn Cypress", "5000", "1 year", "Bhavya", "7687600");

let c3 = new Courses("Learn Playwright", "6000", "3 years", "Parul", "009900990");

export {c1, c2, c3};