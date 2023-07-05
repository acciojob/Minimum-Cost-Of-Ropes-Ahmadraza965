function findMinimumCost(ropeLengths) {
    const minHeap = new MinHeap();

    ropeLengths.forEach(length => minHeap.insert(length));

    const totalCost = ropeLengths.reduce((acc, _, index) => {
        if (minHeap.size() > 1) {
            const rope1 = minHeap.extractMin();
            const rope2 = minHeap.extractMin();
            const cost = rope1 + rope2;
            minHeap.insert(cost);
            return acc + cost;
        }
        return acc;
    }, 0);

    return totalCost;
}
