import { axiosClient } from '../axiosClient';

export const authenticationApi = async (data) => await axiosClient.post(`common/checkLoginAuth`, data);
