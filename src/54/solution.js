const suits = ['S', 'H', 'C', 'D'];

const ranks = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];

const handTypes = ['RoyalFlush', 'StraightFlush', 'FourOfAKind', 'FullHouse', 'Flush', 'Straight', 'ThreeOfAKind', 'TwoPair', 'Pair', 'HighCard'];


class Card {
    constructor(str) {
        this.rank = str[0];
        this.suit = str[1];
        this.value = ranks.length - ranks.indexOf(this.rank);
    }
}

const compareCards = (card1, card2) => card2.value - card1.value;

const hands = {
    RoyalFlush: (cards) => {
        if (hands.StraightFlush(cards) && cards[0].rank === 'A') {
            return cards;
        }
        return false;
    },
    StraightFlush: (cards) => {
        if (hands.Straight(cards) && hands.Flush(cards)) {
            return cards;
        }
        return false;
    },
    FourOfAKind: (cards) => {
        for (let i = 0; i < cards.length - 3; i += 1) {
            if (cards[i].rank === cards[i + 1].rank && cards[i].rank === cards[i + 2].rank && cards[i].rank === cards[i + 3].rank) {
                const rest = [...cards.slice(0, i), ...cards.slice(i + 4)];
                return [cards[i], cards[i + 1], cards[i + 2], cards[i + 3], ...rest];
            }
        }
        return false;
    },
    FullHouse: (cards) => {
        const triple = hands.ThreeOfAKind(cards);
        if (triple) {
            const pair = hands.Pair(triple.slice(3));
            if (pair) {
                return [...triple.slice(0, 3), ...pair];
            }
        }
        return false;
    },
    Flush: (cards) => {
        if (cards.every(c => c.suit === cards[0].suit)) {
            return cards;
        }
        return false;
    },
    Straight: (cards) => {
        if (cards.every((c, i) => c.value === cards[0].value - i)) {
            return cards;
        }
        return false;
    },
    ThreeOfAKind: (cards) => {
        for (let i = 0; i < cards.length - 2; i += 1) {
            if (cards[i].rank === cards[i + 1].rank && cards[i].rank === cards[i + 2].rank) {
                const rest = [...cards.slice(0, i), ...cards.slice(i + 3)];
                return [cards[i], cards[i + 1], cards[i + 2], ...rest];
            }
        }
        return false;
    },
    TwoPair: (cards) => {
        const pair1 = hands.Pair(cards);
        if (pair1) {
            const pair2 = hands.Pair(pair1.slice(2));
            if (pair2) {
                return [...pair1.slice(0, 2), ...pair2];
            }
        }
        return false;
    },
    Pair: (cards) => {
        for (let i = 0; i < cards.length - 1; i += 1) {
            if (cards[i].rank === cards[i + 1].rank) {
                const rest = [...cards.slice(0, i), ...cards.slice(i + 2)];
                return [cards[i], cards[i + 1], ...rest];
            }
        }
        return false;
    },
    HighCard: cards => cards,
};

const identifyHand = (cards) => {
    for (const type of handTypes) {
        const sorted = hands[type](cards);
        if (sorted) {
            return [type, sorted];
        }
    }
    return undefined;
};

const getWinner = ([type1, hand1], [type2, hand2]) => {
    const value1 = handTypes.length - handTypes.indexOf(type1);
    const value2 = handTypes.length - handTypes.indexOf(type2);
    if (value1 !== value2) {
        return (value1 > value2) ? 1 : 2;
    }

    for (let i = 0; i < hand1.length; i += 1) {
        if (hand1[i].value !== hand2[i].value) {
            return (hand1[i].value > hand2[i].value) ? 1 : 2;
        }
    }

    return 0;
};

module.exports = (input) => {
    const games = input.split(/\n/g)
        .map((game) => {
            const cards = game.split(/\s/g).map(str => new Card(str));
            const [hand1, hand2] = [cards.slice(0, 5).sort(compareCards), cards.slice(5).sort(compareCards)];
            return [hand1, hand2];
        });

    let wins = 0;
    for (const [cards1, cards2] of games) {
        const hand1 = identifyHand(cards1);
        const hand2 = identifyHand(cards2);
        const winner = getWinner(hand1, hand2);
        if (winner === 1) {
            wins += 1;
        }
    }
    return wins;
};
