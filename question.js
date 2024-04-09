import readlineSync from "readline-sync";

function question(question) {
    return readlineSync.question(`${question}\n`)
}

export {question}




