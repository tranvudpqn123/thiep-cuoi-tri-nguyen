ScrollReveal().reveal('.crossfade', { reset: true });
ScrollReveal().reveal('.about', { reset: true });
ScrollReveal().reveal('.countdown', { reset: true });
ScrollReveal().reveal('.timeline', { reset: true });
ScrollReveal().reveal('.album', { reset: true });
ScrollReveal().reveal('.congratulations', { reset: true });
ScrollReveal().reveal('.banking', { reset: true });
ScrollReveal().reveal('.thankyou', { reset: true });


// ...existing code...

// Đặt ngày kết thúc ở đây (ví dụ: 21/12/2025 18:00:00)
const endDate = new Date('2026-01-31T18:00:00');

// Hàm cập nhật countdown
function updateCountdown() {
    const now = new Date();
    let diff = endDate - now;

    if (diff < 0) diff = 0;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // Cập nhật HTML
    const countdown = document.querySelector('.countdown .time-number');
    if (countdown) {
        const spans = countdown.querySelectorAll('span.font-noto');
        if (spans.length === 4) {
            spans[0].textContent = days.toString().padStart(2, '0');
            spans[1].textContent = hours.toString().padStart(2, '0');
            spans[2].textContent = minutes.toString().padStart(2, '0');
            spans[3].textContent = seconds.toString().padStart(2, '0');
        }
    }
}

// Gọi hàm mỗi giây
setInterval(updateCountdown, 1000);
updateCountdown(); // Gọi lần đầu để hiển thị ngay
// ...existing code...