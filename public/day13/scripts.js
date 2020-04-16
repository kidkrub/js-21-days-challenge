(() => {
    //1. NaN
    // NaN ไม่เท่ากับตัวมันเอง เพื่อป้องกันการคำนวณที่ผิดพลาด เช่น NaN/Nan === 1 หรือ NaN * 1 === NaN 
    if (NaN/NaN) {
        console.log('Equal')
    }

    const result = 1 / 'hello'
    if(Number.isNaN(result)) {
        console.log('Equal to NaN')
    }
    //2. Type Coercion
    if (1 < 2 < 3) {
        console.log('Inside')
    }
    // แปลงเป็น (true < 3) -> (1 < 3) = true
    if (3 < 2 < 1) {
        console.log('Inside')
    }
    // แปลงเป็น (true < 1) -> (1 < 1) = false
    console.log(2 - '1')
    //js แปลง String เป็น Number
    console.log(2 + '1')
    //js แปลง Number เป็น String
    console.log(true + true)
    //js แปลง Boolean เป็น Number

    //3. Interpreter & Complier
    function getPerson() {
        return {
            name: 'firstname'
        }
    }
    console.log(getPerson())
    // function getPerson() {
    //     return js ใส่ ; ให้อัตโนมัติในบรรทัดนี้ ทำให้ไม่เกิดการทำงานต่อ
    //     {
    //         name: 'firstname'
    //     }
    // }
    //4. Checking Object Type
    const person = {}
    if(typeof person === 'object' && person !== null) {
        console.log('Yes, it is')
    }
    //null เป็น Object เหมือนกัน ถ้าจะเช็ค object ต้องเช็คว่าไม่เท่ากับ null ด้วย
})()