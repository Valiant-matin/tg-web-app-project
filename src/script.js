const tg = window.Telegram.WebApp;

useEffect(() => {
    tg.ready();
}, []);

function onClose() {
    tg.close();
}