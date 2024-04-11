import * as readline from 'readline';
import { Chapter1 } from './chapter1';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('실행시킬 챕터를 선택해주세요 (예: 1, 2) > ', (answer) => {
    switch(answer.trim()) {
        case '1':
            Chapter1();
            break;
        case '2':
            chapterTwo();
            break;
        default:
            console.log('잘못된 입력입니다. 프로그램을 종료합니다.');
            rl.close();
            return;
    }

    rl.close();
});

function chapterTwo() {
    console.log('챕터 2 실행 결과:');
    // 챕터 2에 해당하는 코드를 여기에 작성
    console.log('Hello from Chapter 2!');
}
