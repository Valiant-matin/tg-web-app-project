// Initialization for ES Users
import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";

initMDB({ Dropdown, Collapse });

const tg = window.Telegram.WebApp;

useEffect(() => {
    tg.ready();
}, []);

function onClose() {
    tg.close();
}