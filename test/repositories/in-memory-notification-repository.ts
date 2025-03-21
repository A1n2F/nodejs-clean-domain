import { NotificationsRepository } from "src/domain/notification/application/repositories/notification-repository"
import { Notification } from "src/domain/notification/enterprise/entities/notification"

export class InMemoryNotificationsRepository implements NotificationsRepository {
    public items: Notification[] = []
    
    async create(notification: Notification) {
        this.items.push(notification)
    }
}