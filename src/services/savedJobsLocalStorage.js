
import {reactLocalStorage} from 'reactjs-localstorage';

function setSelectJob(id){
    const d = reactLocalStorage.get(id);
    if(d == undefined || d==null){
        eactLocalStorage.set(`${id}`, true);
    }else{
        const str = JSON.parse(d);
        reactLocalStorage.set(`${id}`, !str);
    }
    
}

function getSelected(id){
    const d = reactLocalStorage.get(id);
    if(d == undefined || d==null){
        return false;
    }else{
        const boolVal = JSON.parse(d);
        return boolVal;
    }
}


export const savedJobsInLocal = {
    setSelectJob,
    getSelected
}