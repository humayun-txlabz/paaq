
import {reactLocalStorage} from 'reactjs-localstorage';

function setSelectJob(id){
    const d = reactLocalStorage.get(id);
    const str = JSON.parse(d);
    reactLocalStorage.set(`${id}`, !str);
}

function getSelected(id){
    const d = reactLocalStorage.get(id);
    const boolVal = JSON.parse(d);
    return boolVal;
}


export const savedJobsInLocal = {
    setSelectJob,
    getSelected
}