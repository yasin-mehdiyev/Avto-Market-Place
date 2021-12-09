import * as applicationServices from "../../../services/Manufactures";
import { setManufactures } from "./ManuSlice";

export const fetchManufactures = () => async dispatch => {
    try {
        const manuFactures = await applicationServices.GetManufactures();
        dispatch(setManufactures(manuFactures));
    } catch (err) {
        throw err;
    }
}
