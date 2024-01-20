function showHomeScreen(){
    document.getElementById('registerScreen').style.display = 'none';
    document.getElementById('homeScreen').style.display = 'block';
    document.getElementById('loginScreen').style.display = 'none';
}

function showRegisterScreen() {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('registerScreen').style.display = 'block';
}

function showLoginScreen() {
    document.getElementById('registerScreen').style.display = 'none';
    document.getElementById('homeScreen').style.display = 'none';
    document.getElementById('loginScreen').style.display = 'block';
}

const curtidasStatus = {};

function curtirFeed(feedId) {
    const likeIcon = document.getElementById('likeIcon');
    const likesInfo = document.getElementById('likesInfo');
    

    if (!curtidasStatus[feedId]) {
        curtidasStatus[feedId] = true;
        likeIcon.style.color = 'red';

        atualizarCurtidas(feedId, 1);
    } else {
        curtidasStatus[feedId] = false;
        likeIcon.style.color = 'black';

        atualizarCurtidas(feedId, -1);
    }
}

function atualizarCurtidas(feedId, incremento) {
    const likesInfo = document.getElementById('likesInfo');
    const likesTexto = likesInfo.querySelector('p');

    const curtidasAtuais = parseInt(likesTexto.innerText.match(/\d+/)[0], 10);
    
    const novoTotalCurtidas = curtidasAtuais + incremento;
    likesTexto.innerHTML = `Curtido por <strong>Você</strong> e <strong>outras ${novoTotalCurtidas} pessoas</strong>`;
}


