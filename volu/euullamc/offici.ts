class Counter {
    private static count: number = 0; // Assuming a default initial value

    public static getCount(): number {
        if (typeof Counter.count !== 'number' || isNaN(Counter.count)) {
            throw new Error('Count is not a valid number');
        }
        return Counter.count;
    }

    // Additional method to increment the count
    public static incrementCount(): void {
        Counter.count += 1;
    }

    // Additional method to reset the count
    public static resetCount(): void {
        Counter.count = 0;
    }
}
