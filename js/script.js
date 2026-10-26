const campoNome = document.getElementById("nome");
const campoCargo = document.getElementById("cargo");
const campoResumo = document.getElementById("resumo");

const botaoSalvar = document.getElementById("salvar");

botaoSalvar.addEventListener("click", salvarPerfil);

function salvarPerfil() {
    document.getElementById("nomePerfil").innerText = campoNome.value;
    document.getElementById("cargoPerfil").innerText = campoCargo.value;
    document.getElementById("resumoPerfil").innerText = campoResumo.value;

    const perfil = {
        nome: campoNome.value,
        cargo: campoCargo.value,
        resumo: campoResumo.value
    };

    localStorage.setItem("perfil", JSON.stringify(perfil));
}

window.onload = function() {
    const perfilSalvo = JSON.parse(localStorage.getItem("perfil"));

    if (perfilSalvo) {
        document.getElementById("nomePerfil").innerText = perfilSalvo.nome;
        document.getElementById("cargoPerfil").innerText = perfilSalvo.cargo;
        document.getElementById("resumoPerfil").innerText = perfilSalvo.resumo;

        campoNome.value = perfilSalvo.nome;
campoCargo.value = perfilSalvo.cargo;
campoResumo.value = perfilSalvo.resumo;
    }
};

document.getElementById("tema").addEventListener("click", function() {
    document.body.classList.toggle("dark");
    sessionStorage.setItem("tema", "dark");
});

function registrarVisita() {
    const visitaAnterior = document.cookie
        .split("; ")
        .find(linha => linha.startsWith("ultimaVisita="));

    const elementoVisita = document.getElementById("ultimaVisita");

    if (visitaAnterior) {
        const dataAnterior = decodeURIComponent(
            visitaAnterior.split("=")[1]
        );

        elementoVisita.innerText = "Sua última visita foi em: " + dataAnterior;
    } else {
        elementoVisita.innerText = "Esta é sua primeira visita registrada.";
    }

    const agora = new Date().toLocaleString("pt-BR");

    document.cookie = "ultimaVisita=" + encodeURIComponent(agora) +
        "; max-age=31536000; path=/";
}

registrarVisita();