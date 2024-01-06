function WordPicker() {
    const words = [
        "cargo",
        "teller",
        "spicy",
        "party",
        "candy"
    ];
    const wordOfTheDay = words[Math.floor(Math.random() * words.length)];

    return wordOfTheDay;
}

export default WordPicker;