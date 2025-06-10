// OBJECT LITERAL
// const bookOne = {
//     title: 'Cradle',
//     author: 'Will Wight',
//     year: '2024',
//     getSummary: function(){
//         return `${this.title} was written by ${this.author} in ${this.year}`
//     }
// }

// const bookTwo = {
//     title: 'Shadow Slave',
//     author: 'Guiltythree',
//     year: '2025',
//     getSummary: function(){
//         return `${this.title} was written by ${this.author} in ${this.year}`
//     }
// }

// console.log(bookOne)
// console.log(bookOne.title)
// console.log(bookOne.author)
// console.log(bookOne.year)
// console.log(bookOne.getSummary())

// console.log(bookTwo)
// console.log(bookTwo.title)
// console.log(bookTwo.author)
// console.log(bookTwo.year)
// console.log(bookTwo.getSummary())

// console.log(Object.values(bookOne))
// console.log(Object.values(bookTwo))
// console.log(Object.keys(bookTwo)) 

// CONSTRUCTOR
// function Book (title, author, year){
//     this.title = title,
//     this.author = author,
//     this.year = year,
//     this.getSummary = function(){
//         return `${this.title} was written by ${this.author} in ${this.year}`
//     }
// }

// // instantiate the object
// const bookOne = new Book('Cradle', 'Will Wight', '2024')
// const bookTwo = new Book('Shadow Slave', 'Guiltythree', '2025')

// console.log(bookOne)
// console.log(bookTwo)
// console.log(bookTwo.getSummary())

// PROTOTYPES
// function Book (title, author, year){
//     this.title = title,
//     this.author = author,
//     this.year = year
// }

// // getSummary 
// Book.prototype.getSummary = function(){
//         return `${this.title} was written by ${this.author} in ${this.year}`
//     }


// // getAge
// Book.prototype.getAge = function(){
//     const years = new Date().getFullYear() - this.year
//     return `${this.title} is ${years} year(s) old`
// }

// // revise, change year
// Book.prototype.revise = function(newYear){
//     this.year = newYear
//     this,revised = true
// }

// // instantiate the object
// const bookOne = new Book('Cradle', 'Will Wight', '2024')
// const bookTwo = new Book('Shadow Slave', 'Guiltythree', '2025')

// console.log(bookOne)
// console.log(bookTwo)
// console.log(bookTwo.getSummary())
// console.log(bookOne.getAge())
// bookOne.revise('2026')
// console.log(bookOne)

// INHERITANCE
// function Book (title, author, year){
//     this.title = title,
//     this.author = author,
//     this.year = year
// }

// // getSummary 
// Book.prototype.getSummary = function(){
//         return `${this.title} was written by ${this.author} in ${this.year}`
//     }

// // magazine constructor
// function Magazine (title, author, year, month){
//     Book.call(this, title, author, year)

//     this.month = month
// }

// // inherit prototypes
// Magazine.prototype = Object.create(Book.prototype)

// // instantiate magazine object
// const magOne = new Magazine('Elite', 'John Doe', '2025', 'June')

// Magazine.prototype.constructor = Magazine 

// console.log(magOne)
// console.log(magOne.getSummary())

// OBJECT.CREATE
// object of prototypes
// const bookProtos = {
//     getSummary: function(){
//         return `${this.title} was written by ${this.author} in ${this.year}`
//     },
//     getAge: function(){
//         const years = new Date().getFullYear() - this.year
//         return `${this.title} is ${years} year(s) old`
//     }
// }

// create object
// const bookOne = Object.create(bookProtos)
// bookOne.title = 'Cradle'
// bookOne.author = 'Will Wight'
// bookOne.year = '2024'

// const bookOne = Object.create(bookProtos, {
//     title: {value: 'Cradle'},
//     author: {value: 'Will Wight'},
//     year: {value: '2024'}
// })

// console.log(bookOne)

// CLASSES
// class Book {
//     constructor(title, author, year){
//         this.title = title
//         this.author = author
//         this.year = year
//     }

//     getSummary(){
//         return `${this.title} was written by ${this.author} in ${this.year}`
//     }

//     getAge(){
//         const years = new Date().getFullYear() - this.year
//         return `${this.title} is ${years} year(s) old`
//     }

//     revise(newYear){
//     this.year = newYear
//     this,revised = true
//     }

//     static topBookStore(){
//         return 'Barnes & Noble'
//     }
// }

// // instantiate object
// const bookOne = new Book('Cradle', 'Will Wight', '2024')
// console.log(bookOne)

// console.log(Book.topBookStore())

// SUBCLASSES
class Book {
    constructor(title, author, year){
        this.title = title
        this.author = author
        this.year = year
    }

    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
} 

// magazine subclass
class Magazine extends Book{
    constructor(title, author, year, month){
        super(title, author, year)
        this.month = month
    }
}

// instantiate magazine
const magOne = new Magazine('Elite', 'John Doe', '2025', 'June')
console.log(magOne)
console.log(magOne.getSummary())