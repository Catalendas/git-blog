import moment from "moment";

export function RelativeFormatedDate(data: string) {
    return moment(data).fromNow()
}