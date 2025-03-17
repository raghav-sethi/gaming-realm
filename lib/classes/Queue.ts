import { QueueType } from '../types/types';

export class QueueClass<Type> implements QueueType<Type> {
    private data: Array<Type> = [];
    private maxsize: number = 0;

    constructor(length: number) {
        this.maxsize = length;
    }

    isFull(): boolean {
        return this.data.length >= this.maxsize;
    }

    isEmpty(): boolean {
        return this.data.length <= 0;
    }

    dequeue(): Type | undefined {
        if (this.isEmpty()) {
            return;
        }

        return this.data.shift();
    }

    enqueue(dataItem: Type): void {
        if (this.isFull()) {
            this.dequeue();
        }

        if(this.data.includes(dataItem)){
            this.data.splice(this.data.indexOf(dataItem), 1);
        }

        this.data.push(dataItem);
    }

    getData() {
        return this.data;
    }
}
