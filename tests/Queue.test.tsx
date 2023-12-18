import { Queue, IQueue } from "../utils/Queue"; // Adjust the path based on your project structure

describe('Queue', () => {
    let queue: IQueue<number>;

    beforeEach(() => {
        queue = Queue([1, 2, 3]); // Initialize the queue with some elements
    });

    it('should enqueue elements to the back of the queue', () => {
        queue.enqueue(4);
        expect(queue.size()).toBe(4);
    });

    it('should dequeue elements from the front of the queue', () => {
        const element = queue.dequeue();
        expect(element).toBe(1);
        expect(queue.size()).toBe(2);
    });

    it('should return the front element without removing it', () => {
        const frontElement = queue.front();
        expect(frontElement).toBe(1);
        expect(queue.size()).toBe(3);
    });

    it('should return the correct size of the queue', () => {
        expect(queue.size()).toBe(3);
    });

    it('should check if the queue is empty', () => {
        expect(queue.isEmpty()).toBe(false);
        queue.clear();
        expect(queue.isEmpty()).toBe(true);
    });

    it('should clear all elements from the queue', () => {
        queue.clear();
        expect(queue.size()).toBe(0);
    });

    it('should return an array with all elements in the queue', () => {
        const elements = queue.queue();
        expect(elements).toEqual([1, 2, 3]);
    });
});
