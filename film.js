document.getElementById('absenForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Ambil data dari formulir
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    
    // Buat elemen list baru
    const li = document.createElement('li');
    li.textContent = `${name} hadir pada ${date}`;
    
    // Tambahkan ke daftar absensi
    document.getElementById('absenItems').appendChild(li);
    
    // Kosongkan formulir
    document.getElementById('absenForm').reset();
});