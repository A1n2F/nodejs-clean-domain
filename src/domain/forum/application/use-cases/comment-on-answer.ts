import { UniqueEntityID } from "../../../../core/entities/unique-entity-id";
import { AnswerComment } from "../../enterprise/entities/answer-comment";
import { AnswerCommentsRepository } from "../repositories/answer-comments-repository";
import { AnswerRepository } from "../repositories/answers-repository";
import { QuestionsRepository } from "../repositories/questions-repository";

interface CommentOnAnswerUseCaseRequest {
    authorId: string
    answerId: string
    content: string 
}

interface CommentOnAnswerUseCaseResponse {
    answerComment: AnswerComment
}

export class CommentOnAnswerUseCase {
    constructor(
        private answerRepository: AnswerRepository,
        private answerCommentsRepository: AnswerCommentsRepository
    ) {}

    async execute({ authorId, answerId, content }: CommentOnAnswerUseCaseRequest): Promise<CommentOnAnswerUseCaseResponse> {
        const question = await this.answerRepository.findById(answerId)

        if (!question) {
            throw new Error("Question not found.")
        }

        const answerComment = AnswerComment.create({
            authorId: new UniqueEntityID(authorId),
            answerId: new UniqueEntityID(answerId),
            content,
        })

        await this.answerCommentsRepository.create(answerComment)

        return {
            answerComment
        }
    }
}