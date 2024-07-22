import axios from "axios";

export const api = axios.create({
    baseURL: "http://url-shortner-alb-670062336.us-east-1.elb.amazonaws.com/"
})