import api from "../redux/utils/index";

export const onGetLoginDetails = () => {
    return api.get(`/users`)
}
