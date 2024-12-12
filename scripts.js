document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // フォームのデフォルト送信動作を無効化

    // フォーム送信後のメッセージを表示
    const formMessage = document.getElementById('formMessage');
    formMessage.classList.remove('hidden');

    // フォームをリセット
    this.reset();
});
