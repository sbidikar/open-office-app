import axios from 'axios'

const COURSE_API_URL = 'http://localhost:8080/openofficeapi'
const OPENOFFICE_API_URL = `${COURSE_API_URL}/findAll`

class OpenOfficeDataService{

    retrieveAllCourses() {
        //console.log('executed service')
        return axios.get(`${OPENOFFICE_API_URL}`,
            //{ headers: { authorization: 'Basic ' + window.btoa(INSTRUCTOR + ":" + PASSWORD) } }
        );
    }
}

export default new OpenOfficeDataService()