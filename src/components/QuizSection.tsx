import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, RotateCcw, Trophy } from "lucide-react";

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
    question: "Em que ano foi fundado o Exército Brasileiro?",
    options: ["1648", "1822", "1889", "1900"],
    correctAnswer: 0,
    explanation: "O Exército Brasileiro foi fundado em 1648, durante o período colonial."
  },
  {
    id: 2,
    question: "Qual é o lema do Exército Brasileiro?",
    options: ["Ordem e Progresso", "Braço Forte, Mão Amiga", "Pátria ou Morte", "Sempre Prontos"],
    correctAnswer: 1,
    explanation: "O lema 'Braço Forte, Mão Amiga' representa a dupla missão do Exército: defesa nacional e apoio à sociedade."
  },
  {
    id: 3,
    question: "Quantos são os valores fundamentais do Exército Brasileiro?",
    options: ["4", "5", "6", "7"],
    correctAnswer: 2,
    explanation: "São 6 valores fundamentais: Honra, Coragem, Disciplina, Patriotismo, Lealdade e Probidade."
  },
  {
    id: 4,
    question: "Qual é a principal missão constitucional do Exército Brasileiro?",
    options: ["Combate ao crime", "Defesa da pátria", "Educação militar", "Desenvolvimento social"],
    correctAnswer: 1,
    explanation: "A defesa da pátria é a missão constitucional primária, garantindo a soberania nacional."
  },
  {
    id: 5,
    question: "O que representa a cor verde no Exército Brasileiro?",
    options: ["Natureza", "Esperança", "Pátria", "Todas as anteriores"],
    correctAnswer: 3,
    explanation: "O verde representa a natureza brasileira, a esperança no futuro e o amor à pátria."
  }
];

const QuizSection = () => {
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
    <section id="quiz-section" className="py-20 bg-gradient-to-b from-muted to-background">
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    className={`p-4 h-auto text-left justify-start ${
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