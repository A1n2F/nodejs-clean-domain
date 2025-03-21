import { expect, describe, beforeEach, it } from "vitest"
import { InMemoryAnswersRepository } from "test/repositories/in-memory-answer-repository"
import { makeAnswer } from "test/factories/make-answer"
import { UniqueEntityID } from "../../../../core/entities/unique-entity-id"
import { InMemoryQuestionsRepository } from "test/repositories/in-memory-questions-repository"
import { ChooseQuestionBestAnswerUse } from "./choose-question-best-answer"
import { makeQuestion } from "test/factories/make-question"
import { NotAllowedError } from "../../../../core/errors/errors/not-allowed-error"
import { InMemoryAnswerAttachmentsRepository } from "test/repositories/in-memory-answer-attachments-repository"
import { InMemoryQuestionAttachmentsRepository } from "test/repositories/in-memory-question-attachments-repository"

let inMemoryAnswerAttachmentsRepository: InMemoryAnswerAttachmentsRepository
let inMemoryQuestionAttachmentsRepository: InMemoryQuestionAttachmentsRepository
let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: ChooseQuestionBestAnswerUse

describe("Choose Question Best Answer", () => {
    beforeEach(() => {
        inMemoryQuestionAttachmentsRepository = new InMemoryQuestionAttachmentsRepository()
        inMemoryQuestionsRepository = new InMemoryQuestionsRepository(inMemoryQuestionAttachmentsRepository)
        inMemoryAnswerAttachmentsRepository = new InMemoryAnswerAttachmentsRepository()
        inMemoryAnswersRepository = new InMemoryAnswersRepository(inMemoryAnswerAttachmentsRepository)
        sut = new ChooseQuestionBestAnswerUse(inMemoryQuestionsRepository ,inMemoryAnswersRepository)
    })
    
    it("should be able to choose the question best answer", async () => {    
        const question = makeQuestion()
        const answer = makeAnswer({
            questionId: question.id
        })

        await inMemoryQuestionsRepository.create(question)
        await inMemoryAnswersRepository.create(answer)

        await sut.execute({
            answerId: answer.id.toString(),
            authorId: question.authorId.toString()
        })
    
        expect(inMemoryQuestionsRepository.items[0].bestAnswerId).toEqual(answer.id)
    })

    it("should not be able to choose another user question best answer", async () => {    
        const question = makeQuestion({
            authorId: new UniqueEntityID("author-1")
        })
        const answer = makeAnswer({
            questionId: question.id
        })

        await inMemoryQuestionsRepository.create(question)
        await inMemoryAnswersRepository.create(answer)

        const result = await sut.execute({
            answerId: answer.id.toString(),
            authorId: "author-2"
        })

        expect(result.isLeft()).toBe(true)
        expect(result.value).toBeInstanceOf(NotAllowedError)
    })
})
