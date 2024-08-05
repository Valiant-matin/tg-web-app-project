document.addEventListener("load", (e) => {
    console.log("Страница загрузилась!");


    const tg = window.Telegram.WebApp;

    useEffect(() => {
        tg.ready();
    }, []);

    const onClose = () => {
        tg.close();
    }
});