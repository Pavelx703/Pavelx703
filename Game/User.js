class GameCpu {
  getNextStep(gameMatrix) {
    //Get Array 0-8 where 0 = free; 1 = x; 2 = o;
    throw new Error("getNextStep may be implemented!");
    //return Math.floor( (Math.random()*(9)));//Must return value from 0 to 8
  }
}
export default class User extends GameCpu {
  constructor() {
    super();
  }
  getNextStep(gameMatrix, userNumber = 1) {
    const winsArrs = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    const m = gameMatrix;
    let freeArr = [];
    m.map(function (el, idx) {
      if (el === 0) {
        freeArr.push(idx);
      }
      return freeArr;
    });

    console.log("freeArr", freeArr);
    let uw;
    console.log("uw", uw);
    let war2 = [];
    let war1 = [];
    winsArrs.forEach((_) => {
      if (m[_[0]] === m[_[1]] && m[_[0]] === 2 && m[_[0]] > 0) {
        uw = _[2];
        console.log("uw", uw, "");
      } else if (m[_[1]] === m[_[2]] && m[_[1]] === 2 && m[_[1]] > 0) {
        uw = _[0];
        console.log("uw", uw);
      } else if (m[_[0]] === m[_[2]] && m[_[2]] === 2 && m[_[2]] > 0) {
        uw = _[1];
        console.log("uw", uw);
        // } else if (war2 === undefined) {
        //   uw = 4;
      }
      if (uw !== undefined) {
        war2.push(uw);
      }
    });

    winsArrs.forEach((_) => {
      if (m[_[0]] === m[_[1]] && m[_[0]] === 1 && m[_[0]] > 0) {
        uw = _[2];
        console.log("uw", uw, "");
      } else if (m[_[1]] === m[_[2]] && m[_[1]] === 1 && m[_[1]] > 0) {
        uw = _[0];
        console.log("uw", uw);
      } else if (m[_[0]] === m[_[2]] && m[_[2]] === 1 && m[_[2]] > 0) {
        uw = _[1];
        console.log("uw", uw);
        // } else if (war1 === undefined) {
        //   uw = 4;
      }
      if (uw !== undefined) {
        war1.push(uw);
      }
    });
    console.log("uw", uw);
    console.log("war1", war1);
    console.log("war2", war2);
    const war1Uw = war1.find((el1) => freeArr.find((el) => el === el1));

    // console.log(0 === 0);
    // const war1Uw = freeArr.forEach(
    //   (el) =>
    //     function (el1) {
    //       war1.find((el1) => el1 === el);
    //       console.log("el1", el1);
    //       console.log("el", el);
    //       return el, el1;
    //     }
    // );
    console.log("uw", uw);
    console.log("war1Uw", war1Uw);
    console.log("uw", uw);
    const war2Uw = war2.find((el2) => freeArr.find((el) => el2 === el));
    // const war2Uw = war2.forEach(
    //   (el) =>
    //     function (freeArr, el) {
    //       freeArr.find((el2) => Number(el2) === Number(el));
    //       console.log("el2", el2);
    //       console.log("el", el);
    //       return el2;
    //     }
    // );
    console.log("uw", uw);
    console.log("war2Uw", war2Uw);

    if (war1Uw !== undefined) {
      uw = war1Uw;
    } else if (war2Uw !== undefined) {
      uw = war2Uw;
    }
    console.log("uw", uw);

    const nonRightX = freeArr.some((el) => el === uw);
    console.log("nonRightX", nonRightX);
    let returnResult;
    if (nonRightX) {
      returnResult = uw;
    }
    if (
      gameMatrix[0] === 0 &&
      gameMatrix[1] === 0 &&
      gameMatrix[2] === 0 &&
      gameMatrix[3] === 0 &&
      gameMatrix[4] === 0 &&
      gameMatrix[5] === 0 &&
      gameMatrix[6] === 0 &&
      gameMatrix[7] === 0 &&
      gameMatrix[8] === 0
    ) {
      freeArr = [0, 2, 6, 8];
      //       //написать развилку для бота на 4 варианта
    }
    if (
      gameMatrix[0] === 1 &&
      gameMatrix[3] === 0 &&
      gameMatrix[6] === 0 &&
      gameMatrix[7] === 0 &&
      gameMatrix[4] === 0 &&
      gameMatrix[5] === 0 &&
      gameMatrix[2] === 0 &&
      gameMatrix[1] === 0 &&
      gameMatrix[8] === 2
    ) {
      return 2;
      //написать развилку для бота на 2 варианта
    }
    if (
      gameMatrix[0] === 1 &&
      gameMatrix[4] === 2 &&
      gameMatrix[2] === 0 &&
      gameMatrix[1] === 0 &&
      gameMatrix[3] === 0 &&
      gameMatrix[5] === 0 &&
      gameMatrix[6] === 0 &&
      gameMatrix[7] === 0 &&
      gameMatrix[8] === 0
    ) {
      return 8;
    }
    if (
      gameMatrix[0] === 1 &&
      gameMatrix[3] === 2 &&
      gameMatrix[6] === 0 &&
      gameMatrix[7] === 0 &&
      gameMatrix[4] === 0 &&
      gameMatrix[5] === 0 &&
      gameMatrix[2] === 0 &&
      gameMatrix[1] === 0 &&
      gameMatrix[8] === 0
    ) {
      return 2;
    }
    if (
      gameMatrix[0] === 1 &&
      gameMatrix[3] === 0 &&
      gameMatrix[6] === 2 &&
      gameMatrix[7] === 0 &&
      gameMatrix[4] === 0 &&
      gameMatrix[5] === 0 &&
      gameMatrix[2] === 0 &&
      gameMatrix[1] === 0 &&
      gameMatrix[8] === 0
    ) {
      return 2;
    }
    if (
      gameMatrix[0] === 1 &&
      gameMatrix[3] === 0 &&
      gameMatrix[6] === 0 &&
      gameMatrix[7] === 2 &&
      gameMatrix[4] === 0 &&
      gameMatrix[5] === 0 &&
      gameMatrix[2] === 0 &&
      gameMatrix[1] === 0 &&
      gameMatrix[8] === 0
    ) {
      return 2;
    }
    if (
      gameMatrix[0] === 1 &&
      gameMatrix[1] === 2 &&
      gameMatrix[2] === 0 &&
      gameMatrix[5] === 0 &&
      gameMatrix[4] === 0 &&
      gameMatrix[6] === 0 &&
      gameMatrix[7] === 0 &&
      gameMatrix[3] === 0 &&
      gameMatrix[8] === 0
    ) {
      return 6;
    }
    if (
      gameMatrix[0] === 1 &&
      gameMatrix[1] === 0 &&
      gameMatrix[2] === 2 &&
      gameMatrix[5] === 0 &&
      gameMatrix[4] === 0 &&
      gameMatrix[6] === 0 &&
      gameMatrix[7] === 0 &&
      gameMatrix[3] === 0 &&
      gameMatrix[8] === 0
    ) {
      return 6;
    }
    if (
      gameMatrix[0] === 1 &&
      gameMatrix[1] === 0 &&
      gameMatrix[2] === 0 &&
      gameMatrix[5] === 2 &&
      gameMatrix[4] === 0 &&
      gameMatrix[6] === 0 &&
      gameMatrix[7] === 0 &&
      gameMatrix[3] === 0 &&
      gameMatrix[8] === 0
    ) {
      return 6;
    }

    console.log("returnResult", returnResult);
    return returnResult; //Must return value from 0 to 8
  }

  getUserName() {
    return "Жуйков Павел";
  }
}
