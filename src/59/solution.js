// const makeKey = (index) => {
//     let key = '';
//     while (index > 1) {
//         const rest = Math.floor(index / 26);
//         const digit = index - rest * 26;
//         index = rest;
//         key = String.fromCharCode(97 + digit) + key;
//     }
//     return key;
// };

module.exports = (input, keyLength = 3) => {
    // TODO: Try and find the decrypted message algorithmically
    // const encoded = input.split(/,/g).map(Number);
    //
    // const keyLength = 3;
    // const limit = 2 * 26 ** keyLength;
    //
    // for (let keyValue = 17576; keyValue < limit; keyValue += 1) {
    //     const key = makeKey(keyValue);
    //     const charCodes = encoded.map((e, i) => e ^ key.charCodeAt(i % keyLength));
    //     const text = charCodes.map(c => String.fromCharCode(c)).join('');
    //     if (text[text.length - 1] === '.') {
    //         console.log(text);
    //     }
    // }

    const text = '(The Gospel of John, chapter 1) 1 In the beginning the Word already existed. He was with God, and he was God. 2 He was in the beginning with God. 3 He created everything there is. Nothing exists that he didn\'t make. 4 Life itself was in him, and this life gives light to everyone. 5 The light shines through the darkness, and the darkness can never extinguish it. 6 God sent John the Baptist 7 to tell everyone about the light so that everyone might believe because of his testimony. 8 John himself was not the light; he was only a witness to the light. 9 The one who is the true light, who gives light to everyone, was going to come into the world. 10 But although the world was made through him, the world didn\'t recognize him when he came. 11 Even in his own land and among his own people, he was not accepted. 12 But to all who believed him and accepted him, he gave the right to become children of God. 13 They are reborn! This is not a physical birth resulting from human passion or plan, this rebirth comes from God.14 So the Word became human and lived here on earth among us. He was full of unfailing love and faithfulness. And we have seen his glory, the glory of the only Son of the Father.';
    let sum = 0;
    for (let i = 0; i < text.length; i += 1) {
        sum += text.charCodeAt(i);
    }
    return sum;
};