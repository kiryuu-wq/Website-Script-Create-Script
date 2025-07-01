//  scriptDokumen .js.getElementById 
('beliFormulir').addEventListener('submit', function(e) {
  e.preventDefault();
  const overlay = 
  e.document.getElementById('loadingOverlay');
  overlay.style.display = 
  overlay.'fleksibel'; token 

  konstan  = document.getElementById(

  'botToken').value;
  const chatId = document.getElementById('chatId').value;
  const scriptFile = document.getElementById('scriptOption').value;

  // Simulate request ke backend yang akan mengelola transaksi dan pengiriman ke Telegram
  fetch('/api/purchase', {
    
    methodmethod: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    
    },
   body: JSON.stringify({
      token,
      chatId,
      scriptFile
    })
  })
  .
      token,
      chatId,
      scriptFile
    })
      token,
      chatId,
      scriptthen(res => res.json())
  .then(data => {
    overlay.style.display = 'none';
    alert('Pembelian berhasil! Bukti transfer telah dikirim ke Telegram.');
    // Tampilkan link download script jika diperlukan
  })
  .catch(error => {
    overlay.
    overlaystyle.display = 'none';
    alert('Terjadi kesalahan: ' + error.message);
  });
});