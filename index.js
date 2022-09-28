// Bài 1
/**
 * INPUT: Lương 1 ngày, số ngày làm
 *
 * PROCESS:
 *      1. Tạo biến lương 1 ngày (salaryPerDay) = 100000, số ngày làm (workingDay) = 25, tổng lương (totalSalary)
 *      2. Tính tổng lương = Lương 1 ngày * Số ngày làm
 *      3. Xuất kết quả
 *
 * OUTPUT: Tính lương dựa trên số ngày làm
 */
console.log("Bài 1:");
var salaryPerDay = 100000;
var workingDay = 25;
var totalSalary = salaryPerDay * workingDay;
console.log("Tổng lương =", totalSalary);

// Bài 2
/**
 * INPUT: Nhập 5 số thực
 *
 * PROCESS:
 *      1. Tạo biến n1, n2, n3, n4, n5, average
 *      2. Tính giá trị trung bình của 5 số: average = (n1 + n2 + n3 + n4 + n5) / 5
 *      3. Xuất kết quả
 *
 * OUTPUT: Tính giá trị trung bình tổng 5 số
 */
console.log("Bài 2:");
var n1 = 3.5;
var n2 = 5.4;
var n3 = 8.2;
var n4 = 2.9;
var n5 = 6.7;
var average = (n1 + n2 + n3 + n4 + n5) / 5;
console.log("Giá trị trung bình của 5 số là =", average);

// Bài 3
/**
 * INPUT: Nhập số tiền USD, giá USD hiện nay = 23.500 VND
 *
 * PROCESS:
 *      1. Tạo biến moneyUSD, moneyVND
 *      2. Tính tiền sau quy đổi: moneyVND = moneyUSD * 23500
 *      3. Xuất kết quả
 *
 * OUTPUT: Tính số tiền quy đổi từ USD sang VND
 */
console.log("Bài 3:");
var moneyUSD = 5;
var moneyVND = moneyUSD * 23500;
console.log("Số tiền sau quy đổi là:", moneyVND, "VND");

// Bài 4
/**
 * INPUT: Nhập chiều dài, chiều rộng HCN
 *
 * PROCESS:
 *      1. Tạo biến CD, CR, S, P
 *      2. Tính chu vi: P = (CD + CR) * 2
 *      3. Tính diện tích: S = CD * CR
 *      4. Xuất kết quả
 *
 * OUTPUT: Tính chu vi, diện tích HCN
 */
console.log("Bài 4:");
var CD = 10;
var CR = 5;
var P = (CD + CR) * 2;
var S = CD * CR;
console.log("Chu vi HCN =", P, "\nDiện tích HCN =", S);

// Bài 5
/**
 * INPUT: Nhập 1 số có 2 chữ số
 *
 * PROCESS:
 *      1. Tạo biến number, number1, number2, totalNumber
 *      2. Lấy số hàng đơn vị: number1 = number % 10
 *      3. Lấy số hàng chục: number2 = Math.floor(number / 10)
 *      4. Cộng 2 số hàng đơn vị và hàng chục: totalNumber = number1 + number2
 *      5. Xuất kết quả
 *
 * OUTPUT: Tính tổng 2 ký số của số vừa nhập
 */
console.log("Bài 5:");
var number = 35;
var number1 = number % 10;
var number2 = Math.floor(number / 10);
var totalNumber = number1 + number2;
console.log("Tổng 2 ký số =", totalNumber);
