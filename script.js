const btn = document.getElementById('mudar-imagem');
const imgDiv = document.getElementById('imagem-idx1');

const getCat = async () => {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();

    imgDiv.innerHTML = '';
    const img = document.createElement('img');
    img.src = data[0].url;
    img.alt = 'Imagem de um gato';
    imgDiv.appendChild(img);

    console.log('Imagem gerada com sucesso: ', data[0].url);
  } catch (error) {
    console.log('Erro ao buscar imagem: ', error);
  }
};

window.onload = () => {
  getCat('https://api.thecatapi.com/v1/images/search')
}

btn.addEventListener('click', getCat);
