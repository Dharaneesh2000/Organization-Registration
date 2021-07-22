import {makeAutoObservable, observable} from 'mobx';

class  CompanyStore{
    company_name
    email
    job_title
    experience
    terms
    constrctor(){
        makeAutoObservable(this)
}
}
var company_store = window.company_store =new CompanyStore()
export default company_store
