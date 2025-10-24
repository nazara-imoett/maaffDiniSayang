const cat = document.getElementById('cat');
const message = document.getElementById('message');
const meowSound = document.getElementById('meow-sound');

const messages = [
  "Hai Dini~ jangan ngambek ya 😽",
  "Kucing ini pengin Dini senyum lagi 🐾",
  "Meow~ aku kangen Dini 💕",
  "Kalau Dini bahagia, langit juga ikut biru 🌤️",
  "Rasya udah siapin mie ayam kesukaan kamu 🍜",
  "Kamu itu cahaya biru tenang buat kucing ini 😺",
  "Boleh ngambek, tapi jangan lama-lama ya 💙",
  "Kucing ini bakal meong tiap Dini senyum~ 😻",
  "Dini + Rasya = duo paling manis di dunia 🫶",
  "MeowDini bilang: ‘aku sayang kamu’ 💫"
];

let happy = false;

cat.addEventListener('click', () => {
  // ganti gambar kucing
  cat.src = happy ? 'cat1.png' : 'cat2.png';
  happy = !happy;

  // animasi loncat
  cat.classList.add('jump');
  setTimeout(() => cat.classList.remove('jump'), 500);

  // putar suara meow
  meowSound.currentTime = 0;
  meowSound.play();

  // pesan acak
  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  message.textContent = randomMsg;
});
