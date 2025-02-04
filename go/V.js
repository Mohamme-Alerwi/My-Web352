// script.js
// مصفوفة تحتوي على جميع الأقسام
var sections = [];
for (let i = 1; i <= 30; i++) {
    sections.push(document.getElementById('sec_' + i));
}

// التعامل مع الأزرار
for (let i = 1; i <= 30; i++) {
    (function (i) {
        document.getElementById('btn_' + i).addEventListener('click', function () {
            // التبديل بين إظهار القسم وإخفائه
            if (sections[i - 1].style.display === 'none' || sections[i - 1].style.display === '') {
                // إظهار القسم المحدد وإخفاء بقية الأقسام
                sections.forEach((section, index) => {
                    if (index === i - 1) {
                        section.style.display = 'block';
                    } else {
                        section.style.display = 'none';
                    }
                });
            } else {
                // إخفاء القسم المحدد عند الضغط عليه وهو ظاهر
                sections[i - 1].style.display = 'none';
            }
        });
    })(i);
}
