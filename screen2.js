function handleMenuClick(menu) {
    switch(menu) {
        case 'view txt file':
            window.location.href = 'view-txt.html';
            break;
        default:
            alert(`You selected ${menu}`);
    }
    // Anda bisa menambahkan logika lain seperti pengalihan ke halaman lain
    // Misalnya: window.location.href = `${menu}.html`;
}
