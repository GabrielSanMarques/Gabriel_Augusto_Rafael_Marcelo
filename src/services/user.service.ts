import Axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8080/api/data/";

class UserService {
    getUserRanking() {
        return Axios.get(API_URL + 'ranking', { headers: authHeader() })
        . then((response) => {
            return response.data.resolve();
        });
    }

    async getUserPoints(iduser: any) {
        return await Axios.post(API_URL + 'get_points', 
        { 
            id: iduser,
        })
    }
}

export default new UserService();
