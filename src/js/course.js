document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.tablink').forEach(function (element) {
        element.addEventListener('click', function () {
            // 隱藏所有 tab 的內容
            document.querySelectorAll('.tabcontent').forEach(function (content) {
                content.classList.add('hidden');
            });

            // 移除所有 tab 的 active 樣式
            document.querySelectorAll('.tablink').forEach(function (tab) {
                tab.classList.remove('active');
            });

            // 顯示對應的內容
            const tabId = this.dataset.tab;
            document.getElementById(tabId).classList.remove('hidden');

            // 將目前點擊的 tab 標記為 active
            this.classList.add('active');
        });
    });

    // 預設顯示第一個 tab 的內容並設為 active
    document.getElementById('tabs-with-rounded-1').classList.remove('hidden');
    document.querySelector('[data-tab="tabs-with-rounded-1"]').classList.add('active');
});

