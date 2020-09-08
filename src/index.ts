//api key AIzaSyD8aFFC_p3qcrlixXA-eIgmU31s3BVOdD8
import { User } from "./User";
import { Company } from "./Company";
import { mapWrapper } from "./mapWrapper";

const user = new User();

const company = new Company();

console.log(company);

const customMap = new mapWrapper("map");

customMap.addMarker(user);
customMap.addMarker(company);
