import { LightningElement } from 'lwc';
const BOOK_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
export default class Bookslistingapp extends LightningElement {
    query='Harry'
    books
    timer
    connectedCallback(){
        this.fetchBookData()
    }

    fetchBookData(){
        fetch(BOOK_URL+this.query)
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            this.books = data
        })
        .catch(error=>console.error(error))
    }
//performance efficient technique
    fetchBooksHandler(event){
        this.query = event.target.value
        window.clearInterval(this.timer)
        this.timer = setTimeout(()=>{
            this.fetchBookData
        }, 1000)
    }

}