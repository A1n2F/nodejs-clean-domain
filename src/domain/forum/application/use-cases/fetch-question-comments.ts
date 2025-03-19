import { QuestionComment } from "../../enterprise/entities/question-comment";
import { QuestionCommentsRepository } from "../repositories/question-comments-repository";

interface FetchQuestionAnswersUseCaseRequest {
    questionId: string
    page: number 
}

interface FetchQuestionAnswersUseCaseResponse {
    questionComments: QuestionComment[]
}

export class FetchQuestionCommentsUseCase {
    constructor(
        private questionCommentsRepository: QuestionCommentsRepository
    ) {}

    async execute({ questionId, page }: FetchQuestionAnswersUseCaseRequest): Promise<FetchQuestionAnswersUseCaseResponse> {
        const questionComments = await this.questionCommentsRepository.findManyByQuestionId(questionId, { page })

        return {
            questionComments
        }
    }
}