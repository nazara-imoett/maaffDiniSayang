const cat = document.getElementById('cat');
const message = document.getElementById('message');
const meowSound = document.getElementById('meow-sound');

const messages = [
  "Hai Dini Sayangkuu~ jangan ngambek yaaaaaa 😽",
  "mengggg ini pengin Dini senyum lagi(sebenernya aqoeeehhh mwehehehe) 🐾",
  "Meowww~ aku kangen Dinii 💕",
  "Kalau qamoeee bahagia, mas teknik ini juga bahagiaa 🌤️",
  "sinii sinii ku suapinn mie ayam beebbb 🍜",
  "qamoeee imoettt bangett beebb  😺",
  "Boleh ngambek, tapi jangan lama-lama yaawww 🫶",
  "Kucing ini bakal meong tiap Dini senyum~ 😻",
  "Dini + Rasya = duo paling manis di dunia 🫶",
  "aku sayang kamu 💫"
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

