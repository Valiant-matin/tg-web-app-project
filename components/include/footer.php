<footer class="bg-body-tertiary text-center text-lg-start">
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.05);">
        © 2024 Создано:
        <a class="text-body" href="https://webest.ru/">Webest</a>
    </div>
</footer>
<!-- Подключение Bootstrap JS и зависимостей -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script src="./src/script.js"></script>
<script src="./index.js"></script>
<script>
    $(document).ready(function() {
        $("#content").load(location.origin + '/components/include/header.php');
        $('#content').load(location.origin + '/pages/index.php');
        $("#content").load(location.origin + '/components/include/footer.php');
        $('a[data-page]').click(function(e) {
            e.preventDefault(); // Предотвращаем стандартное поведение ссылки
            var page = $(this).data('page');
            $('#content').load(page); // Загружаем контент в блок #content
        });
    });
</script>
</body>

</html>