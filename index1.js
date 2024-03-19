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

const openScreenContent = {
    // tag name, class value, id value, text value, parent element id
    el1: ["div", "main-title", "open-title", "", "page"],
    el2: ["div", "", "", "תעודת זהות-", "open-title"],
    el3: ["div", "", "", "חטיבת החילוץ וההדרכה", "open-title"],
    el4: ["button", "next-btn-timeline", "start-btn", "התחל", "page"],
    evLis5: ["start-btn", "click", "nextPage"]
    //          id         type    function
}

const endScreenContent = {
    el1: ["div", "main-title", "open-title", "", "page"],
    el2: ["div", "", "", "תעודת זהות-", "open-title"],
    el3: ["div", "", "", "חטיבת החילוץ וההדרכה", "open-title"],
    el4: ["div", "","re-do-button", "", "page"],
    img5: ["assets/images/re-do.svg", "", "re-do-img", "", "re-do-button"],
    //             src path, id value, class value, title value, parent element id 
    el6: ["div", "", "", "חזרה על הלומדה", "re-do-button"],
    evLis7: ["re-do-button", "click", "updatePage"]
}

const page2 = {
    vid1: ["https://www.youtube.com/embed/8h2PR-d9bTY?autoplay=1&mute=1", "420", "315", "enlisting-video", "height: auto; display: block; position: absolute; top: 4.5rem; width: 34rem; height: 19rem; left: 50%; transform: translateX(-50%);", "main"]
}

const page3 = {
    // timeline now
}

const page4 = {
    el1: ["div", "timeline", "", "", "page"],
    el2: ["div", "open-text", "page3text", "", "page"],
    el3: ["div", "", "", "חטיבת החילוץ וההדרכה הינה החטיבה הסדירה היחידה בפיקוד העורף אשר בנוי ברובו מאנשי מילואים.\nעל מנת להבין לעומק את ייחודיות החטיבה, נעמיק בדרך שהחטיבה עברה מאז ועד היום- מ'פלח''ץ' לחטיבת החילוץ וההדרכה.", "page3text"],
    el4: ["button", "next-btn-timeline", "next-btn-3", "בואו נתחיל!", "page"],
    evLis5: ["next-btn-3", "click", "nextPage"]
}

const page5 = {
    // timeline now to 1992
}

const page6 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "1992- הקמת פיקוד העורף", "timeline-text-container"],
    el3: ["div", "", "", "פיקוד העורף הוקם בשנת 1992 לאחר מלחמת המפרץ  הראשונה בה האיום על העורף העלה את הצורך בהתגוננות אזרחית סדורה.\nבן גוריון כבר ב48 אמר: ''ביום מן הימים, מה שקרוי העורף יכריע לא פחות מהחזית. לא נוכל לעמוד במלחמה באמצעים צבאיים בלבד''.\nבמקרה כזה, ישחרר פיקוד העורף את אלופי הפיקודים האחרים (צפון, מרכז, דרום) מדאגה לעורף, ויאפשר להם להתרכז בצרכים המבצעיים בחזית.", "timeline-text-container"],
    el4: ["button", "next-btn-timeline", "next-btn-4", "הבנתי!", "timeline-text-container"],
    evLis5: ["next-btn-4", "click", "nextPage"]
}

const page7 = {
    // timeline 1992 to 2003
}

const page8 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2003- הקמת פלוגת החילוץ הראשונה- פלוגת 'שביט'", "timeline-text-container"],
    el3: ["div", "", "", "ממלחמת לבנון הראשונה ועד לאחר מלחמת המפרץ הורכבו פלוגות החילוץ וההצלה מאנשי מילואים בעלי ידע אזרחי הקשור בבינוי.\nבמלחמת המפרץ הבינו שיש צורך בגוף סדיר שיהיה כונן לאירועי חילוץ בעורף, והתקבלה ההחלטה להקים פלוגת חילוץ סדירה ראשונה, פלוגת 'שביט'.", "timeline-text-container"],
    el4: ["button", "next-btn-timeline", "next-btn-5", "בואו נמשיך!", "timeline-text-container"],
    evLis5: ["next-btn-5", "click", "nextPage"]
}

const page9 = {
    // timeline 2003 to 2004
}

const page10 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2004- הקמת פלוגת 'חץ' ופלוגת 'רותם'", "timeline-text-container"],
    el3: ["div", "", "", "2004- הקמת שתי פלוגות חילוץ נוספות- פלוגת 'חץ' ופלוגת 'רותם'.\nמשימתן של הפלוגות האלו הייתה אבטחת בתי כלא בכלא 'עופר' ובכלא 'מגידו'.", "timeline-text-container"],
    el4: ["div", "bold-txt", "", "המושג 'פלח''ץ' מתייחס לתקופה שבה היו קיימות רק פלוגות חילוץ ללא שייכות לגדוד ולחטיבה.", "timeline-text-container"],
    el5: ["button", "next-btn-timeline", "next-btn-6", "המשך", "timeline-text-container"],
    evLis6: ["next-btn-6", "click", "nextPage"]
}

const page11 = {
    // timeline 2004 to 2008
}

const page12 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2008- איחוד פלוגות החילוץ והקמת גדוד שחר", "timeline-text-container"],
    el3: ["div", "", "", "2008- שלוש פלוגות החילוץ התאחדו והוקם גדוד ראשון בחטיבה- גדוד שחר.", "timeline-text-container"],
    el4: ["div", "", "complex-text7", "", "timeline-text-container"],
    el5: ["span", "", "", "גדוד שחר הוכפף ", "complex-text7"],
    el6: ["span", "colored-text", "def2", "למחוז", "complex-text7"],
    el7: ["span", "", "", " מרכז/ירושלים שמלבד גדוד שחר, הורכב מגדודי מילואים בלבד.", "complex-text7"],
    img8: ["assets/images/gdud-shahar.svg", "", "timeline-symbol-img", "", "timeline-text-container"],
    el9: ["button", "next-btn-timeline", "next-btn-7", "הבנתי", "timeline-text-container"],
    evLis10: ["next-btn-7", "click", "nextPage"]
}

const page13 = {
    // timeline 2008 to 2009
}

const page14 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2009- הקמת גדוד קדם", "timeline-text-container"],
    el3: ["div", "", "", "2009- הקמת גדוד קדם אשר בתוכו שלוש פלוגות:\n'קרן', 'דוד' ו'מגן'.", "timeline-text-container"],
    img4: ["assets/images/gdud-kedem.svg", "", "timeline-symbol-img", "", "timeline-text-container"],
    el5: ["button", "next-btn-timeline", "next-btn-8", "אני רוצה להמשיך!", "timeline-text-container"],
    evLis6: ["next-btn-8", "click", "nextPage"]
}

const page15 = {
    // timeline 2009 to 2009 #2
}

const page16 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2009- המעבר ממגל לפקע''ר", "timeline-text-container"],
    el3: ["div", "", "", "text text text text text text text text text text", "timeline-text-container"],
    img4: ["assets/images/re-do.svg", "", "timeline-symbol-img", "", "timeline-text-container"],
    el5: ["button", "next-btn-timeline", "next-btn-8", "אני רוצה להמשיך!", "timeline-text-container"],
    evLis6: ["next-btn-8", "click", "nextPage"]
}

const page17 = {
    // timeline 2009 #2 to 2012
}

const page18 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2012- הקמת גדוד תבור", "timeline-text-container"],
    el3: ["div", "", "", "2012- הקמת גדוד תבור אשר בתוכו שלוש פלוגות:\n'תבל', 'ברק', 'ראם'.\nבשנת 2020 הוקמה בתוך הגדוד פלוגה נוספת בשם 'ונוס'.", "timeline-text-container"],
    img4: ["assets/images/gdud-tavor.svg", "", "timeline-symbol-img", "", "timeline-text-container"],
    el5: ["button", "next-btn-timeline", "next-btn-9", "בואו נמשיך!", "timeline-text-container"],
    evLis6: ["next-btn-9", "click", "nextPage"]
}

const page19 = {
    // timeline 2012 to 2012 #2
}

const page20 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2012- הקמת גדוד רם", "timeline-text-container"],
    el3: ["div", "", "", "2012- גדוד נ''מ (נגד מטוסים) של חיל האוויר הוסב לפיקוד העורף.\nהשם שנבחר לגדוד החדש והרביעי הוא גדוד 'רם' אשר בתוכו שלוש פלוגות: 'רמון', 'מצדה', 'ארבל'.", "timeline-text-container"],
    img4: ["assets/images/gdud-ram.svg", "", "timeline-symbol-img", "", "timeline-text-container"],
    el5: ["button", "next-btn-timeline", "next-btn-10", "הבנתי!", "timeline-text-container"],
    evLis6: ["next-btn-10", "click", "nextPage"]
}

const page21 = {
    // timeline 2012 #2 to 2013
}

const page22 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2013- הקמת הנפה הסדירה", "timeline-text-container"],
    el3: ["div", "", "complex-text11", "", "timeline-text-container"],
    el4: ["span", "", "", "2013- ארבעת הגדודים הסדירים היו כפופים למחוז ירושלים והמרכז עד שבשנת 2013 הוחלט להקים ", "complex-text11"],
    el5: ["span", "colored-text", "def3", "נפה סדירה", "complex-text11"],
    el6: ["span", "", "", " בפיקוד העורף אשר אליה יהיו כפופים הגדודים הסדירים של הפיקוד.", "complex-text11"],
    el7: ["div", "", "", "ההחלטה התקבלה בעקבות המורכבות של המחוז לתת קשב גם לגדודי המילואים וגם לגדודים הסדירים.\nבנוסף לארבעת הגדודים הוכפפו לנפה בא''ח העורף וענף מפקדים (עליהם נפרט בהמשך).", "timeline-text-container"],
    img8: ["assets/images/hativa.svg", "", "timeline-symbol-img", "", "timeline-text-container"],
    el9: ["button", "next-btn-timeline", "next-btn-11", "הבנתי", "timeline-text-container"],
    evLis10: ["next-btn-11", "click", "nextPage"]
}

const page23 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", ["title", "page23-title"], "timeline-title", "2013- הקמת הנפה הסדירה", "timeline-text-container"],
    vid3: ["https://www.youtube.com/embed/22jnDzn8Cmg?autoplay=1&mute=1", "420", "315", "nafa-sdira-video", "height: auto; display: block; position: absolute; top: 6.5rem; width: 32rem; height: 16rem; left: 50%; transform: translateX(-50%);","main"],
    el4: ["button", ["next-btn-timeline", "page23-button"], "next-btn-11", "הבנתי", "timeline-text-container"],
    evLis5: ["next-btn-11", "click", "nextPage"]
}

const page24 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"],
    el2: ["div", "sub-title", "sub-title", "וכעת נעבור לזרוע השנייה שמרכיבה את חטיבת החילוץ וההדרכה:\nבה''ד 16", "timeline-text-container"],
    el3: ["button", "next-btn-timeline", "next-btn-13", "קדימה!", "timeline-text-container"],
    evLis4: ["next-btn-13", "click", "nextPage"]
}

const page25 = {
    // timeline 2013 to 1984
    // fix year text 
}

const enlistingVideo = ["https://www.youtube.com/embed/8h2PR-d9bTY?autoplay=1&mute=1", "420", "315", "enlisting-video", "height: auto; display: block; position: absolute; top: 4.5rem; width: 34rem; height: 19rem; left: 50%; transform: translateX(-50%);", "main"];
const nafaSdiraVideo = ["https://www.youtube.com/embed/22jnDzn8Cmg?autoplay=1&mute=1", "420", "315", "nafa-sdira-video", "height: auto; display: block; position: absolute; top: 6.5rem; width: 32rem; height: 16rem; left: 50%; transform: translateX(-50%);","main"];
const turkeyMissionVideo = ["https://www.youtube.com/embed/UizPszhEIcM?autoplay=1&mute=1", "420", "315", "turkey-mission-video", "height: auto; display: block; position: absolute; top: 8rem; width: 31rem; height: 16rem; left: 50%; transform: translateX(-50%);","main"];
const buildingCollapseVideo = ["https://www.youtube.com/embed/ARUP-IxuH_g?autoplay=1&mute=1", "420", "315", "building-collapse-video", "height: auto; display: block; position: absolute; top: 8rem; width: 20rem; height: 13rem; left: 5rem;","main"];
const days80Video = ["https://www.youtube.com/embed/MHfaOD0cDe8?autoplay=1&mute=1", "420", "315", "80-days-video", "height: auto; display: block; position: absolute; top: 8rem; width: 20rem; height: 13rem; left: 5rem;","main"];
const abachVideo = ["https://www.youtube.com/embed/3HZRBKBRkHE?autoplay=1&mute=1", "420", "315", "abach-video", "height: auto; display: block; position: absolute; top: 8rem; width: 20rem; height: 13rem; left: 5rem;","main"];

const page26 = {
    // fix year text
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "1984- בה''ד 16", "timeline-text-container"],
    el3: ["div", "", "", "מתוקף חוק הג''א, היו בבה''ד 16 ענפים אשר היו אמונים על הכשרת מקצועות העורף לאוכלוסיות השונות.\nבה''ד 16, ובשמו השני- ''המרכז הלאומי לחילוץ, אב''כ והתגוננות אזרחית'' ישב בצריפין והיה בנוי משלושה ענפים ומטה בה''ד:", "timeline-text-container"],
    el4: ["div", "", "branches", "", "timeline-text-container"],
    el5: ["div", "", "profession-branch", "", "branches"],
    img6: ["assets/images/profession-branch.svg", "profession-branch-img", "branch-img", "", "profession-branch"],
    el7: ["div", "branch-text", "profession-branch-text", "ענף מקצועות", "profession-branch"],
    el8: ["div", "", "command-branch", "", "branches"],
    img9: ["assets/images/command-branch.png", "command-branch-img", "branch-img", "", "command-branch"],
    el10: ["div", "branch-text", "command-branch-text", "ענף מפקדות", "command-branch"],
    el11: ["div", "", "emi-branch", "", "branches"],
    img12: ["assets/images/emi-branch.png", "emi-branch-img", "branch-img", "", "emi-branch"],
    el13: ["div", "branch-text", "emi-branch-text", "ענף אימון יחידות", "emi-branch"],
    el14: ["div", "", "branch-explaination", "", "timeline-text-container"],
    evLis15: ["branches", "click", "timelineComplexPage"]
}

const page27 = {
    // timeline 1984 to 2016
}

const page28 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2016- איחוד בה''ד 16 והנפה הסדירה", "timeline-text-container"],
    el3: ["div", "", "complex-text15", "", "timeline-text-container"],
    el4: ["span", "", "", "2016- איחוד בה''ד 16 עם הנפה הסדירה והקמת ", "complex-text15"],
    el5: ["strong", "", "", "חטיבת החילוץ וההדרכה.", "complex-text15"],
    img6: ["assets/images/fighter-pin.svg", "", "timeline-symbol-img", "", "timeline-text-container"],
    el7: ["button", "next-btn-timeline", "next-btn-15", "המשך!", "timeline-text-container"],
    evLis8: ["next-btn-15", "click", "nextPage"]
}

const page29 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"], 
    el2: ["div", "sub-title", "", "ייעוד ותפקידי חטיבת החילוץ וההדרכה", "main-roles"]
}

const page30 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "title", "", "ייעוד ותפקידי חטיבת החילוץ וההדרכה", "main-roles"],
    el3: ["div", "", "complex-text28", "", "main-roles"],
    el4: ["span", "", "", "חטיבת החילוץ וההדרכה תהווה גוף ", "complex-text28"], 
    el5: ["span", "colored-text", "def4", "לבניין כוח", "complex-text28"], 
    el6: ["span", "", "", " של מערך הלחימה בפקע''ר, ותכשיר ותאמן את מסגרות פקע''ר בסדיר ובמיל' בתחומי החילוץ והאב''כ.", "complex-text28"], 
    el7: ["div", "", "", "מפקדת החטיבה תשמש כמפקדה משימתית בחירום ובתוך כך תפעל באירועי חילוץ והצלה בכל זירת המלחמה, לרבות מחוץ לגבולות מדינת ישראל ותפקד על מבצעים במרחב האזרחי ברגיעה ובלחימה.", "main-roles"], 
    img8: ["assets/images/arrow.svg", "roles-next-arrow", "next-arrow", "", "main-roles"],
    evLis9: ["roles-next-arrow", "click", "nextPage"]
}

const page31 = {
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
    img34: ["assets/images/arrow.svg", "roles-next-arrow", "next-arrow", "", "main-roles"],
    evLis35: ["roles-next-arrow", "click", "nextPage"]
}

const page32 = {
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
    img28: ["assets/images/arrow.svg", "roles-next-arrow", "next-arrow", "", "main-roles"],
    evLis29: ["roles-next-arrow", "click", "nextPage"]
}

const page33 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "title", "", "תפקידים מרכזיים", "main-roles"],
    el3: ["div", "subtitle", "", "מפקדה משימתית- טורקיה", "main-roles"], 
    vid4: ["https://www.youtube.com/embed/UizPszhEIcM?autoplay=1&mute=1", "420", "315", "turkey-mission-video", "height: auto; display: block; position: absolute; top: 8rem; width: 31rem; height: 16rem; left: 50%; transform: translateX(-50%);","main"],
    img5: ["assets/images/arrow.svg", "roles-next-arrow", "next-arrow", "", "main-roles"],
    evLis6: ["roles-next-arrow", "click", "nextPage"]
}

const page34 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "title", "", "תפקידים מרכזיים", "main-roles"],
    el3: ["div", "subtitle", "", "מפקדה משימתית- קורונה", "main-roles"], 
    el4: ["div", "roles-text", "", "עם פרוץ מגפת הקורונה, חטיבת החילוץ לקחה חלק מרכזי במאמצי הסיוע וההתמודדות עם המשבר הלאומי בכל רחבי הארץ.\nעיקרי המשימות אשר החטיבה לקחה בהן חלק כ'מפקדה משימתית':\nסיוע למשרד הבריאות ולרשויות המקומיות לקיים הסברה ממוקדת, להוציא חולים, להגן על אוכלוסיות בסיכון ולהבטיח את אספקת השירותים החיוניים תוך שימור המענה לרשות בהתפרצות על מנת להציל חיים ולאפשר את המשך תפקוד המשק תחת הגבלות הקורונה.", "main-roles"],
    img5: ["assets/images/corona-img.JPG", "", "roles-img", "", "main-roles"],
    img6: ["assets/images/arrow.svg", "roles-next-arrow", "next-arrow", "", "main-roles"],
    evLis7: ["roles-next-arrow", "click", "nextPage"]
}

const page35 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "title", "", "תפקידים מרכזיים", "main-roles"],
    el3: ["div", "subtitle", "", "חילוץ בעורף", "main-roles"], 
    el4: ["div", "roles-text", "", "גדודי החטיבה הינם הגוף הסדיר בעל כשירות החילוץ הגבוהה ביותר, המחלצים ערוכים לביצוע פעולות חילוץ במתאר הרס מלחמתי בתוך שטח מדינת ישראל (כתוצאה מפגיעת רקטה לדוגמה), אסונות טבע וכשלים הנדסיים כל זאת במטרה להציל חיים.", "main-roles"],
    func5: "createImgCarousel",
    img6: ["assets/images/arrow.svg", "roles-next-arrow", "next-arrow", "", "main-roles"],
    evLis7: ["roles-next-arrow", "click", "nextPage"]
}

const page36 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "title", "", "תפקידים מרכזיים", "main-roles"],
    el3: ["div", "subtitle", "", "חילוץ בסיוע לתמרון", "main-roles"], 
    el4: ["div", "roles-text", "", "לאור מאפייני הלחימה במרחב התמרון (בשטח מדינת האויב), המאופיינים במרחב בנוי רווי מטענים ותשתיות תת קרקע ממולכדות, נדרש מענה מבצעי לאיום פגיעה בכוחותינו לאור קריסת מבנה או חלל תת קרקע.\nהכוח שמוכשר לתת מענה בפעולות חילוץ של כוחות מתמרנים של צה''ל מהריסות מבנים במרחב הלחימה, הינם לוחמי החילוץ של חטיבת החילוץ וההדרכה.", "main-roles"],
    vid5: ["https://www.youtube.com/embed/ARUP-IxuH_g?autoplay=1&mute=1", "420", "315", "building-collapse-video", "height: auto; display: block; position: absolute; top: 8rem; width: 20rem; height: 13rem; left: 5rem;","main"],
    img6: ["assets/images/arrow.svg", "roles-next-arrow", "next-arrow", "", "main-roles"],
    evLis7: ["roles-next-arrow", "click", "nextPage"]
}

const page37 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "title", "", "תפקידים מרכזיים", "main-roles"],
    el3: ["div", "subtitle", "", "חילוץ בסיוע לתמרון", "main-roles"], 
    el4: ["div", "roles-text", "", "בעת תמרון בשטח אויב קיימת סכנה להתמוטטות מבנה על כוחותינו.\nתרחיש זה שונה בתכלית מתרחיש התמוטטות בעורף, מכיוון שאין באפשרות ארגוני החירום להגיע לאירוע.\nבמלחמה, גדודי החטיבה יצוותו לאוגדות מתמרנות בתצורת צק''פים (צוותי קרב פלוגתיים) אשר יתנו מענה לאירועי חילוץ של כוחותינו בשטח האויב.", "main-roles"],
    vid5: ["https://www.youtube.com/embed/MHfaOD0cDe8?autoplay=1&mute=1", "420", "315", "80-days-video", "height: auto; display: block; position: absolute; top: 8rem; width: 20rem; height: 13rem; left: 5rem;","main"],
    img6: ["assets/images/arrow.svg", "roles-next-arrow", "next-arrow", "", "main-roles"],
    evLis7: ["roles-next-arrow", "click", "nextPage"]
}

const page38 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "title", "", "תפקידים מרכזיים", "main-roles"],
    el3: ["div", "subtitle", "", "אב''כ", "main-roles"], 
    el4: ["div", "roles-text", "", "לגדודי החטיבה כשירות לטפל באירועים כימיים בעורף, טיהור המוקד הנגוע ופינוי האוכלוסייה עפ''י צורך.\nהלוחמים והלוחמות בגדוד מתמקצעים ביכולות השונות הנדרשות לטיפול באירוע כה מורכב: גילוי וזיהוי מוקד הזיהום, טיהור השטח הנגוע, טיהור בני אדם וכלי רכב היוצאים מהאזור הנגוע ועוד. כל זאת על מנת שיוכלו לפעול ביעילות ולהציל חיים בזמן הקצר ביותר.", "main-roles"],
    vid5: ["https://www.youtube.com/embed/3HZRBKBRkHE?autoplay=1&mute=1", "420", "315", "abach-video", "height: auto; display: block; position: absolute; top: 8rem; width: 20rem; height: 13rem; left: 5rem;","main"],
    img6: ["assets/images/arrow.svg", "roles-next-arrow", "next-arrow", "", "main-roles"],
    evLis7: ["roles-next-arrow", "click", "nextPage"]
}

const page39 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "title", "", "תפקידים מרכזיים", "main-roles"],
    el3: ["div", "subtitle", "", "בט''ש", "main-roles"], 
    el4: ["div", "roles-text", "", "גדודי החטיבה מבצעים תעסוקה מבצעית מלאה באיו''ש ובגבולות המדינה: מעצרי מבוקשים, סיורים, תצפיות, מארבים ועוד…\nהלוחמים והלוחמות מוכשרים ללחימה בשטח פתוח ובשטח בנוי, ביום ובלילה, בכדי להגן על ביטחון מדינת ישראל.", "main-roles"],
    img5: ["assets/images/arrow.svg", "roles-next-arrow", "next-arrow", "", "main-roles"],
    evLis6: ["roles-next-arrow", "click", "nextPage"]
}

const page40 = {
    el1: ["div", "structure-text-page", "structure", "", "page"],
    el2: ["div", "sub-title", "", "מבנה החטיבה ויחידותיה", "structure"]
}

const page41 = {
    
}

let menuOpen = false;
let quesVisited = false;
let currPage = 1;
let currExpShown = "";
let currDefShown = ""; // type string
let complexBranchesVisited = [];
let complexFinishButton = ["button", "next-btn-timeline", "next-btn-14", "סיימתי!", "timeline-text-container"];

window.addEventListener("load", (event) => {
    // document.getElementById("menu-btn").addEventListener("mouseover", showMenu);
    // document.addEventListener("mouseover", (event) => {
        //     if (event.target.classList.contains("colored-text")) {
            //         showDefinition();
            //     }
            // });
            // createScreen(page38);
            // createImgCarousel();
            document.getElementById("menu-btn").addEventListener("click", showMenu);
    document.querySelector(".body-part").addEventListener("click", () => {
        document.querySelector(".nice-nav").classList.add("open");
    })
    document.getElementById("info-btn").addEventListener("click", showInfo);
    document.getElementById("ques-btn").addEventListener("click", showQues);
    // document.getElementById("branches").addEventListener("click", timelineComplexPage);
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
            document.getElementById("ques-container").style.display = "block";
            document.getElementById("ques-content").innerHTML = quesHTMLContent.quesContent;
            document.addEventListener("click", (event) => {
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
            document.getElementById(currObject[1]).style.display = "block";
            console.log("show vid");
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
    newIMG.setAttribute("id", list[1]);
    newIMG.classList.add(list[2]);
    newIMG.setAttribute("title", list[3]);
    document.getElementById(list[4]).appendChild(newIMG);
}

const hativaDetails = {
    el1: ["div", "structure-details", "hativa-details", "", "structure"],
    img2: ["assets/images/close-btn.svg", "close-btn-structure", "close-details-btn", "", "hativa-details"],
    el3: ["div", "title details-title", "", "מפקדת חטיבת החילוץ וההדרכה", "hativa-details"],
    el4: ["div", "details-text", "", "מפקדת החטיבה תשמש כמפקדה משימתית בחירום ובתוך כך תפעל באירועי חילוץ והצלה בכל זירת המלחמה, לרבות מחוץ לגבולות מדינת ישראל ותפקד על מבצעים במרחב האזרחי ברגיעה ובלחימה.", "hativa-details"]
}

const createVideo = (vidList) => {
    let iFrameVideo = document.createElement("iframe");
    iFrameVideo.src = vidList[0];
    iFrameVideo.width = vidList[1];
    iFrameVideo.height = vidList[2];
    iFrameVideo.setAttribute("id", vidList[3]);
    iFrameVideo.style.cssText = vidList[4];
    document.getElementById(vidList[5]).appendChild(iFrameVideo);
}

var createImgCarousel = () => {
    let carouselExampleIndicators = document.createElement("div");
    carouselExampleIndicators.setAttribute("id", "carouselExampleIndicators");
    carouselExampleIndicators.classList.add("carousel", "slide");
    carouselExampleIndicators.setAttribute("data-ride", "carousel");
    document.getElementById("main-roles").appendChild(carouselExampleIndicators);
    let carouselIndicatorsOL = document.createElement("ol");
    carouselIndicatorsOL.setAttribute("id", "carousel-indicators");
    carouselIndicatorsOL.classList.add("carousel-indicators");
    carouselExampleIndicators.appendChild(carouselIndicatorsOL);
    let carouselIndicatorLI1 = document.createElement("li");
    carouselIndicatorLI1.setAttribute("data-target", "#carouselExampleIndicators");
    carouselIndicatorLI1.setAttribute("data-slide-to", "0");
    carouselIndicatorLI1.classList.add("active");
    carouselIndicatorsOL.appendChild(carouselIndicatorLI1);
    let carouselIndicatorLI2 = document.createElement("li");
    carouselIndicatorLI2.setAttribute("data-target", "#carouselExampleIndicators");
    carouselIndicatorLI2.setAttribute("data-slide-to", "1");
    carouselIndicatorsOL.appendChild(carouselIndicatorLI2);
    let carouselIndicatorLI3 = document.createElement("li");
    carouselIndicatorLI3.setAttribute("data-target", "#carouselExampleIndicators");
    carouselIndicatorLI3.setAttribute("data-slide-to", "2");
    carouselIndicatorsOL.appendChild(carouselIndicatorLI3);
    let carouselIndicatorLI4 = document.createElement("li");
    carouselIndicatorLI4.setAttribute("data-target", "#carouselExampleIndicators");
    carouselIndicatorLI4.setAttribute("data-slide-to", "3");
    carouselIndicatorsOL.appendChild(carouselIndicatorLI4);
    let carouselIndicatorLI5 = document.createElement("li");
    carouselIndicatorLI5.setAttribute("data-target", "#carouselExampleIndicators");
    carouselIndicatorLI5.setAttribute("data-slide-to", "4");
    carouselIndicatorsOL.appendChild(carouselIndicatorLI5);
    let carouselInner = document.createElement("div");
    carouselInner.setAttribute("id", "carousel-inner");
    carouselInner.classList.add("carousel-inner");
    carouselExampleIndicators.appendChild(carouselInner);
    let carouselItem1 = document.createElement("div");
    carouselItem1.setAttribute("id", "carousel-item-1");
    carouselItem1.classList.add("carousel-item", "active");
    carouselInner.appendChild(carouselItem1);
    let carouselItem1Img = document.createElement("img");
    carouselItem1Img.src = "assets/images/rescue-carousel-1.jpg";
    carouselItem1Img.classList.add("d-block", "w-100");
    carouselItem1Img.alt = "First slide";
    carouselItem1.appendChild(carouselItem1Img);
    let carouselItem2 = document.createElement("div");
    carouselItem2.setAttribute("id", "carousel-item-2");
    carouselItem2.classList.add("carousel-item");
    carouselInner.appendChild(carouselItem2);
    let carouselItem2Img = document.createElement("img");
    carouselItem2Img.src = "assets/images/rescue-carousel-2.jpg";
    carouselItem2Img.classList.add("d-block", "w-100");
    carouselItem2Img.alt = "Second slide";
    carouselItem2.appendChild(carouselItem2Img);
    let carouselItem3 = document.createElement("div");
    carouselItem3.setAttribute("id", "carousel-item-3");
    carouselItem3.classList.add("carousel-item");
    carouselInner.appendChild(carouselItem3);
    let carouselItem3Img = document.createElement("img");
    carouselItem3Img.src = "assets/images/rescue-carousel-3.jpg";
    carouselItem3Img.classList.add("d-block", "w-100");
    carouselItem3Img.alt = "Third slide";
    carouselItem3.appendChild(carouselItem3Img);
    let carouselItem4 = document.createElement("div");
    carouselItem4.setAttribute("id", "carousel-item-4");
    carouselItem4.classList.add("carousel-item");
    carouselInner.appendChild(carouselItem4);
    let carouselItem4Img = document.createElement("img");
    carouselItem4Img.src = "assets/images/rescue-carousel-4.jpg";
    carouselItem4Img.classList.add("d-block", "w-100");
    carouselItem4Img.alt = "Fourth slide";
    carouselItem4.appendChild(carouselItem4Img);
    let carouselItem5 = document.createElement("div");
    carouselItem5.setAttribute("id", "carousel-item-5");
    carouselItem5.classList.add("carousel-item");
    carouselInner.appendChild(carouselItem5);
    let carouselItem5Img = document.createElement("img");
    carouselItem5Img.src = "assets/images/rescue-carousel-5.jpg";
    carouselItem5Img.classList.add("d-block", "w-100");
    carouselItem5Img.alt = "Fifth slide";
    carouselItem5.appendChild(carouselItem5Img);
    let carouselControlPrev = document.createElement("a");
    carouselControlPrev.setAttribute("id", "carousel-control-prev");
    carouselControlPrev.classList.add("carousel-control-prev");
    carouselControlPrev.href = "#carouselExampleIndicators";
    carouselControlPrev.setAttribute("role", "button");
    carouselControlPrev.setAttribute("data-slide", "prev");
    carouselExampleIndicators.appendChild(carouselControlPrev);
    let carouselControlPrevIcon = document.createElement("span");
    carouselControlPrevIcon.classList.add("carousel-control-prev-icon");
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
    carouselExampleIndicators.appendChild(carouselControlNext);
    let carouselControlNextIcon = document.createElement("span");
    carouselControlNextIcon.classList.add("carousel-control-next-icon");
    carouselControlNextIcon.setAttribute("aria-hidden", "true");
    carouselControlNext.appendChild(carouselControlNextIcon);
    let srOnlyNext = document.createElement("span");
    srOnlyNext.classList.add("sr-only");
    srOnlyNext.innerText = "Next";
    carouselControlNext.appendChild(srOnlyNext);
}

const createHativaDetails = () => {
    let detailsContainer = ["div", "structure-details", "hativa-details", "", "structure"];
    createTextElement(detailsContainer);
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
        updatePage();
    }
}

var updatePage = () => {
    console.log(currPage);
}