import {api} from './api'



export default {

    listar:() =>{

        return api.get('users')    
    }

}