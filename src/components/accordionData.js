import { GrNotification } from "react-icons/gr";
import { FcStatistics } from "react-icons/fc";
import { GiNotebook } from "react-icons/gi";
import { TiMessages } from "react-icons/ti";
import { TbDeviceWatchStats2 } from "react-icons/tb";
import { HiDocumentReport } from "react-icons/hi";
export const accordiondata = [
  { icon: <GrNotification />, nav: "NOTIFICATIONS", content: ["notify"] },
  { icon: <FcStatistics />, nav: "SUMMARY", content: [] },
  { icon: <GiNotebook />, nav: "PUBLISH", content: ["Compose", "Feed"] },
  { icon: <TiMessages />, nav: "PUBLISH", content: [] },
  { icon: <TbDeviceWatchStats2 />, nav: "PUBLISH", content: [] },
  { icon: <HiDocumentReport />, nav: "REPORT", content: ["Montly", "Weekly"] },
];
