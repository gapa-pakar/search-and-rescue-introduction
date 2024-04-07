// this is the explanation about this project, by innerHTML.
const quesHTMLContent = {
    quesContent: '<div id="ques-open-content" class="content-container"><div id="ques-open-content" class="text-container"><p class="title">על הלומדה:</p><div class="line">מטרת הלומדה:</div><div class="line">הצגת חטיבת החילוץ וההדרכה- היסטוריה, מבנה ותפקידים.</div><div class="line">הלומדה כוללת טקסט וגם סרטונים, לפעמים יחד ולפעמים לחוד.</div><div class="line">הסרטונים בלומדה יתחילו באופן אוטומטי כאשר הם מושתקים.</div><div class="line"><span>לאורך הלומדה יופיעו </span><span id="def1" class="colored-text">מילים בצבע</span><span> אשר בריחוף מעליהן יופיע ההסבר למושג.</span></div><div class="line">בנוסף, הכפתורים האלו יופיעו לכל אורך הלומדה. לחצו עליהם כדי לצפות בשימוש שלהם:</div></div><div id="buttons"><img src="assets/images/menu-btn.svg" alt="כפתור התפריט" id="exmp-menu-btn" title="כפתור התפריט" class="example-btn"><img src="assets/images/info-btn.svg" alt="כפתור אודות" id="exmp-info-btn" title="כפתור אודות" class="example-btn"><img src="assets/images/ques-btn.svg" alt="כפתור המידע" id="exmp-ques-btn" title="כפתור המידע" class="example-btn"></div><span class="error" id="menu-error" style="display: none;">אופס, עליכם לעבור על כל הכפתורים!</span></div>',
    exmpMenuContent: '</div><div id="exmp-menu-content" class="text-container"><div style="display: flex; align-items: center;"><img src="assets/images/menu-btn.svg" alt="כפתור התפריט" style="width: 2rem; margin-left: 0.5rem;"><span class="title">כפתור התפריט</span></div><div>כפתור זה יציג את ראשי הפרקים, אשר בלחיצה עליהם יוצגו תתי הנושאים בפרק.</div><div><span class="bold-txt">שימו לב! </span><span>לא ניתן יהיה לדלג על פרקים.</span></div><div>ניתן לעבור אחורה וקדימה בעזרת התפריט רק בין פרקים שכבר נצפו.</div></div>',
    exmpInfoContent: '</div><div id="exmp-info-content" class="text-container"><div style="display: flex; align-items: center;"><img src="assets/images/info-btn.svg" alt="כפתור אודות" style="width: 2rem; margin-left: 0.5rem;"><p class="title">כפתור אודות</p></div><div>כפתור זה יציג את הקרדיטים ללומדה בהיטבי הפיתוח, התוכן, העיצוב, הגרפיקות וכן בעלי תפקידים נוספים אשר לקחו חלק בתהליך.</div></div>',
    exmpQuesContent: '</div><div id="exmp-ques-content" class="text-container"><div style="display: flex; align-items: center;"><img src="assets/images/ques-btn.svg" alt="כפתור המידע" style="width: 2rem; margin-left: 0.5rem;"><p class="title">כפתור המידע</p></div><div>כפתור זה יציג את כל התזכורות שמופיעות בעמודים הקודמים.</div><div>אם תרצו להיזכר במשהו, כפתור זה יהיה נגיש לכם לכל אורך הלומדה עם ההסברים הללו.</div></div>'
};

const definitionsText = {
    def1: ["כאן יופיע ההסבר למושג."],
    def2: ["מסגרת ארגונית בעורף הממונה על מרחב גזרתי בגזרת פיקוד העורף, המחוז כפוף ישירות למפקדת פיקוד העורף."],
    def3: ["נפה= מסגרת מרחבית של מסגרות ושל כוחות מילואים הכפופה למחוז ומופקדת על פעולת ההגנה האזרחית במרחבה בשעת חירום.\nהנפה הסדירה= המפקדה הקודמת לחטיבה אשר הורכבה מארבעה גדודי חילוץ והצלה סדירים ובסיס הכשרות ובסיס הכשרת מפקדים, הנפה הסדירה הייתה המפקדה היחידה המורכבת ממשרתי סדיר ועל כן שמה."],
    def4: ["בניין הכוח הוא החלק העוסק בבנייתו של הכוח העומד לרשות הצבא ויחידותיו."],
    def5: ["רצף קבוע של מופעי אימונים העומדים לראשות המסגרת המתאמנת במשך זמן מוגדר ותחום, במטרה לרענן, לשמר ולשפר כשירות בסיסית ומבצעית למסגרת המתאמנת."],
    def6: ["כשירות= תכונה כללית של גורם צבאי המבטאת את הערכת מידת יכולתם למלא כנדרש את תפקידיהם התקניים.\nכוננות= מצב של מוכנות ונכונות לפעולה טרם ההפעלה."],
    def7: ["מפקדה המוקמת ומופעלת כדי לפקד על גוף או על מכלול גופים לשם תכנון או ניהול הביצוע של משימה צבאית מסוימת או חלק ממנה."],
    def8: ["יחידה פיקודית שייעודה להוות מוקד מידע לאוכלוסייה בשגרה ובחירום ולהעביר הנחיות מצילות חיים בנושאי התגוננות אזרחית."],
    def9: ["אימון ורענון לטובת שיפור מוכנות הכוחות למשימה המבצעית אשר עתידים לבצע."],
    def10: ["מערכת שליטה ובקרה.\nהמערכת המרכזית לשימוש בפיקוד העורף- שוע''ל (שליטה ובקרה עורף לאומי)."],
    def11: ["מכלול הנתונים על אוכלוסייה במרחב מסוים על מנת לתת מענה אקטיבי בעת אירוע חירום."],
    def12: ["ציוד מכני הנדסי המשמש לחילוץ, קילוף והנפת אלמנטים באתר הרס."],
    def13: ["הנדסת חילוץ- מכלול פעולות הנדסיות שמבוצעות באתר הרס."],
    def14: ["איסוף נתונים וחללים- תחום הטיפול בחללים באירוע הרס."],
};
// all of the objects for page creation are organized as:
// element- text element: tag name, class value, id value, text value, parent element id
// image:  src path, alt value, id value, class value, title value, parent element id 
// carousel: object that contains the instrictions for creation
// event listener: element id, event type, function
// all functions or variavles used in this creation type have to be defined with var
const openScreenContent = {
    el1: ["div", "main-title", "open-title", "", "page"],
    el2: ["div", "", "", "תעודת זהות-", "open-title"],
    el3: ["div", "", "", "חטיבת החילוץ וההדרכה", "open-title"],
    el4: ["button", "next-btn-timeline", "start-btn", "התחל", "page"],
    evLis5: ["start-btn", "click", "nextPage"]
}

var endScreenContent = {
    el1: ["div", "main-title", "open-title", "", "page"],
    el2: ["div", "", "", "תעודת זהות-", "open-title"],
    el3: ["div", "", "", "חטיבת החילוץ וההדרכה", "open-title"],
    el4: ["div", "","re-do-button", "", "page"],
    img5: ["assets/images/re-do.svg", "חזור", "", "re-do-img", "", "re-do-button"],
    el6: ["div", "", "", "חזרה על הלומדה", "re-do-button"],
    evLis7: ["re-do-button", "click", "updatePage"]
}

var page2 = {
    vid1: ["https://www.youtube.com/embed/8h2PR-d9bTY?si=Uw1sfXDjVepQfH-T", "420", "315", "enlisting-video", "סרטון גיוס", "height: auto; display: block; position: absolute; top: 4.5rem; width: 34rem; height: 19rem; left: 50%; transform: translateX(-50%);", "page"],
    el2: ["button", "next-btn-timeline", "next-btn-3", "המשך", "page"],
    evLis3: ["next-btn-3", "click", "nextPage"]
}

var page3 = {
    // timeline now
}

var page4 = {
    el1: ["div", "open-text", "page3text", "", "page"],
    el2: ["div", "", "", "חטיבת החילוץ וההדרכה הינה החטיבה הסדירה היחידה בפיקוד העורף אשר בנוי ברובו מאנשי מילואים.\nעל מנת להבין לעומק את ייחודיות החטיבה, נעמיק בדרך שהחטיבה עברה מאז ועד היום- מ'פלח''ץ' לחטיבת החילוץ וההדרכה.", "page3text"],
    el3: ["button", "next-btn-timeline", "next-btn-3", "בואו נתחיל!", "page"],
    evLis4: ["next-btn-3", "click", "nextPage"]
}

var page5 = {
    // timeline now to 1992
}

var page6 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "1992- הקמת פיקוד העורף", "timeline-text-container"],
    el3: ["div", "", "", "פיקוד העורף הוקם בשנת 1992 לאחר מלחמת המפרץ  הראשונה בה האיום על העורף העלה את הצורך בהתגוננות אזרחית סדורה.\nבן גוריון כבר ב48 אמר: ''ביום מן הימים, מה שקרוי העורף יכריע לא פחות מהחזית. לא נוכל לעמוד במלחמה באמצעים צבאיים בלבד''.\nבמקרה כזה, ישחרר פיקוד העורף את אלופי הפיקודים האחרים (צפון, מרכז, דרום) מדאגה לעורף, ויאפשר להם להתרכז בצרכים המבצעיים בחזית.", "timeline-text-container"],
    el4: ["button", "next-btn-timeline", "next-btn-4", "הבנתי!", "timeline-text-container"],
    evLis5: ["next-btn-4", "click", "nextPage"]
}

var page7 = {
    // timeline 1992 to 2003
}

var page8 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2003- הקמת פלוגת החילוץ הראשונה- פלוגת 'שביט'", "timeline-text-container"],
    el3: ["div", "", "", "ממלחמת לבנון הראשונה ועד לאחר מלחמת המפרץ הורכבו פלוגות החילוץ וההצלה מאנשי מילואים בעלי ידע אזרחי הקשור בבינוי.\nבמלחמת המפרץ הבינו שיש צורך בגוף סדיר שיהיה כונן לאירועי חילוץ בעורף, והתקבלה ההחלטה להקים פלוגת חילוץ סדירה ראשונה, פלוגת 'שביט'.", "timeline-text-container"],
    el4: ["button", "next-btn-timeline", "next-btn-5", "בואו נמשיך!", "timeline-text-container"],
    evLis5: ["next-btn-5", "click", "nextPage"]
}

var page9 = {
    // timeline 2003 to 2004
}

var page10 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2004- הקמת פלוגת 'חץ' ופלוגת 'רותם'", "timeline-text-container"],
    el3: ["div", "", "", "2004- הקמת שתי פלוגות חילוץ נוספות- פלוגת 'חץ' ופלוגת 'רותם'.\nמשימתן של הפלוגות האלו הייתה אבטחת בתי כלא בכלא 'עופר' ובכלא 'מגידו'.", "timeline-text-container"],
    el4: ["div", "bold-txt", "", "המושג 'פלח''ץ' מתייחס לתקופה שבה היו קיימות רק פלוגות חילוץ ללא שייכות לגדוד ולחטיבה.", "timeline-text-container"],
    el5: ["button", "next-btn-timeline", "next-btn-6", "המשך", "timeline-text-container"],
    evLis6: ["next-btn-6", "click", "nextPage"]
}

var page11 = {
    // timeline 2004 to 2008
}

var page12 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2008- איחוד פלוגות החילוץ והקמת גדוד שחר", "timeline-text-container"],
    el3: ["div", "", "", "2008- שלוש פלוגות החילוץ התאחדו והוקם גדוד ראשון בחטיבה- גדוד שחר.", "timeline-text-container"],
    el4: ["div", "", "complex-text7", "", "timeline-text-container"],
    el5: ["span", "", "", "גדוד שחר הוכפף ", "complex-text7"],
    el6: ["span", "colored-text", "def2", "למחוז", "complex-text7"],
    el7: ["span", "", "", " מרכז/ירושלים שמלבד גדוד שחר, הורכב מגדודי מילואים בלבד.", "complex-text7"],
    img8: ["assets/images/gdud-shahar.svg", "גדוד שחר", "", "timeline-symbol-img", "", "timeline-text-container"],
    el9: ["button", "next-btn-timeline", "next-btn-7", "הבנתי", "timeline-text-container"],
    evLis10: ["next-btn-7", "click", "nextPage"]
}

var page13 = {
    // timeline 2008 to 2009
}

var page14 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2009- הקמת גדוד קדם", "timeline-text-container"],
    el3: ["div", "", "", "2009- הקמת גדוד קדם אשר בתוכו שלוש פלוגות:\n'קרן', 'דוד' ו'מגן'.", "timeline-text-container"],
    img4: ["assets/images/gdud-kedem.svg", "גדוד קדם", "", "timeline-symbol-img", "", "timeline-text-container"],
    el5: ["button", "next-btn-timeline", "next-btn-8", "אני רוצה להמשיך!", "timeline-text-container"],
    evLis6: ["next-btn-8", "click", "nextPage"]
}

var page15 = {
    // timeline 2009 to 2009 #2
}

var page16 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2009- המעבר ממגל לפקע''ר", "timeline-text-container"],
    el3: ["div", "", "", "text text text text text text text text text text", "timeline-text-container"],
    img4: ["assets/images/re-do.svg", "מערך מגל", "", "timeline-symbol-img", "", "timeline-text-container"],
    el5: ["button", "next-btn-timeline", "next-btn-8", "אני רוצה להמשיך!", "timeline-text-container"],
    evLis6: ["next-btn-8", "click", "nextPage"]
}

var page17 = {
    // timeline 2009 #2 to 2012
}

var page18 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2012- הקמת גדוד תבור", "timeline-text-container"],
    el3: ["div", "", "", "2012- הקמת גדוד תבור אשר בתוכו שלוש פלוגות:\n'תבל', 'ברק', 'ראם'.\nבשנת 2020 הוקמה בתוך הגדוד פלוגה נוספת בשם 'ונוס'.", "timeline-text-container"],
    img4: ["assets/images/gdud-tavor.svg", "גדוד תבור", "", "timeline-symbol-img", "", "timeline-text-container"],
    el5: ["button", "next-btn-timeline", "next-btn-9", "בואו נמשיך!", "timeline-text-container"],
    evLis6: ["next-btn-9", "click", "nextPage"]
}

var page19 = {
    // timeline 2012 to 2012 #2
}

var page20 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2012- הקמת גדוד רם", "timeline-text-container"],
    el3: ["div", "", "", "2012- גדוד נ''מ (נגד מטוסים) של חיל האוויר הוסב לפיקוד העורף.\nהשם שנבחר לגדוד החדש והרביעי הוא גדוד 'רם' אשר בתוכו שלוש פלוגות: 'רמון', 'מצדה', 'ארבל'.", "timeline-text-container"],
    img4: ["assets/images/gdud-ram.svg", "גדוד רם", "", "timeline-symbol-img", "", "timeline-text-container"],
    el5: ["button", "next-btn-timeline", "next-btn-10", "הבנתי!", "timeline-text-container"],
    evLis6: ["next-btn-10", "click", "nextPage"]
}

var page21 = {
    // timeline 2012 #2 to 2013
}

var page22 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2013- הקמת הנפה הסדירה", "timeline-text-container"],
    el3: ["div", "", "complex-text11", "", "timeline-text-container"],
    el4: ["span", "", "", "2013- ארבעת הגדודים הסדירים היו כפופים למחוז ירושלים והמרכז עד שבשנת 2013 הוחלט להקים ", "complex-text11"],
    el5: ["span", "colored-text", "def3", "נפה סדירה", "complex-text11"],
    el6: ["span", "", "", " בפיקוד העורף אשר אליה יהיו כפופים הגדודים הסדירים של הפיקוד.", "complex-text11"],
    el7: ["div", "", "", "ההחלטה התקבלה בעקבות המורכבות של המחוז לתת קשב גם לגדודי המילואים וגם לגדודים הסדירים.\nבנוסף לארבעת הגדודים הוכפפו לנפה בא''ח העורף וענף מפקדים (עליהם נפרט בהמשך).", "timeline-text-container"],
    img8: ["assets/images/hativa.svg", "סמל חטיבה", "", "timeline-symbol-img", "", "timeline-text-container"],
    el9: ["button", "next-btn-timeline", "next-btn-11", "הבנתי", "timeline-text-container"],
    evLis10: ["next-btn-11", "click", "nextPage"]
}

var page23 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", ["title", "page23-title"], "timeline-title", "2013- הקמת הנפה הסדירה", "timeline-text-container"],
    vid3: ["https://www.youtube.com/embed/22jnDzn8Cmg?si=TlIcttYFw91I-80h", "420", "315", "nafa-sdira-video", "הנפה הסדירה", "height: auto; display: block; position: absolute; top: 6.5rem; width: 32rem; height: 16rem; left: 50%; transform: translateX(-50%);", "timeline-text-container"],
    el4: ["button", "next-btn-timeline", "next-btn-12", "הבנתי", "timeline-text-container"],
    evLis5: ["next-btn-12", "click", "nextPage"]
}

var page24 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"],
    el2: ["div", "sub-title", "sub-title", "וכעת נעבור לזרוע השנייה שמרכיבה את חטיבת החילוץ וההדרכה:\nבה''ד 16", "timeline-text-container"],
    el3: ["button", "next-btn-timeline", "next-btn-13", "קדימה!", "timeline-text-container"],
    evLis4: ["next-btn-13", "click", "nextPage"]
}

var page25 = {
    // timeline 2013 to 1984
    // fix year text 
}

var page26 = {
    // fix year text
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "1984- בה''ד 16", "timeline-text-container"],
    el3: ["div", "", "", "מתוקף חוק הג''א, היו בבה''ד 16 ענפים אשר היו אמונים על הכשרת מקצועות העורף לאוכלוסיות השונות.\nבה''ד 16, ובשמו השני- ''המרכז הלאומי לחילוץ, אב''כ והתגוננות אזרחית'' ישב בצריפין והיה בנוי משלושה ענפים ומטה בה''ד:", "timeline-text-container"],
    el4: ["div", "", "branches", "", "timeline-text-container"],
    el5: ["div", "", "profession-branch", "", "branches"],
    img6: ["assets/images/profession-branch.svg", "ענף מקצועות", "profession-branch-img", "branch-img", "", "profession-branch"],
    el7: ["div", "branch-text", "profession-branch-text", "ענף מקצועות", "profession-branch"],
    el8: ["div", "", "command-branch", "", "branches"],
    img9: ["assets/images/command-branch.png", "ענף מפקדות", "command-branch-img", "branch-img", "", "command-branch"],
    el10: ["div", "branch-text", "command-branch-text", "ענף מפקדות", "command-branch"],
    el11: ["div", "", "emi-branch", "", "branches"],
    img12: ["assets/images/emi-branch.png", "ענף אימון יחידות", "emi-branch-img", "branch-img", "", "emi-branch"],
    el13: ["div", "branch-text", "emi-branch-text", "ענף אימון יחידות", "emi-branch"],
    el14: ["div", "", "branch-explaination", "", "timeline-text-container"],
    evLis15: ["branches", "click", "timelineComplexPage"]
}

var page27 = {
    // timeline 1984 to 2016
}

var page28 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2016- איחוד בה''ד 16 והנפה הסדירה", "timeline-text-container"],
    el3: ["div", "", "complex-text15", "", "timeline-text-container"],
    el4: ["span", "", "", "2016- איחוד בה''ד 16 עם הנפה הסדירה והקמת ", "complex-text15"],
    el5: ["strong", "", "", "חטיבת החילוץ וההדרכה.", "complex-text15"],
    img6: ["assets/images/fighter-pin.svg", "סיכת לוחם", "", "timeline-symbol-img", "", "timeline-text-container"],
    el7: ["button", "next-btn-timeline", "next-btn-15", "המשך!", "timeline-text-container"],
    evLis8: ["next-btn-15", "click", "nextPage"]
}

var page29 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"], 
    el2: ["div", "sub-title", "", "ייעוד ותפקידי חטיבת החילוץ וההדרכה", "main-roles"]
}

var page30 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "title", "", "ייעוד ותפקידי חטיבת החילוץ וההדרכה", "main-roles"],
    el3: ["div", "", "complex-text28", "", "main-roles"],
    el4: ["span", "", "", "חטיבת החילוץ וההדרכה תהווה גוף ", "complex-text28"], 
    el5: ["span", "colored-text", "def4", "לבניין כוח", "complex-text28"], 
    el6: ["span", "", "", " של מערך הלחימה בפקע''ר, ותכשיר ותאמן את מסגרות פקע''ר בסדיר ובמיל' בתחומי החילוץ והאב''כ.", "complex-text28"], 
    el7: ["div", "", "", "מפקדת החטיבה תשמש כמפקדה משימתית בחירום ובתוך כך תפעל באירועי חילוץ והצלה בכל זירת המלחמה, לרבות מחוץ לגבולות מדינת ישראל ותפקד על מבצעים במרחב האזרחי ברגיעה ובלחימה.", "main-roles"], 
    img8: ["assets/images/arrow.svg", "המשך", "roles-next-arrow", "next-arrow", "", "main-roles"],
    evLis9: ["roles-next-arrow", "click", "nextPage"]
}

var page31 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "", "infographic-31", "", "main-roles"],
    el3: ["div", "title", "", "תפקידי החטיבה בשגרה", "infographic-31"],
    el4: ["div", "infographic-container", "infographic-container", "", "infographic-31"],
    el5: ["div", "infographic", "infographic1", "", "infographic-container"], 
    el6: ["div", "infographic-text-container", "", "להכשיר את מקצועות העורף בסדיר ובמילואים ואת מערך הלחימה בפקע''ר.", "infographic1"],
    el7: ["div", "infographic-num-container", "", "1", "infographic1"],
    el8: ["div", "infographic", "infographic2", "", "infographic-container"],
    el9: ["div", ["infographic-text-container", "complex-infographic-text"], "infographic2-complex-text", "", "infographic2"],
    el10: ["span", "", "", "לאמן ולשמר כשירות למסגרות המילואים בפיקוד בהתאם ", "infographic2-complex-text"],
    el11: ["span", "colored-text", "def5", "למחזוריות האימונים.", "infographic2-complex-text"], 
    el12: ["div", "infographic-num-container", "", "2", "infographic2"],
    el13: ["div", "infographic", "infographic3", "", "infographic-container"], 
    el14: ["div", "infographic-text-container", "", "לשמש כח כוננות מיידי לאירועי חילוץ, הצלה ואב''כ.", "infographic3"],
    el15: ["div", "infographic-num-container", "", "3", "infographic3"],
    el16: ["div", "infographic", "infographic4", "", "infographic-container"], 
    el17: ["div", "infographic-text-container", "", "הפעלת סד''כ חטיבתי להגנה קרקעית על מתקן אסטרטגי 'מתכים' בשגרה ובחירום.", "infographic4"],
    el18: ["div", "infographic-num-container", "", "4", "infographic4"],
    el19: ["div", "infographic", "infographic5", "", "infographic-container"], 
    el20: ["div", "infographic-text-container", "", "לשמש בניין הכוח של גדודי החילוץ וההצלה הסדירים, בא''ח, ביה''ס לפיקוד ולמקצועות העורף ובסיס אימון יחידות פיקודי.", "infographic5"],
    el21: ["div", "infographic-num-container", "", "5", "infographic5"],
    el22: ["div", "infographic", "infographic6", "", "infographic-container"], 
    el23: ["div", "infographic-text-container", "", "לפתח ידע מקצועי בעולמות החילוץ והאב''כ.", "infographic6"],
    el24: ["div", "infographic-num-container", "", "6", "infographic6"],
    el25: ["div", "infographic", "infographic7", "", "infographic-container"], 
    el26: ["div", "infographic-text-container", "", "לשמש בניין הכוח של גדודי החילוץ וההצלה הסדירים, בא''ח, ביה''ס לפיקוד ולמקצועות העורף ובסיס אימון יחידות פיקודי.", "infographic7"],
    el27: ["div", "infographic-num-container", "", "7", "infographic7"],
    el28: ["div", "infographic", "infographic8", "", "infographic-container"],
    el29: ["div", ["infographic-text-container", "complex-infographic-text"], "infographic8-complex-text", "", "infographic8"],
    el30: ["span", "", "", "שמירת ", "infographic8-complex-text"],
    el31: ["span", "colored-text", "def6", " כשירות וכוננות ", "infographic8-complex-text"],
    el32: ["span", "", "", "  למפקדת החטיבה ויחידותיה.", "infographic8-complex-text"],
    el33: ["div", "infographic-num-container", "", "8", "infographic8"],
    img34: ["assets/images/arrow.svg", "המשך", "roles-next-arrow", "next-arrow", "", "main-roles"],
    evLis35: ["roles-next-arrow", "click", "nextPage"]
}

var page32 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "", "infographic-32", "", "main-roles"],
    el3: ["div", "title", "", "תפקידי החטיבה בחירום", "infographic-32"],
    el4: ["div", "infographic-container", "infographic-container", "", "infographic-32"],
    el5: ["div", "infographic", "infographic1", "", "infographic-container"],
    el6: ["div", ["infographic-text-container", "complex-infographic-text"], "infographic1-complex-text", "", "infographic1"],
    el7: ["span", "", "", "לשמש ", "infographic1-complex-text"],
    el8: ["span", "colored-text", "def7", "מפקדה משימתית קידמית", "infographic1-complex-text"],
    el9: ["span", "", "", " במרחב העורף לסיוע במצבי החירום השונים בהתאם למחויבות אופרטיבית ומוכנות לקבל אחריות גזרתית בעורף.", "infographic1-complex-text"],
    el10: ["div", "infographic-num-container", "", "1", "infographic1"],
    el11: ["div", "infographic", "infographic2", "", "infographic-container"], 
    el12: ["div", "infographic-text-container", "", "פו''ש על אירועי חילוץ, הצלה, בלתי קונבנציונליים ופינוי אוכלוסיה.", "infographic2"],
    el13: ["div", "infographic-num-container", "", "2", "infographic2"],
    el14: ["div", "infographic", "infographic3", "", "infographic-container"],
    el15: ["div", ["infographic-text-container", "complex-infographic-text"], "infographic3-complex-text", "", "infographic3"],
    el16: ["span", "", "", "לתגבר את ", "infographic3-complex-text"],
    el17: ["span", "colored-text", "def8", "מרכז המידע הפיקודי", "infographic3-complex-text"],
    el18: ["span", "", "", " וביצוע משימות סיוע אזרחי.", "infographic3-complex-text"],
    el19: ["div", "infographic-num-container", "", "3", "infographic3"],
    el20: ["div", "infographic", "infographic4", "", "infographic-container"], 
    el21: ["div", "infographic-text-container", "", "לפקד/לשלח את גדודי החטיבה ת''פ מחוז אחר בהתאם לניתוח האיום ועפ''י הע''מ.", "infographic4"],
    el22: ["div", "infographic-num-container", "", "4", "infographic4"],
    el23: ["div", "infographic", "infographic5", "", "infographic-container"],
    el24: ["div", ["infographic-text-container", "complex-infographic-text"], "infographic5-complex-text", "", "infographic5"],
    el25: ["span", "", "", "לבצע אימונים והכשרות במסגרת תכנית ", "infographic5-complex-text"],
    el26: ["span", "colored-text", "def9", "'זמן יקר'.", "infographic5-complex-text"], 
    el27: ["div", "infographic-num-container", "", "5", "infographic5"],
    img28: ["assets/images/arrow.svg", "המשך", "roles-next-arrow", "next-arrow", "", "main-roles"],
    evLis29: ["roles-next-arrow", "click", "nextPage"]
}

var page33 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "title", "", "תפקידים מרכזיים", "main-roles"],
    el3: ["div", "subtitle", "", "מפקדה משימתית- טורקיה", "main-roles"], 
    vid4: ["https://www.youtube.com/embed/UizPszhEIcM?si=02NkX59qYt5vhvY5", "420", "315", "turkey-mission-video", "סרטון טורקיה", "height: auto; display: block; position: absolute; top: 8rem; width: 31rem; height: 16rem; left: 50%; transform: translateX(-50%);","main-roles"],
    img5: ["assets/images/arrow.svg", "המשך", "roles-next-arrow", "next-arrow", "", "main-roles"],
    evLis6: ["roles-next-arrow", "click", "nextPage"]
}

var page34 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "title", "", "תפקידים מרכזיים", "main-roles"],
    el3: ["div", "subtitle", "", "מפקדה משימתית- קורונה", "main-roles"], 
    el4: ["div", "roles-text", "", "עם פרוץ מגפת הקורונה, חטיבת החילוץ לקחה חלק מרכזי במאמצי הסיוע וההתמודדות עם המשבר הלאומי בכל רחבי הארץ.\nעיקרי המשימות אשר החטיבה לקחה בהן חלק כ'מפקדה משימתית':\nסיוע למשרד הבריאות ולרשויות המקומיות לקיים הסברה ממוקדת, להוציא חולים, להגן על אוכלוסיות בסיכון ולהבטיח את אספקת השירותים החיוניים תוך שימור המענה לרשות בהתפרצות על מנת להציל חיים ולאפשר את המשך תפקוד המשק תחת הגבלות הקורונה.", "main-roles"],
    img5: ["assets/images/corona-img.JPG", "תמונת קורונה", "", "roles-img", "", "main-roles"],
    img6: ["assets/images/arrow.svg", "המשך", "roles-next-arrow", "next-arrow", "", "main-roles"],
    evLis7: ["roles-next-arrow", "click", "nextPage"]
}

var page35 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "title", "", "תפקידים מרכזיים", "main-roles"],
    el3: ["div", "subtitle", "", "חילוץ בעורף", "main-roles"], 
    el4: ["div", "roles-text", "", "גדודי החטיבה הינם הגוף הסדיר בעל כשירות החילוץ הגבוהה ביותר, המחלצים ערוכים לביצוע פעולות חילוץ במתאר הרס מלחמתי בתוך שטח מדינת ישראל (כתוצאה מפגיעת רקטה לדוגמה), אסונות טבע וכשלים הנדסיים כל זאת במטרה להציל חיים.", "main-roles"],
    car5: ["rescueImgCarousel"],
    img6: ["assets/images/arrow.svg", "המשך", "roles-next-arrow", "next-arrow", "", "main-roles"],
    evLis7: ["roles-next-arrow", "click", "nextPage"]
}

var page36 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "title", "", "תפקידים מרכזיים", "main-roles"],
    el3: ["div", "subtitle", "", "חילוץ בסיוע לתמרון", "main-roles"], 
    el4: ["div", "roles-text", "", "לאור מאפייני הלחימה במרחב התמרון (בשטח מדינת האויב), המאופיינים במרחב בנוי רווי מטענים ותשתיות תת קרקע ממולכדות, נדרש מענה מבצעי לאיום פגיעה בכוחותינו לאור קריסת מבנה או חלל תת קרקע.\nהכוח שמוכשר לתת מענה בפעולות חילוץ של כוחות מתמרנים של צה''ל מהריסות מבנים במרחב הלחימה, הינם לוחמי החילוץ של חטיבת החילוץ וההדרכה.", "main-roles"],
    vid5: ["https://www.youtube.com/embed/ARUP-IxuH_g?si=WKsshRfTPV1FKQHY", "420", "315", "building-collapse-video", "סינק התמוטטות בניין", "height: auto; display: block; position: absolute; top: 8rem; width: 20rem; height: 13rem; left: 5rem;","main-roles"],
    img6: ["assets/images/arrow.svg", "המשך", "roles-next-arrow", "next-arrow", "", "main-roles"],
    evLis7: ["roles-next-arrow", "click", "nextPage"]
}

var page37 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "title", "", "תפקידים מרכזיים", "main-roles"],
    el3: ["div", "subtitle", "", "חילוץ בסיוע לתמרון", "main-roles"], 
    el4: ["div", "roles-text", "", "בעת תמרון בשטח אויב קיימת סכנה להתמוטטות מבנה על כוחותינו.\nתרחיש זה שונה בתכלית מתרחיש התמוטטות בעורף, מכיוון שאין באפשרות ארגוני החירום להגיע לאירוע.\nבמלחמה, גדודי החטיבה יצוותו לאוגדות מתמרנות בתצורת צק''פים (צוותי קרב פלוגתיים) אשר יתנו מענה לאירועי חילוץ של כוחותינו בשטח האויב.", "main-roles"],
    vid5: ["https://www.youtube.com/embed/MHfaOD0cDe8?si=B3wqldSbX0XhBsFg", "420", "315", "80-days-video", "סיכום 80 ימי לחימה", "height: auto; display: block; position: absolute; top: 8rem; width: 20rem; height: 13rem; left: 5rem;","main-roles"],
    img6: ["assets/images/arrow.svg", "המשך", "roles-next-arrow", "next-arrow", "", "main-roles"],
    evLis7: ["roles-next-arrow", "click", "nextPage"]
}

var page38 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "title", "", "תפקידים מרכזיים", "main-roles"],
    el3: ["div", "subtitle", "", "אב''כ", "main-roles"], 
    el4: ["div", "roles-text", "", "לגדודי החטיבה כשירות לטפל באירועים כימיים בעורף, טיהור המוקד הנגוע ופינוי האוכלוסייה עפ''י צורך.\nהלוחמים והלוחמות בגדוד מתמקצעים ביכולות השונות הנדרשות לטיפול באירוע כה מורכב: גילוי וזיהוי מוקד הזיהום, טיהור השטח הנגוע, טיהור בני אדם וכלי רכב היוצאים מהאזור הנגוע ועוד. כל זאת על מנת שיוכלו לפעול ביעילות ולהציל חיים בזמן הקצר ביותר.", "main-roles"],
    vid5: ["https://www.youtube.com/embed/3HZRBKBRkHE?si=zuxHJqtuUxC4R2si", "420", "315", "abach-video", "סרטון תדמית אב''כ", "height: auto; display: block; position: absolute; top: 8rem; width: 20rem; height: 13rem; left: 5rem;","main-roles"],
    img6: ["assets/images/arrow.svg", "המשך", "roles-next-arrow", "next-arrow", "", "main-roles"],
    evLis7: ["roles-next-arrow", "click", "nextPage"]
}

var page39 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "title", "", "תפקידים מרכזיים", "main-roles"],
    el3: ["div", "subtitle", "", "בט''ש", "main-roles"], 
    el4: ["div", "roles-text", "", "גדודי החטיבה מבצעים תעסוקה מבצעית מלאה באיו''ש ובגבולות המדינה: מעצרי מבוקשים, סיורים, תצפיות, מארבים ועוד…\nהלוחמים והלוחמות מוכשרים ללחימה בשטח פתוח ובשטח בנוי, ביום ובלילה, בכדי להגן על ביטחון מדינת ישראל.", "main-roles"],
    img5: ["assets/images/arrow.svg", "המשך", "roles-next-arrow", "next-arrow", "", "main-roles"],
    evLis6: ["roles-next-arrow", "click", "nextPage"]
}

var page40 = {
    el1: ["div", "structure-text-page", "structure", "", "page"],
    el2: ["div", "sub-title", "", "מבנה החטיבה ויחידותיה", "structure"]
}

var page41 = {
    el1: ["div", "structure-text-page", "structure", "", "page"],
    el2: ["div", "", "structure-tree", "", "structure"],
    el3: ["div", "", "hativa-container", "", "structure-tree"],
    img4: ["assets/images/hativa.svg", "hativa", "hativa", "structure-sym", "", "hativa-container"],
    el5: ["strong", "hativa-desc", "hativa-desc", "מפקדה", "hativa-container"],
    el6: ["div", "units-container", "units-container", "", "structure-tree"], 
    el7: ["div", "", "bah-container", "", "units-container"], 
    img8: ["assets/images/bah.svg", "bah", "bah", "structure-sym", "", "bah-container"], 
    el9: ["strong", "bah-desc", "bah-desc", "בא''ח העורף", "bah-container"],
    el10: ["div", "", "baf-container", "", "units-container"],
    img11: ["assets/images/baf.svg", "baf", "baf", "structure-sym", "", "baf-container"],
    el12: ["strong", "baf-desc", "baf-desc", "בא''פ העורף", "baf-container"],
    el13: ["div", "", "matachim-container", "", "units-container"],
    img14: ["assets/images/matachim.svg", "matachim", "matachim", "structure-sym", "", "matachim-container"],
    el15: ["strong", "matachim-desc", "matachim-desc", "יחידת מתכים", "matachim-container"],
    el16: ["div", "", "school-container", "", "units-container"],
    img17: ["assets/images/school-of-oref.svg", "school", "school", "structure-sym", "", "school-container"],
    el18: ["strong", "school-desc", "school-desc", "בית הספר לפיקוד\nולמקצועות העורף", "school-container"],
    el19: ["div", "gdudim-container", "gdudim-container", "", "structure-tree"], 
    el20: ["div", "", "gdud-shahar", "", "gdudim-container"],
    img21: ["assets/images/gdud-shahar.svg", "shahar", "shahar", ["structure-sym", "gdudim-img"], "", "gdud-shahar"],
    el22: ["strong", "gdudim-desc", "", "גדוד שחר", "gdud-shahar"],
    el23: ["div", "", "gdud-tavor", "", "gdudim-container"],
    img24: ["assets/images/gdud-tavor.svg", "tavor", "tavor", ["structure-sym", "gdudim-img"], "", "gdud-tavor"],
    el25: ["strong", "gdudim-desc", "", "גדוד תבור", "gdud-tavor"],
    el26: ["div", "", "gdud-ram", "", "gdudim-container"],
    img27: ["assets/images/gdud-ram.svg", "ram", "shahar", ["structure-sym", "gdudim-img"], "", "gdud-ram"],
    el28: ["strong", "gdudim-desc", "", "גדוד רם", "gdud-ram"],
    el29: ["div", "", "gdud-kedem", "", "gdudim-container"],
    img30: ["assets/images/gdud-kedem.svg", "kedem", "kedem", ["structure-sym", "gdudim-img"], "", "gdud-kedem"],
    el31: ["strong", "gdudim-desc", "", "גדוד קדם", "gdud-kedem"],
    el32: ["button", "next-btn-timeline", "finished-structure", "סיימתי!", "structure"],
    evLis33: ["structure-tree", "click", "openDetails"],
    evLis34: ["next-btn-timeline", "click", "finishScreen"]
}

const hativaDetails = {
    el1: ["div", "structure-details", "hativa-details", "", "page"],
    img2: ["assets/images/close-btn.svg", "X", "close-btn-structure", "close-details-btn", "", "hativa-details"],
    el3: ["div", "title details-title", "", "מפקדת חטיבת החילוץ וההדרכה", "hativa-details"],
    img4: ["assets/images/hatuve.svg", "חטיבת החילוץ וההדרכה", "", "details-img", "", "hativa-details"],
    el5: ["div", "details-text", "", "מפקדת החטיבה תשמש כמפקדה משימתית בחירום ובתוך כך תפעל באירועי חילוץ והצלה בכל זירת המלחמה, לרבות מחוץ לגבולות מדינת ישראל ותפקד על מבצעים במרחב האזרחי ברגיעה ובלחימה.", "hativa-details"],
    evLis6: ["close-btn-structure", "click", "closeDetails"]
}

const bahDetails = {
    el1: ["div", "structure-details", "bah-details", "", "page"],
    img2: ["assets/images/close-btn.svg", "X", "close-btn-structure", "close-details-btn", "", "bah-details"],
    el3: ["div", ["title", "details-title"], "", "בא''ח העורף", "bah-details"],
    img4: ["assets/images/bah.svg", "בא''ח העורף", "", "details-img", "", "bah-details"],
    el5: ["div", "details-conteiner", "details-conteiner", "", "bah-details"],
    el6: ["div", "subtitle", "", "הכר את בא''ח העורף", "details-conteiner"],
    el7: ["div", "details-text", "", "בסיס אימונים חטיבתי להכשרת הלוחמים ופיתוח המפקדים למקצועות החילוץ, אב''כ ולוחמה.", "details-conteiner"],
    el8: ["div", "subtitle", "", "מגמות הבא''ח והכשרות", "details-conteiner"],
    el9: ["ul", "details-list", "details-list", "", "details-conteiner"],
    el10: ["li", "", "", "מכין לוחמות.", "details-list"],
    el11: ["li", "", "", "אימון יסוד - הכשרת הלוחם ברמת ''כושר לחימה''- בסיסי ב'.", "details-list"],
    el12: ["li", "", "", "אימון מתקדם- הכשרת הלוחם ללוחמה ברמת ''כושר לחימה''- בסיסי ג', מחלקות הפיקוד ברמת 'מתקדם א', ולחילוץ ברמת מחלץ 06.", "details-list"],
    el13: ["li", "", "", "הכשרות נוספות לחיילים מאותרים: מש''קי מודיעין אוכלוסייה, קלע, מטול, מפקדי חוליה.", "details-list"],
    el14: ["div", "closed-card", "closed-card-bah", "", "details-conteiner"],
    el15: ["span", "closed-card-title", "", "הידעת?", "closed-card-bah"],
    img16: ["assets/images/arrow.svg", "open", "", "closed-card-arrow", "", "closed-card-bah"],
    car17: ["bahCarousel"],
    evLis18: ["closed-card-bah", "click", "openCarouselCard"],
    evLis19: ["close-btn-structure", "click", "closeDetails"]
}

const bafDetails = {
    el1: ["div", "structure-details", "baf-details", "", "page"],
    img2: ["assets/images/close-btn.svg", "X", "close-btn-structure", "close-details-btn", "", "baf-details"],
    el3: ["div", ["title", "details-title"], "", "בא''ח העורף", "baf-details"],
    img4: ["assets/images/baf.svg", "בא''פ העורף", "", "details-img", "", "baf-details"],
    el5: ["div", "details-conteiner", "details-conteiner", "", "baf-details"],
    el6: ["div", "subtitle", "", "הכר את בא''פ העורף", "details-conteiner"],
    el7: ["div", "details-text", "details-text", "", "details-conteiner"],
    el8: ["span", "", "", "בסיס אימונים פיקודי המתמחה בהובלה וחניכה של אימוני גדודי מילואים בתחומי חילוץ, אב''כ וחי''ר קל, חניכת את גדודי החטיבה הסדירים באימונים בין קווים ותו''כ תע''מ והובלת קורסים והכשרות בתחומי חילוץ, רפואה, ", "details-text"],
    el9: ["span", "colored-text", "def10", "שו''ב, ", "details-text"],
    el10: ["span", "colored-text", "def11", "אוכלוסייה, ", "details-text"],
    el11: ["span", "colored-text", "def12", "צמ''ה, ", "details-text"],
    el12: ["span", "colored-text", "def13", "הנדסה ", "details-text"],
    el13: ["span", "colored-text", "def14", "ואנו''ח.", "details-text"],
    el14: ["div", "subtitle", "", "מדורי הבא''פ וחניכה", "details-conteiner"],
    el15: ["ul", "details-list", "details-list", "", "details-conteiner"],
    el16: ["li", "", "", "2 מדורי אימוני חילוץ.", "details-list"],
    el17: ["li", "", "", "מדור צמ''ה.", "details-list"],
    el18: ["li", "", "", "מדור רפואה.", "details-list"],
    el19: ["li", "", "", "מדור הנדסה.", "details-list"],
    el20: ["li", "", "", "חניכת אוכלוסייה.", "details-list"],
    el21: ["li", "", "", "חניכת שו''ב.", "details-list"],
    el22: ["li", "", "", "חניכת אנו''ח.", "details-list"],
    el23: ["div", "closed-card", "closed-card-baf", "", "details-conteiner"],
    el24: ["span", "closed-card-title", "", "הידעת?", "closed-card-baf"],
    img25: ["assets/images/arrow.svg", "open", "", "closed-card-arrow", "", "closed-card-baf"],
    car26: ["bafCarousel"],
    evLis27: ["closed-card-baf", "click", "openCarouselCard"],
    evLis28: ["close-btn-structure", "click", "closeDetails"]
}

const schoolDetailsA = {
    el1: ["div", "structure-details", "school-details", "", "page"],
    img2: ["assets/images/close-btn.svg", "X", "close-btn-structure", "close-details-btn", "", "school-details"],
    el3: ["div", ["title", "details-title"], "", "ביה''ס לפיקוד ומקצועות העורף", "school-details"],
    img4: ["assets/images/school-of-oref.svg", "", "ביה''ס לפיקוד ומקצועות העורף", "details-img", "", "school-details"],
    el5: ["div", "details-conteiner", "details-part-1", "", "school-details"],
    el6: ["div", "subtitle", "", "הכר את ביה''ס לפיקוד ומקצועות העורף", "details-part-1"],
    el7: ["div", "details-text", "", "בית הספר החיילי למקצועות הפיקוד והעורף, המתמחה בהכשרת מפקדים ומדריכים בחילוץ, לחימה, אב''כ, בעורף, ובשמירת כשירות הפרט בתחומי ליבת העורף.", "details-part-1"],
    el8: ["div", "closed-card", "closed-card-school", "", "details-part-1"],
    el9: ["span", "closed-card-title", "", "הידעת?", "closed-card-school"],
    img10: ["assets/images/arrow.svg", "open", "", "closed-card-arrow", "", "closed-card-school"],
    img11: ["assets/images/arrow.svg", "next", "school-next-arrow", ["next-arrow", "next-left"], "", "details-part-1"],
    car12: ["schoolCarousel"],
    evLis13: ["closed-card-school", "click", "openCarouselCard"],
    evLis14: ["close-btn-structure", "click", "closeDetails"],
    evLis15: ["school-next-arrow", "click", "changeSchoolDetailsPart"]
}

const schoolDetailsB = {
    el1: ["div", "structure-details", "school-details", "", "page"],
    img2: ["assets/images/close-btn.svg", "X", "close-btn-structure", "close-details-btn", "", "school-details"],
    el3: ["div", ["title", "details-title"], "", "ביה''ס לפיקוד ומקצועות העורף", "school-details"],
    img4: ["assets/images/school-of-oref.svg", "", "ביה''ס לפיקוד ומקצועות העורף", "details-img", "", "school-details"],
    el5: ["div", "details-conteiner", "details-part-2", "", "school-details"],
    el6: ["div", "subtitle", "", "מגמות בית הספר והכשרות", "details-part-2"],
    el7: ["div", "sub-sub-title", "", "מגמת הכשרות יסוד", "details-part-2"],
    el8: ["ul", "details-list", "details-list-1", "", "details-part-2"],
    el9: ["li", "", "", "מחלקת זאב (טירונות ברמת כושר לחימה אישי עורפי).", "details-list-1"],
    el10: ["li", "", "", "קורסי הדרכה: קמ''ד אב''כ, קמ''ד חילוץ, קמ''ד חירום, קורס מבצעים.", "details-list-1"],
    el11: ["div", "sub-sub-title", "", "מגמות הפיקוד", "details-part-2"],
    el12: ["ul", "details-list", "details-list-2", "", "details-part-2"],
    el13: ["li", "", "", "קורס מ''כים- הכשרת הלוחם ברמת 'כושר לחימה'- מתקדם ב', ומחלץ 07.", "details-list-2"],
    el14: ["li", "", "", "השלמה לקצונה 'חנית'- השלמה לקצונה לאוכלוסיית הלוחמים בוגרי מגמת 'שדה' בבה''ד 1.", "details-list-2"],
    el15: ["li", "", "", "השלמה לקצונה 'מורג'- השלמה לקצונה לאוכלוסיית המטה בוגרי מגמת 'מעוז' בבה''ד 1.", "details-list-2"],
    el16: ["li", "", "", "הכנות לקצונה לאוכלוסיית הלוחמים ('כידון') והמטה ('צור').", "details-list-2"],
    el17: ["div", "sub-sub-title", "", "מגמת מקצועות", "details-part-2"],
    el18: ["ul", "details-list", "details-list-3", "", "details-part-2"],
    el19: ["li", "", "", "מדור הכשרות חילוץ.", "details-list-3"],
    el20: ["li", "", "", "מדור הכשרות אב''כ.", "details-list-3"],
    el21: ["div", "closed-card", "closed-card-school", "", "details-part-2"],
    el22: ["span", "closed-card-title", "", "הידעת?", "closed-card-school"],
    img23: ["assets/images/arrow.svg", "open", "", "closed-card-arrow", "", "closed-card-school"],
    img24: ["assets/images/arrow.svg", "next", "school-next-arrow", ["next-arrow", "next-right"], "", "details-part-2"],
    car25: ["schoolCarousel"],
    evLis26: ["closed-card-school", "click", "openCarouselCard"],
    evLis27: ["close-btn-structure", "click", "closeDetails"],
    evLis28: ["school-next-arrow", "click", "changeSchoolDetailsPart"]
}

const matachimDetails = {
    el1: ["div", "structure-details", "matachim-details", "", "page"],
    img2: ["assets/images/close-btn.svg", "X", "close-btn-structure", "close-details-btn", "", "matachim-details"],
    el3: ["div", ["title", "details-title"], "", "יחידת מתכים", "matachim-details"],
    img4: ["assets/images/matachim.svg", "יחידת מתכים", "", ["details-img", "matachim-img"], "", "matachim-details"],
    el5: ["div", "details-conteiner", "details-conteiner", "", "matachim-details"],
    el6: ["div", "subtitle", "", "תפקידיה של יחידת מתכים", "details-conteiner"],
    el7: ["div", "details-text", "", "להגן קרקעית על מתקן 'מתכים' באמצעות יחידותיו וכוחות ת''פ.\nהסד''כ אשר מבצע את ההגנה על היחידה בפועל הוא כוח פלוגתי של אחד הגדודים בחטיבה אשר מתחלף ע''פ גרף התע''מ.\nבשנת 2020 הוקמה תחת גדוד תבור פלוגת ונוס אשר משימתה בחירום היא הגנה על מתכים.", "details-conteiner"],
    el8: ["div", "closed-card", "closed-card-matachim", "", "details-conteiner"],
    el9: ["span", "closed-card-title", "", "הידעת?", "closed-card-matachim"],
    img10: ["assets/images/arrow.svg", "open", "", "closed-card-arrow", "", "closed-card-matachim"],
    car11: ["matachimCarousel"],
    evLis12: ["closed-card-matachim", "click", "openCarouselCard"],
    evLis13: ["close-btn-structure", "click", "closeDetails"]
}

var bahCarousel = {
    items: 3,
    carouselIndicators: false,
    visible: false,
    arrows: true,
    cardType: "el",
    card1: [
        ["strong", "card-title", "", "הידעת?", "card-1"],
        ["div", "card-text", "", "בבאח העורף מדור גיוס ייעודי לתפקידי החטיבה ומדור זה מוביל את תהליך הגיוס ממלש''ב ועד לחייל, מדור זה מנהל את הרשתות החברתיות של החטיבה ומייצג את החטיבה באירועי הגיוס של צה''ל.", "card-1"]
    ],
    card2: [
        ["strong", "card-title", "", "הידעת?", "card-2"],
        ["div", "card-text", "", "בא''ח העורף בחירום הינו גדוד הצלה וחילוץ חמישי בחטיבת החילוץ ומשמש כעתודה חטיבתית למשימות חילוץ קל וסיוע אזרחי. מפקדת הבא''ח הינה מפקדת הגדוד ופלוגות האימון המתקדם בשיתוף קורס מכ''ים והשלמה לקצונה חנית משמשות כפלוגות חילוץ.", "card-2"]
    ],
    card3: [
        ["strong", "card-title", "", "הידעת?", "card-3"],
        ["div", "card-text", "", "להכשרת הלוחם בבא''ח 3 מחזורי גיוס, הלוחמים משתבצים ב4 פלוגות הכשרה (שחר, קדם, תבור, רם) ועולים לגדודים המבצעיים, כל פלוגה לגדוד האורגני שלה.", "card-3"]
    ]
}

var bafCarousel = {
    items: 2,
    carouselIndicators: false,
    visible: false,
    arrows: true,
    cardType: "el",
    card1: [
        ["strong", "card-title", "", "הידעת?", "card-1"],
        ["div", "card-text", "", "בעבר בא''פ העורף נקרא ענף אימון יחידות תחת בה''ד 16 ולאחר מכן תחת חטיבת החילוץ וההדרכה בצריפין. בשנת 2020 ענף אימון יחידות (ענף אמ''י) עבר למכלול זיקים והוקם בא''פ העורף.", "card-1"]
    ],
    card2: [
        ["strong", "card-title", "", "הידעת?", "card-2"],
        ["div", "card-text", "", "בא''פ העורף הינו בסיס אימונים פיקודי ועל כן נאמן על הכשרות ואימונים של כלל יחידות פיקוד העורף ועל כשירות היחידות והמערכים המקצועיים של הפיקוד.", "card-2"]
    ],
}

var schoolCarousel = {
    items: 3,
    carouselIndicators: false,
    visible: false,
    arrows: true,
    cardType: "el",
    card1: [
        ["strong", "card-title", "", "הידעת?", "card-1"],
        ["div", "card-text", "", "בשנת 2018 תחת חטיבת החילוץ וההדרכה הוקם ביה''ס לפיקוד ומקצועות העורף שהינו תוצר של איחוד גדוד הפיקוד וענף מקצועות אשר ישבו בבה''ד 16.", "card-1"]
    ],
    card2: [
        ["strong", "card-title", "", "הידעת?", "card-2"],
        ["div", "card-text", "", "עד שנת 2015 התקיימה השלמה לקצונה אחידה ללוחמים ומטה.\nבשנת 2015 התפצלה ההשלמה למגמת חנית- קציני חילוץ לוחמים, ומגמת מורג- קציני עורף.", "card-2"]
    ],
    card3: [
        ["strong", "card-title", "", "הידעת?", "card-3"],
        ["div", "card-text", "", "מדור הכשרות אב''כ הינו גוף צבאי ייחודי הממונה על תחום אב''כ בכלל צה''ל ומעביר הכשרות בכלל יחידות צה''ל.", "card-3"]
    ]
}

var matachimCarousel = {
    items: 1,
    carouselIndicators: false,
    visible: false,
    arrows: false,
    cardType: "el",
    card1: [
        ["strong", "card-title", "", "הידעת?", "card-1"],
        ["div", "card-text", "", "עד שנת 2021 היתה יחידת מתכים כפופה למחוז דרום.\nבתוך בסיס היחידה קיימים מתקני אימון רבים כגון לש''בייה, מטווחים, אתר הרס, מסלול בראור ועוד!", "card-1"]
    ]
}

var rescueImgCarousel = {
    items: 5,
    carouselIndicators: true,
    visible: true,
    arrows: true,
    cardType: "img",
    card1: ["assets/images/rescue-carousel1.jpg", "First slide", "card", ["d-block", "w-100"], "", "carousel-item"],
    card2: ["assets/images/rescue-carousel2.jpg", "Second slide", "card", ["d-block", "w-100"], "", "carousel-item"],
    card3: ["assets/images/rescue-carousel3.jpg", "Third slide", "card", ["d-block", "w-100"], "", "carousel-item"],
    card4: ["assets/images/rescue-carousel4.jpg", "Fourth slide", "card", ["d-block", "w-100"], "", "carousel-item"],
    card5: ["assets/images/rescue-carousel5.jpg", "Fifth slide", "card", ["d-block", "w-100"], "", "carousel-item"]
}

let menuOpen = false;
let quesVisited = false;
let currPage = 1;
let currExpShown = "";
let currDefShown = ""; // type string
let currSchoolDetailsShown = "";
let complexBranchesVisited = [];
let detailsVisited = [];
let complexFinishButton = ["button", "next-btn-timeline", "next-btn-14", "סיימתי!", "timeline-text-container"];

window.addEventListener("load", (event) => {
    // createScreen(openScreenContent);
    document.getElementById("menu-btn").addEventListener("click", showMenu);
    document.querySelector(".body-part").addEventListener("click", () => {
        document.querySelector(".nice-nav").classList.add("open");
    });
    document.getElementById("info-btn").addEventListener("click", showInfo);
    document.getElementById("ques-btn").addEventListener("click", showQues);
    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("colored-text")) {
            createDefinitionElement(event);
        }
        
    });
});

const showInfo = () => {
    let style = document.getElementById("info").style.display;
    if (document.getElementById("ques-container").style.display === "none" && !document.querySelector(".nice-nav").classList.contains("open")) {
        if (style === "none") {
            document.getElementById("info").style.display = "block";
        } else {
            document.getElementById("info").style.display = "none";
        }
        document.getElementById("close-btn-info").addEventListener("click", () => {
            document.getElementById("info").style.display = "none";
        });
    }
}

const showQues = () => {
    let currText = 'ques-text';
    let menuExpVisited = false;
    let infoExpVisited = false;
    let quesExpVisited = false;
    let displayStyle = document.getElementById("ques-container").style.display;
    if (document.getElementById("info").style.display === "none" && !document.querySelector(".nice-nav").classList.contains("open")) {
        if (displayStyle === "none") {
            document.getElementById("page").style.opacity = "0";
            document.getElementById("ques-container").style.display = "block";
            document.getElementById("ques-content").innerHTML = quesHTMLContent.quesContent;
            document.getElementById("ques-container").addEventListener("click", (event) => {
                // listener for multipule click events inside ques container
                if (event.target.id === "exmp-menu-btn") {
                    currText = "exmp-menu-text";
                    document.getElementById("ques-content").innerHTML = quesHTMLContent.exmpMenuContent;
                    menuExpVisited = true;
                } else if (event.target.id === "exmp-info-btn") {
                    currText = "exmp-info-text";
                    document.getElementById("ques-content").innerHTML = quesHTMLContent.exmpInfoContent;
                    infoExpVisited = true;
                } else if (event.target.id === "exmp-ques-btn") {
                    currText = "exmp-ques-text";
                    document.getElementById("ques-content").innerHTML = quesHTMLContent.exmpQuesContent;
                    quesExpVisited = true;    
                } else if (event.target.id === "close-btn-ques") { 
                    if (menuExpVisited && infoExpVisited && quesExpVisited) {
                        quesVisited = true;
                    }
                    if (currText === 'exmp-menu-text' || currText === 'exmp-info-text' || currText === 'exmp-ques-text') {
                        document.getElementById("ques-content").innerHTML = quesHTMLContent.quesContent;
                        currText = 'ques-text';
                    } else if (!quesVisited && currText === 'ques-text') {
                        document.getElementById("menu-error").style.display = "block"; 
                    } else if (quesVisited) {
                        document.getElementById("ques-container").style.display = "none";
                        document.getElementById("page").style.opacity = "1";
                        }
                    } else if (event.target.id !== "close-btn-ques") {
                        if (document.getElementById("menu-error") !== null ) {
                            document.getElementById("menu-error").style.display = "none";
                        }
                    } 
            });
        } else if (quesVisited) {
            document.getElementById("ques-container").style.display = "none";
            document.getElementById("ques-container").innerHTML = '';
            document.getElementById("page").style.opacity = "1";
        }
    }
}

const createDefinitionElement = (event) => {
    if (currDefShown !== "") {
        closeDefinition();
    }
    currExpShown = `${event.target.id}-exp`;
    currDefShown = `${event.target.id}`;
    let newDef = document.createElement("div");
    newDef.classList.add("definition");
    newDef.setAttribute("id", currExpShown);
    document.getElementById("main").appendChild(newDef);
    let newDefClose = document.createElement("img");
    newDefClose.src = "assets/images/close-btn.svg";
    newDefClose.setAttribute("id", `${event.target.id}-close`);
    newDefClose.alt = "סגור";
    newDefClose.classList.add("close-def-btn");
    newDef.appendChild(newDefClose);
    let newDefText = document.createElement("div");
    newDefText.classList.add("def-text");
    newDefText.innerText = definitionsText[event.target.id];
    newDef.appendChild(newDefText);
    event.target.style.color = "#c55b10";
    newDef.addEventListener("click", closeDefinition);
}

const closeDefinition = () => {
    document.getElementById(currDefShown).style.color = "#ff8205";
    document.getElementById(currExpShown).remove();
    currDefShown = "";
    currExpShown = "";
}

const showMenu = () => {
    if (!menuOpen) {
        document.querySelector(".nice-nav").classList.add("open");
        menuOpen = true;
        $submenu = $('.child-menu-ul');
        $('.child-menu .toggle-right').on('click', function(e) {
            e.preventDefault();
            $this = $(this);
            $parent = $this.parent().next();
            // $parent.addClass('active');
            $tar = $('.child-menu-ul');
            if (!$parent.hasClass('active')) {
                console.log("open sub-menu");
                $tar.removeClass('active').slideUp('fast');
                $parent.addClass('active').slideDown('fast');
            } else {
                $parent.removeClass('active').slideUp('fast');
                console.log("close sub-menu");
            }
        });
    } else {
        document.querySelector(".nice-nav").classList.remove("open");
        setTimeout(()=> {
            $('.child-menu-ul').removeClass('active').slideUp('fast');
        }, 250);
        menuOpen = false;
    }
}

//not finished
const hideMenu = () => {
    
}

var timelineComplexPage = (event) => {
    if (event.target.id.startsWith("profession-branch")) {
        document.getElementById("branch-explaination").innerText = "הכשרות למדריכים וחיילים למקצועות השונים בעורף, הכשרת אב''כ לכלל צה''ל, והכשרת אזרחים לתפקידם בחירום.";
        if (!complexBranchesVisited.includes("profession-branch")) {
            complexBranchesVisited[complexBranchesVisited.length] = "profession-branch";
        }
    } else if (event.target.id.startsWith("command-branch")) {
        document.getElementById("branch-explaination").innerText = "אחראי על אימון מפקדות הפיקוד ברמה המחוזית והנפתית.";
        if (!complexBranchesVisited.includes("command-branch")) {
            complexBranchesVisited[complexBranchesVisited.length] = "command-branch";
        }
    } else if (event.target.id.startsWith("emi-branch")) {
        document.getElementById("branch-explaination").innerText = "אחראי על אימון המסגרות הגדודיות- גדודי המילואים והסדיר לשמירת הכשירות במקצועות החילוץ והאב''כ.";
        if (!complexBranchesVisited.includes("emi-branch")) {
            complexBranchesVisited[complexBranchesVisited.length] = "emi-branch";
        }
    }
    if (complexBranchesVisited.length === 3) {
        // add finish button
        createTextElement(complexFinishButton);
        document.getElementById("next-btn-14").addEventListener("click", nextPage);
    }
}

const createScreen = (currObject) => {
    let openContentKeys = Object.keys(currObject);
    for (let i = 1; i <= openContentKeys.length; i++) {
        if (openContentKeys[i - 1].includes("el")) {
            createTextElement(currObject[openContentKeys[i - 1]]);
            continue;
        } else if (openContentKeys[i - 1].includes("evLis")) {
            let lisFunc = currObject[`evLis${i}`][2];
            document.getElementById(currObject[`evLis${i}`][0]).addEventListener(currObject[`evLis${i}`][1], window[lisFunc]);
            continue;
        } else if (openContentKeys[i - 1].includes("img")) {
            createImgElement(currObject[openContentKeys[i - 1]]);
            continue;
        } else if (openContentKeys[i - 1].includes("func")) {
            let func = currObject[`func${i}`];
            window[func]();
            continue;
        } else if (openContentKeys[i - 1].includes("vid")) {
            createVideo(currObject[openContentKeys[i - 1]]);
        } else if (openContentKeys[i - 1].includes("car")) {
            let carouselObject = currObject[`car${i}`];
            createCarousel(window[carouselObject]);
        }
    }
}

const changeText = () => {
    // need to do
}

const createTextElement = (list) => {
    // values in list are organized as: tag name, class value, id value, text value, parent element id - all saved as string. if there is no value, it will be ""
    let newElement = document.createElement(list[0]);
    if (list[1] !== "") {
        if ((typeof list[1]) === "object") {
            newElement.classList.add(...list[1]);
        } else {
            newElement.classList.add(list[1]);
        }
    }
    if (list[2] !== "") {
        newElement.setAttribute("id", list[2]);
    }
    newElement.innerText = list[3];
    document.getElementById(list[4]).appendChild(newElement);
}

const createImgElement = (list) => {
    // values in list are organized as: src path, id value, class value, title value, parent element id - all saved as string. if there is no value, it will be ""
    let newIMG = document.createElement("img");
    newIMG.src = list[0];
    newIMG.alt = list[1];
    if (list[2] !== "") {
        newIMG.setAttribute("id", list[2]);
    }
    if (list[3] !== "") {
        if ((typeof list[3]) === "object") {
            newIMG.classList.add(...list[3]);
        } else {
            newIMG.classList.add(list[3]);
        }
    }
    newIMG.setAttribute("title", list[4]);
    document.getElementById(list[5]).appendChild(newIMG);
}

const createCarousel = (carouselContent) => {
    // create container el for carousel
    let carouselExampleIndicators = document.createElement("div");
    carouselExampleIndicators.setAttribute("id", "carouselExampleIndicators");
    carouselExampleIndicators.classList.add("carousel", "slide");
    carouselExampleIndicators.setAttribute("data-ride", "carousel");
    carouselExampleIndicators.setAttribute("data-interval", "10000");
    if (carouselContent.visible) {
        carouselExampleIndicators.style.display = "block";
    } else {
        carouselExampleIndicators.style.display = "none";
    }
    if (carouselContent.cardType === "el") {
        document.querySelector(".details-conteiner").appendChild(carouselExampleIndicators);
    } else {
        document.getElementById("main-roles").appendChild(carouselExampleIndicators);
    }
    // create carousel indicators accordingly
    if (carouselContent.carouselIndicators) {
        let carouselIndicatorsOL = document.createElement("ol");
        carouselIndicatorsOL.setAttribute("id", "carousel-indicators");
        carouselIndicatorsOL.classList.add("carousel-indicators");
        carouselExampleIndicators.appendChild(carouselIndicatorsOL);
        for (let i = 0; i < carouselContent.items; i++) {
            let newItem = document.createElement("li");
            newItem.setAttribute("data-target", "#carouselExampleIndicators");
            newItem.setAttribute("data-slide-to", `${i}`);
            if (i === 0) {
                newItem.classList.add("active");
            }
            carouselIndicatorsOL.appendChild(newItem);
        }
    }
    // create inner container
    let carouselInner = document.createElement("div");
    carouselInner.setAttribute("id", "carousel-inner");
    carouselInner.classList.add("carousel-inner");
    carouselExampleIndicators.appendChild(carouselInner);
    // create X button according to card type
    if (carouselContent.cardType === "el") {
        let newIMG = document.createElement("img");
        newIMG.src = "assets/images/close-btn.svg";
        newIMG.alt = "X";
        newIMG.setAttribute("id", "close-card-button");
        newIMG.classList.add("close-card-button");
        document.getElementById("carousel-inner").appendChild(newIMG);
        newIMG.addEventListener("click", closeCarouselCard);
    }
    // create cards according to card num
    for (let i = 0; i < carouselContent.items; i++) {
        let newItem = document.createElement("div");
        newItem.setAttribute("id", `carousel-item-${i + 1}`);
        newItem.classList.add("carousel-item");
        if (i === 0) {
            newItem.classList.add("active");
        }
        carouselInner.appendChild(newItem);
        // create card content according to type
        if (carouselContent.cardType === "el") {
        let cardItem = document.createElement("div");
        cardItem.setAttribute("id", `card-${i + 1}`);
        cardItem.classList.add("d-block", "w-100", "card");
        newItem.appendChild(cardItem);
            for (let j = 0; j < carouselContent[`card${i + 1}`].length; j++) {
                createTextElement(carouselContent[`card${i + 1}`][j]);
            }
        } else if (carouselContent.cardType === "img") {
            // let cardNum = 
            let imgProp = carouselContent[`card${i + 1}`];
            let imgList = [imgProp[0], imgProp[1], `${imgProp[2]}-${i + 1}`, imgProp[3], imgProp[4], `${imgProp[5]}-${i + 1}`];
            createImgElement(imgList);
        }
    }
    // create arrows, change color accordingly
    if (carouselContent.arrows) {
        let carouselControlPrev = document.createElement("a");
        carouselControlPrev.setAttribute("id", "carousel-control-prev");
        carouselControlPrev.classList.add("carousel-control-prev");
        carouselControlPrev.href = "#carouselExampleIndicators";
        carouselControlPrev.setAttribute("role", "button");
        carouselControlPrev.setAttribute("data-slide", "prev");
        carouselInner.appendChild(carouselControlPrev);
        let carouselControlPrevIcon = document.createElement("span");
        if (carouselContent.cardType === "el") {
            carouselControlPrevIcon.classList.add("carousel-control-prev-icon", "prev-icon-card");
        } else {
            carouselControlPrevIcon.classList.add("carousel-control-prev-icon");
        }
        carouselControlPrevIcon.setAttribute("aria-hidden", "true");
        carouselControlPrev.appendChild(carouselControlPrevIcon);
        let srOnlyPrev = document.createElement("span");
        srOnlyPrev.classList.add("sr-only");
        srOnlyPrev.innerText = "Previous";
        carouselControlPrev.appendChild(srOnlyPrev);
        let carouselControlNext = document.createElement("a");
        carouselControlNext.setAttribute("id", "carousel-control-next");
        carouselControlNext.classList.add("carousel-control-next");
        carouselControlNext.href = "#carouselExampleIndicators";
        carouselControlNext.setAttribute("role", "button");
        carouselControlNext.setAttribute("data-slide", "next");
        carouselInner.appendChild(carouselControlNext);
        let carouselControlNextIcon = document.createElement("span");
        if (carouselContent.cardType === "el") {
            carouselControlNextIcon.classList.add("carousel-control-next-icon", "next-icon-card");
        } else {
            carouselControlNextIcon.classList.add("carousel-control-next-icon");
        }
        carouselControlNextIcon.setAttribute("aria-hidden", "true");
        carouselControlNext.appendChild(carouselControlNextIcon);
        let srOnlyNext = document.createElement("span");
        srOnlyNext.classList.add("sr-only");
        srOnlyNext.innerText = "Next";
        carouselControlNext.appendChild(srOnlyNext);
    }
}

var openCarouselCard = () => {
    document.getElementById("carouselExampleIndicators").style.display = "block";
}

var closeCarouselCard = () => {
    document.getElementById("carouselExampleIndicators").style.display = "none";
}

var openDetails = (event) => {
    if (event.target.id.includes("hativa")) {
        createScreen(hativaDetails);
        if (!detailsVisited.includes("hativa")) {
            detailsVisited.push("hativa");
        }
    } else if (event.target.id.includes("bah")) {
        createScreen(bahDetails);
        if (!detailsVisited.includes("bah")) {
            detailsVisited.push("bah");
        }
    } else if (event.target.id.includes("baf")) {
        createScreen(bafDetails);
        if (!detailsVisited.includes("baf")) {
            detailsVisited.push("baf");
        }
    } else if (event.target.id.includes("matachim")) {
        createScreen(matachimDetails);
        if (!detailsVisited.includes("matachim")) {
            detailsVisited.push("matachim");
        }
    } else if (event.target.id.includes("school")) {
        createScreen(schoolDetailsA);
        currSchoolDetailsShown = "a";
        if (!detailsVisited.includes("school-a")) {
            detailsVisited.push("school-a");
        }
    }
}

var changeSchoolDetailsPart = () => {
    if (currSchoolDetailsShown === "a") {
        closeDetails();
        createScreen(schoolDetailsB);
        currSchoolDetailsShown = "b";
        if (!detailsVisited.includes("school-b")) {
            detailsVisited.push("school-b");
        }
    } else if (currSchoolDetailsShown === "b") {
        closeDetails();
        createScreen(schoolDetailsA);
        currSchoolDetailsShown = "a";
        if (!detailsVisited.includes("school-a")) {
            detailsVisited.push("school-a");
        }
    }
}

var closeDetails = () => {
    document.getElementById("close-card-button").removeEventListener("click", closeCarouselCard);
    document.getElementById("close-btn-structure").removeEventListener("click", closeDetails);
    document.querySelector(".structure-details").remove();
}

const createVideo = (vidList) => {
    let iFrameVideo = document.createElement("iframe");
    iFrameVideo.src = vidList[0];
    iFrameVideo.width = vidList[1];
    iFrameVideo.height = vidList[2];
    iFrameVideo.setAttribute("id", vidList[3]);
    iFrameVideo.title = vidList[4];
    iFrameVideo.style.cssText = vidList[5];
    iFrameVideo.setAttribute("frameborder", "0");
    iFrameVideo.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
    iFrameVideo.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
    iFrameVideo.setAttribute("allowfullscreen", "true");
    document.getElementById(vidList[6]).appendChild(iFrameVideo);
    // iFrameVideo.addEventListener("onStateChange", createFinishAfterVid());
}

const createFinishAfterVid = (event) => {
    console.log(event);
    // if (state === 0) {
        let button;
        let id;
        if (currPage === 2 || currPage === 23) {
            if (currPage === 2) {
                id = "next-btn-3";
                button = ["button", "next-btn-timeline", "next-btn-3", "בואו נתחיל!", "page"];
            }
            else {
                id = "next-btn-11";
                button = ["button", ["next-btn-timeline", "page23-button"], "next-btn-11", "הבנתי", "timeline-text-container"];
            }
            createTextElement(button);
        } else {
            id = "roles-next-arrow";
            button = ["assets/images/arrow.svg", "המשך", "roles-next-arrow", "next-arrow", "", "main-roles"];
            createImgElement(button);
        }
        document.getElementById(id).addEventListener("click", nextPage);
    // }
}


////////////////////////////////////////////////////////////////////////
// function setAttributes(element, attributes) {
//     Object.keys(attributes).forEach(attr => {
//         element.setAttribute(attr, attributes[attr]);
//     });
// }
  
// const attributes = {
//     name: 'example',
//     title: 'Box 1',
//     disabled: '',
//     style: 'background-color: salmon; color: white;',
// };
  
// const button = document.getElementById('btn');
// setAttributes(button, attributes);
///////////////////////////////////////////////////////////////////////////////


var nextPage = () => {
    if (currPage === 1 && !quesVisited) {
        showQues();
    } else {
        currPage++;
        console.log(currPage);
        updatePage();
    }
}

var updatePage = () => {
    document.getElementById("page").innerHTML = "";
    let currObjContent = window[`page${currPage}`];
    if (Object.keys(currObjContent).length === 0) {
        nextPage();
    } else if (currPage === 29 || currPage === 40) {
        setTimeout(nextPage(), 3000);
    }
    console.log(currPage);
    console.log(currObjContent);
    createScreen(currObjContent);
}

var finishScreen = () => {
    if (detailsVisited.length === 6) {
        document.getElementById("page").innerHTML = "";
        createScreen(endScreenContent);
    }
}