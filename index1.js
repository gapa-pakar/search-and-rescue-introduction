const quesHTMLContent = {
    quesContent: '<div id="ques-open-content" class="content-container"><div id="ques-open-content" class="text-container"><p class="title">על הלומדה:</p><div class="line">מטרת הלומדה:</div><div class="line">הצגת חטיבת החילוץ וההדרכה- היסטוריה, מבנה ותפקידים.</div><div class="line">הלומדה כוללת טקסט וגם סרטונים, לפעמים יחד ולפעמים לחוד.</div><div class="line">הסרטונים בלומדה יתחילו באופן אוטומטי.</div><div class="line"><span>לאורך הלומדה יופיעו </span><span id="def1" class="colored-text">מילים בצבע</span><span> אשר לאחר לחיצה עליהן יופיע ההסבר למושג.</span></div><div class="line">כמו כן, יופיעו קרוסלות של תמונות או טקסט. על מנת לצפות בהמשך הקרוסלה, לחצו על אחד החצים לפחות פעם אחת!</div><div class="line">בנוסף, הכפתורים האלו יופיעו לכל אורך הלומדה. לחצו עליהם כדי לצפות בשימוש שלהם:</div></div><div id="buttons"><img src="assets/images/menu-btn.svg" alt="כפתור התפריט" id="exmp-menu-btn" title="כפתור התפריט" class="example-btn"><img src="assets/images/info-btn.svg" alt="כפתור אודות" id="exmp-info-btn" title="כפתור אודות" class="example-btn"><img src="assets/images/ques-btn.svg" alt="כפתור המידע" id="exmp-ques-btn" title="כפתור המידע" class="example-btn"></div><span class="error" id="menu-error" style="display: none;">אופס, עליכם לעבור על כל הכפתורים!</span></div>',
    exmpMenuContent: '</div><div id="exmp-menu-content" class="text-container"><div style="display: flex; align-items: center;"><img src="assets/images/menu-btn.svg" alt="כפתור התפריט" style="width: 2rem; margin-left: 0.5rem;"><span class="title">כפתור התפריט</span></div><div>כפתור זה יציג את ראשי הפרקים, אשר בלחיצה עליהם יוצגו תתי הנושאים בפרק.</div><div><span class="bold-txt">שימו לב! </span><span>לא ניתן יהיה לדלג על פרקים.</span></div><div>ניתן לעבור אחורה וקדימה בעזרת התפריט רק בין פרקים שכבר נצפו.</div></div>',
    exmpInfoContent: '</div><div id="exmp-info-content" class="text-container"><div style="display: flex; align-items: center;"><img src="assets/images/info-btn.svg" alt="כפתור אודות" style="width: 2rem; margin-left: 0.5rem;"><p class="title">כפתור אודות</p></div><div>כפתור זה יציג את הקרדיטים ללומדה בהיטבי הפיתוח, התוכן, העיצוב, הגרפיקות וכן בעלי תפקידים נוספים אשר לקחו חלק בתהליך.</div></div>',
    exmpQuesContent: '</div><div id="exmp-ques-content" class="text-container"><div style="display: flex; align-items: center;"><img src="assets/images/ques-btn.svg" alt="כפתור המידע" style="width: 2rem; margin-left: 0.5rem;"><p class="title">כפתור המידע</p></div><div>כפתור זה יציג את כל התזכורות שמופיעות בעמודים הקודמים.</div><div>אם תרצו להיזכר במשהו, כפתור זה יהיה נגיש לכם לכל אורך הלומדה עם ההסברים הללו.</div></div>'
};

const definitionsText = {
    def1: ["כאן יופיע ההסבר למושג."],
    def2: ["מסגרת ארגונית בעורף הממונה על מרחב גזרתי בגזרת פיקוד העורף, המחוז כפוף ישירות למפקדת פיקוד העורף."],
    def3: ["נפה= מסגרת מרחבית של מסגרות ושל כוחות מילואים הכפופה למחוז ומופקדת על פעולת ההגנה האזרחית במרחבה בשעת חירום.\nהנפה הסדירה= המפקדה הקודמת לחטיבה אשר הורכבה מארבעה גדודי חילוץ והצלה סדירים, בסיס הכשרות ובסיס הכשרת מפקדים. הנפה הסדירה הייתה המפקדה היחידה המורכבת ממשרתי סדיר ועל כן שמה."],
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
// video:  width, height, class, id, parent element id, src
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
    evLis7: ["re-do-button", "click", "restert"]
}

var page2 = {
    el1: ["div", "open-text", "page3text", "", "page"],
    el2: ["div", "", "", "חטיבת החילוץ וההדרכה הינה החטיבה הסדירה היחידה בפיקוד העורף אשר בנוי ברובו מאנשי מילואים.\nעל מנת להבין לעומק את ייחודיות החטיבה, נעמיק בדרך שהחטיבה עברה מאז ועד היום- מ'פלח''ץ' לחטיבת החילוץ וההדרכה.", "page3text"],
    el3: ["button", "next-btn-timeline", "next-btn-3", "בואו נתחיל!", "page3text"]
}

var page3 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    vid2: ["420", "315", "enlistingvid", "enlistingvid", "timeline-text-container", "assets/videos/enlisting.mp4"]
}

var page4 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "1992- הקמת פיקוד העורף", "timeline-text-container"],
    el3: ["div", "", "", "פיקוד העורף הוקם בשנת 1992 לאחר מלחמת המפרץ הראשונה בה האיום על העורף העלה את הצורך בהתגוננות אזרחית סדורה. \nבן גוריון אמר בשנת 1948: ''ביום מן הימים, מה שקרוי העורף יכריע לא פחות מהחזית. לא נוכל לעמוד במלחמה באמצעים צבאיים בלבד''. \nבמקרה כזה, ישחרר פיקוד העורף את אלופי הפיקודים האחרים (צפון, מרכז, דרום) מדאגה לעורף, ויאפשר להם להתרכז בצרכים המבצעיים בחזית.", "timeline-text-container"],
    el4: ["button", "next-btn-timeline", "next-btn-4", "הבנתי!", "timeline-text-container"]
}

var page5 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2003- הקמת פלוגת החילוץ הראשונה- פלוגת 'שביט'", "timeline-text-container"],
    el3: ["div", "", "", "ממלחמת לבנון הראשונה ועד לאחר מלחמת המפרץ הורכבו פלוגות החילוץ וההצלה מאנשי מילואים בעלי ידע אזרחי הקשור בבינוי.\nבמלחמת המפרץ הבינו שיש צורך בגוף סדיר שיהיה כונן לאירועי חילוץ בעורף, והתקבלה ההחלטה להקים פלוגת חילוץ סדירה ראשונה, פלוגת 'שביט'.", "timeline-text-container"],
    el4: ["button", "next-btn-timeline", "next-btn-5", "בואו נמשיך!", "timeline-text-container"]
}

var page6 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2004- הקמת פלוגת 'חץ' ופלוגת 'רותם'", "timeline-text-container"],
    el3: ["div", "", "", "2004- הקמת שתי פלוגות חילוץ נוספות- פלוגת 'חץ' ופלוגת 'רותם'.\nמשימת הבט''ש של הפלוגות האלו הייתה אבטחת בתי כלא בכלא 'עופר' ובכלא 'מגידו' בעוד שמשימתם האופרטיבית הייתה חילוץ והצלה.", "timeline-text-container"],
    el4: ["div", "bold-txt", "", "המושג 'פלח''ץ' מתייחס לתקופה שבה היו קיימות רק פלוגות חילוץ ללא שייכות לגדוד ולחטיבה.", "timeline-text-container"],
    el5: ["button", "next-btn-timeline", "next-btn-6", "המשך", "timeline-text-container"]
}

var page7 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2008- איחוד פלוגות החילוץ והקמת גדוד שחר", "timeline-text-container"],
    el3: ["div", "", "", "כאמור, בשלב זה ישנן 3 פלוגות חילוץ סדירות. \nלאחר מלחמת לבנון השנייה הוחלט לחבר את הפלוגות לכדי גדוד בעל מפקדה אשר תבנה ותפעיל את הכוח. \nאיחוד הפלוגות תחת מפקדה אחת אפשר יצירת סטנדרט אחיד ושפה משותפת.\nבשנת 2008, אוחדו שלושת פלוגות החילוץ והוקם הגדוד הראשון בחטיבה- גדוד 'שחר'.\nהגדוד החל להתקדם גם בהיבטים המבצעיים, החל מתחילת תעסוקות מבצעיות ביהודה ושומרון ועד כניסה לעזה כצוותי פריצה וצוותי חילוץ בעת הצורך.", "timeline-text-container"],
    el4: ["div", "", "complex-text7", "", "timeline-text-container"],
    el5: ["span", "", "", "בתחילת דרכו גדוד 'שחר' היה כפוף ", "complex-text7"],
    el6: ["span", "colored-text", "def2", "למחוז", "complex-text7"],
    el7: ["span", "", "", " מרכז, אשר במקביל הורכב מגדודי מילואים.", "complex-text7"],
    img8: ["assets/images/gdud-shahar.svg", "גדוד שחר", "", "timeline-symbol-img", "", "timeline-text-container"],
    el9: ["button", "next-btn-timeline", "next-btn-7", "הבנתי", "timeline-text-container"]
}

var page8 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2009- הקמת גדוד קדם", "timeline-text-container"],
    el3: ["div", "", "", "2009- הוחלט להרחיב את מערך החילוץ הסדיר ולהקים גדוד נוסף בשם גדוד 'קדם' ולו 3 פלוגות\n'קרן', 'דוד' ו'מגן'.", "timeline-text-container"],
    img4: ["assets/images/gdud-kedem.svg", "גדוד קדם", "", "timeline-symbol-img", "", "timeline-text-container"],
    el5: ["button", "next-btn-timeline", "next-btn-8", "אני רוצה להמשיך!", "timeline-text-container"]
}

var page9 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2011- המעבר ממגל לפקע''ר", "timeline-text-container"],
    el3: ["div", "", "", "בשנת 2011 פיקוד העורף קיבל את האחריות על מחנה זיקים שעד אז, היה בכפיפות מג''ל.\nכלל המתגייסים ללוחמה בפיקוד העורף בין השנים 2009-2011 עברו הכשרה אשר הייתה מחולקת לשני חלקים: סגל מגל העביר למתגייסים החדשים את פרק הטירונות, ואת נושאי העורף העבירו מפקדים מפיקוד העורף. \nהידעת? במחזור הראשון שהתגייס ללוחמה בפיקוד העורף היו 80 חיילים בפלוגה. לצורך השוואה- במחזור הגיוס מרץ 2024, היו כ140 חיילים בפלוגה! ", "timeline-text-container"],
    img4: ["assets/images/magal.png", "מערך מגל", "", ["timeline-symbol-img", "shield-sym"], "", "timeline-text-container"],
    el5: ["button", "next-btn-timeline", "next-btn-9", "אני רוצה להמשיך!", "timeline-text-container"]
}

var page10 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2012- הקמת גדוד תבור", "timeline-text-container"],
    el3: ["div", "", "", "2012- הקמת גדוד 'תבור' אשר בתוכו שלוש פלוגות:\n'תבל', 'ברק', 'ראם'.\nבשנת 2020 הוקמה בתוך הגדוד פלוגה נוספת בשם 'ונוס'.", "timeline-text-container"],
    img4: ["assets/images/gdud-tavor.svg", "גדוד תבור", "", "timeline-symbol-img", "", "timeline-text-container"],
    el5: ["button", "next-btn-timeline", "next-btn-10", "בואו נמשיך!", "timeline-text-container"]
}

var page11 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2012- הקמת גדוד רם", "timeline-text-container"],
    el3: ["div", "", "", "2012- גדוד נ''מ (נגד מטוסים) של חיל האוויר ''סטינגר'' הוסב לפיקוד העורף. \nהוחלט כי הגדוד יעבור לפיקוד העורף לאחר סגירת הגדוד בחיל האוויר בשל חוסר צורך מבצעי ביחידה.\nרוב עיסוקו של הגדוד בשנותיו האחרונות בחיל האוויר היה תע''מ ביבשה. \nהשם שנבחר לגדוד החדש בפיקוד העורף הוא גדוד 'רם' אשר בתוכו שלוש פלוגות: 'רמון', 'מצדה', 'ארבל'- שמות הפלוגות ששונו ממושגים של חיל האוויר למושגים של פיקוד העורף. ", "timeline-text-container"],
    img4: ["assets/images/gdud-ram.svg", "גדוד רם", "", "timeline-symbol-img", "", "timeline-text-container"],
    el5: ["button", "next-btn-timeline", "next-btn-11", "הבנתי!", "timeline-text-container"]
}

var page12 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2013- הקמת הנפה הסדירה", "timeline-text-container"],
    el3: ["div", "", "complex-text11", "", "timeline-text-container"],
    el4: ["span", "", "", "2013- ארבעת הגדודים הסדירים היו כפופים למחוז ירושלים והמרכז עד שבשנת 2013 הוחלט להקים ", "complex-text11"],
    el5: ["span", "colored-text", "def3", "נפה סדירה", "complex-text11"],
    el6: ["span", "", "", " בפיקוד העורף אשר אליה יהיו כפופים הגדודים הסדירים של הפיקוד.", "complex-text11"],
    el7: ["div", "", "", "ההחלטה התקבלה בעקבות המורכבות של המחוז לתת קשב גם לגדודי המילואים וגם לגדודים הסדירים.\nבנוסף לארבעת הגדודים הוכפפו לנפה בא''ח העורף וענף מפקדים (עליהם נפרט בהמשך).", "timeline-text-container"],
    img8: ["assets/images/hativa.svg", "סמל חטיבה", "", ["timeline-symbol-img", "shield-sym"], "", "timeline-text-container"],
    el9: ["button", "next-btn-timeline", "next-btn-12", "הבנתי", "timeline-text-container"],
    evLis10: ["next-btn-12", "click", "nextPage"]
}

var page13 = {
    el1: ["div", "timeline-opacity1", "timeline-text-container", "", "page"], 
    el2: ["div", ["title", "page13-title"], "timeline-title", "2013- הקמת הנפה הסדירה", "timeline-text-container"],
    vid3: ["420", "315", "nafavid", "nafavid", "timeline-text-container", "assets/videos/nafa-sdira.mp4"]
}

var page14 = {
    el1: ["div", "timeline-opacity1", "timeline-text-container", "", "page"],
    el2: ["div", "sub-title", "sub-title", "וכעת נעבור לזרוע השנייה שמרכיבה את חטיבת החילוץ וההדרכה:\nבה''ד 16", "timeline-text-container"],
    el3: ["button", "next-btn-timeline", "next-btn-14", "קדימה!", "timeline-text-container"],
    evLis4: ["next-btn-14", "click", "nextPage"]
}

var page15 = {
    // fix year text
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "1952- בה''ד 16", "timeline-text-container"],
    el3: ["div", "", "", "מתוקף חוק הג''א, היו בבה''ד 16 ענפים אשר היו אמונים על הכשרת מקצועות העורף לאוכלוסיות השונות.\nבה''ד 16, ובשמו השני- ''המרכז הלאומי לחילוץ, אב''כ והתגוננות אזרחית'' ישב בצריפין והיה בנוי משלושה ענפים ומטה בה''ד:", "timeline-text-container"],
    el4: ["div", "", "branches", "", "timeline-text-container"],
    el5: ["div", "", "profession-branch", "", "branches"],
    img6: ["assets/images/profession-branch.png", "ענף מקצועות", "profession-branch-img", "branch-img", "", "profession-branch"],
    el7: ["div", "branch-text", "profession-branch-text", "ענף מקצועות", "profession-branch"],
    el8: ["div", "", "command-branch", "", "branches"],
    el9: ["div", "branch-text", "command-branch-text", "ענף מפקדות", "command-branch"],
    el10: ["div", "", "emi-branch", "", "branches"],
    img11: ["assets/images/emi-branch.png", "ענף אימון יחידות", "emi-branch-img", "branch-img", "", "emi-branch"],
    el12: ["div", "branch-text", "emi-branch-text", "ענף אימון יחידות", "emi-branch"],
    el13: ["div", "", "branch-explaination", "עברו על כל היחידות כדי להמשיך בלומדה", "timeline-text-container"],
    evLis14: ["branches", "click", "timelineComplexPage"]
}

var page16 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2016- איחוד בה''ד 16 והנפה הסדירה", "timeline-text-container"],
    el3: ["div", "", "complex-text15", "", "timeline-text-container"],
    el4: ["span", "", "", "2016- איחוד בה''ד 16 עם הנפה הסדירה והקמת ", "complex-text15"],
    el5: ["strong", "", "", "חטיבת החילוץ וההדרכה.", "complex-text15"],
    el6: ["div", "", "pin-container", "", "timeline-text-container"],
    img6: ["assets/images/new-fighter.svg", "סיכת לוחם חדשה", "", ["timeline-symbol-img", "fighter-pin"], "", "pin-container"],
    img7: ["assets/images/old-fighter.svg", "סיכת לוחם ישנה", "", ["timeline-symbol-img", "fighter-pin"], "", "pin-container"],
    el8: ["button", "next-btn-timeline", "next-btn-16", "המשך!", "timeline-text-container"]
}

var page17 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"], 
    el2: ["div", "con-sen", "", "עכשיו, לאחר שלמדנו על הדרך שעברה החטיבה עד היום, נעבור ל:", "main-roles"],
    el3: ["div", "sub-title", "", "ייעוד ותפקידי חטיבת החילוץ וההדרכה", "main-roles"],
    el4: ["button", "next-btn-timeline", "next-btn-17", "קדימה!", "main-roles"],
    evLis5: ["next-btn-17", "click", "nextPage"]
}

var page18 = {
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

var page19 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "", "info-roles", "", "main-roles"],
    el3: ["div", "title", "", "תפקידי החטיבה בשגרה ובחירום", "info-roles"],
    el4: ["div", "info-carousel", "info-carousel", "", "info-roles"],
    img5: ["assets/images/arrow.svg", "המשך", "roles-next-arrow", "next-arrow", "", "main-roles"],
    el6: ["div", "error", "rolesErrorText", "עליך לעבור על כל המידע בקרוסלות על מנת להמשיך", "main-roles"],
    func7: ["rolesCarousels"]
}

var page20 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "title", "", "תפקידים מרכזיים", "main-roles"],
    el3: ["div", "subtitle", "", "מפקדה משימתית- טורקיה", "main-roles"], 
    vid4: ["420", "315", "turkeyvid", "turkeyvid", "main-roles", "assets/videos/turkey-mission.mp4"],
    img5: ["assets/images/arrow.svg", "המשך", "roles-next-arrow", "next-arrow", "", "main-roles"]
}

var page21 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "title", "", "תפקידים מרכזיים", "main-roles"],
    el3: ["div", "subtitle", "", "מפקדה משימתית- קורונה", "main-roles"], 
    el4: ["div", "roles-text", "", "עם פרוץ מגפת הקורונה, פיקוד העורף ובתוכו החטיבה לקחו חלק משמעותי במאמצי הסיוע וההתמודדות עם המשבר הלאומי בכל רחבי הארץ.\nעיקרי המשימות אשר החטיבה לקחה בהן חלק כ'מפקדה משימתית': ", "main-roles"],
    el5: ["ol", "roles-text", "corona-list", "", "main-roles"],
    el6: ["li", "roles-text", "", "סיוע למשרד הבריאות ולרשויות המקומיות בקיום הסברה ממוקדת ומותאמת אוכלוסיות", "corona-list"],
    el7: ["li", "roles-text", "", "סיוע בפינוי חולי קורונה לבתי חולים ", "corona-list"],
    el8: ["li", "roles-text", "", "סיוע בהגנה ושמירה על אוכלוסיות בסיכון", "corona-list"],
    el9: ["div", "roles-text", "", "כל זאת על מנת להציל חיים ולאפשר את המשך תפקוד המשק תחת הגבלות הקורונה.", "main-roles"],
    img10: ["assets/images/polaroid.svg", "רקע", "", "polaroid", "", "main-roles"],
    img11: ["assets/images/tape.svg", "עיצוב", "", "tape", "", "main-roles"],
    img12: ["assets/images/corona-img.JPG", "תמונת קורונה", "", "roles-img", "", "main-roles"],
    img13: ["assets/images/arrow.svg", "המשך", "roles-next-arrow", "next-arrow", "", "main-roles"],
    evLis14: ["roles-next-arrow", "click", "nextPage"]
}

var page22 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "title", "", "תפקידים מרכזיים", "main-roles"],
    el3: ["div", "subtitle", "", "חילוץ בעורף", "main-roles"], 
    el4: ["div", "roles-text", "", "גדודי החטיבה הינם הגוף הסדיר בעל כשירות החילוץ הגבוהה ביותר. המחלצים ערוכים לביצוע פעולות חילוץ במתאר הרס מלחמתי בתוך שטח מדינת ישראל (כתוצאה מפגיעת רקטה לדוגמה), אסונות טבע וכשלים הנדסיים כל זאת במטרה להציל חיים.", "main-roles"],
    img5: ["assets/images/polaroid.svg", "רקע", "", "polaroid", "", "main-roles"],
    img6: ["assets/images/tape.svg", "עיצוב", "", "tape", "", "main-roles"],
    img7: ["assets/images/arrow.svg", "המשך", "roles-next-arrow", "next-arrow", "", "main-roles"],
    evLis8: ["roles-next-arrow", "click", "nextPage"],
    func9: ["rescueImgCarousel"]
}

var page23 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "title", "", "תפקידים מרכזיים", "main-roles"],
    el3: ["div", "subtitle", "", "חילוץ בסיוע לתמרון", "main-roles"], 
    el4: ["div", "roles-text", "", "לאור מאפייני הלחימה במרחב התמרון (בשטח מדינת האויב), המאופיינים במרחב בנוי רווי מטענים ותשתיות תת קרקע ממולכדות, נדרש מענה מבצעי לאיום פגיעה בכוחותינו לאור קריסת מבנה או חלל תת קרקע.\nהכוח שמוכשר לתת מענה בפעולות חילוץ של כוחות מתמרנים של צה''ל מהריסות מבנים במרחב הלחימה, הינם לוחמי החילוץ של חטיבת החילוץ וההדרכה.", "main-roles"],
    vid5: ["420", "315", "buildingvid", "buildingvid", "main-roles", "assets/videos/building-collapse.mp4"],
    img6: ["assets/images/arrow.svg", "המשך", "roles-next-arrow", "next-arrow", "", "main-roles"]
}

var page24 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "title", "", "תפקידים מרכזיים", "main-roles"],
    el3: ["div", "subtitle", "", "חילוץ בסיוע לתמרון", "main-roles"], 
    el4: ["div", "roles-text", "", "בעת תמרון בשטח אויב קיימת סכנה להתמוטטות מבנה על כוחותינו.\nתרחיש זה שונה בתכלית מתרחיש התמוטטות בעורף, מכיוון שאין באפשרות ארגוני החירום להגיע לאירוע.\nבמלחמה, גדודי החטיבה יצוותו לאוגדות מתמרנות בתצורת צק''פים (צוותי קרב פלוגתיים) אשר יתנו מענה לאירועי חילוץ של כוחותינו בשטח האויב.", "main-roles"],
    vid5: ["420", "315", "daysvid", "daysvid", "main-roles", "assets/videos/80-days.mp4"],
    img6: ["assets/images/arrow.svg", "המשך", "roles-next-arrow", "next-arrow", "", "main-roles"]
}

var page25 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "title", "", "תפקידים מרכזיים", "main-roles"],
    el3: ["div", "subtitle", "", "אב''כ", "main-roles"], 
    el4: ["div", "roles-text", "", "לגדודי החטיבה כשירות לטפל באירועים כימיים בעורף, טיהור המוקד הנגוע ופינוי האוכלוסייה עפ''י צורך.\nהלוחמים והלוחמות בגדוד מתמקצעים ביכולות השונות הנדרשות לטיפול באירוע כה מורכב: גילוי וזיהוי מוקד הזיהום, טיהור השטח הנגוע, טיהור בני אדם וכלי רכב היוצאים מהאזור הנגוע ועוד. כל זאת על מנת שיוכלו לפעול ביעילות ולהציל חיים בזמן הקצר ביותר.", "main-roles"],
    vid5: ["420", "315", "abachvid", "abachvid", "main-roles", "assets/videos/abach.mp4"],
    img6: ["assets/images/arrow.svg", "המשך", "roles-next-arrow", "next-arrow", "", "main-roles"],
    evLis7: ["roles-next-arrow", "click", "nextPage"]
}

var page26 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "title", "", "תפקידים מרכזיים", "main-roles"],
    el3: ["div", "subtitle", "", "בט''ש", "main-roles"], 
    el4: ["div", "roles-text", "", "גדודי החטיבה מבצעים תעסוקה מבצעית מלאה באיו''ש ובגבולות המדינה: מעצרי מבוקשים, סיורים, תצפיות, מארבים ועוד…\nהלוחמים והלוחמות מוכשרים ללחימה בשטח פתוח ובשטח בנוי, ביום ובלילה, בכדי להגן על ביטחון מדינת ישראל.", "main-roles"],
    img5: ["assets/images/arrow.svg", "המשך", "roles-next-arrow", "next-arrow", "", "main-roles"],
    vid6: ["420", "315", "batashvid", "batashvid", "main-roles", "assets/videos/batash.mp4"]
}

var page27 = {
    el1: ["div", "structure-text-page", "structure", "", "page"],
    el2: ["div", "con-sen", "", "וכעת נעבור לסקירת:", "structure"],
    el3: ["div", "sub-title", "", "מבנה החטיבה ויחידותיה", "structure"],
    el4: ["button", "next-btn-timeline", "next-btn-17", "קדימה!", "structure"],
    evLis5: ["next-btn-17", "click", "nextPage"]
}

var page28 = {
    el1: ["div", "structure-text-page", "structure", "", "page"],
    el2: ["div", "", "structure-tree", "", "structure"],
    img3: ["assets/images/structure-tree.svg", "עץ מבנה חטיבה", "structure-tree-img", "structure-tree-img", "", "structure-tree"],
    el4: ["div", "explain-structure", "explain-structure", "עברו על כל היחידות כדי לסיים את הלומדה", "structure"],
    // el32: ["button", "next-btn-timeline", "finished-structure", "סיימתי!", "structure"],
    evLis5: ["structure-tree-img", "click", "openDetails"],
    // evLis34: ["finished-structure", "click", "finishScreen"]
}

const hativaDetails = {
    el1: ["div", "structure-details", "hativa-details", "", "page"],
    img2: ["assets/images/close-btn.svg", "X", "close-btn-structure", "close-details-btn", "", "hativa-details"],
    el3: ["div", ["title", "details-title"], "", "מפקדת חטיבת החילוץ וההדרכה", "hativa-details"],
    img4: ["assets/images/hativa.svg", "חטיבת החילוץ וההדרכה", "", "details-img", "", "hativa-details"],
    el5: ["div", ["details-text", "hativa-text"], "", "מפקדת החטיבה תשמש כמפקדה משימתית בחירום ובתוך כך תפעל באירועי חילוץ והצלה בכל זירת המלחמה, לרבות מחוץ לגבולות מדינת ישראל ותפקד על מבצעים במרחב האזרחי ברגיעה ובלחימה.", "hativa-details"],
    evLis6: ["close-btn-structure", "click", "closeDetails"]
}

const bahDetails = {
    el1: ["div", "structure-details", "bah-details", "", "page"],
    img2: ["assets/images/close-btn.svg", "X", "close-btn-structure", "close-details-btn", "", "bah-details"],
    el3: ["div", ["title", "details-title"], "", "בא''ח העורף", "bah-details"],
    img4: ["assets/images/bah.svg", "בא''ח העורף", "", "details-img", "", "bah-details"],
    el5: ["div", "details-conteiner", "details-conteiner", "", "bah-details"],
    el6: ["div", "subtitle", "", "הכר את בא''ח העורף", "details-conteiner"],
    el7: ["div", "details-text", "", "בסיס אימונים חטיבתי להכשרת לוחמי החטיבה למקצועות החילוץ, אב''כ ולוחמה.", "details-conteiner"],
    el8: ["div", "subtitle", "", "מגמות הבא''ח והכשרות", "details-conteiner"],
    el9: ["ul", "details-list", "details-list", "", "details-conteiner"],
    el10: ["li", "", "", "מכין לוחמות.", "details-list"],
    el11: ["li", "", "", "אימון יסוד - הכשרת הלוחם ברמת ''כושר לחימה''- בסיסי ב'.", "details-list"],
    el12: ["li", "", "", "אימון מתקדם- הכשרת הלוחם ללוחמה ברמת ''כושר לחימה- מתקדם א'', ולחילוץ ברמת מחלץ 06.", "details-list"],
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
    el3: ["div", ["title", "details-title"], "", "בא''פ העורף", "baf-details"],
    img4: ["assets/images/baf.svg", "בא''פ העורף", "", "details-img", "", "baf-details"],
    el5: ["div", "details-conteiner", "details-conteiner", "", "baf-details"],
    el6: ["div", "subtitle", "", "הכר את בא''פ העורף", "details-conteiner"],
    el7: ["div", "details-text", "details-text", "", "details-conteiner"],
    el8: ["span", "", "", "בסיס אימונים פיקודי המתמחה בהובלה וחניכה של אימוני גדודי מילואים בתחומי חילוץ, אב''כ וחי''ר קל, חניכת גדודי החטיבה הסדירים באימונים בין קווים ותו''כ תע''מ והובלת קורסים והכשרות בתחומי חילוץ, רפואה, ", "details-text"],
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
    el13: ["li", "", "", "קורס מ''כים- הכשרת הלוחם לתפקיד מפקד בחטיבה ברמת 'כושר לחימה'- מתקדם ב', ומחלץ 07.", "details-list-2"],
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
    el6: ["div", "subtitle", "", "תפקידה של יחידת מתכים", "details-conteiner"],
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
    closable: true,
    carouselName: "bah",
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
    closable: true,
    carouselName: "baf",
    cardType: "el",
    card1: [
        ["strong", "card-title", "", "הידעת?", "baf-card-1"],
        ["div", "card-text", "", "בעבר בא''פ העורף נקרא ענף אימון יחידות תחת בה''ד 16 ולאחר מכן תחת חטיבת החילוץ וההדרכה בצריפין. בשנת 2020 ענף אימון יחידות (ענף אמ''י) עבר למכלול זיקים והוקם בא''פ העורף.", "baf-card-1"]
    ],
    card2: [
        ["strong", "card-title", "", "הידעת?", "baf-card-2"],
        ["div", "card-text", "", "בא''פ העורף הינו בסיס אימונים פיקודי ועל כן נאמן על הכשרות ואימונים של כלל יחידות פיקוד העורף ועל כשירות היחידות והמערכים המקצועיים של הפיקוד.", "baf-card-2"]
    ],
}

var schoolCarousel = {
    items: 3,
    carouselIndicators: false,
    visible: false,
    arrows: true,
    closable: true,
    carouselName: "school",
    cardType: "el",
    card1: [
        ["strong", "card-title", "", "הידעת?", "school-card-1"],
        ["div", "card-text", "", "בשנת 2018 תחת חטיבת החילוץ וההדרכה הוקם ביה''ס לפיקוד ומקצועות העורף שהינו תוצר של איחוד גדוד הפיקוד וענף מקצועות אשר ישבו בבה''ד 16.", "school-card-1"]
    ],
    card2: [
        ["strong", "card-title", "", "הידעת?", "school-card-2"],
        ["div", "card-text", "", "עד שנת 2015 התקיימה השלמה לקצונה אחידה ללוחמים ומטה.\nבשנת 2015 התפצלה ההשלמה למגמת חנית- קציני חילוץ לוחמים, ומגמת מורג- קציני עורף.", "school-card-2"]
    ],
    card3: [
        ["strong", "card-title", "", "הידעת?", "school-card-3"],
        ["div", "card-text", "", "מדור הכשרות אב''כ הינו גוף צבאי ייחודי הממונה על תחום אב''כ בכלל צה''ל ומעביר הכשרות בכלל יחידות צה''ל.", "school-card-3"]
    ]
}

var matachimCarousel = {
    items: 1,
    carouselIndicators: false,
    visible: false,
    arrows: false,
    closable: true,
    carouselName: "matachim",
    cardType: "el",
    card1: [
        ["strong", "card-title", "", "הידעת?", "matachim-card-1"],
        ["div", "card-text", "", "בתוך בסיס היחידה קיימים מתקני אימון רבים כגון לש''בייה, מטווחים, אתר הרס, מסלול בראור ועוד!", "matachim-card-1"]
    ]
}


let quesVisited = false;
let currPage = 1;
let furthestPageVisited = 1;
let currExpShown = "";
let currDefShown = ""; // type string
let currSchoolDetailsShown = "";
let complexBranchesVisited = [];
let currDetails = "";
let detailsVisited = [];
let currPageEvLis = [];
let finishButtonAdded = false;
let currCarouselRelevant = "";
let complexFinishButton = ["button", "next-btn-timeline", "next-btn-14", "סיימתי!", "timeline-text-container"];
let enlisingBtn = ["button", "next-btn-timeline", "next-btn-2", "בואו נמשיך!", "timeline-text-container"];
let nafaBtn = ["button", "next-btn-timeline", "next-btn-13", "הבנתי", "timeline-text-container"];
let rolesNextBtn = ["assets/images/arrow.svg", "המשך", "roles-next-arrow", "next-arrow", "", "main-roles"];
let structureFinishBtn = ["button", "next-btn-timeline", "finished-structure", "סיימתי!", "structure"];

window.addEventListener("load", (event) => {
    // createScreen(openScreenContent);
    structureTreeLis();
    document.getElementById("menu-btn").addEventListener("click", showMenu);
    document.getElementById("info-btn").addEventListener("click", showInfo);
    document.getElementById("ques-btn").addEventListener("click", showQues);
    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("colored-text")) {
            createDefinitionElement(event);
        }
        
    });
});

// to do
const menuRedirection = (event) => {
    
}

// to do
const showMenu = () => {
    
}

// to do
const hideMenu = () => {
    
}

const showInfo = () => {
    let style = document.getElementById("info").style.display;
    if (document.getElementById("ques-container").style.display === "none") {
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
    // if (document.getElementById("info").style.display === "none" && !document.querySelector(".nice-nav").classList.contains("open")) {
    if (document.getElementById("info").style.display === "none") {
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
    if (!finishButtonAdded && complexBranchesVisited.length === 3) {
        // add finish button
        finishButtonAdded = true;
        createTextElement(complexFinishButton);
        document.getElementById("next-btn-14").addEventListener("click", nextPage);
        currPageEvLis = ["id", "next-btn-14", "click", "nextPage"];
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
            currPageEvLis = ["id", currObject[`evLis${i}`][0], currObject[`evLis${i}`][1], lisFunc];
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

const createVideo = (vidList) => {
    let newVideo = document.createElement("video");
    newVideo.width = vidList[0];
    newVideo.height = vidList[1];
    newVideo.classList.add(vidList[2]);
    newVideo.setAttribute("id", vidList[3]);
    newVideo.setAttribute("controls", "controls");
    newVideo.setAttribute("autoplay", "autoplay");
    document.getElementById(vidList[4]).appendChild(newVideo);
    let sourceTag = document.createElement("source");
    sourceTag.src = vidList[5];
    sourceTag.setAttribute("type", "video/mp4");
    newVideo.appendChild(sourceTag);
    newVideo.onended = function() {
        // alert("enden");
        if (currPage === 3) {
            createTextElement(enlisingBtn);
            document.getElementById(enlisingBtn[2]).addEventListener("click", nextPage);
            currPageEvLis = ["id", enlisingBtn[2], "click", "nextPage"];
        } else if (currPage === 13) {
            createTextElement(nafaBtn);
            document.getElementById(nafaBtn[2]).addEventListener("click", nextPage);
            currPageEvLis = ["id", nafaBtn[2], "click", "nextPage"];
        } else if (currPage === 20 || currPage === 23 || currPage === 24 || currPage === 26) {
            document.getElementById("roles-next-arrow").addEventListener("click", nextPage);
            currPageEvLis = ["id", "roles-next-arrow", "click", "nextPage"];
        }
    }
}

const createCarousel = (carouselContent) => {
    // create container el for carousel
    currCarouselRelevant = carouselContent.carouselName;
    let carouselExampleIndicators = document.createElement("div");
    carouselExampleIndicators.setAttribute("id", carouselContent.carouselName);
    carouselExampleIndicators.classList.add("carousel", "slide");
    if (carouselContent.cardType === "el") {
        carouselExampleIndicators.classList.add("carousel-dark");
    }
    if (carouselContent.visible) {
        carouselExampleIndicators.style.display = "block";
    } else {
        carouselExampleIndicators.style.display = "none";
    }
    carouselExampleIndicators.setAttribute("data-bs-ride", "carousel");
    if (carouselContent.cardType === "el" && carouselContent.closable) {
        document.getElementById("details-conteiner").appendChild(carouselExampleIndicators);
    } else {
        document.getElementById("main-roles").appendChild(carouselExampleIndicators);
    }
    // create carousel indicators accordingly
    if (carouselContent.carouselIndicators) {
        let carouselIndicatorsOL = document.createElement("ol");
        carouselIndicatorsOL.setAttribute("id", `${carouselContent.carouselName}-carousel-indicators`);
        carouselIndicatorsOL.classList.add("carousel-indicators");
        document.getElementById(carouselContent.carouselName).appendChild(carouselIndicatorsOL);
        for (let i = 0; i < carouselContent.items; i++) {
            let newItem = document.createElement("li");
            if (i === 0) {
                newItem.classList.add("active");
                
            }
            carouselIndicatorsOL.appendChild(newItem);
        }
    }
    // create inner container
    let carouselInner = document.createElement("div");
    carouselInner.setAttribute("id", `${carouselContent.carouselName}-carousel-inner`);
    carouselInner.classList.add("carousel-inner");
    document.getElementById(carouselContent.carouselName).appendChild(carouselInner);
    // create X button according to card type
    if (carouselContent.closable) {
        let newIMG = document.createElement("img");
        newIMG.src = "assets/images/close-btn.svg";
        newIMG.alt = "X";
        newIMG.setAttribute("id", `${carouselContent.carouselName}-close-card-button`);
        newIMG.classList.add("close-card-button");
        document.getElementById(`${carouselContent.carouselName}-carousel-inner`).appendChild(newIMG);
        newIMG.addEventListener("click", closeCarouselCard);
    }
    // create cards according to card num
    for (let i = 0; i < carouselContent.items; i++) {
        let newItem = document.createElement("div");
        newItem.setAttribute("id", `${carouselContent.carouselName}-carousel-item-${i + 1}`);
        newItem.setAttribute("data-bs-interval", 5000);
        newItem.classList.add("carousel-item");
        if (i === 0) {
            newItem.classList.add("active");
        }
        carouselInner.appendChild(newItem);
        // create card content according to type
        if (carouselContent.cardType === "el") {
            let cardItem = document.createElement("div");
            cardItem.setAttribute("id", `${carouselContent.carouselName}-card-${i + 1}`);
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
        carouselControlPrev.setAttribute("id", `${carouselContent.carouselName}-carousel-control-prev`);
        carouselControlPrev.classList.add("carousel-control-prev");
        carouselControlPrev.href = `#${carouselContent.carouselName}`;
        carouselControlPrev.setAttribute("role", "button");
        carouselControlPrev.setAttribute("data-bs-slide", "prev");
        carouselInner.appendChild(carouselControlPrev);
        let carouselControlPrevIcon = document.createElement("span");
        if (carouselContent.cardType === "el") {
            carouselControlPrevIcon.classList.add("carousel-control-prev-icon", "prev-icon-card");
        } else {
            carouselControlPrevIcon.classList.add("carousel-control-prev-icon");
        }
        carouselControlPrevIcon.setAttribute("aria-hidden", "true");
        carouselControlPrev.appendChild(carouselControlPrevIcon);
        let carouselControlNext = document.createElement("a");
        carouselControlNext.setAttribute("id", `${carouselContent.carouselName}-carousel-control-next`);
        carouselControlNext.classList.add("carousel-control-next");
        carouselControlNext.href = `#${carouselContent.carouselName}`;
        carouselControlNext.setAttribute("role", "button");
        carouselControlNext.setAttribute("data-bs-slide", "next");
        carouselInner.appendChild(carouselControlNext);
        let carouselControlNextIcon = document.createElement("span");
        if (carouselContent.cardType === "el") {
            carouselControlNextIcon.classList.add("carousel-control-next-icon", "next-icon-card");
        } else {
            carouselControlNextIcon.classList.add("carousel-control-next-icon");
        }
        carouselControlNextIcon.setAttribute("aria-hidden", "true");
        carouselControlNext.appendChild(carouselControlNextIcon);
    }
}

// relevant only for the structure page, remember to reset when handling tructure page
var openCarouselCard = () => {
    document.getElementById(currCarouselRelevant).style.display = "block";
}

var closeCarouselCard = () => {
    document.getElementById(currCarouselRelevant).style.display = "none";
}

var rolesCarousels = () => {
    // 'slide.bs.carousel' event is when the slide of the carousel's item is activated, as in one of the arrows was clicked / automatic slide happened
    // this fonction shows the carousels and checks if the user went through the entire carousels.
    // only after that happens, the click on the page's arrow allows tomove to the next page
    // if that is not the case, the click will trigger an error massage that will dissapear after a few seconds
    let routineCar = document.getElementById("routineRoles");
    let emergancyCar = document.getElementById("emergencyRoles");
    let routineNum = [];
    let emergencyNum = [];
    routineCar.style.display = "block";
    emergancyCar.style.display = "block";
    routineCar.addEventListener('slide.bs.carousel', function () {
        let currItemID = document.querySelector("#routineRoles-carousel-inner > .active").id;
        if (!routineNum.includes(currItemID)) {
            routineNum.push(currItemID);
        }
    });
    emergancyCar.addEventListener('slide.bs.carousel', function () {
        let currItemID = document.querySelector("#emergencyRoles-carousel-inner > .active").id;
        if (!emergencyNum.includes(currItemID)) {
            emergencyNum.push(currItemID);
        }
    });
    document.getElementById("roles-next-arrow").addEventListener("click", () => {
        if (routineNum.length === 8 && emergencyNum.length === 5) {
            routineCar.style.display = "none";
            emergancyCar.style.display = "none";
            nextPage();
        } else {
            document.getElementById("rolesErrorText").style.display = "block";
            setTimeout(() => {
                document.getElementById("rolesErrorText").style.display = "none";
            }, 10000);
        }
    });
}

const removeRescueImageCarousel = () => {
    document.getElementById("rescueCarousel").style.display = "none";
    console.log("hidden");
}

var rescueImgCarousel = () => {
    document.getElementById("rescueCarousel").style.display = "block";
    console.log("visable");
    document.getElementById("roles-next-arrow").addEventListener("click", removeRescueImageCarousel);
    document.getElementById("roles-next-arrow").removeEventListener("click", removeRescueImageCarousel);
}

var openDetails = (event) => {
    if (event.target.id.includes("hativa")) {
        createScreen(hativaDetails);
        currDetails = "hativa";
        if (!detailsVisited.includes("hativa")) {
            detailsVisited.push("hativa");
        }
    } else if (event.target.id.includes("bah")) {
        createScreen(bahDetails);
        currDetails = "bah";
        if (!detailsVisited.includes("bah")) {
            detailsVisited.push("bah");
        }
    } else if (event.target.id.includes("baf")) {
        createScreen(bafDetails);
        currDetails = "baf";
        if (!detailsVisited.includes("baf")) {
            detailsVisited.push("baf");
        }
    } else if (event.target.id.includes("matachim")) {
        createScreen(matachimDetails);
        currDetails = "matachim";
        if (!detailsVisited.includes("matachim")) {
            detailsVisited.push("matachim");
        }
    } else if (event.target.id.includes("school")) {
        createScreen(schoolDetailsA);
        currSchoolDetailsShown = "a";
        currDetails = "school-a";
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
        currDetails = "school-b";
        if (!detailsVisited.includes("school-b")) {
            detailsVisited.push("school-b");
        }
    } else if (currSchoolDetailsShown === "b") {
        closeDetails();
        createScreen(schoolDetailsA);
        currSchoolDetailsShown = "a";
        currDetails = "school-a";
        if (!detailsVisited.includes("school-a")) {
            detailsVisited.push("school-a");
        }
    }
}

var closeDetails = () => {
    if (currDetails !== "hativa") {
        document.getElementById("close-card-button").removeEventListener("click", closeCarouselCard);
    }
    currDetails = "";
    document.getElementById("close-btn-structure").removeEventListener("click", closeDetails);
    document.querySelector(".structure-details").remove();
    if (detailsVisited.length === 5) {
        document.getElementById("explain-structure").remove();
        createTextElement(structureFinishBtn);
        document.getElementById("finished-structure").addEventListener("click", nextPage);
        currPageEvLis = ["id", "finished-structure", "click", "nextPage"];
    }
}

    
var nextPage = () => {
    // if (currPage === 1 && !quesVisited) {
    //     showQues();
    // } else {
        //remove current next button event listener
        if (currPageEvLis.length !== 0 && currPage !== 29) {
            let eventFunction = currPageEvLis[3];
            if (currPageEvLis[0] === "id") {
                document.getElementById(currPageEvLis[1]).removeEventListener(currPageEvLis[2], window[eventFunction]);
                currPageEvLis = [];
            } else {
                document.querySelector(currPageEvLis[1]).removeEventListener(currPageEvLis[2], window[eventFunction]);
                currPageEvLis = [];
            }
        }
        if (currPage === 1) {
            document.getElementById("timeline-roll").classList.add(`tl-page-${currPage}`);
            setTimeout(function() {
                document.getElementById("page").innerHTML = "";
                currPage++;
                let currObjContent = window[`page${currPage}`];
                createScreen(currObjContent);
                setTimeout(function() {
                    document.getElementById("page3text").classList.add("show-anim");
                    document.querySelector(".next-btn-timeline").addEventListener("click", nextPage);
                    currPageEvLis = ["class", ".next-btn-timeline", "click", "nextPage"];
                }, 3000);
            }, 500);
        } else if (currPage === 4) {
            // animation is 3 s long
            document.getElementById("timeline-roll").classList.remove(`tl-page-${currPage - 1}`);
            document.getElementById("timeline-text-container").classList.add("hide-anim");
            document.getElementById("timeline-roll").classList.add(`tl-page-${currPage}`);
            setTimeout(function() {
                document.getElementById("page").innerHTML = "";
                currPage++;
                let currObjContent = window[`page${currPage}`];
                createScreen(currObjContent);
                setTimeout(function() {
                    document.getElementById("timeline-text-container").classList.add("show-anim");
                    setTimeout(function() {
                        document.getElementById("timeline-roll").classList.remove(`tl-page-${currPage - 1}`);
                        document.querySelector(".next-btn-timeline").addEventListener("click", nextPage);
                        currPageEvLis = ["class", ".next-btn-timeline", "click", "nextPage"];
                    }, 500);
                }, 3000);
            }, 500);
        } else if (currPage === 2) {
            // animation is 2 s long
            document.getElementById("timeline-roll").classList.remove(`tl-page-${currPage - 1}`);
            document.getElementById("page3text").classList.add("hide-anim");
            document.getElementById("timeline-roll").classList.add(`tl-page-${currPage}`);
            setTimeout(function() {
                document.getElementById("page").innerHTML = "";
                currPage++;
                let currObjContent = window[`page${currPage}`];
                createScreen(currObjContent);
                setTimeout(function() {
                    document.getElementById("timeline-text-container").classList.add("show-anim");
                    setTimeout(function() {
                        document.getElementById("timeline-roll").classList.remove(`tl-page-${currPage - 1}`);
                        // document.querySelector(".next-btn-timeline").addEventListener("click", nextPage);
                    }, 500);
                }, 2000);
            }, 500);
        } else if (currPage === 8 || currPage === 10) {
            // animation is 2.5 s long
            document.getElementById("timeline-text-container").classList.add("hide-anim");
            document.getElementById("timeline-roll").classList.add(`tl-page-${currPage}`);
            setTimeout(function() {
                document.getElementById("page").innerHTML = "";
                currPage++;
                let currObjContent = window[`page${currPage}`];
                createScreen(currObjContent);
                setTimeout(function() {
                    document.getElementById("timeline-text-container").classList.add("show-anim");
                    setTimeout(function() {
                        document.getElementById("timeline-roll").classList.remove(`tl-page-${currPage - 1}`);
                        document.querySelector(".next-btn-timeline").addEventListener("click", nextPage);
                        currPageEvLis = ["class", ".next-btn-timeline", "click", "nextPage"];
                    }, 500);
                }, 2000);
            }, 500);
        } else if (5 <= currPage && currPage <= 7 || currPage === 9 || currPage === 11) {
            // animation is 3.5 s long
            document.getElementById("timeline-text-container").classList.add("hide-anim");
            document.getElementById("timeline-roll").classList.add(`tl-page-${currPage}`);
            setTimeout(function() {
                document.getElementById("page").innerHTML = "";
                currPage++;
                let currObjContent = window[`page${currPage}`];
                createScreen(currObjContent);
                setTimeout(function() {
                    document.getElementById("timeline-text-container").classList.add("show-anim");
                    setTimeout(function() {
                        document.getElementById("timeline-roll").classList.remove(`tl-page-${currPage - 1}`);
                        document.querySelector(".next-btn-timeline").addEventListener("click", nextPage);
                        currPageEvLis = ["class", ".next-btn-timeline", "click", "nextPage"];
                    }, 500);
                }, 3000);
            }, 500);
        } else if (currPage === 3 || currPage === 14 || currPage === 15) {
            // animation is 4.5 s long
            if (currPage === 3) {
                document.getElementById("timeline-roll").classList.remove(`tl-page-${currPage - 1}`);
                // document.getElementById("page3text").classList.add("hide-anim");
            }
            document.getElementById("timeline-text-container").classList.add("hide-anim");
            document.getElementById("timeline-roll").classList.add(`tl-page-${currPage}`);
            setTimeout(function() {
                document.getElementById("page").innerHTML = "";
                currPage++;
                let currObjContent = window[`page${currPage}`];
                createScreen(currObjContent);
                setTimeout(function() {
                    document.getElementById("timeline-text-container").classList.add("show-anim");
                    document.getElementById("timeline-roll").classList.remove(`tl-page-${currPage - 1}`);
                    if (currPage !== 15) {
                        document.querySelector(".next-btn-timeline").addEventListener("click", nextPage);
                    }
                    currPageEvLis = ["class", ".next-btn-timeline", "click", "nextPage"];
                }, 4500);
            }, 500);
        } else if (currPage === 27) {
            document.getElementById("page").innerHTML = "";
            createScreen(page29);
            if (detailsVisited.length === 6) {
                document.getElementById("explain-structure").remove();
                createTextElement(structureFinishBtn);
                document.getElementById("finished-structure").addEventListener("click", nextPage);
                currPageEvLis = ["id", "finished-structure", "click", "nextPage"];
            }
        } else if (currPage === 22) {
            document.getElementById("page").innerHTML = "";
            document.getElementById("rescueCarousel").style.display = "none";
            currPage++;
            let currObjContent = window[`page${currPage}`];
            createScreen(currObjContent);
        } else {
            document.getElementById("page").innerHTML = "";
            currPage++;
            let currObjContent = window[`page${currPage}`];
            createScreen(currObjContent);
        }
}

var restert = () => {
    document.getElementById("page").innerHTML = "";
    currPage = 1;
    currExpShown = "";
    currDefShown = ""; // type string
    currSchoolDetailsShown = "";
    complexBranchesVisited = [];
    currDetails = "";
    currPageEvLis = [];
    createScreen(openScreenContent);
}

var finishScreen = () => {
    if (detailsVisited.length === 6) {
        document.getElementById("page").innerHTML = "";
        createScreen(endScreenContent);
    } else {

    }
}

document.addEventListener("click", function next() {
    this.removeEventListener("click", next)
    document.querySelector(".class")
})