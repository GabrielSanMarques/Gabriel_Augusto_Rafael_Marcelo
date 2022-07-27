import Axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8080/api/data/";

class UserService {
    getUserRanking() {
        return Axios.get(API_URL + 'ranking', { headers: authHeader() })
        . then((response) => {
            return response.data;
        });
    }

    getUserPoints(iduser: any) {
        return Axios.post(API_URL + 'get_points', 
        { 
            id: iduser,
        })
        .then((response) => {
            return response.data;
        })
    }

    addPoints(userpoints: any) {
        return Axios.post(API_URL + 'add_points',
        {
            id: userpoints.id,
            points: userpoints.points,
        })
        .then((response) => {
            return response.data;
        })
    }
}

export default new UserService();
