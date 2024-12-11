// Esperando o carregamento da página
document.addEventListener('DOMContentLoaded', function() {
    // Referências aos elementos
    const introScreen = document.getElementById('intro-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const startButton = document.getElementById('start-button');
    const quizForm = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');
    
    // Evento para iniciar o teste
    startButton.addEventListener('click', function() {
        // Oculta a tela de introdução e mostra o teste
        introScreen.style.display = 'none';
        quizScreen.style.display = 'block';
    });

    // Lógica do formulário de perguntas
    quizForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const responses = {
            analista: 0,
            rede: 0,
            ia: 0
        };

        // Coletando as respostas
        const questions = document.querySelectorAll('.question');
        questions.forEach(question => {
            const selectedOption = question.querySelector('input[type="radio"]:checked');
            if (selectedOption) {
                responses[selectedOption.value]++;
            }
        });

        // Determinando o resultado com base nas respostas
        let result = '';
        let maxScore = 0;
        for (const area in responses) {
            if (responses[area] > maxScore) {
                maxScore = responses[area];
                result = area;
            }
        }

        // Exibindo o resultado
        const resultText = {
            analista: "A área de Análise de Dados combina com você. Você gosta de trabalhar com grandes volumes de dados e análises para tomar decisões mais assertivas.",
            rede: "A área de Redes é ideal para você! Você se sente confortável com a manutenção de infraestruturas e redes. Acesse para mais informações",
            ia: "Inteligência Artificial é a área para você! Você é curioso e gosta de entender como criar sistemas inteligentes."
        };

        resultDiv.innerHTML = `
            <h2>Resultado: ${resultText[result]}</h2>
        `;
    });
});