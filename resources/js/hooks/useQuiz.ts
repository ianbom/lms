import { Quiz, QuizAttempt, QuizResult, UserAnswer } from '@/types/study';
import { router } from '@inertiajs/react';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

export type QuizState = 'intro' | 'in-progress' | 'submitted' | 'reviewing';

interface UseQuizOptions {
    quiz: Quiz;
    attempt: QuizAttempt | null;
    classId: number;
    videoId?: number;
}

interface UseQuizReturn {
    // State
    quizState: QuizState;
    currentQuestionIndex: number;
    userAnswers: UserAnswer[];
    timeSpent: number;
    isSubmitting: boolean;
    quizResult: QuizResult | null;

    // Computed
    currentQuestion: Quiz['questions'][0];
    totalQuestions: number;
    answeredCount: number;
    isLastQuestion: boolean;
    isFirstQuestion: boolean;

    // Actions
    handleStartQuiz: () => Promise<void>;
    handleSelectAnswer: (questionId: number, optionId: number) => void;
    handleSubmitQuiz: () => Promise<void>;
    handleReviewAnswers: () => void;
    handleRetryQuiz: () => void;
    handleBackToClass: () => void;
    goToQuestion: (index: number) => void;
    goToNextQuestion: () => void;
    goToPrevQuestion: () => void;
    getCurrentAnswer: (questionId: number) => number | null;
    formatTimeSpent: (seconds: number) => string;
}

export function useQuiz({
    quiz,
    attempt,
    classId,
    videoId,
}: UseQuizOptions): UseQuizReturn {
    const [quizState, setQuizState] = useState<QuizState>(
        attempt?.submitted_at ? 'submitted' : 'intro',
    );
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<UserAnswer[]>(() =>
        quiz.questions.map((q) => ({ questionId: q.id, optionId: null })),
    );
    const [timeSpent, setTimeSpent] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

    // Computed values
    const currentQuestion = quiz.questions[currentQuestionIndex];
    const totalQuestions = quiz.questions.length;
    const answeredCount = userAnswers.filter((a) => a.optionId !== null).length;
    const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
    const isFirstQuestion = currentQuestionIndex === 0;

    // Timer effect
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (quizState === 'in-progress') {
            interval = setInterval(() => {
                setTimeSpent((prev) => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [quizState]);

    // Format time helper
    const formatTimeSpent = useCallback((seconds: number): string => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }, []);

    // Start quiz
    const handleStartQuiz = useCallback(async () => {
        try {
            await axios.post(`/user/study/${classId}/quiz/${quiz.id}/start`);
            setQuizState('in-progress');
        } catch (error) {
            console.error('Failed to start quiz:', error);
            // Start anyway for better UX
            setQuizState('in-progress');
        }
    }, [classId, quiz.id]);

    // Select answer
    const handleSelectAnswer = useCallback(
        (questionId: number, optionId: number) => {
            setUserAnswers((prev) =>
                prev.map((answer) =>
                    answer.questionId === questionId
                        ? { ...answer, optionId }
                        : answer,
                ),
            );
        },
        [],
    );

    // Navigate to specific question
    const goToQuestion = useCallback((index: number) => {
        setCurrentQuestionIndex(index);
    }, []);

    // Navigate next
    const goToNextQuestion = useCallback(() => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
        }
    }, [currentQuestionIndex, totalQuestions]);

    // Navigate prev
    const goToPrevQuestion = useCallback(() => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex((prev) => prev - 1);
        }
    }, [currentQuestionIndex]);

    // Submit quiz
    const handleSubmitQuiz = useCallback(async () => {
        const unanswered = userAnswers.filter((a) => a.optionId === null);
        if (unanswered.length > 0) {
            const confirmSubmit = window.confirm(
                `Masih ada ${unanswered.length} pertanyaan yang belum dijawab. Yakin ingin mengumpulkan?`,
            );
            if (!confirmSubmit) return;
        }

        setIsSubmitting(true);
        try {
            const response = await axios.post(
                `/user/study/${classId}/quiz/${quiz.id}/submit`,
                { answers: userAnswers },
            );
            setQuizResult(response.data.result);
            setQuizState('submitted');
        } catch (error) {
            console.error('Failed to submit quiz:', error);
            alert('Gagal mengumpulkan quiz. Silakan coba lagi.');
        } finally {
            setIsSubmitting(false);
        }
    }, [classId, quiz.id, userAnswers]);

    // Review answers
    const handleReviewAnswers = useCallback(() => {
        setQuizState('reviewing');
        setCurrentQuestionIndex(0);
    }, []);

    // Retry quiz
    const handleRetryQuiz = useCallback(() => {
        setUserAnswers(
            quiz.questions.map((q) => ({ questionId: q.id, optionId: null })),
        );
        setTimeSpent(0);
        setCurrentQuestionIndex(0);
        setQuizResult(null);
        setQuizState('intro');
    }, [quiz.questions]);

    // Back to class/study page
    const handleBackToClass = useCallback(() => {
        if (videoId) {
            router.visit(`/user/study/${classId}/video/${videoId}`);
        } else {
            router.visit(`/user/classes/${classId}`);
        }
    }, [classId, videoId]);

    // Get current answer for question
    const getCurrentAnswer = useCallback(
        (questionId: number): number | null => {
            return (
                userAnswers.find((a) => a.questionId === questionId)
                    ?.optionId ?? null
            );
        },
        [userAnswers],
    );

    return {
        // State
        quizState,
        currentQuestionIndex,
        userAnswers,
        timeSpent,
        isSubmitting,
        quizResult,

        // Computed
        currentQuestion,
        totalQuestions,
        answeredCount,
        isLastQuestion,
        isFirstQuestion,

        // Actions
        handleStartQuiz,
        handleSelectAnswer,
        handleSubmitQuiz,
        handleReviewAnswers,
        handleRetryQuiz,
        handleBackToClass,
        goToQuestion,
        goToNextQuestion,
        goToPrevQuestion,
        getCurrentAnswer,
        formatTimeSpent,
    };
}
