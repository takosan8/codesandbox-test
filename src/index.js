/**
 * const,let
 *
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能

// val1 = "fixed";
// console.log(val1);

// // var変数は再宣言可能

// var val1 = "val11111";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //let上書きOK
// val2 = "let変数上書き";

// // letは再宣言負荷
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// const変数は上書きできない
//val3 = "上書き";

// constは再宣言もできない
// const val3 = "再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "Eve",
//   age: 28,
//   adress: "Here"
// };
// val4.here = " jak";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 *
 */
// const name ="jake";
// const age = 28;
// // 「私のなまけはjakeです。年齢は28です。」

// // 従来の方法
// const message = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message);

// //テンプレート文字列では
// //ポイントはバッククォートを使うこと(Shift + @)
// const message2 =`私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */

// 従来
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };

// console.log(func2("func2desu"));

// const func3 =(num1,num2) =>  num1 + num2;

// console.log(func3(10,60,));

// const myProfile = {
//   name:"Yuki",
//   age: 29,
// };

// /**
//  * 分割代入
//  */
// const message1 = `My name is ${myProfile.name}.Age is ${myProfile.age}.`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `My name is ${name}.Age is ${age}.`;
// console.log(message2);

// const myProfile = ['Yuki',29];
// const message3 = `My name is ${myProfile[0]}.Age is ${myProfile[1]}.`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `My name is ${name}.Age is ${age}.`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
//  const sayHello = (name ="guest") => console.log(`Hello!${name}.`);
//  sayHello("Yuki");

/**
 * スプレッド構文 ... どっと３つ
 */
// 配列の展開
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// //順番に処理する的な
// const sumFunc = (num1,num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const[num1,num2, ...arr3] = arr2;
// console.log(arr3);

//配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfilterを使った配列の処理
 */

//  const nameArr =["Adam","Eve","Snake"];
//  for(let index = 0; index < nameArr.length; index++){
//    console.log(`${index + 1}番目は${nameArr[index]}です`);
//  }

//  const nameArr2 = nameArr.map((name)=>{
//    return name;
//  })
//  console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num %2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if(name === "Snake"){
//     return name
//   } else {
//     return `${name}さん`
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1,num2) => {
//   return num1 + num2 > 100 ? 'Over 100!' : 'OK';
// }
// console.log(checkSum(50,20));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */

//  const flag1 = true;
//  const flag2 = false;

//  if( flag1 || flag2) {
//    console.log("1か2はtrueになります");
//  }
//  if( flag1 && flag2) {
//    console.log("1も2もtrueになります");
//  }

// ||は左側がfalseなら右側を返す
//  const num = null;
//  const fee = num || "金額未設定です";
//  console.log(fee);

// && は左側がtrueなら右側を返す
//  const num2 = null;
//  const fee2 = num2 && "何か設定されました";
//  console.log(fee2);
