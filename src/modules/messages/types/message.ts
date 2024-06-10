export type TMessage = {
    id: number;
    conversationId: number;
    senderId: number;
    content: string;
    timestamps: Date | string;
    isSeen?: boolean;
}