class Queue {
    constructor() {
        this.count = 0;
        this.lowCount = 0;
        this.items = {};
    }

    isEmpty() {
        return this.lowCount === this.count;
    }

    enqueue(val) {
        this.items[this.count] = val;
        this.count++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowCount];
        delete this.items[this.lowCount];
        this.lowCount++;
        return result;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowCount];
    }

    clear() {
        this.items = {};
        this.lowCount = 0;
        this.count = 0;
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[this.lowCount]}`;
        for (let i = this.lowCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}

export { Queue };
