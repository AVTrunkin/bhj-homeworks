document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.font-size');
    const book = document.getElementById('book');

    buttons.forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();

            buttons.forEach(b => b.classList.remove('font-size_active'));

            btn.classList.add('font-size_active');

            book.className = 'book';

            const size = btn.dataset.size;
            if (size !== 'normal') {
                book.classList.add(`book_fs-${size}`);
            }
        });
    });
});
