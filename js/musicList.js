const songs = [
  { id: 1, title: 'Lan', link: 'https://www.youtube.com/watch?v=-O22D3EV6G0' },
  { id: 2, title: 'Kıymetlim', link: 'https://www.youtube.com/watch?v=OzXmvO_M6ic' },
  { id: 3, title: 'Senin Gibi', link: 'https://www.youtube.com/watch?v=yHd-IhJW5lo' },
  { id: 4, title: 'ayrılmam', link: 'https://www.youtube.com/watch?v=CMhPDxh8cgE' },
  { id: 5, title: 'yandım gönlüm', link: 'https://www.youtube.com/watch?v=EKqqp2fpXqs' },
  { id: 6, title: 'Çok Yazık', link: 'https://www.youtube.com/watch?v=tLxsEYR9UFQ' },
  { id: 7, title: 'saki', link: 'https://www.youtube.com/watch?v=y035E2kzLYM' },
  { id: 8, title: 'yan benimle', link: 'https://www.youtube.com/watch?v=dYOz7ERrj9w' },
  { id: 9, title: 'bu vaziyetler', link: 'https://www.youtube.com/watch?v=Afi3SMGNlY0' },
  { id: 10,title: 'giderim senden', link: 'https://www.youtube.com/watch?v=z48oV3jShTg' },
  { id: 11,title: 'sanma yaşarım', link: 'https://www.youtube.com/watch?v=GkjMyFQI_Lw' },
  { id: 12,title: 'yaramızda kalsın', link: 'https://www.youtube.com/watch?v=T5RAkIJ2yzg' },
  { id: 13,title: 'simsiyah', link: 'https://www.youtube.com/watch?v=0D08kOGNsjY' },
  { title: 'neler geldi bu başıma', link: 'https://www.youtube.com/watch?v=Gd7cRFgnyKo' },
  { title: 'aşka yürek gerek ', link: 'http://youtube.com/watch?v=P9xqkL4VWgE' },
  { title: 'bilirim yalan', link: 'https://www.youtube.com/watch?v=76WklgHZ6t0' },
  { title: 'maralım', link: 'https://www.youtube.com/watch?v=PZDMMsYC6C8' } // fixed typo
];

// Get the container
const musicList = document.getElementById('musicList');

// Loop and render each song
songs.forEach(song => {
  if (!song.title || !song.link) return; // Skip invalid items

  const songCard = document.createElement('div');
  songCard.className = 'song-card';

  songCard.innerHTML = `
    <a href="${song.link}" target="_blank">${song.title}</a>
  `;

  musicList.appendChild(songCard);
});
