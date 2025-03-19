import { Question } from "../../enterprise/entities/question"
import { AnswerRepository } from "../repositories/answers-repository"
import { QuestionsRepository } from "../repositories/questions-repository"

interface ChooseQuestionBestAnswerUseCaseRequest {
    authorId: string
    answerId: string
}

interface ChooseQuestionBestAnswerUseResponse {
    question: Question
}

export class ChooseQuestionBestAnswerUse {
    constructor(
        private questionsRepository: QuestionsRepository,
        private answersRepository: AnswerRepository
    ) {}

    async execute({ answerId, authorId }: ChooseQuestionBestAnswerUseCaseRequest): Promise<ChooseQuestionBestAnswerUseResponse> {
        const answer = await this.answersRepository.findById(answerId)

        if(!answer) {
            throw new Error("Answer not found.")
        }

        const question = await this.questionsRepository.findById(answer.questionId.toString())

        if(!question) {
            throw new Error("Question not found.")
        }

        if(authorId !== question.authorId.toString()) {
            throw new Error("Not aloowed.")
        }

        question.bestAnswerId = answer.id

        await this.questionsRepository.save(question)

        return {
            question
        }
    }
}