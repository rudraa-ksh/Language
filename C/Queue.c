#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 100

// Define a structure for the queue
struct Queue {
    int arr[MAX_SIZE];
    int front, rear, size;
};

// Define a structure for the stack
struct Stack {
    int arr[MAX_SIZE];
    int top;
};

// Initialize an empty queue
void initQueue(struct Queue* queue) {
    queue->front = queue->rear = -1;
    queue->size = 0;
}

// Initialize an empty stack
void initStack(struct Stack* stack) {
    stack->top = -1;
}

// Check if the queue is empty
int isEmpty(struct Queue* queue) {
    return queue->size == 0;
}

// Check if the stack is empty
int isStackEmpty(struct Stack* stack) {
    return stack->top == -1;
}

// Check if the queue is full
int isFull(struct Queue* queue) {
    return queue->size == MAX_SIZE;
}

// Check if the stack is full
int isStackFull(struct Stack* stack) {
    return stack->top == MAX_SIZE - 1;
}

// Enqueue an element to the queue
void enqueue(struct Queue* queue, int data) {
    if (isFull(queue)) {
        printf("Queue is full. Cannot enqueue.\n");
        return;
    }

    if (isEmpty(queue)) {
        queue->front = queue->rear = 0;
    } else {
        queue->rear = (queue->rear + 1) % MAX_SIZE;
    }

    queue->arr[queue->rear] = data;
    queue->size++;
}

// Dequeue an element from the queue
int dequeue(struct Queue* queue) {
    if (isEmpty(queue)) {
        printf("Queue is empty. Cannot dequeue.\n");
        return -1;
    }

    int data = queue->arr[queue->front];
    if (queue->front == queue->rear) {
        queue->front = queue->rear = -1;
    } else {
        queue->front = (queue->front + 1) % MAX_SIZE;
    }

    queue->size--;
    return data;
}

// Push an element onto the stack
void push(struct Stack* stack, int data) {
    if (isStackFull(stack)) {
        printf("Stack is full. Cannot push.\n");
        return;
    }

    stack->arr[++stack->top] = data;
}

// Pop an element from the stack
int pop(struct Stack* stack) {
    if (isStackEmpty(stack)) {
        printf("Stack is empty. Cannot pop.\n");
        return -1;
    }

    return stack->arr[stack->top--];
}

// Reverse the order of the first k elements in the queue
void reverseFirstKElements(struct Queue* queue, int k) {
    if (k <= 0 || k > queue->size) {
        return; // Invalid input
    }

    struct Stack stack;
    initStack(&stack);

    // Push the first k elements onto the stack
    for (int i = 0; i < k; i++) {
        push(&stack, dequeue(queue));
    }

    // Enqueue the reversed elements back into the queue
    while (!isStackEmpty(&stack)) {
        enqueue(queue, pop(&stack));
    }

    // Dequeue and enqueue the remaining elements to maintain their order
    for (int i = 0; i < (queue->size - k); i++) {
        enqueue(queue, dequeue(queue));
    }
}

// Print the queue
void printQueue(struct Queue* queue) {
    int index = queue->front;
    for (int i = 0; i < queue->size; i++) {
        printf("%d ", queue->arr[index]);
        index = (index + 1) % MAX_SIZE;
    }
    printf("\n");
}

int main() {
    struct Queue queue;
    initQueue(&queue);
    int k = 4;

    // Enqueue elements into the queue
    enqueue(&queue, 10);
    enqueue(&queue, 20);
    enqueue(&queue, 30);
    enqueue(&queue, 40);
    enqueue(&queue, 50);
    enqueue(&queue, 60);
    enqueue(&queue, 70);
    enqueue(&queue, 80);
    enqueue(&queue, 90);

    // Reverse the first k elements
    reverseFirstKElements(&queue, k);

    // Print the modified queue
    printQueue(&queue);

    return 0;
}
