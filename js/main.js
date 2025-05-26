// main.js
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.music-container')
  songs.forEach(({ title, url }) => {
    const card = document.createElement('div')
    card.className = 'song-card'

    const link = document.createElement('a')
    link.href = url
    link.target = '_blank'
    link.textContent = title

    card.appendChild(link)
    container.appendChild(card)
  })
})
