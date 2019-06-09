//console.log(__filename); //ชืิือไฟล์ที่กำลังทำงานอยู่ตอนนี้
//console.log(__dirname); //ทำการจัดเก้บไดเรคที่ทำงานอยู่ อารมแบบดึง path การทำงานอยู่
function printHello(){
    console.log("helloworld");
}
// var t=setTimeout(printHello,2000); //ดตั้งเวลาให้ตัวปริ้นเฮโหลทำงาน
// clearTimeout(t);
setInterval(printHello,2000); //ทำงานตามเวลาที่กำหนดแต่ต่อเนื่องเรื่อยๆ
