import Axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8080/api/test/";

class UserService {
    getUserContent() {
        return Axios.get(API_URL + 'user', { headers: authHeader() });
    }
}

export default new UserService();