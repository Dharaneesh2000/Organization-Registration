import {makeAutoObservable, observable} from 'mobx';


class PersonalStore{
    full_name
    gender
    country
    state
    mobile
    country_code
    constructor(){
        makeAutoObservable(this)
    }
}

var store = window.store =new PersonalStore()

export default store

