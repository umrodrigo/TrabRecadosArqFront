// Ocultar Div de criação de usuário / mostra apenas o login
document.getElementById('conta').style.display = 'none';
function criarconta(){
    document.getElementById('login').style.display = 'none';
    document.getElementById('conta').style.display = 'flex';
}

//const api = "https://arqtetura.herokuapp.com";
const api = "http://localhost:8080/api";
window.addEventListener('load', () => {    

});
//criar usuario
function criarUsuario() {
    const usuario = document.getElementById('user00').value;
    const senha = document.getElementById('password00').value;
    const senha2 = document.getElementById('passwordCheck').value;
    axios.post(`${api}/users`, {
        username: usuario, password: senha, password2: senha2
    }).then((resposta) => {
        if (resposta.data) {
            localStorage.setItem('userLogged', resposta.data.id);
            console.log(resposta.data);
            location.href = 'note.html';
        } else {            
            abrirModal('Atenção!', erro.response.data.error, 'Fechar', null);            
        }}).catch((erro) => {            
            abrirModal('Atenção!', erro.response.data.error, 'Fechar', null);            
        });
}
//Login
function login() {
    const usuarioL = document.getElementById('user').value;
    const senhaL = document.getElementById('password').value;    
    axios.post(`${api}/users/login`, {
        username: usuarioL, password: senhaL
    }).then((resposta) => {
        console.log('respostaa', resposta.data);
        if (resposta.data.id) {
            localStorage.setItem('userLogged', resposta.data.id);
            location.href = 'note.html';
        } else {
            abrirModal('Atenção!', erro.response.data.error, 'Fechar', null);
        }}).catch((erro) => {
            abrirModal('Atenção!', erro.response.data.error, 'Fechar', null);            
        });
}

//------- modal -------
function abrirModal(titulo, conteudo, btn, link){
    var myModal = new bootstrap.Modal(document.getElementById('testemodal'), {});
    let a = document.getElementById("tituloModal");
    let b = document.getElementById("conteudoModal");
    let c = document.getElementById("btnModal");    
    a.innerHTML = `<h5 class="modal-title">${titulo}</h5>`
    b.innerHTML = `<p>${conteudo}</p>`
    c.innerHTML = `<button type="button" class="btn btn-secondary" ${link} data-bs-dismiss="modal">${btn}</button>`
    myModal.show();
}