// Q&A Database
const qaData = [
    {
        "question": "เครื่องมืออะไรที่จำเป็นสำหรับการขุดในดินแดนโต้วหลัว",
        "answer": "พลั่ว"
    },
    {
        "question": "ชื่อทางการของเทพีเสรีภาพ",
        "answer": "เสรีภาพที่นำทางโลก"
    },
    {
        "question": "เมืองหลวงแคนาดา",
        "answer": "ออตตาวา"
    },
    {
        "question": "นักบินหญิงคนแรกที่ข้ามแอตแลนติก",
        "answer": "อมีเลีย"
    },
    {
        "question": "หลอดไส้ชนิดใดเปร่งแสง",
        "answer": "ทังสเตน"
    },
    {
        "question": "สามเหลี่ยมเบอร์มิวดาร์",
        "answer": "แอตแลนติก"
    },
    {
        "question": "ธาตุ Na",
        "answer": "โซเดียม"
    },
    {
        "question": "โลหะเก่าแก่ที่สุดที่สนุษย์ใช้",
        "answer": "ทองแดง"
    },
    {
        "question": "ใครเป็นตัวร้าย Harry potter",
        "answer": "โวลเดอร์มอร์ต"
    },
    {
        "question": "หลานสาวของเฉาเทียนเซียงมีชื่อว่าอะไร",
        "answer": "เมิ่งอีหราน"
    },
    {
        "question": "คนค้นพบ เพนิซิลิน",
        "answer": "อเล็กซานเดอร์ เฟลมมิง"
    },
    {
        "question": "สถานที่หนาวที่สุดในโลก",
        "answer": "แอนตาร์กติกา"
    },
    {
        "question": "คนวาดโมนาลิซา",
        "answer": "ดาวินชี"
    },
    {
        "question": "เมืองหลวงออสเตเรีย",
        "answer": "แคนเบอร์รา"
    },
    {
        "question": "สัตว์เลี้ยงลูกด้วยนมที่เล็กที่สุด",
        "answer": "หนูผีจิ๋ว"
    },
    {
        "question": "สารใดมีความโปร่งใส",
        "answer": "แก้ว"
    },
    {
        "question": "แรงโน้มถ้วงดวงจันทร์มากกว่าบนโลกคืออะไร",
        "answer": "1/6"
    },
    {
        "question": "ทะเลสาบที่ลึกที่สุดในโลก",
        "answer": "ทะเลสาบไบคาล"
    },
    {
        "question": "สิ่งมหัศจรรย์ทั้งเจ็ดของโลกยุคโบราณใดตั้งอยู่ในอียิปต์",
        "answer": "มหาพีระมิดแห่งกิซ่า"
    },
    {
        "question": "ดาวที่หมุนเร็วที่สุดในระบบสุริยะ",
        "answer": "ดาวพฤหัสบดี"
    },
    {
        "question": "ใครคือหัวหน้าสภาสำนักถัง",
        "answer": "จูจู๋ซิง"
    },
    {
        "question": "นกที่เร็วที่สุดในโลก",
        "answer": "เหยี่ยวเพเรกริน"
    },
    {
        "question": "คนที่ได้โนเบลสองครั้ง",
        "answer": "มารี กูรี"
    },
    {
        "question": "หลุมดำอันโด่งดังตั้งอยู่บนระบบท้องฟ้าใด",
        "answer": "ทางช้างเผือก"
    },
    {
        "question": "ใครคือคนเขียนโปเลียนข้ามเทือกเขาเอลป์",
        "answer": "ฌัก-หลุยส์ ดาวิด"
    },
    {
        "question": "เม็กซิโคเคยเป็นส่วนหนึ่งของจักวรรดิใด",
        "answer": "สเปน"
    },
    {
        "question": "ตัวย่อลิเทียม",
        "answer": "Li"
    },
    {
        "question": "ป่าฝนเขตร้อนที่ใหญ่ที่สุดตั้งอยู่ทวีปใด",
        "answer": "อเมริกาใต้"
    },
    {
        "question": "ส่วนประกอบหลักของปิโตเลียม",
        "answer": "ไฮโดรคาร์บอน"
    },
    {
        "question": "ทักษะผสมของหูเลี่ยน่าและเสียเย่วคืออะไร",
        "answer": "อาคมปีศาจ"
    },
    {
        "question": "เมืองหลวงอิตาลี",
        "answer": "โรม"
    },
    {
        "question": "คนเขียนหนึ่งร้อยปีแห่งความโดดเดี่ยว",
        "answer": "มาร์เกซ"
    },
    {
        "question": "ยุคตื่นทองแคลิฟอเนีย เกิดขึ้นในศตวรรดใด",
        "answer": "19"
    },
    {
        "question": "แม่น้ำใดไหลผ่านประเทศมากที่สุด",
        "answer": "แม่น้ำดานูบ"
    },
    {
        "question": "กระดูกโคนขาคือส่วนใดของร่างกายมนุษย์",
        "answer": "ต้นขา"
    },
    {
        "question": "อวัยวะเม็ดเลือดหลักในร่างกายมนุษย์คืออะไร",
        "answer": "ไขกระดูก"
    },
    {
        "question": "ทะเลที่เค็มที่สุด",
        "answer": "ทะเลเดดซี"
    },
    {
        "question": "เกาะที่ใหญ่ที่สุดในโลก",
        "answer": "กรีนแลนด์"
    },
    {
        "question": "ดาวเคราะห์อะไรเรียกว่า หินอ่อนสีน้ำเงิน",
        "answer": "โลก"
    },
    {
        "question": "บิดาแห่งคอมพิวเตอร์",
        "answer": "ชาร์ลส์ แบบเบจ"
    },
    {
        "question": "ดาวินชีเป็นคนที่ไหน",
        "answer": "อิตาลี"
    },
    {
        "question": "อนามัยโลกตั้งอยู่ที่ใด",
        "answer": "เจนีวา ประเทศสวิตเซอร์แลนด์"
    },
    {
        "question": "0 ในตณิตศาสตร์มาจากไหน",
        "answer": "อินเดีย"
    },
    {
        "question": "คนกำกับ Avatar",
        "answer": "คาเมรอน"
    },
    {
        "question": "เมลานินบนผิวหนังคือ",
        "answer": "เม็ดสี"
    },
    {
        "question": "ประเทศที่แกะมากที่สุด",
        "answer": "จีน"
    },
    {
        "question": "พื้นผิวดาวอะไรคล้ายดวงจันทร์",
        "answer": "ดาวพุธ"
    },
    {
        "question": "รัฐใหญ่ที่สุดเมกา",
        "answer": "อลาสก้า"
    },
    {
        "question": "คนแต่ง les miserrables",
        "answer": "วิกเตอร์ อูโก"
    },
    {
        "question": "the catcher in the rye",
        "answer": "ซาลิงเจอร์"
    },
    {
        "question": "ป้าของถังซานชื่อวาอะไร",
        "answer": "ถังเยี่ยหัว"
    },
    {
        "question": "ถังซานให้สมุนไพรอะไรเอ้าซือข่า",
        "answer": "กล้วยไม้เซียนแปดกลีบ"
    },
    {
        "question": "ปีก่อตั้ง สหประชาชาติ",
        "answer": "1945"
    },
    {
        "question": "ปีที่ก่อตั้งอเมริกา",
        "answer": "1775"
    },
    {
        "question": "คนคิดค้นโทรศัพท์",
        "answer": "อเล็กซานเดอร์ เบลล์"
    },
    {
        "question": "คนแต่ง the divine comedy",
        "answer": "ดันเต้"
    },
    {
        "question": "ประเทษศที่มอบเสรีภาพให้อเมริกา",
        "answer": "ฝรั่งเศส"
    },
    {
        "question": "DC ในวอชิงตันย่อมากจากอะไร",
        "answer": "เบตโคลัมเบีย"
    },
    {
        "question": "ใครคือประธานาธิปดีคนแยกหลังแบ่งแยกสีผิวของแอฟริกาใต้",
        "answer": "เนลสัน แมนเดลา"
    },
    {
        "question": "Academy Award จัดที่เมืองใด",
        "answer": "ลอสแอนเจลิส"
    },
    {
        "question": "มหาสมุทรที่เล็กที่สุด",
        "answer": "มหาสมุทรอาร์กติก"
    },
    {
        "question": "เครื่องมืออะไรใช้ในการวัดแผ่นดินไหว",
        "answer": "เครื่องวัดแผ่นดินไหว"
    },
    {
        "question": "ธาตุใดมีเลขอะตอม 1",
        "answer": "ไฮโดรเจน"
    },
    {
        "question": "ฉันรักครูของฉัน และฉันก็รักปัญญามากยิ่งขึ้น ใครพูดแบบนี้",
        "answer": "อริสโตเติล, โลกาตรีส"
    },
    {
        "question": "นักบินหญิงคนแรกข้ามแอตแลนติก",
        "answer": "อมีเลีย"
    },
    {
        "question": "ดาวเคราาะห์ทั้ง 8 ดวง ดาวอะไรใหญ่สุด",
        "answer": "ดาวพฤหัสบดี"
    },
    {
        "question": "ดาวเคราะห์ที่อยู่ไกลที่สุดในระบบสุริยะ",
        "answer": "ดาวเนปจูน"
    },
    {
        "question": "การค้าสามเหลี่ยม หมายถึงการค้าในบุคใดในประวัติศาสตร์",
        "answer": "การค้าทาส"
    },
    {
        "question": "แดงและน้ำเงินสามารถผสมสีอะไรได้บ้าง",
        "answer": "สีม่วง"
    },
    {
        "question": "สัตว์ทะเลที่มีหัวใจสามดวง",
        "answer": "ปลาหมึกยักษ์"
    },
    {
        "question": "นายกหญิงคนแรกของประเทศอังกฤษ",
        "answer": "แทตเชอร์"
    },
    {
        "question": "นักวิทคนใดเสนอ ดวงอาทิตย์เป็นศูนย์กลาง",
        "answer": "โคเปอร์นิคัส"
    },
    {
        "question": "SI ในแรงดันไฟฟ้าคือ",
        "answer": "Volt"
    },
    {
        "question": "ภูเขาที่สูงที่สุด",
        "answer": "เอเวอเรสต์"
    },
];

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function createThaiRegex(query) {
    const words = query.match(/[\u0E00-\u0E7F]+/g) || [];
    if (words.length === 0) return null;
    
    const pattern = words
        .map(word => `(${escapeRegExp(word)})`)
        .join('|');
    return new RegExp(pattern, 'gi');
}

function highlightText(text, regex) {
    if (!regex) return text;
    return text.replace(regex, match => `<span class="highlight">${match}</span>`);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Text copied');
    }).catch(err => {
        console.error('Failed to copy text:', err);
    });
}

function searchQA(query) {
    const regex = createThaiRegex(query);
    if (!regex) return [];

    return qaData.filter(item => 
        regex.test(item.question) || regex.test(item.answer)
    );
}

function displayResults(results, query) {
    const resultsDiv = document.getElementById('results');
    const regex = createThaiRegex(query);
    
    if (results.length === 0) {
        resultsDiv.innerHTML = '<div class="no-results">ไม่พบคำถามที่ตรงกับการค้นหา</div>';
        return;
    }

    resultsDiv.innerHTML = results.map(item => `
        <div class="result-item" onclick="copyToClipboard('${item.answer}')">
            <div class="question">${regex ? highlightText(item.question, regex) : item.question}</div>
            <div class="answer">${regex ? highlightText(item.answer, regex) : item.answer}</div>
            <span class="copy-feedback">คลิกเพื่อคัดลอก</span>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    let debounceTimeout;

    searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
            const query = e.target.value;
            const results = query ? searchQA(query) : [];
            displayResults(results, query);
        }, 100);
    });
});
