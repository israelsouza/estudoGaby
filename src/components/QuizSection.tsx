import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, RotateCcw, Trophy } from "lucide-react";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Qual o principal objetivo da pesquisa que findamenta o site, conforme explicito no material?",
    options: ["Analisar a política de segurança nacional",
     "Entender o setor administrativo do CMSE, formas de ingresso, perfil dos militares e sua avaliação.",
      "Descrever os treinamentos intensos dos militares.",
       "Avaliar o Estatuto dos Militares (Lei Nº 6.880/1980)."],
    correctAnswer: 1,
    explanation: "O objetivo do site  busca compreender o funcionamento do setor administrativo do CMSE."
  },
  {
    id: 2,
    question: "De acordo com o texto, qual é a principal função do People Analytics na gestão de pessoas?",
    options: ["Analisar dados de funcionários para traçar perfis e apoiar decisões.", 
      "Avaliar apenas a parte física e mental de militares em missões.",
       "Gerenciar a hierarquia e disciplina dentro das Forças Armadas", 
       "Organizar documentos e arquivamento de processos internos"],
    correctAnswer: 0,
    explanation: "A principal função de People Analytics é analisar dados de funcinarios ou talentos, traçando perfis."
  },
  {
    id: 3,
    question: "A Metodologia DISC divide os indivíduos em quantas categorias de comportamento humano e quais são elas?",
    options: ["Três categorias: Determinação, Sociabilidade e Organização", 
      "Cinco categorias: Decisão, Integridade, Seriedade, Cuidado e Otimismo. ",
       "Quatro categorias: Dominância, Influência, Estabilidade e Conformidade",
        "Duas categorias: Extroversão e Introversão."],
    correctAnswer: 2,
    explanation: "A metodologia é divida em quatro categorias: Dominância, Influência, Estabilidade e Conformidade."
  },
  {
    id: 4,
    question: "Qual foi o perfil comportamental predominante, identificado pela Metodologia DISC, entre os Sargentos e Oficiais Técnicos Temporários da área administrativa do CMSE?",
    options: ["Dominância e Conformidade – 83% dos entrevistado", 
      "Estabilidade e Influência – 42% cada.",
       "Apenas Dominância – voltada à liderança.", 
      "Conformidade – forte apego a regras."],
    correctAnswer: 1,
    explanation: "o perfil predominante foi estabilidade e Influência, ambos com 42% dos entrevistados."
  },
  {
    id: 5,
    question: "Segundo o estudo, qual porcentagem dos respondentes afirma que a carga pesada de trabalho, estresse constante, pressão e rigidez interfere no comportamento dos militares?",
    options: ["42%",
       "75%", 
       "92%",
        " 83%"],
    correctAnswer: 3,
    explanation: "83% dos respondentes afirma carga pesada de trabalho e estresse."
  },
   {
    id: 6,
    question: " Quais características são consideradas facilitadoras para o cargo administrativo no ambiente militar, de acordo com 75% dos pesquisados?",
    options: ["Paciência, persistência e resistência a mudanças.",
       "Sociabilidade, impulsividade e autoconfiança.", 
       "Exatidão, curiosidade e apego a regras.",
        "Ambição, foco em resultados, disciplina, iniciativa e competitividade."],
    correctAnswer: 3,
    explanation: "para o cargo administrativo no ambiente militar ambição, foco em resultados, disciplina, iniciativa e competitividade são facilitadoras."
  },
   {
    id: 7,
    question: "Quanto tempo pode durar o processo seletivo para ingresso na área administrativa do CMSE como militar temporário e quais competências são exigidas por sua extensão e detalhamento?",
    options: ["No máximo 50 dias, exigindo apenas preparo físico", 
      "Entre 1 a 2 meses, exigindo comunicação e postura", 
      "De quatro a seis meses, exigindo comprometimento, paciência e meticulosidade.", 
      "Um ano, focado em conhecimento técnico e provas militares."],
    correctAnswer: 2,
    explanation: "são exigidas de quatro a seis meses."
  },
   {
    id: 8,
    question: "Quais são as principais atribuições do setor administrativo no Comando Militar do Sudeste (CMSE), conforme listado no texto?",
    options: ["Administração documental, gestão financeira, de recursos, humanos e outros.", 
      "Condução de treinamentos de combate", 
      "Elaboração de estratégias e operações militares", 
      "Proteção contra ameaças internas e externas"],
    correctAnswer: 0,
    explanation: "As principais  atribuições são administração documental, gestão financeira, de recursos materiais e humanos, entre outras."
  },
   {
    id: 9,
    question: "Quais critérios de gestão são característicos dos processos internos do setor administrativo militar?",
    options: ["Flexibilidade, decisões descentralizadas e improvisação.", 
      "Alta rotatividade, orçamento imprevisível e baixa burocracia.",
       "Hierarquia, padronização, controle, rastreabilidade, eficiência, confidencialidade e segurança da informação.",
        "Novas tecnologias, autonomia e compartilhamento irrestrito de dados"],
    correctAnswer: 2,
    explanation: "São criterios de gestão hierarquia e cadeia de comando, padronização, controle e rastreabilidade."
  },
   {
    id: 10,
    question: "Qual dos seguintes itens NÃO é listado como um dos principais desafios enfrentados no cotidiano das operações internas do setor administrativo militar?",
    options: ["Falta de hierarquia clara e cadeia de comando definida", 
      "Dificuldade para integrar novas tecnologias",
       "Quantidade exacerbada de demandas administrativas", 
       "Burocracia que dificulta processos mais ágeisgi"],
    correctAnswer: 0,
    explanation: "Não é listado como um principal desafio falta de hierarquia clara e cadeia de comando definida."
  }
];

const QuizSection = () => {
  const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const el = document.getElementById(location.hash.replace("#", ""));
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}, [location]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setQuizCompleted(false);
    setAnswers([]);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return { message: "Excelente! Você conhece muito bem o Exército!", icon: "🏆" };
    if (percentage >= 60) return { message: "Bom trabalho! Continue estudando sobre nossa história.", icon: "👏" };
    if (percentage >= 40) return { message: "Razoável! Há espaço para aprender mais.", icon: "📚" };
    return { message: "Que tal estudar um pouco mais sobre o Exército?", icon: "💪" };
  };

  if (quizCompleted) {
    const scoreMessage = getScoreMessage();
    return (
      <section id="quiz-section" className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-3 text-2xl md:text-3xl">
                <Trophy className="h-8 w-8 text-primary" />
                Quiz Concluído!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-6xl mb-4">{scoreMessage.icon}</div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {score} / {questions.length}
                </div>
                <div className="text-lg text-muted-foreground">
                  {scoreMessage.message}
                </div>
              </div>
              
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Resumo das Respostas:</h3>
                <div className="space-y-3 text-left">
                  {questions.map((q, index) => (
                    <div key={q.id} className="flex items-start gap-3">
                      {answers[index] === q.correctAnswer ? (
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      )}
                      <div className="text-sm">
                        <strong>Pergunta {index + 1}:</strong> {q.options[q.correctAnswer]}
                        {answers[index] !== q.correctAnswer && (
                          <div className="text-muted-foreground mt-1">{q.explanation}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button onClick={restartQuiz} className="gap-2">
                <RotateCcw className="h-4 w-4" />
                Tentar Novamente
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz-section" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Teste seus Conhecimentos
          </h2>
          <p className="text-lg text-muted-foreground">
            Descubra o quanto você sabe sobre o Exército Brasileiro
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <Badge variant="outline">
                Pergunta {currentQuestion + 1} de {questions.length}
              </Badge>
              <Badge variant="secondary">
                Pontuação: {score}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-6">
                {questions[currentQuestion].question}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {questions[currentQuestion].options.map((option, index) => (
                    <Button
                    key={index}
                    variant={
                      selectedAnswer === null 
                        ? "outline" 
                        : selectedAnswer === index
                          ? index === questions[currentQuestion].correctAnswer
                            ? "default"
                            : "destructive"
                          : index === questions[currentQuestion].correctAnswer
                            ? "default"
                            : "outline"
                    }
                    className={`p-4 h-auto text-left justify-start whitespace-normal break-words ${
                      selectedAnswer !== null && "cursor-not-allowed"
                    }`}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={selectedAnswer !== null}
                  >
                    <div className="flex items-center gap-3 w-full">
                      <span className="font-bold">{String.fromCharCode(65 + index)})</span>
                      <span>{option}</span>
                      {showResult && index === questions[currentQuestion].correctAnswer && (
                        <CheckCircle className="h-5 w-5 text-green-600 ml-auto" />
                      )}
                      {showResult && selectedAnswer === index && index !== questions[currentQuestion].correctAnswer && (
                        <XCircle className="h-5 w-5 text-red-600 ml-auto" />
                      )}
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            {showResult && (
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  {selectedAnswer === questions[currentQuestion].correctAnswer ? (
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                  )}
                  <div>
                    <p className="font-medium">
                      {selectedAnswer === questions[currentQuestion].correctAnswer 
                        ? "Resposta correta!" 
                        : "Resposta incorreta!"}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {questions[currentQuestion].explanation}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {showResult && (
              <div className="flex justify-center">
                <Button onClick={nextQuestion} className="px-8">
                  {currentQuestion < questions.length - 1 ? "Próxima Pergunta" : "Ver Resultado"}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuizSection;